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






// import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
// import Image from "next/image";

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

// interface CreativeTemplateProps {
//   data: ResumeData;
//   user?: {
//     email: string;
//     imageUrl?: string | null;
//     name?: string | null;
//   };
// }

// export default function CreativeTemplate({ data, user }: CreativeTemplateProps) {
//   // Transform projects to the correct format
//   const formattedProjects = transformProjects(data.projects || []);

//   return (
//     <div className="space-y-6">
//       <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
//         {/* User info section */}
//         {user && (
//           <div className="flex flex-col items-center mb-4">
//             {user.imageUrl && (
//               <Image
//                 src={user.imageUrl}
//                 alt="Profile"
//                 width={80}
//                 height={80}
//                 className="rounded-full mb-3 border-2 border-white"
//               />
//             )}
//             <h1 className="text-2xl sm:text-3xl font-bold">
//               {user.name || data.name}
//             </h1>
//             <p className="opacity-90">{user.email}</p>
//           </div>
//         )}

//         {/* Fallback if no user provided */}
//         {!user && (
//           <>
//             <h1 className="text-2xl sm:text-3xl font-bold">{data.name}</h1>
//             <p className="opacity-90 mt-2">{data.summary}</p>
//           </>
//         )}

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
//           {formattedProjects.length > 0 && (
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//                 Projects
//               </h2>
//               <div className="space-y-3">
//                 {formattedProjects.map((p) => (
//                   <div key={p.name} className="mb-3">
//                     <h4 className="font-medium">{p.name}</h4>
//                     {p.description && <p className="text-gray-700">{p.description}</p>}
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



// 'use client';

// import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import { getSections } from '@/app/actions/section';

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

// interface CustomSection {
//   id: string;
//   sectionType: string;
//   organization: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface CreativeTemplateProps {
//   data: ResumeData;
//   user?: {
//     email: string;
//     imageUrl?: string | null;
//     name?: string | null;
//   };
// }

// export default function CreativeTemplate({ data, user }: CreativeTemplateProps) {
//   const { isLoaded: isUserLoaded } = useUser();
//   const formattedProjects = transformProjects(data.projects || []);
//   const [sections, setSections] = useState<CustomSection[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch sections using Server Action
//   const fetchSections = async () => {
//     try {
//       setLoading(true);
//       const result = await getSections();

//       if (result.success) {
//         setSections(result.sections);
//         setError(null);
//       } else {
//         setError(result.error || 'Failed to load sections');
//       }
//     } catch (err) {
//       console.error('Error fetching sections:', err);
//       setError('An error occurred while fetching sections');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (isUserLoaded) {
//       fetchSections();
//     }
//   }, [isUserLoaded]);

//   return (
//     <div className="space-y-6">
//       <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
//         {/* User info section */}
//         {user && (
//           <div className="flex flex-col items-center mb-4">
//             {user.imageUrl && (
//               <Image
//                 src={user.imageUrl}
//                 alt="Profile"
//                 width={80}
//                 height={80}
//                 className="rounded-full mb-3 border-2 border-white"
//               />
//             )}
//             <h1 className="text-2xl sm:text-3xl font-bold">
//               {user.name || data.name}
//             </h1>
//             <p className="opacity-90">{user.email}</p>
//           </div>
//         )}

//         {/* Fallback if no user provided */}
//         {!user && (
//           <>
//             <h1 className="text-2xl sm:text-3xl font-bold">{data.name}</h1>
//             <p className="opacity-90 mt-2">{data.summary}</p>
//           </>
//         )}

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

//         {/* Refresh button */}
//         <button
//           onClick={fetchSections}
//           disabled={loading}
//           className="mt-4 px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading ? 'Refreshing...' : 'Refresh Sections'}
//         </button>
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
//           {formattedProjects.length > 0 && (
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//                 Projects
//               </h2>
//               <div className="space-y-3">
//                 {formattedProjects.map((p) => (
//                   <div key={p.name} className="mb-3">
//                     <h4 className="font-medium">{p.name}</h4>
//                     {p.description && <p className="text-gray-700">{p.description}</p>}
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

//           {/* Custom Sections */}
//           {loading && (
//             <div className="p-4 text-center text-gray-500">
//               Loading additional sections...
//             </div>
//           )}

