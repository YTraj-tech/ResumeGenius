// import ResumeShow from "../Resume/Resume_show";
// import { ResumeProject } from "@/lib/types/resume.type";
// import Selection from "../Resume/ResumeFormate";
// import { ResumeData } from "@/lib/types/resume.type";





//    export default  function TechnicalTemplate({ data }: { data: ResumeData }) {
//   return (
//     <div className="space-y-6">
//       <div className="border-l-4 border-blue-500 pl-4">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{data.name}</h1>
//         <p className="text-gray-600 mt-2">{data.summary}</p>
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

//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="md:col-span-2 space-y-6">
//           <Selection title="Experience" items={data.experience} />
//           <Selection 
//             title="Projects" 
//             items={data.projects.map(p => (
//               <div key={p.name} className="mb-3">
//                 <h4 className="font-medium">{p.name}</h4>
//                 <p className="text-gray-700">{p.description}</p>
//                 {p.technologies && (
//                   <div className="flex flex-wrap gap-1 mt-1">
//                     {p.technologies.map(tech => (
//                       <span key={tech} className="text-xs bg-gray-100 px-2 py-1 rounded">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 )}
//                 {p.link && (
//                   <a href={p.link} className="text-blue-600 text-sm hover:underline mt-1 inline-block">
//                     View Project
//                   </a>
//                 )}
//               </div>
//             ))} 
//           />
//         </div>

//         <div className="space-y-6">
//           <Selection 
//             title="Skills" 
//             items={[
//               <div key="skills" className="flex flex-wrap gap-1">
//                 {data.skills.map(skill => (
//                   <span key={skill} className="text-xs bg-gray-100 px-2 py-1 rounded">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             ]} 
//           />
//           <Selection title="Education" items={data.education} />
//           <Selection title="Certifications" items={data.certifications} />
//         </div>
//       </div>
//     </div>
//   );
// }


// import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
// import Selection from "../Resume/ResumeFormate";

// // Helper function to transform projects data
// const transformProjects = (projects: any[]): ResumeProject[] => {
//   if (!projects || projects.length === 0) return [];

//   // Check if projects are already in the correct format
//   if (projects[0] && typeof projects[0] === 'object' && 'name' in projects[0]) {
//     return projects as ResumeProject[];
//   }

//   // Convert from scraped format to ResumeProject format
//   return projects.map(project => ({
//     name: project.title || 'Untitled Project',
//     description: project.subComponents?.[0]?.description?.[0]?.text || '',
//     technologies: [],
//     link: undefined
//   }));
// };

// export default function TechnicalTemplate({ data }: { data: ResumeData }) {
//   // Transform projects to the correct format
//   const formattedProjects = transformProjects(data.projects || []);

//   return (
//     <div className="space-y-6">
//       <div className="border-l-4 border-blue-500 pl-4">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{data.name}</h1>
//         <p className="text-gray-600 mt-2">{data.summary}</p>
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

//       <div className="grid md:grid-cols-3 gap-6">
//         <div className="md:col-span-2 space-y-6">
//           {data.experience && data.experience.length > 0 && (
//             <Selection title="Experience" items={data.experience} />
//           )}

//           {formattedProjects.length > 0 && (
//             <Selection 
//               title="Projects" 
//               items={formattedProjects.map(p => (
//                 <div key={p.name} className="mb-3">
//                   <h4 className="font-medium">{p.name}</h4>
//                   {p.description && <p className="text-gray-700">{p.description}</p>}
//                   {p.technologies && p.technologies.length > 0 && (
//                     <div className="flex flex-wrap gap-1 mt-1">
//                       {p.technologies.map(tech => (
//                         <span key={tech} className="text-xs bg-gray-100 px-2 py-1 rounded">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
//                   )}
//                   {p.link && (
//                     <a href={p.link} className="text-blue-600 text-sm hover:underline mt-1 inline-block">
//                       View Project
//                     </a>
//                   )}
//                 </div>
//               ))} 
//             />
//           )}
//         </div>

//         <div className="space-y-6">
//           {data.skills && data.skills.length > 0 && (
//             <Selection 
//               title="Skills" 
//               items={[
//                 <div key="skills" className="flex flex-wrap gap-1">
//                   {data.skills.map(skill => (
//                     <span key={skill} className="text-xs bg-gray-100 px-2 py-1 rounded">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               ]} 
//             />
//           )}

//           {data.education && data.education.length > 0 && (
//             <Selection title="Education" items={data.education} />
//           )}

//           {data.certifications && data.certifications.length > 0 && (
//             <Selection title="Certifications" items={data.certifications} />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }













'use client';

