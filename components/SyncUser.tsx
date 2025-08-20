// components/SyncUser.tsx
'use client';

import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { syncUser } from '@/app/actions/syncUser';

export default function SyncUser() {
  const { isLoaded, isSignedIn, user } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      syncUser().catch(console.error);
    }
  }, [isLoaded, isSignedIn]);

  return null;
}