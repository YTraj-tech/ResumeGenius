


'use client';

import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
import Image from "next/image";
import Link from "next/link";

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

interface PersonalInfo {
  id: string;
  userId: string;
  phone?: string | null;
  imageUrl?: string | null;
  address?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface CreativeTemplateProps {
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

// Simple section component
const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mb-8 print:mb-6">
    <h2 className="text-xl font-bold text-gray-900 uppercase mb-4 print:text-lg border-b border-gray-300 pb-2">
      {title}
    </h2>
    {children}
  </div>
);

// Experience item component
const ExperienceItem = ({ title, period, bullets }: { title: string; period?: string; bullets: string[] }) => (
  <div className="mb-6">
    <div className="flex justify-between items-start mb-2">
      <h3 className="font-semibold text-gray-800 text-lg">{title}</h3>
      {period && <span className="text-sm text-gray-500 whitespace-nowrap">{period}</span>}
    </div>
    <ul className="list-disc list-inside ml-4">
      {bullets.map((bullet, i) => (
        <li key={i} className="text-gray-700 mb-1">{bullet}</li>
      ))}
    </ul>
  </div>
);

// Education item component
const EducationItem = ({ degree, institution, details, period }: {
  degree: string;
  institution: string;
  details: string[];
  period?: string;
}) => (
  <div className="mb-6">
    <div className="flex justify-between items-start mb-1">
      <h3 className="font-semibold text-gray-800 text-lg">{degree}</h3>
      {period && <span className="text-sm text-gray-500">{period}</span>}
    </div>
    <p className="text-gray-700 mb-1">{institution}</p>
    <ul className="list-disc list-inside ml-4">
      {details.map((detail, i) => (
        <li key={i} className="text-gray-700">{detail}</li>
      ))}
    </ul>
  </div>
);

export default function CreativeTemplate({ 
  data, 
  user, 
  sections = [], 
  personalInfo 
}: CreativeTemplateProps) {
  const formattedProjects = transformProjects(data.projects || []);

  // Use personalInfo data if available, otherwise fall back to user data
  const phone = personalInfo?.phone || user?.phone;
  const address = personalInfo?.address || user?.address;
  const profileImage = personalInfo?.imageUrl || user?.imageUrl;
  const name = user?.name || data.name || "Your Name";
  const email = user?.email;

  // Parse experience data from the database
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

  // Parse education data from the database
  const parseEducation = () => {
    if (!data.education || data.education.length === 0) return [];

    return data.education.map(edu => {
      // Try to extract degree and period using different delimiters
      const degreeMatch = edu.match(/^(.*?)(?:☐|•|$)/);
      const degree = degreeMatch ? degreeMatch[1].trim() : edu;

      const periodMatch = edu.match(/☐\s*([^•]*)/);
      const period = periodMatch ? periodMatch[1].trim() : undefined;

      // Extract institution and details (assuming format: Degree ☐ Period • Institution • Detail1 • Detail2)
      const parts = edu.split('•').map(p => p.trim()).filter(p => p);
      const institution = parts.length > 1 ? parts[1] : '';
      const details = parts.slice(2);

      return { degree, institution, details, period };
    });
  };

  const experiences = parseExperience();
  const educations = parseEducation();

  return (
    <div className="w-full max-w-4xl bg-white p-8 print:p-6 print:my-0 print:shadow-none print:border-0 font-sans">
      {/* Header Section with profile image */}
      <div className="mb-8 print:mb-6">
        <div className="flex items-center gap-4 mb-4 print:gap-3">
          {profileImage && (
            <Image
              src={profileImage}
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full print:w-12 print:h-12"
            />
          )}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 print:text-xl">
              {name}
            </h1>
            {email && <p className="text-gray-600 print:text-sm">{email}</p>}
          </div>
        </div>

        {/* Summary */}
        {data.summary && (
          <p className="text-gray-600 mt-2 print:text-sm print:mt-1">
            {data.summary}
          </p>
        )}

        {/* Contact Information with improved link handling */}
        <div className="flex flex-wrap gap-4 mt-3 text-sm print:mt-2 print:text-xs">
          {phone && (
            <span className="text-gray-600 print:text-black">
              {phone}
            </span>
          )}
          {address && (
            <span className="text-gray-600 print:text-black">
              {address}
            </span>
          )}
          {data.linkedinLink && (
            <a
              href={data.linkedinLink}
              className="text-blue-600 hover:underline print:text-black print:no-underline"
            >
              LinkedIn
            </a>
          )}
          {data.githubLink && (
            <a
              href={data.githubLink}
              className="text-gray-600 hover:underline print:text-black print:no-underline"
            >
              GitHub
            </a>
          )}
          {email && !data.linkedinLink && !data.githubLink && (
            <span>{email}</span>
          )}
        </div>

        <div className="border-b border-gray-300 my-4 print:my-3"></div>
      </div>

      {/* Two-column layout */}
      <div className="grid md:grid-cols-3 gap-6 print:gap-4">
        <div className="md:col-span-2 space-y-6 print:space-y-4">
          {/* Experience Section */}
          {experiences.length > 0 && (
            <>
              <Section title="WORK EXPERIENCE">
                <div className="space-y-6 print:space-y-4">
                  {experiences.map((exp, index) => (
                    <ExperienceItem
                      key={index}
                      title={exp.title}
                      period={exp.period}
                      bullets={exp.bullets}
                    />
                  ))}
                </div>
              </Section>
              <div className="border-b border-gray-300 my-4 print:my-3"></div>
            </>
          )}

          {/* Projects Section with improved formatting */}
          {formattedProjects.length > 0 && (
            <>
              <Section title="PROJECTS">
                <div className="space-y-6 print:space-y-4">
                  {formattedProjects.map((project, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="font-semibold text-gray-800 mb-1">{project.name}</h3>
                      {project.description && (
                        <p className="text-gray-700 text-sm mb-2">{project.description}</p>
                      )}
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="text-xs bg-gray-100 px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          className="text-blue-600 text-sm hover:underline print:text-black print:no-underline"
                        >
                          View Project
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
              <div className="border-b border-gray-300 my-4 print:my-3"></div>
            </>
          )}

          {/* Additional Sections */}
          {sections.length > 0 && (
            <>
              <Section title="ADDITIONAL">
                <div className="space-y-4 print:space-y-3">
                  {sections.map((section) => (
                    <div key={section.id}>
                      <h3 className="font-semibold text-gray-800 uppercase mb-1">
                        {section.sectionType}
                      </h3>
                      {section.organization && (
                        <p className="text-gray-700 text-sm mb-1">
                          {section.organization}
                        </p>
                      )}
                      {section.description && (
                        <p className="text-gray-600 text-sm">
                          {section.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </Section>
              <div className="border-b border-gray-300 my-4 print:my-3"></div>
            </>
          )}
        </div>

        <div className="space-y-6 print:space-y-4">
          {/* Skills Section with improved styling */}
          {data.skills && data.skills.length > 0 && (
            <>
              <Section title="SKILLS">
                <div className="flex flex-wrap gap-1 print:gap-0.5">
                  {data.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-100 px-2 py-1 rounded print:text-2xs print:px-1.5 print:py-0.5 print:bg-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Section>
              <div className="border-b border-gray-300 my-4 print:my-3"></div>
            </>
          )}

          {/* Education Section */}
          {educations.length > 0 && (
            <>
              <Section title="EDUCATION">
                <div className="space-y-6 print:space-y-4">
                  {educations.map((edu, index) => (
                    <EducationItem
                      key={index}
                      degree={edu.degree}
                      institution={edu.institution}
                      details={edu.details}
                      period={edu.period}
                    />
                  ))}
                </div>
              </Section>
              <div className="border-b border-gray-300 my-4 print:my-3"></div>
            </>
          )}

          {/* Certifications Section */}
          {data.certifications && data.certifications.length > 0 && (
            <>
              <Section title="CERTIFICATIONS">
                <div className="space-y-3 print:space-y-2">
                  {data.certifications.map((cert, index) => (
                    <div key={index} className="text-gray-700">
                      {cert}
                    </div>
                  ))}
                </div>
              </Section>
              <div className="border-b border-gray-300 my-4 print:my-3"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}