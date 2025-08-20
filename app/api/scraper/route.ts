import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

function toStringArray(arr: any[] | undefined, keys: string[] = []) {
  if (!Array.isArray(arr)) return [];
  return arr
    .map((item) => {
      if (!item) return null;
      if (typeof item === "string") return item.trim() || null;

      for (const k of keys) {
        const v = item?.[k];
        if (typeof v === "string" && v.trim()) return v.trim();
      }

      if (typeof item.title === "string" && item.title.trim()) return item.title.trim();
      if (typeof item.name === "string" && item.name.trim()) return item.name.trim();
      if (typeof item.text === "string" && item.text.trim()) return item.text.trim();

      const desc = item?.subComponents?.[0]?.description;
      if (Array.isArray(desc)) {
        for (const d of desc) {
          if (d?.type === "insightComponent" && typeof d?.text === "string" && d.text.trim()) return d.text.trim();
          if (d?.type === "textComponent" && typeof d?.text === "string" && d.text.trim()) return d.text.trim();
          if (typeof d?.text === "string" && d.text.trim()) return d.text.trim();
        }
      }

      return null;
    })
    .filter(Boolean) as string[];
}

function mapExperience(arr: any[] | undefined) {
  if (!Array.isArray(arr)) return [];
  return arr
    .map((exp) => {
      if (!exp) return null;
      const title = (exp.title || "").toString().trim();
      const company =
        exp.companyName ||
        (typeof exp.subtitle === "string" ? exp.subtitle.split("·")[0].trim() : "") ||
        exp.metadata ||
        "";
      const date = exp.caption || exp.dateRange || "";
      const parts: string[] = [];
      if (title) parts.push(title);
      if (company) parts.push(`at ${company}`);
      if (date) parts.push(`(${date})`);
      const combined = parts.join(" ");
      return combined || null;
    })
    .filter(Boolean) as string[];
}

function mapEducation(arr: any[] | undefined) {
  if (!Array.isArray(arr)) return [];
  return arr
    .map((edu) => {
      if (!edu) return null;
      const school = edu.schoolName || edu.title || "";
      const degree = edu.degreeName || edu.subtitle || "";
      const date = edu.caption || edu.dateRange || "";
      const parts = [];
      if (school) parts.push(school);
      if (degree) parts.push(degree);
      const main = parts.join(" - ");
      return (main + (date ? ` (${date})` : "")).trim() || null;
    })
    .filter(Boolean) as string[];
}

export async function POST(req: Request) {
  try {
    // Get Clerk authentication
    const { userId: clerkUserId } = await auth();
    
    if (!clerkUserId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized - Please sign in" },
        { status: 401 }
      );
    }

    // Parse request body
    const { profileUrl } = await req.json();
    console.log("📥 Request received from Clerk user:", clerkUserId, { profileUrl });

    if (!profileUrl) {
      return NextResponse.json(
        { success: false, error: "Missing LinkedIn profile URL" },
        { status: 400 }
      );
    }

    // Find the corresponding database user
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
      select: { id: true }
    });

    if (!dbUser) {
      return NextResponse.json(
        { success: false, error: "User account not found in database" },
        { status: 404 }
      );
    }

    // Validate Apify configuration
    if (!process.env.APIFY_API_TOKEN || !process.env.APIFY_ACTOR_ID) {
      console.error("Missing Apify environment variables");
      return NextResponse.json(
        { success: false, error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Start Apify scraping job
    const apifyInput = {
      profileUrls: [profileUrl],
      scrapeExperience: true,
      scrapeEducation: true,
      scrapeSkills: true,
    };

    console.log("🚀 Starting Apify job with input:", apifyInput);

    const runRes = await fetch(
      `https://api.apify.com/v2/acts/${process.env.APIFY_ACTOR_ID}/runs?token=${process.env.APIFY_API_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(apifyInput),
      }
    );

    const runData = await runRes.json();
    console.log("🔄 Apify job started:", runData);

    const runId = runData.data?.id;
    if (!runId) {
      throw new Error(`Failed to start Apify job: ${JSON.stringify(runData)}`);
    }

    // Poll for job completion
    let status = "RUNNING";
    let datasetId: string | null = null;
    while (status === "RUNNING" || status === "READY") {
      await new Promise((r) => setTimeout(r, 3000));
      const statusRes = await fetch(
        `https://api.apify.com/v2/actor-runs/${runId}?token=${process.env.APIFY_API_TOKEN}`
      );
      const statusData = await statusRes.json();
      status = statusData.data?.status;
      datasetId = statusData.data?.defaultDatasetId;
      console.log("⏳ Job status:", status);
    }

    if (status !== "SUCCEEDED") {
      throw new Error(`Apify job failed with status: ${status}`);
    }

    // Get results
    const datasetRes = await fetch(
      `https://api.apify.com/v2/datasets/${datasetId}/items?token=${process.env.APIFY_API_TOKEN}`
    );
    const items = await datasetRes.json();
    console.log("✅ Scraping results received");

    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { success: true, results: null, message: "No data found from scraping" }
      );
    }

    // Process profile data
    const profile = items[0];
    const cleanSkills = toStringArray(profile.skills, ["title", "name", "text"]);
    const cleanCerts = toStringArray(profile.licenseAndCertificates || profile.certifications || [], ["title", "name"]);
    const cleanExperience = mapExperience(profile.experiences || profile.experiencesList || []);
    const cleanEducation = mapEducation(profile.educations || profile.education || []);
    const projects = profile.projects || profile.projectsList || [];

    // Ensure all arrays contain only strings
    const ensureStringArray = (arr: any[]) => (Array.isArray(arr) ? arr.filter((x) => typeof x === "string") : []);

    const resumeData = {
      userId: dbUser.id,
      name: (profile.fullName || profile.firstName || "My Resume").toString(),
      summary: (profile.summary || profile.about || "").toString(),
      skills: ensureStringArray(cleanSkills),
      certifications: ensureStringArray(cleanCerts),
      projects: projects,
      experience: ensureStringArray(cleanExperience),
      education: ensureStringArray(cleanEducation),
      githubLink: profile.githubUrl || null,
      linkedinLink: profile.linkedinUrl || profileUrl || null,
      templateType: "technical"
    };

    console.log("📝 Saving resume data:", resumeData);

    // Save to database
    const savedResume = await prisma.resume.create({
      data: resumeData,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    console.log("💾 Resume saved successfully:", savedResume.id);
    
    return NextResponse.json({
      success: true,
      resume: {
        id: savedResume.id,
        name: savedResume.name,
        userId: savedResume.userId,
        userName: savedResume.user.name,
        userEmail: savedResume.user.email,
        createdAt: savedResume.createdAt
      },
      scrapingResults: items
    });

  } catch (err: any) {
    console.error("❌ Error processing resume:", err);
    return NextResponse.json(
      { 
        success: false,
        error: err.message || "Failed to process resume",
        details: process.env.NODE_ENV === "development" ? err.stack : undefined
      },
      { status: 500 }
    );
  }
}