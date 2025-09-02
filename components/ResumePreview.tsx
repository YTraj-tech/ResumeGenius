


// "use client";

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
//         margin: 0;
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
//         .print-mode {
//           width: 100% !important;
//           max-width: none !important;
//           margin: 0 !important;
//           padding: 0 !important;
//           box-shadow: none !important;
//           border: none !important;
//           border-radius: 0 !important;
//         }
//         .no-print {
//           display: none !important;
//         }
//         * {
//           -webkit-print-color-adjust: exact;
//           print-color-adjust: exact;
//         }
//       }
//     `,
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

//       {/* Pass resumeRef as a prop to the template */}
//       {templateId === "technical" && (
//         <TechnicalTemplate
//           data={resumeData}
//           user={templateUser}
//           resumeRef={resumeRef}
//         />
//       )}
//       {templateId === "creative" && (
//         <CreativeTemplate
//           data={resumeData}
//           user={templateUser}
//           resumeRef={resumeRef}
//         />
//       )}
//       {templateId === "minimal" && (
//         <MinimalTemplate
//           data={resumeData}
//           user={templateUser}
//           resumeRef={resumeRef}
//         />
//       )}
//       {!templateId && (
//         <TechnicalTemplate
//           data={resumeData}
//           user={templateUser}
//           resumeRef={resumeRef}
//         />
//       )}
//     </div>
//   );
// }



'use client';

import { useRef } from "react";
import { useUser } from "@clerk/nextjs";
import { useReactToPrint } from "react-to-print";

import TechnicalTemplate from "./templates/TechnicalTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";
import { ResumePreviewProps } from "@/lib/types/resume.type";

interface TemplateUser {
  email: string;
  imageUrl?: string | null;
  name?: string | null;
}

export function ResumePreview({ resumeData, templateId }: ResumePreviewProps) {
  const { user } = useUser();
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "My_Resume",
    pageStyle: `
      @page {
        size: A4;
        margin: 30px !important;
      }
      @media print {
        body, html {
          width: 100% !important;
          height: auto !important;
          margin: 0 !important;
          padding: 0 !important;
          background: white !important;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        /* Hide everything except the resume */
        body > *:not(.resume-container) {
          display: none !important;
        }
        .resume-container {
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        /* Ensure all no-print elements are hidden */
        .no-print, .no-print * {
          display: none !important;
        }
        * {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
          box-sizing: border-box;
        }
      }
    `,
    onBeforePrint: () => {
      // Hide all elements except the resume container
      const bodyChildren = document.body.children;
      for (let i = 0; i < bodyChildren.length; i++) {
        const child = bodyChildren[i] as HTMLElement;
        if (!child.classList.contains('resume-container')) {
          child.style.display = 'none';
        }
      }

      // Also hide any no-print elements
      document.querySelectorAll('.no-print').forEach(el => {
        (el as HTMLElement).style.display = 'none';
      });

      return Promise.resolve();
    },
    onAfterPrint: () => {
      // Restore all hidden elements
      const bodyChildren = document.body.children;
      for (let i = 0; i < bodyChildren.length; i++) {
        const child = bodyChildren[i] as HTMLElement;
        child.style.display = '';
      }

      // Restore no-print elements
      document.querySelectorAll('.no-print').forEach(el => {
        (el as HTMLElement).style.display = '';
      });

      return Promise.resolve();
    }
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
      {/* Header with actions - will be hidden when printing */}
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

      {/* Resume content - this is what gets printed */}
      <div className="resume-container">
        {templateId === "technical" && (
          <TechnicalTemplate
            data={resumeData}
            user={templateUser}
            resumeRef={resumeRef}
          />
        )}
        {templateId === "creative" && (
          <CreativeTemplate
            data={resumeData}
            user={templateUser}
            resumeRef={resumeRef}
          />
        )}
        {templateId === "minimal" && (
          <MinimalTemplate
            data={resumeData}
            user={templateUser}
            resumeRef={resumeRef}
          />
        )}
        {!templateId && (
          <TechnicalTemplate
            data={resumeData}
            user={templateUser}
            resumeRef={resumeRef}
          />
        )}
      </div>
    </div>
  );
}