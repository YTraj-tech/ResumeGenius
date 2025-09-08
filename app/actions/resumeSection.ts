'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

interface CreateSectionData {
    resumeId: string;
    userId: string;
    sectionType: 'INTERNSHIP' | 'ACHIEVEMENT' | 'AWARD' | 'PUBLICATION';
    organization: string;
    description: string;
}

export async function createResumeSection(formData: FormData) {
    try {
        // Extract data from FormData
        const resumeId = formData.get('resumeId') as string;
        const userId = formData.get('userId') as string;
        const sectionType = formData.get('sectionType') as 'INTERNSHIP' | 'ACHIEVEMENT' | 'AWARD' | 'PUBLICATION';
        const organization = formData.get('organization') as string;
        const description = formData.get('description') as string;

        // Validation
        if (!resumeId || !userId || !sectionType || !organization?.trim() || !description?.trim()) {
            return {
                success: false,
                error: 'All required fields must be filled'
            };
        }

        // Check existing sections count
        const existingSections = await prisma.customSection.findMany({
            where: { resumeId }
        });

        if (existingSections.length >= 10) {
            return {
                success: false,
                error: 'Maximum limit of 10 sections reached!'
            };
        }

        // Create the section
        const newSection = await prisma.customSection.create({
            data: {
                resumeId,
                sectionType,
                organization: organization.trim(),
                description: description.trim(),
            },
        });


        return {
            success: true,
            section: newSection,
            message: 'Section saved successfully!'
        };

    } catch (error) {
        console.error('Error creating section:', error);
        return {
            success: false,
            error: 'Failed to save section. Please try again.'
        };
    }
}

export async function getSectionsCount(resumeId: string) {
    try {
        const sections = await prisma.customSection.findMany({
            where: { resumeId },
            select: { id: true }
        });

        return {
            success: true,
            count: sections.length
        };
    } catch (error) {
        console.error('Error fetching sections count:', error);
        return {
            success: false,
            count: 0,
            error: 'Failed to fetch sections count'
        };
    }
}





export async function getSections() {
  try {
    const { userId } = await auth();
        
    if (!userId) {
      return {
        success: false,
        error: 'Unauthorized - Please sign in',
        sections: []
      };
    }

    // Get user from database
    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      select: { id: true }
    });

    if (!user) {
      return {
        success: false,
        error: 'User not found in database',
        sections: []
      };
    }

    // Get resume with sections using an optimized query
    const resume = await prisma.resume.findFirst({
      where: { userId: user.id },
      include: {
        customSections: {
          orderBy: { createdAt: 'asc' },
          select: {
            id: true,
            sectionType: true,
            organization: true,
            
            description: true,
            createdAt: true,
            updatedAt: true
          }
        }
      }
    });

    if (!resume) {
      return {
        success: false,
        error: 'Resume not found',
        sections: []
      };
    }

    // Convert Date objects to strings
    const sectionsWithStringDates = resume.customSections.map(section => ({
      ...section,
      createdAt: section.createdAt.toISOString(),
      updatedAt: section.updatedAt.toISOString(),
      sectionType: section.sectionType.toString(), // Convert enum to string if needed
    }));

    return {
      success: true,
      sections: sectionsWithStringDates,
      totalCount: resume.customSections.length
    };
   
  } catch (error) {
    console.error('Error fetching sections:', error);
    return {
      success: false,
      error: 'Failed to fetch sections',
      sections: []
    };
  }
}