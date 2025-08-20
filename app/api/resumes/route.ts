import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";

export async function POST(req: Request) {
  const { userId: clerkUserId } = await auth();
  if (!clerkUserId) return new Response("Unauthorized", { status: 401 });

  const data = await req.json();

  const user = await prisma.user.upsert({
    where: { clerkId: clerkUserId },
    update: {},
    create: {
      clerkId: clerkUserId,
      email: data.email,
      name: data.name,
    },
  });

  const existingResume = await prisma.resume.findUnique({
    where: { userId: user.id },
  });

  if (existingResume) {
    return new Response("Resume already exists", { status: 400 });
  }

  await prisma.resume.create({
    data: {
      userId: user.id,
      name: data.name,
      summary: data.summary,
      skills: data.skills,
      certifications: data.certifications,
      projects: data.projects,
      experience: data.experience,
      education: data.education,
      githubLink: data.githubLink,
      linkedinLink: data.linkedinLink,
    },
  });

  return new Response("Resume created", { status: 201 });
}
