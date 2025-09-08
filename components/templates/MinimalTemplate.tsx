// 'use client';
// import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
// import Link from "next/link";

// // Helper function to convert scraped project format to ResumeProject format
// const transformProjects = (projects: any[]): ResumeProject[] => {
//   if (!projects || projects.length === 0) return [];
//   // Check if projects are already in the correct format
//   if (projects[0] && projects[0].name !== undefined) {
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

// interface CustomSection {
//   id: string;
//   sectionType: string;
//   organization: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface MinimalTemplateProps {
//   data: ResumeData;
//   user?: {
//     email: string;
//     imageUrl?: string | null;
//     name?: string | null;
//   };
//   sections?: CustomSection[];
// }

// export default function MinimalTemplate({ data, user, sections = [] }: MinimalTemplateProps) {
//   const formattedProjects = transformProjects(data.projects || []);

//   // Parse experience data
//   const parseExperience = () => {
//     if (!data.experience || data.experience.length === 0) return [];

//     return data.experience.map(exp => {
//       // Try to extract title and period using different delimiters
//       const titleMatch = exp.match(/^(.*?)(?:☐|•|$)/);
//       const title = titleMatch ? titleMatch[1].trim() : exp;

//       const periodMatch = exp.match(/☐\s*([^•]*)/);
//       const period = periodMatch ? periodMatch[1].trim() : undefined;

//       const bullets = exp.split('•').slice(1).map(b => b.trim()).filter(b => b);

//       return { title, period, bullets };
//     });
//   };

//   // Parse education data
//   const parseEducation = () => {
//     if (!data.education || data.education.length === 0) return [];

//     return data.education.map(edu => {
//       // Try to extract degree and period using different delimiters
//       const degreeMatch = edu.match(/^(.*?)(?:☐|•|$)/);
//       const degree = degreeMatch ? degreeMatch[1].trim() : edu;

//       const periodMatch = edu.match(/☐\s*([^•]*)/);
//       const period = periodMatch ? periodMatch[1].trim() : undefined;

//       // Extract institution and details
//       const parts = edu.split('•').map(p => p.trim()).filter(p => p);
//       const institution = parts.length > 1 ? parts[1] : '';
//       const details = parts.slice(2);

//       return { degree, institution, details, period };
//     });
//   };

//   const experiences = parseExperience();
//   const educations = parseEducation();

//   return (
//     <div className="w-full max-w-3xl mx-auto p-8 print:p-[30px] print:my-0 print:shadow-none print:border-0 print:bg-white print:text-black bg-white text-gray-800">
//       {/* Header Section */}
//       <div className="text-center mb-6 print:mb-4">
//         <h1 className="text-4xl font-bold uppercase text-blue-900 print:text-3xl mb-2">
//           {user?.name || data.name || "Your Name"}
//         </h1>
        
//         {/* Contact Information */}
//         <div className="text-sm text-gray-700 space-y-1 print:text-xs">
//           {user?.email && <p>{user.email}</p>}
//           <div className="flex justify-center gap-4 mt-1">
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
//         </div>
//       </div>

//       <hr className="border-0 h-1 bg-blue-900 mb-6 print:mb-4" />

//       {/* Two-column layout for better organization */}
//       <div className="grid md:grid-cols-4 gap-6 print:gap-4">
//         {/* Left column for skills and certifications */}
//         <div className="md:col-span-1 space-y-6 print:space-y-4">
//           {/* Skills Section */}
//           {data.skills && data.skills.length > 0 && (
//             <div>
//               <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
//                 Skills
//               </h2>
//               <div className="space-y-2 print:space-y-1">
//                 {data.skills.map((skill, index) => (
//                   <div key={index} className="text-sm text-gray-700 print:text-xs">
//                     • {skill}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Certifications Section */}
//           {data.certifications && data.certifications.length > 0 && (
//             <div>
//               <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
//                 Certifications
//               </h2>
//               <div className="space-y-2 print:space-y-1">
//                 {data.certifications.map((cert, index) => (
//                   <div key={index} className="text-sm text-gray-700 print:text-xs">
//                     • {cert}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Additional Sections */}
//           {sections.length > 0 && (
//             <div>
//               <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
//                 Additional
//               </h2>
//               <div className="space-y-3 print:space-y-2">
//                 {sections.map((section) => (
//                   <div key={section.id}>
//                     <h3 className="font-semibold text-gray-800 text-sm print:text-xs">
//                       {section.sectionType}
//                     </h3>
//                     {section.organization && (
//                       <p className="text-xs text-gray-600 print:text-[10px]">
//                         {section.organization}
//                       </p>
//                     )}
//                     {section.description && (
//                       <p className="text-xs text-gray-600 mt-1 print:text-[10px]">
//                         {section.description}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Right column for experience, education, and projects */}
//         <div className="md:col-span-3 space-y-6 print:space-y-4">
//           {/* Summary Section */}
//           {data.summary && (
//             <div>
//               <h2 className="text-lg font-bold uppercase text-blue-900 mb-2 print:text-base">
//                 Summary
//               </h2>
//               <p className="text-sm text-gray-700 leading-relaxed print:text-xs">
//                 {data.summary}
//               </p>
//               <hr className="bg-blue-900 h-0.5 mt-4 print:mt-3" />
//             </div>
//           )}

