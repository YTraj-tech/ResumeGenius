// // app/resume/[templateId]/page.tsx
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { getUserResume } from "@/lib/resume-service";
// import { ResumePreview } from "@/components/ResumePreview";

// interface ResumePageProps {
//   params: {
//     templateId: string;
//   };
// }

// export default async function ResumePage({ params }: ResumePageProps) {
//   const { userId } = await auth();

//   if (!userId) {
//     redirect("/sign-in");
//   }

//   const resumeData = await getUserResume(userId);

//   if (!resumeData) {
//     redirect("/extract");
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <ResumePreview 
//           resumeData={resumeData} 
//           templateId={params.templateId} 
//         />
//       </div>
//     </div>
//   );
// }







// app/resume/[templateId]/page.tsx
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getUserResume } from "@/lib/resume-service";
import ResumeSections from "@/components/ResumeSections";
import { ResumePreview } from "@/components/ResumePreview";

interface ResumePageProps {
  params: Promise<{
    templateId: string;
  }>;
}

export default async function ResumePage({ params }: ResumePageProps) {
  const { userId } = await auth();

  // Check authentication first
  if (!userId) {
    redirect("/sign-in");
  }

  // Get user from database
  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
    select: { id: true }
  });

  // If user doesn't exist in our database, redirect to extract page
  if (!user) {
    redirect("/extract");
  }

  // Await the params promise
  const { templateId } = await params;

  // Get resume data
  const resumeData = await getUserResume(userId);

  if (!resumeData) {
    redirect("/extract");
  }

  // Find the resume in database
  const resume = await prisma.resume.findFirst({
    where: { userId: user.id }
  });

  if (!resume) {
    return <div>Resume not found. Please create a resume first.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <ResumePreview
          resumeData={resumeData}
          templateId={templateId}
        />

        <div className="mt-8">
          <h1 className="text-3xl font-bold mb-8">Additional Sections</h1>
          <ResumeSections resumeId={resume.id} userId={userId} />
        </div>
      </div>
    </div>
  );
}