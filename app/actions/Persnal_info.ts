// app/actions/personal-info.ts
'use server'

import {prisma} from '@/lib/prisma'
import { storage, ID } from '@/lib/appwrite'
import { BUCKET_ID } from '@/lib/bucketId'
import { currentUser } from '@clerk/nextjs/server'
import { revalidatePath } from 'next/cache'

export async function createOrUpdatePersonalInfo(formData: FormData) {
  try {
    const user = await currentUser()
    
    if (!user) {
      return { error: 'User not authenticated' }
    }

    const phone = formData.get('phone') as string
    const address = formData.get('address') as string
    const imageFile = formData.get('image') as File | null

    // Validate required fields
    if (!user.id) {
      return { error: 'User ID is required' }
    }

    // Check if user exists in database
    let dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id }
    })

    // Create user if doesn't exist
    if (!dbUser) {
      dbUser = await prisma.user.create({
        data: {
          clerkId: user.id,
          email: user.emailAddresses[0]?.emailAddress || '',
          name: user.fullName || '',
          imageUrl: user.imageUrl || '',
          mobile: phone || null,
        }
      })
    }

    let imageUrl = ''

    // Upload image if provided
    if (imageFile && imageFile.size > 0) {
      try {
        console.log('Uploading image to Appwrite...')
        
        const result = await storage.createFile(
          BUCKET_ID,
          ID.unique(),
          imageFile
        )

        imageUrl = `https://cloud.appwrite.io/v1/storage/buckets/${BUCKET_ID}/files/${result.$id}/view?project=${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID}`
        
        console.log('Image uploaded successfully:', imageUrl)
      } catch (uploadError) {
        console.error('Appwrite upload error:', uploadError)
        return { error: 'Failed to upload image. Please try again.' }
      }
    }

    // Create or update personal info
    const personalInfo = await prisma.personalInfo.upsert({
      where: { userId: dbUser.id },
      update: {
        phone: phone || null,
        address: address || null,
        ...(imageUrl && { imageUrl }),
        updatedAt: new Date()
      },
      create: {
        userId: dbUser.id,
        phone: phone || null,
        address: address || null,
        imageUrl: imageUrl || null
      }
    })

    revalidatePath('/profile')
    return { 
      success: true, 
      data: personalInfo,
      message: personalInfo ? 'Personal info updated successfully!' : 'Personal info created successfully!'
    }

  } catch (error) {
    console.error('Server action error:', error)
    return { error: 'Failed to save personal information' }
  }
}

export async function getPersonalInfo() {
  try {
    const user = await currentUser()
    
    if (!user) {
      return { error: 'User not authenticated' }
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id }
    })

    if (!dbUser) {
      return { data: null }
    }

    const personalInfo = await prisma.personalInfo.findUnique({
      where: { userId: dbUser.id }
    })

    return { success: true, data: personalInfo }
  } catch (error) {
    console.error('Error fetching personal info:', error)
    return { error: 'Failed to fetch personal information' }
  }
}

export async function deleteImage() {
  try {
    const user = await currentUser()
    
    if (!user) {
      return { error: 'User not authenticated' }
    }

    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id }
    })

    if (!dbUser) {
      return { error: 'User not found' }
    }

    const personalInfo = await prisma.personalInfo.findUnique({
      where: { userId: dbUser.id }
    })

    if (!personalInfo?.imageUrl) {
      return { error: 'No image to delete' }
    }

    // Extract file ID from URL for Appwrite deletion
    const fileId = personalInfo.imageUrl.split('/files/')[1]?.split('/view')[0]
    
    if (fileId) {
      try {
        await storage.deleteFile(BUCKET_ID, fileId)
      } catch (deleteError) {
        console.error('Appwrite delete error:', deleteError)
        // Continue even if deletion fails - we still want to update the database
      }
    }

    // Update database to remove image URL
    await prisma.personalInfo.update({
      where: { userId: dbUser.id },
      data: { imageUrl: null }
    })

    revalidatePath('/profile')
    return { success: true, message: 'Image deleted successfully' }
  } catch (error) {
    console.error('Error deleting image:', error)
    return { error: 'Failed to delete image' }
  }
}



export async function getPersonalInfoByUserId() {
  try {
    const user = await currentUser()
    
    if (!user) {
      return { error: 'User not authenticated' }
    }

    // Find user in database
    const dbUser = await prisma.user.findUnique({
      where: { clerkId: user.id }
    })

    if (!dbUser) {
      return { data: null } // User exists in Clerk but not in our DB yet
    }

    // Get personal info
    const personalInfo = await prisma.personalInfo.findUnique({
      where: { userId: dbUser.id }
    })

    return { 
      success: true, 
      data: personalInfo 
    }
  } catch (error) {
    console.error('Error fetching personal info:', error)
    return { error: 'Failed to fetch personal information' }
  }
}