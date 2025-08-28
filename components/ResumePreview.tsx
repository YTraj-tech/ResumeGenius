// "use client";
// import { ResumeProject } from "@/lib/types/resume.type";
// import TechnicalTemplate from "./templates/TechnicalTemplate";
// import { User } from "@clerk/nextjs/server";
// import CreativeTemplate from "./templates/CreativeTemplate";
// import MinimalTemplate from "./templates/MinimalTemplate";
// import { ResumePreviewProps } from "@/lib/types/resume.type";



// export function ResumePreview({ resumeData, templateId }: ResumePreviewProps) {
//   const handleDownload = () => {
//     console.log("Downloading resume...");
//   };

//   const handleEdit = () => {
//     console.log("Editing resume...");
//   };

//   const handleShare = () => {
//     console.log("Sharing resume...");
//   };

// const { user } = useUser();

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       {/* Header with actions */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
//         <div>
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Resume</h1>
//           <p className="text-gray-600 capitalize">Template: {templateId.replace('-', ' ')}</p>
//         </div>
        
//         <div className="flex flex-wrap gap-2 w-full sm:w-auto">
//           <button
//             onClick={handleEdit}
//             className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
//               <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
//             </svg>
//             Edit
//           </button>
          
//           <button
//             onClick={handleShare}
//             className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="18" cy="5" r="3"/>
//               <circle cx="6" cy="12" r="3"/>
//               <circle cx="18" cy="19" r="3"/>
//               <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
//               <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
//             </svg>
//             Share
//           </button>
          
//           <button
//             onClick={handleDownload}
//             className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//           >
//             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
//               <polyline points="7 10 12 15 17 10"/>
//               <line x1="12" y1="15" x2="12" y2="3"/>
//             </svg>
//             Download PDF
//           </button>
//         </div>
//       </div>

//       {/* Resume content */}
//       <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
//         {templateId === "technical" && <TechnicalTemplate data={resumeData} />}
//         {templateId === "creative" && <CreativeTemplate data={resumeData} />}
//         {templateId === "minimal" && <MinimalTemplate data={resumeData} />}
//         {templateId === undefined && <TechnicalTemplate data={resumeData} />}
//       </div>
//     </div>
//   );
// }


"use client";
import { ResumeProject } from "@/lib/types/resume.type";
import TechnicalTemplate from "./templates/TechnicalTemplate";
import { useUser } from "@clerk/nextjs";
import CreativeTemplate from "./templates/CreativeTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import { ResumePreviewProps } from "@/lib/types/resume.type";

// Define user type for our templates
interface TemplateUser {
  email: string;
  imageUrl?: string | null;
  name?: string | null;
}

export function ResumePreview({ resumeData, templateId }: ResumePreviewProps) {
  const { user } = useUser();

  const handleDownload = () => {
    console.log("Downloading resume...");
  };

  const handleEdit = () => {
    console.log("Editing resume...");
  };

  const handleShare = () => {
    console.log("Sharing resume...");
  };

  // Prepare user data for templates
  const templateUser: TemplateUser | undefined = user ? {
    email: user.primaryEmailAddress?.emailAddress || '',
    imageUrl: user.imageUrl,
    name: user.fullName
  } : undefined;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Resume</h1>
          <p className="text-gray-600 capitalize">Template: {templateId?.replace('-', ' ') || 'technical'}</p>
        </div>
        
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button
            onClick={handleEdit}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
            Edit
          </button>
          
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"/>
              <circle cx="6" cy="12" r="3"/>
              <circle cx="18" cy="19" r="3"/>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
            </svg>
            Share
          </button>
          
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download PDF
          </button>
        </div>
      </div>

      {/* Resume content */}
      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
        {templateId === "technical" && <TechnicalTemplate data={resumeData} user={templateUser} />}
        {templateId === "creative" && <CreativeTemplate data={resumeData} user={templateUser} />}
        {templateId === "minimal" && <MinimalTemplate data={resumeData} user={templateUser} />}
        {!templateId && <TechnicalTemplate data={resumeData} user={templateUser} />}
      </div>
    </div>
  );
}