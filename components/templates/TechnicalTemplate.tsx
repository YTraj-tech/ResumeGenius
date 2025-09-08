'use client';

import { ResumeData, ResumeProject } from "@/lib/types/resume.type";
import Selection from "../Resume/ResumeFormate";
import Image from "next/image";
import ProfileImage from "../ProfileImage";

const transformProjects = (projects: any[]): ResumeProject[] => {
  if (!projects || projects.length === 0) return [];

  if (projects[0] && typeof projects[0] === "object" && "name" in projects[0]) {
    return projects as ResumeProject[];
  }

  return projects.map(project => ({
    name: project.title || "Untitled Project",
    description: project.subComponents?.[0]?.description?.[0]?.text || "",
    technologies: [],
    link: undefined,
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

interface TechnicalTemplateProps {
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

export default function TechnicalTemplate({
  data,
  user,
  sections = [],
  personalInfo
}: TechnicalTemplateProps) {
  const formattedProjects = transformProjects(data.projects || []);

  // Use personalInfo data if available, otherwise fall back to user data
  const phone = personalInfo?.phone || user?.phone;
  const address = personalInfo?.address || user?.address;
  const profileImage = personalInfo?.imageUrl || user?.imageUrl;

  return (
    <div className="space-y-6 w-full max-w-4xl px-9 py-20 mt-[100px] mx-auto print:space-y-4 print:max-w-none print:bg-white print:text-black print:h-auto print:p-[30px] print:mx-0">
      <div className="border-l-4 border-blue-500 pl-4 print:border-l-2 print:pl-2">
        {/* User info section */}
        {(user || personalInfo) && (
          <div className="flex items-center gap-4 mb-4 print:mb-3 print:gap-3">
            {profileImage && (
              <ProfileImage
                src={profileImage} // This can be string | null | undefined
                alt="Profile"
                width={60}
                height={60}
                className="rounded-full print:w-12 print:h-12"
              />
            )}
           
          </div>
        )}

        {!user && !personalInfo && (
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 print:text-xl print:text-black">
            {data.name}
          </h1>
        )}

        <p className="text-gray-600 mt-2 print:text-sm print:mt-1 print:text-black">
          {data.summary}
        </p>

        {(data.linkedinLink || data.githubLink) && (
          <div className="flex gap-4 mt-3 text-sm print:mt-2 print:text-xs">
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
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-3 gap-6 print:gap-4 print:grid-cols-1 print:md:grid-cols-3">
        <div className="md:col-span-2 space-y-6 print:space-y-4 print:md:col-span-2">
          {data.experience?.length > 0 && (
            <Selection title="Experience" items={data.experience} />
          )}

          {formattedProjects.length > 0 && (
            <Selection
              title="Projects"
              items={formattedProjects.map(p => (
                <div key={p.name} className="mb-3 print:mb-2">
                  <h4 className="font-medium print:text-sm print:font-bold">
                    {p.name}
                  </h4>
                  {p.description && (
                    <p className="text-gray-700 print:text-xs print:text-black">
                      {p.description}
                    </p>
                  )}
                  {p.link && (
                    <a
                      href={p.link}
                      className="text-blue-600 text-sm hover:underline mt-1 inline-block print:text-xs print:mt-0.5 print:text-black print:no-underline"
                    >
                      View Project
                    </a>
                  )}
                </div>
              ))}
            />
          )}

          {/* Display sections data */}
          {sections.length > 0 && (
            <Selection
              title="Additional Sections"
              items={sections.map(section => (
                <div key={section.id} className="mb-3 print:mb-2">
                  <h4 className="font-medium text-gray-800 capitalize print:text-sm print:font-bold print:text-black">
                    {section.sectionType.toLowerCase()}
                  </h4>
                  {section.organization && (
                    <p className="text-sm text-gray-600 mt-1 print:text-xs print:mt-0.5 print:text-black">
                      <span className="font-medium">Organization:</span>{" "}
                      {section.organization}
                    </p>
                  )}
                  {section.description && (
                    <p className="text-sm text-gray-700 mt-1 print:text-xs print:mt-0.5 print:text-black">
                      {section.description}
                    </p>
                  )}
                </div>
              ))}
            />
          )}
        </div>

        <div className="space-y-6 print:space-y-4">
          {data.skills?.length > 0 && (
            <Selection
              title="Skills"
              items={[
                <div key="skills" className="flex flex-wrap gap-1 print:gap-0.5">
                  {data.skills.map(skill => (
                    <span
                      key={skill}
                      className="text-xs bg-gray-100 px-2 py-1 rounded print:text-2xs print:px-1.5 print:py-0.5 print:bg-gray-200 print:text-black"
                    >
                      {skill}
                    </span>
                  ))}
                </div>,
              ]}
            />
          )}

          {data.education?.length > 0 && (
            <Selection title="Education" items={data.education} />
          )}

          {data.certifications?.length > 0 && (
            <Selection title="Certifications" items={data.certifications} />
          )}

          {/* Contact Information Sidebar */}
          {(phone || address) && (
            <Selection
              title="Contact Information"
              items={[
                <div key="contact" className="space-y-2 print:space-y-1">
                  {phone && (
                    <p className="text-sm text-gray-700 print:text-xs print:text-black">
                      <span className="font-medium">Phone:</span> {phone}
                    </p>
                  )}
                  {address && (
                    <p className="text-sm text-gray-700 print:text-xs print:text-black">
                      <span className="font-medium">Address:</span> {address}
                    </p>
                  )}
                  {user?.email && (
                    <p className="text-sm text-gray-700 print:text-xs print:text-black">
                      <span className="font-medium">Email:</span> {user.email}
                    </p>
                  )}
                </div>
              ]}
            />
          )}
        </div>
      </div>
    </div>
  );
}