//           {error && (
//             <div className="p-4 text-center text-red-500">
//               {error}
//               <button 
//                 onClick={fetchSections}
//                 className="ml-2 text-blue-600 hover:underline"
//               >
//                 Try again
//               </button>
//             </div>
//           )}

//           {!loading && !error && sections.length > 0 && (
//             <div>
//               <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-1">
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   Additional Sections
//                 </h2>
//                 <span className="text-sm text-gray-500">
//                   {sections.length} section(s)
//                 </span>
//               </div>
//               <div className="space-y-4">
//                 {sections.map((section) => (
//                   <div key={section.id} className="p-3 bg-gray-50 rounded-lg border">
//                     <h3 className="font-medium text-gray-800 capitalize">
//                       {section.sectionType.toLowerCase()}
//                     </h3>
//                     {section.organization && (
//                       <p className="text-sm text-gray-600 mt-1">
//                         <span className="font-medium">Organization:</span> {section.organization}
//                       </p>
//                     )}
//                     {section.description && (
//                       <p className="text-sm text-gray-700 mt-2">
//                         {section.description}
//                       </p>
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




// 'use client';

// import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
// import Image from "next/image";
// import {CustomSection , CreativeTemplateProps} from "@/lib/types/resume.type"
// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import { getSections } from '@/app/actions/section';
// import Link from "next/link";

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



// export default function CreativeTemplate({ data, user }: CreativeTemplateProps) {
//   const { isLoaded: isUserLoaded } = useUser();
//   const formattedProjects = transformProjects(data.projects || []);
//   const [sections, setSections] = useState<CustomSection[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch sections using Server Action
//   const fetchSections = async () => {
//     try {
//       setLoading(true);
//       const result = await getSections();

//       if (result.success) {
//         setSections(result.sections);
//         setError(null);
//       } else {
//         setError(result.error || 'Failed to load sections');
//       }
//     } catch (err) {
//       console.error('Error fetching sections:', err);
//       setError('An error occurred while fetching sections');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (isUserLoaded) {
//       fetchSections();
//     }
//   }, [isUserLoaded]);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg">
//       <div className="flex flex-col md:flex-row items-start gap-8">
//         {/* Left Column - Personal Info and Skills */}
//         <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg">
//           <div className="text-center mb-6">
//             {user && user.imageUrl && (
//               <Image
//                 src={user.imageUrl}
//                 alt="Profile"
//                 width={150}
//                 height={150}
//                 className="rounded-full mx-auto border-4 border-green-600 mb-4"
//               />
//             )}
//             <h1 className="text-2xl font-bold text-gray-800">{user?.name || data.name}</h1>
//             <div className="flex flex-col items-center gap-2 mt-4 text-sm text-gray-600">
//               {user?.email && <span>{user.email}</span>}
//               {data.linkedinLink && <Link href={data.linkedinLink} className="text-green-600 hover:underline">LinkedIn</Link>}
//               {data.githubLink && <Link href={data.githubLink} className="text-green-600 hover:underline">GitHub</Link>}
//             </div>
//           </div>

//           {data.education && data.education.length > 0 && (
//             <div className="mt-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">Education</h2>
//               <div className="text-gray-700 space-y-2">
//                 {data.education.map((edu, index) => (
//                   <p key={index} className="text-sm">{edu}</p>
//                 ))}
//               </div>
//             </div>
//           )}

//           {data.skills && data.skills.length > 0 && (
//             <div className="mt-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">Skills</h2>
//               <div className="space-y-4">
//                 {data.skills.map((skill, index) => (
//                   <div key={index}>
//                     <p className="text-gray-700 text-sm">{skill}</p>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                       <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {data.certifications && data.certifications.length > 0 && (
//             <div className="mt-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">Certifications</h2>
//               <div className="space-y-4">
//                 {data.certifications.map((cert, index) => (
//                   <div key={index}>
//                     <p className="text-gray-700 text-sm">{cert}</p>
//                     <div className="w-full bg-gray-200 rounded-full h-2.5">
//                       <div className="bg-brown-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Right Column - Profile and Experience */}
//         <div className="w-full md:w-2/3 p-6">
//           {data.summary && (
//             <div className="mb-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">Profile</h2>
//               <p className="text-gray-700 text-sm">{data.summary}</p>
//             </div>
//           )}

