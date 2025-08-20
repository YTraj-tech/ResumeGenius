// app/extract/page.tsx - Updated with userId prop
import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UrlUpload from "@/components/Urlupload";
import { checkUserResume } from "@/lib/resume-service";

export default async function ExtractPage() {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  // Check if user already has extracted data
  const hasResume = await checkUserResume(userId);
  
  if (hasResume) {
    redirect("/templates");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Extract Your LinkedIn Data
            </h1>
            <p className="text-gray-600">
              Enter your LinkedIn profile URL to automatically extract your professional information
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <Suspense fallback={<div>Loading...</div>}>
              <UrlUpload userId={userId} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}