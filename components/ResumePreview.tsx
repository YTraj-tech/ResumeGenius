


// 'use client';

// import { useRef } from "react";
// import { useUser } from "@clerk/nextjs";
// import { useReactToPrint } from "react-to-print";

// import TechnicalTemplate from "./templates/TechnicalTemplate";
// import CreativeTemplate from "./templates/CreativeTemplate";
// import MinimalTemplate from "./templates/MinimalTemplate";
// import { ResumePreviewProps } from "@/lib/types/resume.type";

// interface TemplateUser {
//   email: string;
//   imageUrl?: string | null;
//   name?: string | null;
// }

// export function ResumePreview({ resumeData, templateId }: ResumePreviewProps) {
//   const { user } = useUser();
//   const resumeRef = useRef<HTMLDivElement>(null);

//   const handleDownload = useReactToPrint({
//     contentRef: resumeRef,
//     documentTitle: "My_Resume",
//     pageStyle: `
//       @page {
//         size: A4;
//         margin: 30px !important;
//       }
//       @media print {
//         body, html {
//           width: 100% !important;
//           height: auto !important;
//           margin: 0 !important;
//           padding: 0 !important;
//           background: white !important;
//           -webkit-print-color-adjust: exact;
//           print-color-adjust: exact;
//         }
//         .resume-container > * {
//           width: 100% !important;
//           max-width: none !important;
//           margin: 0 !important;
//           padding: 0 !important;
//         }
//         .no-print {
//           display: none !important;
//         }
//         * {
//           -webkit-print-color-adjust: exact;
//           print-color-adjust: exact;
//           box-sizing: border-box;
//         }
//       }
//     `,
//     onBeforePrint: () => {
//       document.querySelectorAll('.no-print').forEach(el => {
//         (el as HTMLElement).style.display = 'none';
//       });
//       return Promise.resolve();
//     },
//     onAfterPrint: () => {
//       document.querySelectorAll('.no-print').forEach(el => {
//         (el as HTMLElement).style.display = '';
//       });
//       return Promise.resolve();
//     }
//   });

//   const templateUser: TemplateUser | undefined = user
//     ? {
//       email: user.primaryEmailAddress?.emailAddress || "",
//       imageUrl: user.imageUrl,
//       name: user.fullName,
//     }
//     : undefined;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       {/* Header with actions - will be hidden when printing */}
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 no-print">
//         <div>
//           <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
//             Your Resume
//           </h1>
//           <p className="text-gray-600 capitalize">
//             Template: {templateId?.replace("-", " ") || "technical"}
//           </p>
//         </div>

//         <div className="flex flex-wrap gap-2 w-full sm:w-auto">
//           <button
//             onClick={handleDownload}
//             className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//           >
//             📄 Download PDF
//           </button>
//         </div>
//       </div>

//       {/* Resume content - this is what gets printed */}
//       <div className="resume-container">
//         {templateId === "technical" && (
//           <TechnicalTemplate
//             data={resumeData}
//             user={templateUser}
//             resumeRef={resumeRef}
//           />
//         )}
//         {templateId === "creative" && (
//           <CreativeTemplate
//             data={resumeData}
//             user={templateUser}
//             resumeRef={resumeRef}
//           />
//         )}
//         {templateId === "minimal" && (
//           <MinimalTemplate
//             data={resumeData}
//             user={templateUser}
//             resumeRef={resumeRef}
//           />
//         )}
//         {!templateId && (
//           <TechnicalTemplate
//             data={resumeData}
//             user={templateUser}
//             resumeRef={resumeRef}
//           />
//         )}
//       </div>
//     </div>
//   );
// }  












'use client';

import { useRef, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useReactToPrint } from "react-to-print";

import TechnicalTemplate from "./templates/TechnicalTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import { ResumePreviewProps } from "@/lib/types/resume.type";
import { getSections } from "@/app/actions/section";

interface TemplateUser {
  email: string;
  imageUrl?: string | null;
  name?: string | null;
}

interface CustomSection {
  id: string;
  sectionType: string;
  organization: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export function ResumePreview({ resumeData, templateId }: ResumePreviewProps) {
  const { user, isLoaded } = useUser();
  const resumeRef = useRef<HTMLDivElement>(null);

  // State for extra sections
  const [sections, setSections] = useState<CustomSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSections = async () => {
    try {
      setLoading(true);
      const result = await getSections();

      if (result.success) {
        setSections(result.sections);
        setError(null);
      } else {
        setError(result.error || "Failed to load sections");
      }
    } catch (err) {
      console.error("Error fetching sections:", err);
      setError("An error occurred while fetching sections");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isLoaded) {
      fetchSections();
    }
  }, [isLoaded]);

  const handleDownload = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "My_Resume",
    bodyClass: "print-only-resume", // 🔑 ensures only resume area prints
    pageStyle: `
      @page {
        size: A4;
        margin: 30px !important;
      }
    `,
  });

  const templateUser: TemplateUser | undefined = user
    ? {
      email: user.primaryEmailAddress?.emailAddress || "",
      imageUrl: user.imageUrl,
      name: user.fullName,
    }
    : undefined;

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header (hidden on print) */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 no-print">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Your Resume
          </h1>
          <p className="text-gray-600 capitalize">
            Template: {templateId?.replace("-", " ") || "technical"}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            📄 Download PDF
          </button>
        </div>
      </div>

      {/* Resume content - Only this prints */}
      <div className="resume-container">
        <div ref={resumeRef} className="resume-print-area">
          {templateId === "technical" && (
            <TechnicalTemplate
              data={resumeData}
              user={templateUser}
              sections={sections}
              loading={loading}
              error={error}
              onRetry={fetchSections}
            />
          )}
          {templateId === "creative" && (
            <CreativeTemplate data={resumeData} user={templateUser} />
          )}
          {templateId === "minimal" && (
            <MinimalTemplate data={resumeData} user={templateUser} />
          )}
          {!templateId && (
            <TechnicalTemplate
              data={resumeData}
              user={templateUser}
              sections={sections}
              loading={loading}
              error={error}
              onRetry={fetchSections}
            />
          )}
        </div>
      </div>
    </div>
  );
}
