// 'use client';

// import { useRef, useState, useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
// import { useReactToPrint } from "react-to-print";
   
   
// import TechnicalTemplate from "./templates/TechnicalTemplate";
// import CreativeTemplate from "./templates/CreativeTemplate";
// import MinimalTemplate from "./templates/MinimalTemplate";

// import { ResumePreviewProps } from "@/lib/types/resume.type";
// import { getSections } from "@/app/actions/resumeSection";
// import { getPersonalInfoByUserId } from "@/app/actions/section";

// interface TemplateUser {
//   email: string;
//   imageUrl?: string | null;
//   name?: string | null;
// }

// interface CustomSection {
//   id: string;
//   sectionType: string;
//   organization: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface PersonalInfo {
//   id: string;
//   userId: string;
//   phone?: string | null;
//   imageUrl?: string | null;
//   address?: string | null;
//   createdAt: Date;
//   updatedAt: Date;
// }

// export function ResumePreview({ resumeData, templateId }: ResumePreviewProps) {
//   const { user } = useUser();
//   const resumeRef = useRef<HTMLDivElement>(null);

//   // State for sections data
//   const [sections, setSections] = useState<CustomSection[]>([]);
//   const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const handleDownload = useReactToPrint({
//     contentRef: resumeRef,
//     documentTitle: "My_Resume",
//     bodyClass: "print-only-resume",
//     pageStyle: `
//       @page {
//         size: A4;
//         margin: 30px !important;
//       }
//     `,
//   });

//   // Fetch sections and personal info data from database
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);

//         // Fetch sections
//         const sectionsResult = await getSections();
//         if (sectionsResult.success) {
//           setSections(sectionsResult.sections);
//         } else {
//           setError(sectionsResult.error || "Failed to load sections");
//         }

//         // Fetch personal info
//         const personalInfoResult = await getPersonalInfoByUserId();
//         if (personalInfoResult.success && personalInfoResult.data) {
//           setPersonalInfo(personalInfoResult.data);
//         } else if (personalInfoResult.error) {
//           console.warn("Personal info not found:", personalInfoResult.error);
//           // Explicitly set to null if not found
//           setPersonalInfo(null);
//         } else {
//           // Handle case where result.data is undefined
//           setPersonalInfo(null);
//         }