//           {/* Experience Section */}
//           {experiences.length > 0 && (
//             <div>
//               <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
//                 Work Experience
//               </h2>
//               <div className="space-y-4 print:space-y-3">
//                 {experiences.map((exp, index) => (
//                   <div key={index} className="text-sm text-gray-700 print:text-xs">
//                     <div className="flex justify-between items-start mb-1">
//                       <h3 className="font-semibold">{exp.title}</h3>
//                       {exp.period && <span className="text-gray-500">{exp.period}</span>}
//                     </div>
//                     {exp.bullets.length > 0 && (
//                       <ul className="list-disc list-inside ml-4 mt-1">
//                         {exp.bullets.map((bullet, i) => (
//                           <li key={i}>{bullet}</li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <hr className="bg-blue-900 h-0.5 mt-4 print:mt-3" />
//             </div>
//           )}

//           {/* Education Section */}
//           {educations.length > 0 && (
//             <div>
//               <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
//                 Education
//               </h2>
//               <div className="space-y-4 print:space-y-3">
//                 {educations.map((edu, index) => (
//                   <div key={index} className="text-sm text-gray-700 print:text-xs">
//                     <div className="flex justify-between items-start mb-1">
//                       <h3 className="font-semibold">{edu.degree}</h3>
//                       {edu.period && <span className="text-gray-500">{edu.period}</span>}
//                     </div>
//                     <p className="mb-1">{edu.institution}</p>
//                     {edu.details.length > 0 && (
//                       <ul className="list-disc list-inside ml-4">
//                         {edu.details.map((detail, i) => (
//                           <li key={i}>{detail}</li>
//                         ))}
//                       </ul>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               <hr className="bg-blue-900 h-0.5 mt-4 print:mt-3" />
//             </div>
//           )}

//           {/* Projects Section */}
//           {formattedProjects.length > 0 && (
//             <div>
//               <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
//                 Projects
//               </h2>
//               <div className="space-y-4 print:space-y-3">
//                 {formattedProjects.map((project, index) => (
//                   <div key={index} className="text-sm text-gray-700 print:text-xs">
//                     <h3 className="font-semibold">{project.name}</h3>
//                     {project.description && (
//                       <p className="mt-1 text-gray-600">{project.description}</p>
//                     )}
//                     {project.link && (
//                       <a 
//                         href={project.link} 
//                         className="text-blue-600 text-xs hover:underline mt-1 inline-block"
//                       >
//                         View Project
//                       </a>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




'use client';
import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
import Link from "next/link";

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

