'use server';

import { auth } from '@clerk/nextjs/server';
import { prisma } from '@/lib/prisma';

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
      sectionType: section.sectionType.toString() // Convert enum to string if needed
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