//           {data.experience && data.experience.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">Experience</h2>
//               <ul className="list-disc list-inside text-gray-700 space-y-4">
//                 {data.experience.map((exp, index) => (
//                   <li key={index} className="text-sm">
//                     {exp}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {formattedProjects.length > 0 && (
//             <div className="mb-6">
//               <h2 className="text-lg font-semibold text-gray-800 mb-2">Projects</h2>
//               <div className="space-y-4">
//                 {formattedProjects.map((project) => (
//                   <div key={project.name} className="text-sm">
//                     <h3 className="font-medium text-gray-700">{project.name}</h3>
//                     {project.description && <p className="text-gray-600 mt-1">{project.description}</p>}
//                     {project.link && <Link href={project.link} className="text-green-600 hover:underline mt-1 inline-block">View Project</Link>}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Custom Sections */}
//           {loading && (
//             <div className="p-4 text-center text-gray-500">
//               Loading additional sections...
//             </div>
//           )}

//           {error && (
//             <div className="p-4 text-center text-red-500">
//               {error}
//               <button 
//                 onClick={fetchSections}
//                 className="ml-2 text-blue-600 hover:underline"
//               >
//                 Try again
//               </button>
//             </div>
//           )}

//           {!loading && !error && sections.length > 0 && (
//             <div>
//               <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-1">
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   Additional Sections
//                 </h2>
//                 <span className="text-sm text-gray-500">
//                   {sections.length} section(s)
//                 </span>
//               </div>
//               <div className="space-y-4">
//                 {sections.map((section) => (
//                   <div key={section.id} className="p-3 bg-gray-50 rounded-lg border">
//                     <h3 className="font-medium text-gray-800 capitalize">
//                       {section.sectionType.toLowerCase()}
//                     </h3>
//                     {section.organization && (
//                       <p className="text-sm text-gray-600 mt-1">
//                         <span className="font-medium">Organization:</span> {section.organization}
//                       </p>
//                     )}
//                     {section.description && (
//                       <p className="text-sm text-gray-700 mt-2">
//                         {section.description}
//                       </p>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Refresh button */}
//       <button
//         onClick={fetchSections}
//         disabled={loading}
//         className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto"
//       >
//         {loading ? 'Refreshing...' : 'Refresh Sections'}
//       </button>
//     </div>
//   );
// }










// 'use client';

// import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import { getSections } from '@/app/actions/section';

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

// interface CustomSection {
//   id: string;
//   sectionType: string;
//   organization: string;
//   description: string;
//   createdAt: string;
//   updatedAt: string;
// }

// interface CreativeTemplateProps {
//   data: ResumeData;
//   user?: {
//     email: string;
//     imageUrl?: string | null;
//     name?: string | null;
//   };
// }

// export default function CreativeTemplate({ data, user }: CreativeTemplateProps) {
//   const { isLoaded: isUserLoaded } = useUser();
//   const formattedProjects = transformProjects(data.projects || []);
//   const [sections, setSections] = useState<CustomSection[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   // Fetch sections using Server Action
//   const fetchSections = async () => {
//     try {
//       setLoading(true);
//       const result = await getSections();

//       if (result.success) {
//         setSections(result.sections);
//         setError(null);
//       } else {
//         setError(result.error || 'Failed to load sections');
//       }
//     } catch (err) {
//       console.error('Error fetching sections:', err);
//       setError('An error occurred while fetching sections');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (isUserLoaded) {
//       fetchSections();
//     }
//   }, [isUserLoaded]);

//   return (
//     <div className="space-y-6">
//       <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
//         {/* User info section */}
//         {user && (
//           <div className="flex flex-col items-center mb-4">
//             {user.imageUrl && (
//               <Image
//                 src={user.imageUrl}
//                 alt="Profile"
//                 width={80}
//                 height={80}
//                 className="rounded-full mb-3 border-2 border-white"
//               />
//             )}
//             <h1 className="text-2xl sm:text-3xl font-bold">
//               {user.name || data.name}
//             </h1>
//             <p className="opacity-90">{user.email}</p>
//           </div>
//         )}

//         {/* Fallback if no user provided */}
//         {!user && (
//           <>
//             <h1 className="text-2xl sm:text-3xl font-bold">{data.name}</h1>
//             <p className="opacity-90 mt-2">{data.summary}</p>
//           </>
//         )}

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