interface PersonalInfo {
  id: string;
  userId: string;
  phone?: string | null;
  imageUrl?: string | null;
  address?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface MinimalTemplateProps {
  data: ResumeData;
  user?: {
    email: string;
    imageUrl?: string | null;
    name?: string | null;
    phone?: string;
    address?: string;
  };
  sections?: CustomSection[];
  personalInfo?: PersonalInfo | null;
}

export default function MinimalTemplate({ 
  data, 
  user, 
  sections = [], 
  personalInfo 
}: MinimalTemplateProps) {
  const formattedProjects = transformProjects(data.projects || []);

  // Use personalInfo data if available, otherwise fall back to user data
  const phone = personalInfo?.phone || user?.phone;
  const address = personalInfo?.address || user?.address;
  const profileImage = personalInfo?.imageUrl || user?.imageUrl;

  // Parse experience data
  const parseExperience = () => {
    if (!data.experience || data.experience.length === 0) return [];

    return data.experience.map(exp => {
      // Try to extract title and period using different delimiters
      const titleMatch = exp.match(/^(.*?)(?:☐|•|$)/);
      const title = titleMatch ? titleMatch[1].trim() : exp;

      const periodMatch = exp.match(/☐\s*([^•]*)/);
      const period = periodMatch ? periodMatch[1].trim() : undefined;

      const bullets = exp.split('•').slice(1).map(b => b.trim()).filter(b => b);

      return { title, period, bullets };
    });
  };

  // Parse education data
  const parseEducation = () => {
    if (!data.education || data.education.length === 0) return [];

    return data.education.map(edu => {
      // Try to extract degree and period using different delimiters
      const degreeMatch = edu.match(/^(.*?)(?:☐|•|$)/);
      const degree = degreeMatch ? degreeMatch[1].trim() : edu;

      const periodMatch = edu.match(/☐\s*([^•]*)/);
      const period = periodMatch ? periodMatch[1].trim() : undefined;

      // Extract institution and details
      const parts = edu.split('•').map(p => p.trim()).filter(p => p);
      const institution = parts.length > 1 ? parts[1] : '';
      const details = parts.slice(2);

      return { degree, institution, details, period };
    });
  };

  const experiences = parseExperience();
  const educations = parseEducation();

  return (
    <div className="w-full max-w-3xl mx-auto p-8 print:p-[30px] print:my-0 print:shadow-none print:border-0 print:bg-white print:text-black bg-white text-gray-800">
      {/* Header Section */}
      <div className="text-center mb-6 print:mb-4">
        <h1 className="text-4xl font-bold uppercase text-blue-900 print:text-3xl mb-2">
          {user?.name || data.name || "Your Name"}
        </h1>
        
        {/* Contact Information */}
        <div className="text-sm text-gray-700 space-y-1 print:text-xs">
          {user?.email && <p>{user.email}</p>}
          
          {/* Add phone and address information */}
          {(phone || address) && (
            <div className="flex flex-col items-center mt-1">
              {phone && <p>{phone}</p>}
              {address && <p>{address}</p>}
            </div>
          )}
          
          <div className="flex justify-center gap-4 mt-1">
            {data.linkedinLink && (
              <a href={data.linkedinLink} className="text-blue-600 hover:underline print:text-black print:no-underline">
                LinkedIn
              </a>
            )}
            {data.githubLink && (
              <a href={data.githubLink} className="text-gray-600 hover:underline print:text-black print:no-underline">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <hr className="border-0 h-1 bg-blue-900 mb-6 print:mb-4" />

      {/* Two-column layout for better organization */}
      <div className="grid md:grid-cols-4 gap-6 print:gap-4">
        {/* Left column for skills and certifications */}
        <div className="md:col-span-1 space-y-6 print:space-y-4">
          {/* Skills Section */}
          {data.skills && data.skills.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
                Skills
              </h2>
              <div className="space-y-2 print:space-y-1">
                {data.skills.map((skill, index) => (
                  <div key={index} className="text-sm text-gray-700 print:text-xs">
                    • {skill}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Section */}
          {data.certifications && data.certifications.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
                Certifications
              </h2>
              <div className="space-y-2 print:space-y-1">
                {data.certifications.map((cert, index) => (
                  <div key={index} className="text-sm text-gray-700 print:text-xs">
                    • {cert}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Sections */}
          {sections.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
                Additional
              </h2>
              <div className="space-y-3 print:space-y-2">
                {sections.map((section) => (
                  <div key={section.id}>
                    <h3 className="font-semibold text-gray-800 text-sm print:text-xs">
                      {section.sectionType}
                    </h3>
                    {section.organization && (
                      <p className="text-xs text-gray-600 print:text-[10px]">
                        {section.organization}
                      </p>
                    )}
                    {section.description && (
                      <p className="text-xs text-gray-600 mt-1 print:text-[10px]">
                        {section.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right column for experience, education, and projects */}
        <div className="md:col-span-3 space-y-6 print:space-y-4">
          {/* Summary Section */}
          {data.summary && (
            <div>
              <h2 className="text-lg font-bold uppercase text-blue-900 mb-2 print:text-base">
                Summary
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed print:text-xs">
                {data.summary}
              </p>
              <hr className="bg-blue-900 h-0.5 mt-4 print:mt-3" />
            </div>
          )}

          {/* Experience Section */}
          {experiences.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
                Work Experience
              </h2>
              <div className="space-y-4 print:space-y-3">
                {experiences.map((exp, index) => (
                  <div key={index} className="text-sm text-gray-700 print:text-xs">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold">{exp.title}</h3>
                      {exp.period && <span className="text-gray-500">{exp.period}</span>}
                    </div>
                    {exp.bullets.length > 0 && (
                      <ul className="list-disc list-inside ml-4 mt-1">
                        {exp.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <hr className="bg-blue-900 h-0.5 mt-4 print:mt-3" />
            </div>
          )}

          {/* Education Section */}
          {educations.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
                Education
              </h2>
              <div className="space-y-4 print:space-y-3">
                {educations.map((edu, index) => (
                  <div key={index} className="text-sm text-gray-700 print:text-xs">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-semibold">{edu.degree}</h3>
                      {edu.period && <span className="text-gray-500">{edu.period}</span>}
                    </div>
                    <p className="mb-1">{edu.institution}</p>
                    {edu.details.length > 0 && (
                      <ul className="list-disc list-inside ml-4">
                        {edu.details.map((detail, i) => (
                          <li key={i}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
              <hr className="bg-blue-900 h-0.5 mt-4 print:mt-3" />
            </div>
          )}

          {/* Projects Section */}
          {formattedProjects.length > 0 && (
            <div>
              <h2 className="text-lg font-bold uppercase text-blue-900 mb-3 print:text-base">
                Projects
              </h2>
              <div className="space-y-4 print:space-y-3">
                {formattedProjects.map((project, index) => (
                  <div key={index} className="text-sm text-gray-700 print:text-xs">
                    <h3 className="font-semibold">{project.name}</h3>
                    {project.description && (
                      <p className="mt-1 text-gray-600">{project.description}</p>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        className="text-blue-600 text-xs hover:underline mt-1 inline-block print:text-black print:no-underline"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}