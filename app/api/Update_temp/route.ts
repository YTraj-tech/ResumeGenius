import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: NextRequest) {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { templateType } = await request.json();

    const user = await prisma.user.findUnique({
      where: { clerkId: userId },
      include: { resumes: true },
    });

    // Type guard to check if resumes is an array
    if (!user || !Array.isArray(user.resumes) || user.resumes.length === 0) {
      return NextResponse.json({ error: "Resume not found" }, { status: 404 });
    }

    await prisma.resume.update({
      where: { id: user.resumes[0].id },
      data: { templateType },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating template:", error);
    return NextResponse.json(
      { error: "Failed to update template" },
      { status: 500 }
    );
  }
}