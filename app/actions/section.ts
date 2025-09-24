




// app/actions/section.ts
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

// Helper function for consistent responses
const createResponse = (success: boolean, data?: any, error?: string, statusCode?: number): ApiResponse => ({
  success,
  data,
  error,
  statusCode
});

// Network error handler
const handleNetworkError = (error: any): string => {
  if (error.name === 'TypeError' && error.message.includes('fetch')) {
    return 'Network error: Please check your internet connection and try again.';
  }
  return error.message || 'An unexpected error occurred';
};

export async function createPersonalInfo(data: {
  phone?: string;
  imageUrl?: string;
  address?: string;
}): Promise<ApiResponse<PersonalInfo>> {
  try {
    console.log('Creating personal info with data:', data);
    
    const { userId: clerkUserId } = await auth();
    console.log('User ID from auth:', clerkUserId);

    if (!clerkUserId) {
      return createResponse(false, null, "Unauthorized. Please sign in.", 401);
    }

    // Find the user by their Clerk ID
    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user) {
      return createResponse(false, null, "User not found. Please complete your profile first.", 404);
    }

    // Check if personal info already exists for this user
    const existingInfo = await prisma.personalInfo.findUnique({
      where: { userId: user.id },
    });

    if (existingInfo) {
      return createResponse(false, null, "Personal info already exists. Use update instead.", 409);
    }

    const personalInfo = await prisma.personalInfo.create({
      data: {
        userId: user.id,
        phone: data.phone,
        imageUrl: data.imageUrl,
        address: data.address,
      },
    });

    console.log('Personal info created successfully:', personalInfo.id);
    return createResponse(true, personalInfo, "Personal info created successfully", 201);
    
  } catch (error) {
    console.error('Create personal info error:', error);
    const errorMessage = handleNetworkError(error);
    return createResponse(false, null, errorMessage, 500);
  }
}

export async function updatePersonalInfo(data: {
  phone?: string;
  imageUrl?: string;
  address?: string;
}): Promise<ApiResponse<PersonalInfo>> {
  try {
    console.log('Updating personal info with data:', data);
    
    const { userId: clerkUserId } = await auth();

    if (!clerkUserId) {
      return createResponse(false, null, "Unauthorized. Please sign in.", 401);
    }

    // Find the user by their Clerk ID
    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user) {
      return createResponse(false, null, "User not found.", 404);
    }

    const existingInfo = await prisma.personalInfo.findUnique({
      where: { userId: user.id },
    });

    if (!existingInfo) {
      return createResponse(false, null, "No personal info found to update. Please create it first.", 404);
    }

    const personalInfo = await prisma.personalInfo.update({
      where: { userId: user.id },
      data: {
        phone: data.phone ?? existingInfo.phone,
        imageUrl: data.imageUrl ?? existingInfo.imageUrl,
        address: data.address ?? existingInfo.address,
      },
    });

    console.log('Personal info updated successfully:', personalInfo.id);
    return createResponse(true, personalInfo, "Personal info updated successfully", 200);
    
  } catch (error) {
    console.error('Update personal info error:', error);
    const errorMessage = handleNetworkError(error);
    return createResponse(false, null, errorMessage, 500);
  }
}

export async function getPersonalInfoByUserId(): Promise<ApiResponse<PersonalInfo | null>> {
  try {
    console.log('Fetching personal info...');
    
    const { userId: clerkUserId } = await auth();

    if (!clerkUserId) {
      return createResponse(false, null, "Unauthorized. Please sign in.", 401);
    }

    // Find the user by their Clerk ID
    const user = await prisma.user.findUnique({
      where: { clerkId: clerkUserId },
    });

    if (!user) {
      return createResponse(false, null, "User not found.", 404);
    }

    const personalInfo = await prisma.personalInfo.findUnique({
      where: { userId: user.id },
    });

    console.log('Personal info fetch result:', personalInfo ? 'Found' : 'Not found');
    return createResponse(true, personalInfo, personalInfo ? "Personal info found" : "No personal info found", personalInfo ? 200 : 404);
    
  } catch (error) {
    console.error('Get personal info error:', error);
    const errorMessage = handleNetworkError(error);
    return createResponse(false, null, errorMessage, 500);
  }
}