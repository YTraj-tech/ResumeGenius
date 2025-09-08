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









// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import { prisma } from "@/lib/prisma";
// import ResumeBuilderSidebar from "@/components/Aditional_info/ResumebuilderSidebar";
// import { getUserResume } from "@/lib/resume-service";
// import ResumeSections from "@/components/Aditional_info/ResumeSections";
// import { ResumePreview } from "@/components/ResumePreview";

// interface ResumePageProps {
//   params: Promise<{
//     templateId: string;
//   }>;
// }

// export default async function ResumePage({ params }: ResumePageProps) {
//   const { userId } = await auth();

//   // Check authentication first
//   if (!userId) {
//     redirect("/sign-in");
//   }

//   // Get user from database
//   const user = await prisma.user.findUnique({
//     where: { clerkId: userId },
//     select: { id: true }
//   });

//   // If user doesn't exist in our database, redirect to extract page
//   if (!user) {
//     redirect("/extract");
//   }

//   // Await the params promise
//   const { templateId } = await params;

//   // Get resume data
//   const resumeData = await getUserResume(userId);

//   if (!resumeData) {
//     redirect("/extract");
//   }

//   // Find the resume in database
//   const resume = await prisma.resume.findFirst({
//     where: { userId: user.id }
//   });

//   if (!resume) {
//     return <div>Resume not found. Please create a resume first.</div>;
//   }

//   return (
//     <div className="h-fit bg-gray-100 py-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {/* Left Column - Resume Preview */}

//              <div>
//         <ResumeBuilderSidebar resumeId={resume.id} userId={userId} />
//           </div>
//           <div>
//             <ResumePreview
//               resumeData={resumeData}
//               templateId={templateId}
//             />
//           </div>

         
       
//         </div>
//       </div>
//     </div>
//   );
// }




import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import ResumeBuilderSidebar from "@/components/Aditional_info/ResumebuilderSidebar";
import { getUserResume } from "@/lib/resume-service";
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
    return <div className="container mx-auto p-4">Resume not found. Please create a resume first.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm p-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Resume Builder</h1>
        <label htmlFor="sidebar-toggle" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
      </div>

      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar - Left on desktop, hidden on mobile (opens via drawer) */}
          <div className="lg:w-1/3 xl:w-1/4">
            <input id="sidebar-toggle" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side lg:drawer-open z-50">
              <label htmlFor="sidebar-toggle" className="drawer-overlay lg:hidden"></label>
              <div className="bg-white p-4 w-80 min-h-screen lg:min-h-0 lg:relative lg:shadow-md">
                <ResumeBuilderSidebar resumeId={resume.id} userId={userId} />
              </div>
            </div>
          </div>

          {/* Resume Preview - Right on desktop, full width on mobile */}
          <div className="lg:w-2/3 xl:w-3/4 p-4 lg:p-8">
            <div className="bg-white rounded-lg shadow-lg p-4 lg:p-8">
              <ResumePreview
                resumeData={resumeData}
                templateId={templateId}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}