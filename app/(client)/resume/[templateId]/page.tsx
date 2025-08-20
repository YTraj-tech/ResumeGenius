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
import { getUserResume } from "@/lib/resume-service";
import { ResumePreview } from "@/components/ResumePreview";

interface ResumePageProps {
  params: Promise<{
    templateId: string;
  }>;
}

export default async function ResumePage({ params }: ResumePageProps) {
  const { userId } = await auth();
  
  if (!userId) {
    redirect("/sign-in");
  }

  // Await the params promise
  const { templateId } = await params;

  const resumeData = await getUserResume(userId);
  
  if (!resumeData) {
    redirect("/extract");
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <ResumePreview 
          resumeData={resumeData} 
          templateId={templateId} 
        />
      </div>
    </div>
  );
}