// import { ResumeData } from "@/lib/types/resume.type";

// export default function CreativeTemplate({ data }: { data: ResumeData }) {
//   return (
//     <div className="space-y-6">
//       <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
//         <h1 className="text-2xl sm:text-3xl font-bold">{data.name}</h1>
//         <p className="opacity-90 mt-2">{data.summary}</p>
//         {(data.linkedinLink || data.githubLink) && (
//           <div className="flex justify-center gap-4 mt-4 text-sm">
//             {data.linkedinLink && (
//               <a href={data.linkedinLink} className="text-white hover:underline">
//                 LinkedIn
//               </a>
//             )}
//             {data.githubLink && (
//               <a href={data.githubLink} className="text-white hover:underline">
//                 GitHub
//               </a>
//             )}
//           </div>
//         )}
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
        
//         <div className="space-y-6">
//           {/* Experience Section */}
//           {data.experience && data.experience.length > 0 && (
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//                 Experience
//               </h2>
//               <div className="space-y-3">
//                 {data.experience.map((item, index) => (
//                   <div key={index} className="text-gray-700">
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Projects Section */}
//           {data.projects && data.projects.length > 0 && (
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//                 Projects
//               </h2>
//               <div className="space-y-3">
//                 {data.projects.map((p) => (
//                   <div key={p.name} className="mb-3">
//                     <h4 className="font-medium">{p.name}</h4>
//                     <p className="text-gray-700">{p.description}</p>
//                     {p.link && (
//                       <a
//                         href={p.link}
//                         className="text-purple-600 text-sm hover:underline mt-1 inline-block"
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

//         <div className="space-y-6">
//           {/* Skills Section */}
//           {data.skills && data.skills.length > 0 && (
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//                 Skills
//               </h2>
//               <div className="space-y-3">
//                 <div className="grid grid-cols-2 gap-2">
//                   {data.skills.map((skill) => (
//                     <span key={skill} className="text-sm">
//                       • {skill}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Education Section */}
//           {data.education && data.education.length > 0 && (
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//                 Education
//               </h2>
//               <div className="space-y-3">
//                 {data.education.map((item, index) => (
//                   <div key={index} className="text-gray-700">
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Certifications Section */}
//           {data.certifications && data.certifications.length > 0 && (
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//                 Certifications
//               </h2>
//               <div className="space-y-3">
//                 {data.certifications.map((item, index) => (
//                   <div key={index} className="text-gray-700">
//                     {item}
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






import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
import Image from "next/image";

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

interface CreativeTemplateProps {
  data: ResumeData;
  user?: {
    email: string;
    imageUrl?: string | null;
    name?: string | null;
  };
}

export default function CreativeTemplate({ data, user }: CreativeTemplateProps) {
  // Transform projects to the correct format
  const formattedProjects = transformProjects(data.projects || []);

  return (
    <div className="space-y-6">
      <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
        {/* User info section */}
        {user && (
          <div className="flex flex-col items-center mb-4">
            {user.imageUrl && (
              <Image
                src={user.imageUrl}
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full mb-3 border-2 border-white"
              />
            )}
            <h1 className="text-2xl sm:text-3xl font-bold">
              {user.name || data.name}
            </h1>
            <p className="opacity-90">{user.email}</p>
          </div>
        )}
        
        {/* Fallback if no user provided */}
        {!user && (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold">{data.name}</h1>
            <p className="opacity-90 mt-2">{data.summary}</p>
          </>
        )}
        
        {(data.linkedinLink || data.githubLink) && (
          <div className="flex justify-center gap-4 mt-4 text-sm">
            {data.linkedinLink && (
              <a href={data.linkedinLink} className="text-white hover:underline">
                LinkedIn
              </a>
            )}
            {data.githubLink && (
              <a href={data.githubLink} className="text-white hover:underline">
                GitHub
              </a>
            )}
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
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

          {/* Projects Section */}
          {formattedProjects.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                Projects
              </h2>
              <div className="space-y-3">
                {formattedProjects.map((p) => (
                  <div key={p.name} className="mb-3">
                    <h4 className="font-medium">{p.name}</h4>
                    {p.description && <p className="text-gray-700">{p.description}</p>}
                    {p.link && (
                      <a
                        href={p.link}
                        className="text-purple-600 text-sm hover:underline mt-1 inline-block"
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

        <div className="space-y-6">
          {/* Skills Section */}
          {data.skills && data.skills.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
                Skills
              </h2>
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  {data.skills.map((skill) => (
                    <span key={skill} className="text-sm">
                      • {skill}
                    </span>
                  ))}
                </div>
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
    </div>
  );
}