//         {/* Refresh button */}
//         <button
//           onClick={fetchSections}
//           disabled={loading}
//           className="mt-4 px-4 py-2 bg-white text-purple-600 rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           {loading ? 'Refreshing...' : 'Refresh Sections'}
//         </button>
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
//           {formattedProjects.length > 0 && (
//             <div>
//               <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
//                 Projects
//               </h2>
//               <div className="space-y-3">
//                 {formattedProjects.map((p) => (
//                   <div key={p.name} className="mb-3">
//                     <h4 className="font-medium">{p.name}</h4>
//                     {p.description && <p className="text-gray-700">{p.description}</p>}
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

//           {/* Custom Sections */}
//           {loading && (
//             <div className="p-4 text-center text-gray-500">
//               Loading additional sections...
//             </div>
//           )}

//           {error && (
//             <div className="p-4 text-center text-red-500">
//               {error}
//               <button
//                 onClick={fetchSections}
//                 className="ml-2 text-blue-600 hover:underline"
//               >
//                 Try again
//               </button>
//             </div>
//           )}

//           {!loading && !error && sections.length > 0 && (
//             <div>
//               <div className="flex justify-between items-center mb-3 border-b border-gray-200 pb-1">
//                 <h2 className="text-lg font-semibold text-gray-900">
//                   Additional Sections
//                 </h2>
//                 <span className="text-sm text-gray-500">
//                   {sections.length} section(s)
//                 </span>
//               </div>
//               <div className="space-y-4">
//                 {sections.map((section) => (
//                   <div key={section.id} className="p-3 bg-gray-50 rounded-lg border">
//                     <h3 className="font-medium text-gray-800 capitalize">
//                       {section.sectionType.toLowerCase()}
//                     </h3>
//                     {section.organization && (
//                       <p className="text-sm text-gray-600 mt-1">
//                         <span className="font-medium">Organization:</span> {section.organization}
//                       </p>
//                     )}
//                     {section.description && (
//                       <p className="text-sm text-gray-700 mt-2">
//                         {section.description}
//                       </p>
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
import Image from "next/image";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { getSections } from '@/app/actions/section';

// Icons for various sections
import {
  FiBriefcase,
  FiBook,
  FiAward,
  FiCode,
  FiLink,
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiUser,
  FiStar,
  FiBookOpen,
  FiCalendar,
  FiGlobe
} from "react-icons/fi";

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

interface CreativeTemplateProps {
  data: ResumeData;
  user?: {
    email: string;
    imageUrl?: string | null;
    name?: string | null;
  };
}

