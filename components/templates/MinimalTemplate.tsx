
// export default function MinimalTemplate({ data }: { data: ResumeData }) {
//   return (
//     <div className="space-y-6 max-w-3xl mx-auto">
//       <div>
//         <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
//         <p className="text-gray-600 mt-1">{data.summary}</p>
//         {(data.linkedinLink || data.githubLink) && (
//           <div className="flex gap-4 mt-3 text-sm">
//             {data.linkedinLink && (
//               <a href={data.linkedinLink} className="text-blue-600 hover:underline">
//                 LinkedIn
//               </a>
//             )}
//             {data.githubLink && (
//               <a href={data.githubLink} className="text-gray-600 hover:underline">
//                 GitHub
//               </a>
//             )}
//           </div>
//         )}
//       </div>

//       <div className="space-y-6">
//         {/* Experience Section */}
//         {data.experience && data.experience.length > 0 && (
//           <div>
//             <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//               Experience
//             </h2>
//             <div className="space-y-3">
//               {data.experience.map((item, index) => (
//                 <div key={index} className="text-gray-700">
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Education Section */}
//         {data.education && data.education.length > 0 && (
//           <div>
//             <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//               Education
//             </h2>
//             <div className="space-y-3">
//               {data.education.map((item, index) => (
//                 <div key={index} className="text-gray-700">
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Skills Section */}
//         {data.skills && data.skills.length > 0 && (
//           <div>
//             <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//               Skills
//             </h2>
//             <div className="space-y-3">
//               <div className="flex flex-wrap gap-1">
//                 {data.skills.map((skill) => (
//                   <span key={skill} className="text-sm">
//                     • {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Projects Section */}
//         {data.projects && data.projects.length > 0 && (
//           <div>
//             <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//               Projects
//             </h2>
//             <div className="space-y-3">
//               {data.projects.map((p, index) => (
//                 <div key={index} className="text-gray-700">
//                   {`${p.name}: ${p.description}`}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Certifications Section */}
//         {data.certifications && data.certifications.length > 0 && (
//           <div>
//             <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//               Certifications
//             </h2>
//             <div className="space-y-3">
//               {data.certifications.map((item, index) => (
//                 <div key={index} className="text-gray-700">
//                   {item}
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }



'use client';
import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getSections } from '@/app/actions/section';

// Helper function to convert scraped project format to ResumeProject format
const transformProjects = (projects: any[]): ResumeProject[] => {
  if (!projects || projects.length === 0) return [];
  // Check if projects are already in the correct format
  if (projects[0] && projects[0].name !== undefined) {
    return projects as ResumeProject[];
  }
  // Convert from scraped format to ResumeProject format
  return projects.map(project => ({
    name: project.title || 'Untitled Project',
    description: project.subComponents?.[0]?.description?.[0]?.text || '',
    technologies: [],
    link: undefined
  }));
};

interface CustomSection {
  id: string;
  sectionType: string;
  organization: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

interface MinimalTemplateProps {
  data: ResumeData;
  user?: {
    email: string;
    imageUrl?: string | null;
    name?: string | null;
  };
  resumeRef: RefObject<HTMLDivElement | null>;
}

export default function MinimalTemplate({ data, user, resumeRef }: MinimalTemplateProps) {
  const { isLoaded: isUserLoaded } = useUser();
  const formattedProjects = transformProjects(data.projects || []);
  const [sections, setSections] = useState<CustomSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch sections using Server Action
  const fetchSections = async () => {
    try {
      setLoading(true);
      const result = await getSections();
      if (result.success) {
        setSections(result.sections);
        setError(null);
      } else {
        setError(result.error || 'Failed to load sections');
      }
    } catch (err) {
      console.error('Error fetching sections:', err);
      setError('An error occurred while fetching sections');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isUserLoaded) {
      fetchSections();
    }
  }, [isUserLoaded]);

