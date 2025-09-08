'use server';

import { prisma } from '@/lib/prisma';
import { auth } from "@clerk/nextjs/server";

interface ApiResponse<T = any> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
  statusCode?: number;
}

interface PersonalInfo {
  id: string;
  userId: string;
  phone?: string | null;
  imageUrl?: string | null;
  address?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export async function createPersonalInfo(data: {
  phone?: string;
  imageUrl?: string;
  address?: string;
}): Promise<ApiResponse<PersonalInfo>> {
  try {
    const { userId: clerkUserId } = await auth();

    if (!clerkUserId) {
      return {
        success: false,
        error: "Unauthorized. Please sign in.",
        statusCode: 401
      };
    }

    // First, find the user by their Clerk ID
    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user) {
      return {
        success: false,
        error: "User not found. Please complete your profile first.",
        statusCode: 404
      };
    }

    // Check if personal info already exists for this user
    const existingInfo = await prisma.personalInfo.findUnique({
      where: { userId: user.id }, // Use the database user ID, not Clerk ID
    });

    if (existingInfo) {
      return {
        success: false,
        error: "Personal info already exists. Use update instead.",
        statusCode: 409
      };
    }

    const personalInfo = await prisma.personalInfo.create({
      data: {
        userId: user.id, // Use the database user ID
        phone: data.phone,
        imageUrl: data.imageUrl,
        address: data.address,
      },
    });

    return {
      success: true,
      message: "Personal info created successfully",
      data: personalInfo,
      statusCode: 201
    };
  } catch (error) {
    console.error('Create personal info error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create personal info',
      statusCode: 500
    };
  }
}

export async function updatePersonalInfo(data: {
  phone?: string;
  imageUrl?: string;
  address?: string;
}): Promise<ApiResponse<PersonalInfo>> {
  try {
    const { userId: clerkUserId } = await auth();

    if (!clerkUserId) {
      return {
        success: false,
        error: "Unauthorized. Please sign in.",
        statusCode: 401
      };
    }

    // Find the user by their Clerk ID
    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user) {
      return {
        success: false,
        error: "User not found.",
        statusCode: 404
      };
    }

    const existingInfo = await prisma.personalInfo.findUnique({
      where: { userId: user.id }, // Use the database user ID
    });

    if (!existingInfo) {
      return {
        success: false,
        error: "No personal info found to update. Please create it first.",
        statusCode: 404
      };
    }

    const personalInfo = await prisma.personalInfo.update({
      where: { userId: user.id }, // Use the database user ID
      data: {
        phone: data.phone ?? existingInfo.phone,
        imageUrl: data.imageUrl ?? existingInfo.imageUrl,
        address: data.address ?? existingInfo.address,
      },
    });

    return {
      success: true,
      message: "Personal info updated successfully",
      data: personalInfo,
      statusCode: 200
    };
  } catch (error) {
    console.error('Update personal info error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update personal info',
      statusCode: 500
    };
  }
}

export async function getPersonalInfoByUserId(): Promise<ApiResponse<PersonalInfo | null>> {
  try {
    const { userId: clerkUserId } = await auth();

    if (!clerkUserId) {
      return {
        success: false,
        error: "Unauthorized. Please sign in.",
        statusCode: 401
      };
    }

    // Find the user by their Clerk ID
    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user) {
      return {
        success: false,
        error: "User not found.",
        statusCode: 404
      };
    }

    const personalInfo = await prisma.personalInfo.findUnique({
      where: { userId: user.id }, // Use the database user ID
    });

    return {
      success: true,
      data: personalInfo,
      statusCode: personalInfo ? 200 : 404,
      message: personalInfo ? "Personal info found" : "No personal info found"
    };
  } catch (error) {
    console.error('Get personal info error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch personal info',
      statusCode: 500
    };
  }
}