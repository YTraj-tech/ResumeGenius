// import { ResumeData } from "@/lib/types/resume.type";

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






import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
import Image from "next/image";

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
    // You can extract other fields if available
    technologies: [], // You might need to extract these from the data
    link: undefined // You might need to extract this from the data
  }));
};

interface MinimalTemplateProps {
  data: ResumeData;
  user?: {
    email: string;
    imageUrl?: string | null;
    name?: string | null;
  };
}

export default function MinimalTemplate({ data, user }: MinimalTemplateProps) {
  // Transform projects to the correct format
  const formattedProjects = transformProjects(data.projects || []);

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        {/* User info section */}
        {user && (
          <div className="flex items-center gap-4 mb-4">
            {user.imageUrl && (
              <Image
                src={user.imageUrl}
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full"
              />
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {user.name || data.name}
              </h1>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
        )}
        
        {/* Fallback if no user provided */}
        {!user && (
          <>
            <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
            <p className="text-gray-600 mt-1">{data.summary}</p>
          </>
        )}
        
        {(data.linkedinLink || data.githubLink) && (
          <div className="flex gap-4 mt-3 text-sm">
            {data.linkedinLink && (
              <a href={data.linkedinLink} className="text-blue-600 hover:underline">
                LinkedIn
              </a>
            )}
            {data.githubLink && (
              <a href={data.githubLink} className="text-gray-600 hover:underline">
                GitHub
              </a>
            )}
          </div>
        )}
      </div>

      <div className="space-y-6">
        {/* Experience Section */}
        {data.experience && data.experience.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Experience
            </h2>
            <div className="space-y-3">
              {data.experience.map((item, index) => (
                <div key={index} className="text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education Section */}
        {data.education && data.education.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {data.education.map((item, index) => (
                <div key={index} className="text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {data.skills && data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Skills
            </h2>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-1">
                {data.skills.map((skill) => (
                  <span key={skill} className="text-sm">
                    • {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {formattedProjects.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Projects
            </h2>
            <div className="space-y-4">
              {formattedProjects.map((project, index) => (
                <div key={index} className="text-gray-700">
                  <h3 className="font-medium text-gray-900">{project.name}</h3>
                  {project.description && (
                    <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                  )}
                  {project.technologies && project.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="text-xs bg-gray-100 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  {project.link && (
                    <a 
                      href={project.link} 
                      className="text-xs text-blue-600 hover:underline mt-2 inline-block"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Section */}
        {data.certifications && data.certifications.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Certifications
            </h2>
            <div className="space-y-3">
              {data.certifications.map((item, index) => (
                <div key={index} className="text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}