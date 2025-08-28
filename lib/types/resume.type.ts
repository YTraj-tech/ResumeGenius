// lib/types/resume.type.ts
export type ResumeProject = {
  name: string;
  description?: string;
  technologies?: string[];
  link?: string;
};





export type ResumeData = {
  id: string; // Keep as string to match Prisma
  name: string;
  summary?: string;
  skills: string[];
  certifications: string[];
  projects: ResumeProject[]; // This is what we want
  experience: string[];
  education: string[];
  githubLink?: string | null;
  linkedinLink?: string | null;
  templateType?: string | null;
  updatedAt?: string;
  // Add other fields that might come from Prisma
  userId?: string;
  createdAt?: Date | string;
};

 export interface ResumePreviewProps {
  resumeData: ResumeData;
  templateId: string;
}