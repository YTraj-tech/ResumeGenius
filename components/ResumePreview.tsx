"use client";
import { ResumeProject } from "@/lib/types/resume.type";


export type ResumeData = {
  id: string; // Keep as string to match Prisma
  name: string;
  summary?: string;
  skills: string[];
  certifications: string[];
  projects: ResumeProject[]; // This is what we want
  experience: string[];
  education: string[];
  githubLink?: string | null;
  linkedinLink?: string | null;
  templateType?: string | null;
  updatedAt?: string;
  // Add other fields that might come from Prisma
  userId?: string;
  createdAt?: Date | string;
};

interface ResumePreviewProps {
  resumeData: ResumeData;
  templateId: string;
}

export function ResumePreview({ resumeData, templateId }: ResumePreviewProps) {
  const handleDownload = () => {
    console.log("Downloading resume...");
  };

  const handleEdit = () => {
    console.log("Editing resume...");
  };

  const handleShare = () => {
    console.log("Sharing resume...");
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header with actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Your Resume</h1>
          <p className="text-gray-600 capitalize">Template: {templateId.replace('-', ' ')}</p>
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
        {templateId === "technical" && <TechnicalTemplate data={resumeData} />}
        {templateId === "creative" && <CreativeTemplate data={resumeData} />}
        {templateId === "executive" && <ExecutiveTemplate data={resumeData} />}
        {templateId === "minimal" && <MinimalTemplate data={resumeData} />}
        {templateId === "modern" && <ModernTemplate data={resumeData} />}
        {templateId === "classic" && <ClassicTemplate data={resumeData} />}
        {templateId === undefined && <TechnicalTemplate data={resumeData} />}
      </div>
    </div>
  );
}