  return (
    <div
      ref={resumeRef}
      className="w-full max-w-3xl mx-auto p-8 print:p-[30px] print:my-0 print:shadow-none print:border-0 print:bg-white print:text-black bg-white text-gray-800"
    >
      {/* Header Section */}
      <div className="flex justify-between items-start mb-4 print:mb-3">
        <div>
          <h1 className="text-4xl font-bold uppercase text-gray-900 print:text-3xl">
            {user?.name || data.name}
          </h1>

        </div>
        <div className="text-right text-sm print:text-xs">

          <p className="text-gray-600">{user?.email || 'email@domain.com'}</p>
        </div>
      </div>
      {data.summary && (
        <p className="text-sm text-gray-700 mb-6 leading-relaxed print:text-xs print:mb-4">
          {data.summary}
        </p>
      )}
      <div className="border-t border-gray-300 mb-6 print:mb-4"></div>
      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-8 print:gap-6">
        {/* Left Column: Work Experience, Skills, Projects */}
        <div className="space-y-6 print:space-y-4">
          {/* Experience */}
          {data.experience && data.experience.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-900 mb-3 border-b border-gray-300 pb-1 print:text-base print:font-bold">
                Work Experience
              </h2>
              <div className="space-y-4 print:space-y-3">
                {data.experience.map((item, index) => (
                  <div key={index} className="text-sm text-gray-700 print:text-xs">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Skills with Progress Bars */}
          {data.skills && data.skills.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-900 mb-3 border-b border-gray-300 pb-1 print:text-base print:font-bold">
                Skills
              </h2>
              <div className="space-y-3 print:space-y-2">
                {data.skills.map((skill) => (
                  <div key={skill} className="text-sm text-gray-700 print:text-xs">
                    <span className="block mb-1">{skill}</span>
                    <div className="w-full bg-gray-200 h-1.5 rounded print:h-1">
                      <div className="bg-blue-500 h-1.5 rounded w-1/2 print:h-1"></div> {/* Static 50% bar; adjust as needed */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* {formattedProjects.length > 0 && (
             <div>
               <h2 className="text-lg font-bold uppercase text-gray-900 mb-3 border-b border-gray-300 pb-1 print:text-base print:font-bold">
                 Projects
               </h2>
               <div className="space-y-4 print:space-y-3">
                 {formattedProjects.map((project, index) => (
                   <div key={index}>
                     <h3 className="font-medium text-gray-800 text-sm print:text-xs print:font-bold">
                       {project.name}
                     </h3>
                     {project.description && (
                       <p className="text-xs text-gray-600 mt-1 print:text-2xs">
                         {project.description}
                       </p>
                     )}
                   </div>
                 ))}
               </div>
             </div>
           )} */}
        </div>
        {/* Right Column: Education, Certifications, Additional/Hobbies, Contact */}
        <div className="space-y-6 print:space-y-4">
          {/* Education */}
          {data.education && data.education.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-900 mb-3 border-b border-gray-300 pb-1 print:text-base print:font-bold">
                Education
              </h2>
              <div className="space-y-3 print:space-y-2">
                {data.education.map((item, index) => (
                  <div key={index} className="text-sm text-gray-700 print:text-xs">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Certifications */}
          {data.certifications && data.certifications.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-900 mb-3 border-b border-gray-300 pb-1 print:text-base print:font-bold">
                Certifications
              </h2>
              <div className="space-y-2 print:space-y-1">
                {data.certifications.map((item, index) => (
                  <div key={index} className="text-sm text-gray-700 print:text-xs">
                    • {item}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Additional Sections (e.g., Hobbies) */}
          {!loading && !error && sections.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-gray-900 mb-3 border-b border-gray-300 pb-1 print:text-base print:font-bold">
                Others
              </h2>
              <div className="space-y-3 print:space-y-2">
                {sections.map((section) => (
                  <div key={section.id} className="text-sm text-gray-700 print:text-xs">
                    • {section.description || section.organization}
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* Contact */}
          <div>
            <h2 className="text-lg font-bold uppercase text-gray-900 mb-3 border-b border-gray-300 pb-1 print:text-base print:font-bold">
              Contact
            </h2>
            <div className="text-sm text-gray-700 space-y-1 print:text-xs print:space-y-0.5">
              <p>Email {user?.email || 'email@domain.com'}</p>
              {data.linkedinLink && (
                <span>Linkdin {data.linkedinLink}</span>
              )}
            </div>
            {formattedProjects.length > 0 && (
              <div>
                <h2 className="text-lg mt-12 font-bold uppercase text-gray-900 mb-3 border-b border-gray-300 pb-1 print:text-base print:font-bold">
                  Projects
                </h2>
                <div className="space-y-4 print:space-y-3">
                  {formattedProjects.map((project, index) => (
                    <div key={index}>
                      <h3 className="font-medium text-gray-800 text-sm print:text-xs print:font-bold">
                        {project.name}
                      </h3>
                      {project.description && (
                        <p className="text-xs text-gray-600 mt-1 print:text-2xs">
                          {project.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Loading and Error States (hidden during print) */}
      {loading && (
        <div className="p-3 text-center text-gray-500 text-sm print:hidden">
          Loading sections...
        </div>
      )}
      {error && (
        <div className="p-3 text-center text-red-500 text-sm print:hidden">
          {error}
          <button
            onClick={fetchSections}
            className="ml-2 text-blue-600 hover:underline print:hidden"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}