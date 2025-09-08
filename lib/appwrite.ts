// lib/appwrite.ts
import { Client, Storage, ID } from 'appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Use cloud.appwrite.io, not fra.cloud.appwrite.io
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '');

const storage = new Storage(client);

export { storage, ID, client };