import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
import Selection from "../Resume/ResumeFormate";
import Image from "next/image";
import { RefObject, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { getSections } from '@/app/actions/section';

// Helper function to transform projects data
const transformProjects = (projects: any[]): ResumeProject[] => {
  if (!projects || projects.length === 0) return [];

  // Check if projects are already in the correct format
  if (projects[0] && typeof projects[0] === 'object' && 'name' in projects[0]) {
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

interface TechnicalTemplateProps {
  data: ResumeData;
  user?: {
    email: string;
    imageUrl?: string | null;
    name?: string | null;
  };
  resumeRef: RefObject<HTMLDivElement | null>;
}

export default function TechnicalTemplate({ data, user, resumeRef }: TechnicalTemplateProps) {
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
      className="space-y-6 print:space-y-4 print:p-0 print:max-w-none"
    >
      <div className="border-l-4 border-blue-500 pl-4 print:border-l-2 print:pl-2">
        {/* User info section */}
        {user && (
          <div className="flex items-center gap-4 mb-4 print:mb-3 print:gap-3">
            {user.imageUrl && (
              <Image
                src={user.imageUrl}
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full print:w-12 print:h-12"
              />
            )}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 print:text-xl">
                {user.name || data.name}
              </h1>
              <p className="text-gray-600 print:text-sm">{user.email}</p>
            </div>
          </div>
        )}

        {/* Fallback to data.name if no user provided */}
        {!user && (
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 print:text-xl">
            {data.name}
          </h1>
        )}

        <p className="text-gray-600 mt-2 print:text-sm print:mt-1">{data.summary}</p>
        {(data.linkedinLink || data.githubLink) && (
          <div className="flex gap-4 mt-3 text-sm print:mt-2 print:text-xs">
            {data.linkedinLink && (
              <a href={data.linkedinLink} className="text-blue-600 hover:underline print:text-blue-800">
                LinkedIn
              </a>
            )}
            {data.githubLink && (
              <a href={data.githubLink} className="text-gray-600 hover:underline print:text-gray-800">
                GitHub
              </a>
            )}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-6 print:gap-4 print:grid-cols-1 print:md:grid-cols-3">
        <div className="md:col-span-2 space-y-6 print:space-y-4 print:md:col-span-2">
          {data.experience && data.experience.length > 0 && (
            <Selection title="Experience" items={data.experience} />
          )}

          {formattedProjects.length > 0 && (
            <Selection
              title="Projects"
              items={formattedProjects.map(p => (
                <div key={p.name} className="mb-3 print:mb-2">
                  <h4 className="font-medium print:text-sm">{p.name}</h4>
                  {p.description && <p className="text-gray-700 print:text-xs">{p.description}</p>}
                  {p.technologies && p.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-1 print:mt-0.5">
                      {p.technologies.map(tech => (
                        <span key={tech} className="text-xs bg-gray-100 px-2 py-1 rounded print:text-2xs print:px-1.5 print:py-0.5">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {p.link && (
                    <a href={p.link} className="text-blue-600 text-sm hover:underline mt-1 inline-block print:text-xs print:mt-0.5">
                      View Project
                    </a>
                  )}
                </div>
              ))}
            />
          )}

          {!loading && !error && sections.length > 0 && (
            <Selection
              title="Additional Sections"
              items={sections.map((section) => (
                <div key={section.id} className="mb-3 p-2 bg-gray-50 rounded border print:mb-2 print:p-1.5">
                  <h4 className="font-medium text-gray-800 capitalize text-sm print:text-xs">
                    {section.sectionType.toLowerCase()}
                  </h4>
                  {section.organization && (
                    <p className="text-sm text-gray-600 mt-1 print:text-xs print:mt-0.5">
                      <span className="font-medium">Organization:</span> {section.organization}
                    </p>
                  )}
                  {section.description && (
                    <p className="text-sm text-gray-700 mt-1 print:text-xs print:mt-0.5">
                      {section.description}
                    </p>
                  )}
                </div>
              ))}
            />
          )}
        </div>

        <div className="space-y-6 print:space-y-4">
          {data.skills && data.skills.length > 0 && (
            <Selection
              title="Skills"
              items={[
                <div key="skills" className="flex flex-wrap gap-1 print:gap-0.5">
                  {data.skills.map(skill => (
                    <span key={skill} className="text-xs bg-gray-100 px-2 py-1 rounded print:text-2xs print:px-1.5 print:py-0.5">
                      {skill}
                    </span>
                  ))}
                </div>
              ]}
            />
          )}

          {data.education && data.education.length > 0 && (
            <Selection title="Education" items={data.education} />
          )}

          {data.certifications && data.certifications.length > 0 && (
            <Selection title="Certifications" items={data.certifications} />
          )}

          {/* Custom Sections */}
          {loading && (
            <div className="p-3 text-center text-gray-500 text-sm print:p-2 print:text-xs">
              Loading additional sections...
            </div>
          )}

          {error && (
            <div className="p-3 text-center text-red-500 text-sm print:p-2 print:text-xs">
              {error}
              <button
                onClick={fetchSections}
                className="ml-2 text-blue-600 hover:underline print:text-blue-800 print:ml-1"
              >
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}