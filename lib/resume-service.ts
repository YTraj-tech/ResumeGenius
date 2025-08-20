// lib/resume-service.ts
import { prisma } from "@/lib/prisma";
import { ResumeData, ResumeProject } from "@/lib/types/resume.type";

export async function checkUserResume(clerkId: string): Promise<boolean> {
  const count = await prisma.resume.count({
    where: {
      user: { clerkId }
    }
  });
  return count > 0;
}

export async function getUserResume(clerkId: string): Promise<ResumeData | null> {
  const resume = await prisma.resume.findFirst({
    where: { user: { clerkId } },
    orderBy: { updatedAt: 'desc' },
    include: { user: true }
  });

  if (!resume) return null;

  // Type-safe transformation
  return {
    id: resume.id,
    userId: resume.userId,
    name: resume.name,
    summary: resume.summary,
    skills: resume.skills,
    certifications: resume.certifications,
    projects: resume.projects as unknown as ResumeProject[], // Safe cast
    experience: resume.experience,
    education: resume.education,
    githubLink: resume.githubLink,
    linkedinLink: resume.linkedinLink,
    templateType: resume.templateType,
    createdAt: resume.createdAt.toISOString(),
    updatedAt: resume.updatedAt.toISOString()
  };
}

