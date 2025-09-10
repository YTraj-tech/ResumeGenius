'use client';

import { useState } from "react";
import ResumeBuilderSidebar from "@/components/Aditional_info/ResumebuilderSidebar";
import { ResumePreview } from "@/components/ResumePreview";

interface ResumeLayoutProps {
  resumeId: string;
  userId: string;
  templateId: string;
  resumeData: any;
}

export default function ResumeLayout({ resumeId, userId, templateId, resumeData }: ResumeLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className=" h-fit lg:ml-[-300px] bg-gray-100 ">
      {/* Mobile Header with Button */}
      <div className="lg:hidden p-5  ">
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="px-4 py-5 text-white rounded-lg  hover:bg-indigo-700"
        >
          <button className="bg-blue-700 lg:hidden no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-700 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>
               Add More Section
              </span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
        </button>
      </div>

      <div className="container mx-auto px-0 lg:px-4">
        <div className="flex flex-col lg:flex-row">

          {/* Sidebar */}
          <div className="lg:w-1/3 lg:pt-[100px] xl:w-1/4">
            {/* Mobile Drawer */}
            {isSidebarOpen && (
              <div className="fixed inset-0 z-50 bg-black/40 lg:hidden">
                <div className="absolute left-0 top-0 h-full w-80 bg-white p-4 shadow-lg">
                  <button
                    onClick={() => setIsSidebarOpen(false)}
                    className="mb-4 px-3 py-1 bg-blue-700 text-white rounded-lg"
                  >
                    Close
                  </button>
                  <ResumeBuilderSidebar resumeId={resumeId} userId={userId} />
                </div>
              </div>
            )}

            {/* Desktop Sidebar */}
            <div className="hidden lg:block bg-white h-full p-4 w-80 min-h-screen lg:relative lg:shadow-md">
              <ResumeBuilderSidebar resumeId={resumeId} userId={userId} />
            </div>
          </div>

          {/* Resume Preview */}
          <div className="lg:w-2/3 xl:w-3/4 p-4 lg:p-8">
            <div className="bg-white rounded-lg shadow-lg p-4 lg:p-8">
              <ResumePreview resumeData={resumeData} templateId={templateId} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