// Template Components
function TechnicalTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-blue-500 pl-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{data.name}</h1>
        <p className="text-gray-600 mt-2">{data.summary}</p>
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
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Section title="Experience" items={data.experience} />
          <Section 
            title="Projects" 
            items={data.projects.map(p => (
              <div key={p.name} className="mb-3">
                <h4 className="font-medium">{p.name}</h4>
                <p className="text-gray-700">{p.description}</p>
                {p.technologies && (
                  <div className="flex flex-wrap gap-1 mt-1">
                    {p.technologies.map(tech => (
                      <span key={tech} className="text-xs bg-gray-100 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {p.link && (
                  <a href={p.link} className="text-blue-600 text-sm hover:underline mt-1 inline-block">
                    View Project
                  </a>
                )}
              </div>
            ))} 
          />
        </div>
        
        <div className="space-y-6">
          <Section 
            title="Skills" 
            items={[
              <div key="skills" className="flex flex-wrap gap-1">
                {data.skills.map(skill => (
                  <span key={skill} className="text-xs bg-gray-100 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>
            ]} 
          />
          <Section title="Education" items={data.education} />
          <Section title="Certifications" items={data.certifications} />
        </div>
      </div>
    </div>
  );
}

function CreativeTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="space-y-6">
      <div className="text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
        <h1 className="text-2xl sm:text-3xl font-bold">{data.name}</h1>
        <p className="opacity-90 mt-2">{data.summary}</p>
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
          <Section title="Experience" items={data.experience} />
          <Section 
            title="Projects" 
            items={data.projects.map(p => (
              <div key={p.name} className="mb-3">
                <h4 className="font-medium">{p.name}</h4>
                <p className="text-gray-700">{p.description}</p>
                {p.link && (
                  <a href={p.link} className="text-purple-600 text-sm hover:underline mt-1 inline-block">
                    View Project
                  </a>
                )}
              </div>
            ))} 
          />
        </div>
        
        <div className="space-y-6">
          <Section 
            title="Skills" 
            items={[
              <div key="skills" className="grid grid-cols-2 gap-2">
                {data.skills.map(skill => (
                  <span key={skill} className="text-sm">
                    • {skill}
                  </span>
                ))}
              </div>
            ]} 
          />
          <Section title="Education" items={data.education} />
          <Section title="Certifications" items={data.certifications} />
        </div>
      </div>
    </div>
  );
}

function ExecutiveTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="space-y-8">
      <div className="text-center border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
        <p className="text-gray-600 mt-3">{data.summary}</p>
        {(data.linkedinLink || data.githubLink) && (
          <div className="flex justify-center gap-4 mt-4 text-sm">
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
      
      <div className="space-y-8">
        <Section title="Professional Experience" items={data.experience} />
        <div className="grid md:grid-cols-2 gap-8">
          <Section title="Education" items={data.education} />
          <Section 
            title="Core Competencies" 
            items={[
              <ul key="skills" className="grid grid-cols-2 gap-x-4 gap-y-2">
                {data.skills.map(skill => (
                  <li key={skill} className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            ]} 
          />
        </div>
        <Section title="Certifications & Achievements" items={data.certifications} />
        {data.projects.length > 0 && (
          <Section 
            title="Key Projects" 
            items={data.projects.map(p => (
              <div key={p.name} className="mb-3">
                <h4 className="font-medium">{p.name}</h4>
                <p className="text-gray-700">{p.description}</p>
              </div>
            ))} 
          />
        )}
      </div>
    </div>
  );
}

function MinimalTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">{data.name}</h1>
        <p className="text-gray-600 mt-1">{data.summary}</p>
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
        <Section title="Experience" items={data.experience} />
        <Section title="Education" items={data.education} />
        <Section 
          title="Skills" 
          items={[
            <div key="skills" className="flex flex-wrap gap-1">
              {data.skills.map(skill => (
                <span key={skill} className="text-sm">
                  • {skill}
                </span>
              ))}
            </div>
          ]} 
        />
        {data.projects.length > 0 && (
          <Section 
            title="Projects" 
            items={data.projects.map(p => `${p.name}: ${p.description}`)} 
          />
        )}
        {data.certifications.length > 0 && (
          <Section title="Certifications" items={data.certifications} />
        )}
      </div>
    </div>
  );
}

function ModernTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-500 to-blue-600 text-white p-6 rounded-xl">
        <h1 className="text-2xl sm:text-3xl font-bold">{data.name}</h1>
        <p className="opacity-90 mt-2">{data.summary}</p>
        {(data.linkedinLink || data.githubLink) && (
          <div className="flex gap-4 mt-4 text-sm">
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
      
      <div className="grid gap-6">
        <Section title="Experience" items={data.experience} />
        <div className="grid md:grid-cols-3 gap-6">
          <Section 
            title="Skills" 
            items={[
              <div key="skills" className="space-y-1">
                {data.skills.map(skill => (
                  <div key={skill} className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            ]} 
          />
          <Section title="Education" items={data.education} />
          <Section title="Certifications" items={data.certifications} />
        </div>
        {data.projects.length > 0 && (
          <Section 
            title="Projects" 
            items={data.projects.map(p => (
              <div key={p.name} className="mb-3">
                <h4 className="font-medium">{p.name}</h4>
                <p className="text-gray-700">{p.description}</p>
                {p.link && (
                  <a href={p.link} className="text-blue-600 text-sm hover:underline mt-1 inline-block">
                    View Project
                  </a>
                )}
              </div>
            ))} 
          />
        )}
      </div>
    </div>
  );
}

function ClassicTemplate({ data }: { data: ResumeData }) {
  return (
    <div className="space-y-6">
      <div className="text-center border-b-2 border-gray-300 pb-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase">{data.name}</h1>
        <p className="text-gray-600 mt-2">{data.summary}</p>
        {(data.linkedinLink || data.githubLink) && (
          <div className="flex justify-center gap-4 mt-3 text-sm">
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
        <Section title="PROFESSIONAL EXPERIENCE" items={data.experience} />
        <Section title="EDUCATION" items={data.education} />
        <Section 
          title="TECHNICAL SKILLS" 
          items={[
            <div key="skills" className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {data.skills.map(skill => (
                <span key={skill} className="text-sm">
                  • {skill}
                </span>
              ))}
            </div>
          ]} 
        />
        <Section title="CERTIFICATIONS" items={data.certifications} />
        {data.projects.length > 0 && (
          <Section 
            title="PROJECTS" 
            items={data.projects.map(p => `${p.name}: ${p.description}`)} 
          />
        )}
      </div>
    </div>
  );
}

function Section({ title, items }: { title: string; items: React.ReactNode[] }) {
  if (!items || items.length === 0) return null;

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
        {title}
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="text-gray-700">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}