export default function CreativeTemplate({ data, user }: CreativeTemplateProps) {
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
    <div className="max-w-5xl mx-auto my-4 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 print:my-0 print:shadow-none print:border-0">
      {/* Header Section with Creative Design */}
      <div className="relative mb-8 print:mb-6">
        <div className="absolute -inset-3 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl -z-10 print:hidden"></div>

        <div className="flex flex-col md:flex-row items-center gap-5 p-5">
          {user?.imageUrl && (
            <div className="relative">
              <Image
                src={user.imageUrl}
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full border-4 border-white shadow-lg print:shadow-none"
              />
              <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1.5 print:hidden">
                <FiUser className="text-white text-xs" />
              </div>
            </div>
          )}

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1.5">
              {user?.name || data.name}
            </h1>
            <p className="text-gray-600 flex items-center justify-center md:justify-start gap-1.5 mb-2 text-sm">
              <FiMail className="text-blue-600" />
              {user?.email}
            </p>
            {data.summary && (
              <p className="text-gray-700 bg-white p-3 rounded-lg shadow-sm border border-gray-100 text-sm print:border-0 print:shadow-none">
                {data.summary}
              </p>
            )}

            {(data.linkedinLink || data.githubLink) && (
              <div className="flex gap-3 mt-3 justify-center md:justify-start">
                {data.linkedinLink && (
                  <a
                    href={data.linkedinLink}
                    className="flex items-center gap-1 text-blue-700 hover:text-blue-900 transition-colors text-sm print:text-blue-900"
                  >
                    <FiLinkedin className="text-base" />
                    <span>LinkedIn</span>
                  </a>
                )}
                {data.githubLink && (
                  <a
                    href={data.githubLink}
                    className="flex items-center gap-1 text-gray-700 hover:text-gray-900 transition-colors text-sm print:text-gray-900"
                  >
                    <FiGithub className="text-base" />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-3 gap-6 print:gap-4">
        {/* Left Column - Experience and Projects */}
        <div className="md:col-span-2 space-y-6 print:space-y-4">
          {/* Experience Section */}
          {data.experience && data.experience.length > 0 && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl shadow-sm print:shadow-none print:bg-white print:border print:border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <FiBriefcase className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Work Experience</h2>
              </div>

              <div className="space-y-4">
                {data.experience.map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-xs border-l-4 border-blue-500 print:shadow-none">
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects Section */}
          {formattedProjects.length > 0 && (
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl shadow-sm print:shadow-none print:bg-white print:border print:border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-purple-600 rounded-lg">
                  <FiCode className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Projects</h2>
              </div>

              <div className="space-y-4">
                {formattedProjects.map((p, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 print:shadow-none">
                    <h4 className="font-semibold text-gray-800 flex items-center gap-1.5 text-sm">
                      <FiStar className="text-yellow-500 text-xs" />
                      {p.name}
                    </h4>
                    {p.description && (
                      <p className="text-gray-600 text-xs mt-1.5">{p.description}</p>
                    )}
                    {p.link && (
                      <a
                        href={p.link}
                        className="flex items-center gap-1 text-blue-600 text-xs mt-2 hover:underline print:text-blue-900"
                      >
                        <FiLink className="text-xs" />
                        View Project
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Additional Sections */}
          {!loading && !error && sections.length > 0 && (
            <div className="bg-gradient-to-br from-teal-50 to-green-50 p-5 rounded-xl shadow-sm print:shadow-none print:bg-white print:border print:border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-teal-600 rounded-lg">
                  <FiBookOpen className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Additional Activities</h2>
              </div>

              <div className="space-y-9">
                {sections.map((section) => (
                  <div key={section.id} className="bg-white p-3 rounded-lg shadow-xs border border-gray-100 print:shadow-none">
                    <h4 className="font-medium text-gray-800 capitalize flex items-center gap-1.5 text-sm">
                      <FiMapPin className="text-teal-500 text-xs" />
                      {section.sectionType.toLowerCase()}
                    </h4>
                    {section.organization && (
                      <p className="text-xs text-gray-600 mt-1.5">
                        <span className="font-medium">Organization:</span> {section.organization}
                      </p>
                    )}
                    {section.description && (
                      <p className="text-xs text-gray-700 mt-1.5">
                        {section.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Skills, Education, Certifications */}
        <div className="space-y-6 print:space-y-4">
          {/* Skills Section */}
          {data.skills && data.skills.length > 0 && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl shadow-sm print:shadow-none print:bg-white print:border print:border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-amber-600 rounded-lg">
                  <FiAward className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Skills & Expertise</h2>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-white text-gray-700 rounded-full text-xs shadow-xs border border-gray-100 print:shadow-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Education Section */}
          {data.education && data.education.length > 0 && (
            <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-5 rounded-xl shadow-sm print:shadow-none print:bg-white print:border print:border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-600 rounded-lg">
                  <FiBook className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Education</h2>
              </div>

              <div className="space-y-3">
                {data.education.map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-xs border-l-4 border-indigo-500 print:shadow-none">
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certifications Section */}
          {data.certifications && data.certifications.length > 0 && (
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-5 rounded-xl shadow-sm print:shadow-none print:bg-white print:border print:border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-rose-600 rounded-lg">
                  <FiAward className="text-white text-lg" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">Certifications</h2>
              </div>

              <div className="space-y-3">
                {data.certifications.map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg shadow-xs border-l-4 border-rose-500 print:shadow-none">
                    <p className="text-gray-700 text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}



          {/* Loading and Error States */}
          {loading && (
            <div className="p-3 text-center text-gray-500 bg-gray-50 rounded-lg text-xs">
              <div className="flex items-center justify-center gap-1.5">
                <div className="h-3 w-3 bg-blue-400 rounded-full animate-pulse"></div>
                <span>Loading additional sections...</span>
              </div>
            </div>
          )}

          {error && (
            <div className="p-3 text-center text-red-500 bg-red-50 rounded-lg text-xs">
              <p>{error}</p>
              <button
                onClick={fetchSections}
                className="mt-1.5 px-3 py-1 bg-red-500 text-white rounded text-xs hover:bg-red-600 transition-colors print:hidden"
              >
                Try again
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer - Only show in digital view */}
      <div className="mt-8 pt-5 border-t border-gray-200 text-center text-gray-500 text-xs print:hidden">
        <p>Generated with Resume Builder • {new Date().getFullYear()}</p>
      </div>
    </div>
  );
}