//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to load data");
//         setPersonalInfo(null); // Ensure it's set to null on error
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (user) {
//       fetchData();
//     } else {
//       setLoading(false);
//       setPersonalInfo(null); // Ensure it's set to null if no user
//     }
//   }, [user]);

//   const templateUser: TemplateUser | undefined = user
//     ? {
//       email: user.primaryEmailAddress?.emailAddress || "",
//       imageUrl: user.imageUrl,
//       name: user.fullName,
//     }
//     : undefined;

//   // Combine user data with personal info for templates
//   const enhancedUser = templateUser ? {
//     ...templateUser,
//     phone: personalInfo?.phone || undefined,
//     address: personalInfo?.address || undefined,
//     // Use personal info image if available, otherwise fall back to user image
//     imageUrl: personalInfo?.imageUrl || templateUser.imageUrl
//   } : undefined;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       {/* Header (hidden on print) */}
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

//       {/* Loading state */}
//       {loading && (
//         <div className="text-center py-8 no-print">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//           <p className="mt-4 text-gray-600">Loading your data...</p>
//         </div>
//       )}

//       {/* Error state */}
//       {error && (
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 no-print">
//           {error}
//         </div>
//       )}

//       {/* Resume content - Only this prints */}
//       {!loading && (
//         <div className="resume-container w-full  ">
//           <div ref={resumeRef} className="resume-print-area ">
//             {templateId === "technical" && (
//               <TechnicalTemplate
//                 data={resumeData}
//                 user={enhancedUser}
//                 sections={sections}
//                 personalInfo={personalInfo}
//               />
//             )}
//             {templateId === "creative" && (
//               <CreativeTemplate
//                 data={resumeData}
//                 user={enhancedUser}
//                 sections={sections}
//                 personalInfo={personalInfo}
//               />
//             )}
//             {templateId === "minimal" && (
//               <MinimalTemplate
//                 data={resumeData}
//                 user={enhancedUser}
//                 sections={sections}
//                 personalInfo={personalInfo}
//               />
//             )}
//             {!templateId && (
//               <TechnicalTemplate
//                 data={resumeData}
//                 user={enhancedUser}
//                 sections={sections}
//                 personalInfo={personalInfo}
//               />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



'use client';

import { useRef, useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useReactToPrint } from "react-to-print";
   
import TechnicalTemplate from "./templates/TechnicalTemplate";
import CreativeTemplate from "./templates/CreativeTemplate";
import MinimalTemplate from "./templates/MinimalTemplate";

import { ResumePreviewProps } from "@/lib/types/resume.type";
import { getSections } from "@/app/actions/resumeSection";
import { getPersonalInfoByUserId } from "@/app/actions/section";

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

interface PersonalInfo {
  id: string;
  userId: string;
  phone?: string | null;
  imageUrl?: string | null;
  address?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export function ResumePreview({ resumeData, templateId }: ResumePreviewProps) {
  const { user } = useUser();
  const resumeRef = useRef<HTMLDivElement>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  // State for sections data
  const [sections, setSections] = useState<CustomSection[]>([]);
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "My_Resume",
    bodyClass: "print-only-resume",
    pageStyle: `
      @page {
        size: A4;
        margin: 30px !important;
      }
      @media print {
        img {
          max-width: 100% !important;
          height: auto !important;
          display: block !important;
        }
      }
    `,
  });

  // Preload images when component mounts
  useEffect(() => {
    const preloadImages = async () => {
      const personalInfoResult = await getPersonalInfoByUserId();
      const imageUrl = personalInfoResult.success && personalInfoResult.data 
        ? personalInfoResult.data.imageUrl 
        : user?.imageUrl;
      
      if (imageUrl) {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageLoaded(false);
      }
    };

    preloadImages();
  }, [user]);

  // Fetch sections and personal info data from database
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch sections
        const sectionsResult = await getSections();
        if (sectionsResult.success) {
          setSections(sectionsResult.sections);
        } else {
          setError(sectionsResult.error || "Failed to load sections");
        }

        // Fetch personal info
        const personalInfoResult = await getPersonalInfoByUserId();
        if (personalInfoResult.success && personalInfoResult.data) {
          setPersonalInfo(personalInfoResult.data);
        } else if (personalInfoResult.error) {
          console.warn("Personal info not found:", personalInfoResult.error);
          setPersonalInfo(null);
        } else {
          setPersonalInfo(null);
        }

      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to load data");
        setPersonalInfo(null);
      } finally {
        setLoading(false);
      }
    };

    if (user) {
      fetchData();
    } else {
      setLoading(false);
      setPersonalInfo(null);
    }
  }, [user]);

  const templateUser: TemplateUser | undefined = user
    ? {
      email: user.primaryEmailAddress?.emailAddress || "",
      imageUrl: user.imageUrl,
      name: user.fullName,
    }
    : undefined;

  // Combine user data with personal info for templates
  const enhancedUser = templateUser ? {
    ...templateUser,
    phone: personalInfo?.phone || undefined,
    address: personalInfo?.address || undefined,
    imageUrl: personalInfo?.imageUrl || templateUser.imageUrl
  } : undefined;

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

      {/* Loading state */}
      {loading && (
        <div className="text-center py-8 no-print">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your data...</p>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 no-print">
          {error}
        </div>
      )}

      {/* Resume content - Only this prints */}
      {!loading && (
        <div className="resume-container w-full">
          <div ref={resumeRef} className="resume-print-area">
            {templateId === "technical" && (
              <TechnicalTemplate
                data={resumeData}
                user={enhancedUser}
                sections={sections}
                personalInfo={personalInfo}
              />
            )}
            {templateId === "creative" && (
              <CreativeTemplate
                data={resumeData}
                user={enhancedUser}
                sections={sections}
                personalInfo={personalInfo}
              />
            )}
            {templateId === "minimal" && (
              <MinimalTemplate
                data={resumeData}
                user={enhancedUser}
                sections={sections}
                personalInfo={personalInfo}
              />
            )}
            {!templateId && (
              <TechnicalTemplate
                data={resumeData}
                user={enhancedUser}
                sections={sections}
                personalInfo={personalInfo}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}