// 'use client';

// import { useState } from 'react';
// import { 
//   User, 
//   FileText, 
//   Menu,
//   X
// } from 'lucide-react';
// import PersonalInfoForm from './Personal_info';
// import ResumeSections from './ResumeSections';

// interface ResumeBuilderSidebarProps {
//   resumeId: string;
//   userId: string;
// }

// export default function ResumeBuilderSidebar({ resumeId, userId }: ResumeBuilderSidebarProps) {
//   const [activeTab, setActiveTab] = useState<'personal' | 'sections'>('personal');
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   const menuItems = [
//     {
//       value: 'personal' as const,
//       label: 'Personal Info',
//       icon: User,
//       description: 'Edit your basic information'
//     },
//     {
//       value: 'sections' as const,
//       label: 'Additional Sections',
//       icon: FileText,
//       description: 'Add internships, awards, etc.'
//     },
//   ];

//   return (
//     <div className="flex min-h-screen w-full bg-gray-50">
//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col">
//         {/* Header with sidebar trigger */}
//         <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-2 border-b bg-white px-4 shadow-sm">
//           <div className="flex items-center gap-2 px-4">
//             <h1 className="text-2xl font-semibold text-gray-900">Resume Builder</h1>
//           </div>
//           <div className="ml-auto">
//             <button
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               className="p-2 rounded-md hover:bg-gray-100 transition-colors"
//               aria-label="Toggle sidebar"
//             >
//               {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
//             </button>
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 overflow-auto p-6">
//           <div className="max-w-4xl mx-auto space-y-6">
//             <div className="text-center space-y-4">
//               <h2 className="text-3xl font-bold tracking-tight text-gray-900">Resume Preview</h2>
//               <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//                 Your resume content will appear here. Use the sidebar on the right to edit your 
//                 personal information and add additional sections like internships, awards, and achievements.
//               </p>
//             </div>

//             {/* Resume Preview Placeholder */}
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
//               <div className="space-y-4">
//                 <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto flex items-center justify-center">
//                   <FileText className="w-8 h-8 text-gray-400" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium text-gray-900">Resume Preview</h3>
//                   <p className="text-gray-500">Your resume will be rendered here</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>
//       </div>

//       {/* Right Sidebar */}
//       <div className={`w-96 bg-white border-l shadow-lg transition-transform duration-300 ${
//         sidebarOpen ? 'translate-x-0' : 'translate-x-full'
//       } fixed right-0 top-0 h-full z-30 lg:relative lg:translate-x-0`}>
//         <div className="h-full flex flex-col">
//           {/* Sidebar Header */}
//           <div className="p-6 border-b">
//             <h2 className="text-lg font-semibold text-gray-900">Edit Resume</h2>
//           </div>

//           {/* Navigation Menu */}
//           <div className="p-4">
//             <div className="space-y-2">
//               {menuItems.map((item) => (
//                 <button
//                   key={item.value}
//                   onClick={() => setActiveTab(item.value)}
//                   className={`w-full flex items-start px-4 py-3 rounded-lg text-left transition-colors ${
//                     activeTab === item.value
//                       ? 'bg-blue-50 border border-blue-200 text-blue-700'
//                       : 'hover:bg-gray-50 text-gray-700'
//                   }`}
//                 >
//                   <item.icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
//                   <div>
//                     <div className="font-medium">{item.label}</div>
//                     <div className="text-xs text-gray-500">
//                       {item.description}
//                     </div>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Form Content */}
//           <div className="flex-1 p-4 overflow-auto">
//             <div className="space-y-6">
//               {activeTab === 'personal' && (
//                 <div className="space-y-4">
//                   <div className="pb-4 border-b">
//                     <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
//                     <p className="text-sm text-gray-500">
//                       Update your basic contact details and profile photo
//                     </p>
//                   </div>
//                   <PersonalInfoForm />
//                 </div>
//               )}
              
//               {activeTab === 'sections' && (
//                 <div className="space-y-4">
//                   <div className="pb-4 border-b">
//                     <h3 className="text-lg font-semibold text-gray-900">Additional Sections</h3>
//                     <p className="text-sm text-gray-500">
//                       Add internships, achievements, awards, and publications
//                     </p>
//                   </div>
//                   <ResumeSections resumeId={resumeId} userId={userId} />
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Overlay */}
//       {sidebarOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </div>
//   );
// }


'use client';

import { useState } from 'react';
import { 
  User, 
  FileText, 
  X
} from 'lucide-react';
import PersonalInfoForm from './Personal_info';
import ResumeSections from './ResumeSections';

interface ResumeBuilderSidebarProps {
  resumeId: string;
  userId: string;
}

export default function ResumeBuilderSidebar({ resumeId, userId }: ResumeBuilderSidebarProps) {
  const [activeTab, setActiveTab] = useState<'personal' | 'sections'>('personal');

  const menuItems = [
    {
      value: 'personal' as const,
      label: 'Personal Info',
      icon: User,
      description: 'Edit your basic information'
    },
    {
      value: 'sections' as const,
      label: 'Additional Sections',
      icon: FileText,
      description: 'Add internships, awards, etc.'
    },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Mobile Header */}
      <div className="flex justify-between items-center p-4 border-b lg:hidden">
        <h2 className="text-lg font-semibold">Edit Resume</h2>
        <label htmlFor="sidebar-toggle" className="btn btn-ghost btn-sm">
          <X className="w-5 h-5" />
        </label>
      </div>

      {/* Navigation Menu */}
      <div className="p-4 border-b">
        <div className="flex space-x-2">
          {menuItems.map((item) => (
            <button
              key={item.value}
              onClick={() => setActiveTab(item.value)}
              className={`flex items-center px-4 py-2 rounded-lg text-sm transition-colors ${
                activeTab === item.value
                  ? 'bg-blue-50 border border-blue-200 text-blue-700'
                  : 'hover:bg-gray-50 text-gray-700'
              }`}
            >
              <item.icon className="w-4 h-4 mr-2" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="space-y-6">
          {activeTab === 'personal' && (
            <div className="space-y-4">
              <div className="pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                <p className="text-sm text-gray-500">
                  Update your basic contact details and profile photo
                </p>
              </div>
              <PersonalInfoForm />
            </div>
          )}
          
          {activeTab === 'sections' && (
            <div className="space-y-4">
              <div className="pb-4">
                <h3 className="text-lg font-semibold text-gray-900">Additional Sections</h3>
                <p className="text-sm text-gray-500">
                  Add internships, achievements, awards, and publications
                </p>
              </div>
              <ResumeSections resumeId={resumeId} userId={userId} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}