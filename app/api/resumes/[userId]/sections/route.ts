import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { auth } from '@clerk/nextjs/server';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> } // Add Promise wrapper
) {
  try {
    const { userId: clerkUserId } = await auth();
    const resolvedParams = await params; // Await the params promise

    // Check authentication and ownership
    if (!clerkUserId || clerkUserId !== resolvedParams.userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { resumeId, sections } = body;

    if (!resumeId || !sections) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify the resume belongs to this user
    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
      select: { id: true }
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const resume = await prisma.resume.findFirst({
      where: { 
        id: resumeId,
        userId: user.id 
      }
    });

    if (!resume) {
      return NextResponse.json(
        { error: 'Resume not found' },
        { status: 404 }
      );
    }

    // Check current section count
    const currentSectionCount = await prisma.customSection.count({
      where: { resumeId }
    });

    const MAX_SECTIONS = 10;
    
    if (currentSectionCount + sections.length > MAX_SECTIONS) {
      return NextResponse.json(
        { error: `Cannot exceed maximum limit of ${MAX_SECTIONS} sections` },
        { status: 400 }
      );
    }

    // Use transaction to create new sections (don't delete existing ones)
    const result = await prisma.$transaction(async (tx) => {
      // Create new sections
      const createdSections = await Promise.all(
        sections.map((section: any) =>
          tx.customSection.create({
            data: {
              sectionType: section.sectionType,
              organization: section.organization,
              description: section.description,
              resumeId
            }
          })
        )
      );

      return createdSections;
    });

    return NextResponse.json({
      message: 'Sections saved successfully',
      sections: result
    });

  } catch (error) {
    console.error('Error saving sections:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> } // Add Promise wrapper
) {
  try {
    const { userId: clerkUserId } = await auth();
    const resolvedParams = await params; // Await the params promise

    // Check authentication and ownership
    if (!clerkUserId || clerkUserId !== resolvedParams.userId) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Optimized query: Get sections directly for the user
    const sections = await prisma.customSection.findMany({
      where: {
        resume: {
          user: {
            clerkId: clerkUserId
          }
        }
      },
      orderBy: { createdAt: 'asc' },
      select: {
        id: true,
        sectionType: true,
        organization: true,
        description: true,
        createdAt: true,
        updatedAt: true
      }
    });

    return NextResponse.json({
      success: true,
      sections
    });

  } catch (error) {
    console.error('Error fetching sections:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}