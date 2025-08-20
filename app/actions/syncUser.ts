'use server';

import { prisma } from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs/server';

export async function syncUser() {
  const user = await currentUser();
  if (!user) return null;

  const existingUser = await prisma.user.findUnique({
    where: { clerkId: user.id },
  });

  if (existingUser) {
    return await prisma.user.update({
      where: { clerkId: user.id },
      data: {
        email: user.emailAddresses[0]?.emailAddress,
        name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
        imageUrl: user.imageUrl,
        updatedAt: new Date(),
      },
    });
  }

  return await prisma.user.create({
    data: {
      clerkId: user.id,
      email: user.emailAddresses[0]?.emailAddress,
      name: `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim(),
      imageUrl: user.imageUrl,
    },
  });
}
