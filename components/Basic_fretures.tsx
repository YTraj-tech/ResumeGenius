// import React, { useState } from 'react';

// const ResumeBuilderFeatures = () => {
//   const [activeFeature, setActiveFeature] = useState(0);
  
//   const features = [
//     {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4 text-blue-600" aria-hidden="true">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//         </svg>
//       ),
//       title: "Create in Seconds",
//       description: "Generate professional resumes with just a few clicks. Our intuitive interface makes resume creation faster than ever."
//     },
//     {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4 text-blue-600" aria-hidden="true">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
//         </svg>
//       ),
//       title: "Professional Templates",
//       description: "Choose from dozens of ATS-friendly templates designed to get you noticed by employers and pass through automated systems."
//     },
//     {
//       icon: (
//         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4 text-blue-600" aria-hidden="true">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
//         </svg>
//       ),
//       title: "ATS Optimized",
//       description: "Our resumes are designed to pass Applicant Tracking Systems with optimized formatting, keywords, and structure."
//     },
    
    
    
//   ];

//   return (
//     <section className="py-16  mt-32">
//       <div className="container mx-auto px-4">
       

//         {/* Desktop/Tablet View */}
//         <div className="hidden md:grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
//               onMouseEnter={() => setActiveFeature(index)}
//             >
//               {feature.icon}
//               <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Mobile Carousel */}
//         <div className="md:hidden">
//           <div className="bg-white p-8 rounded-xl shadow-md">
//             {features[activeFeature].icon}
//             <h3 className="mb-3 text-xl font-semibold text-gray-900">{features[activeFeature].title}</h3>
//             <p className="text-gray-600 leading-relaxed mb-6">{features[activeFeature].description}</p>
            
//             <div className="flex justify-center space-x-2">
//               {features.map((_, index) => (
//                 <button
//                   key={index}
//                   className={`w-3 h-3 rounded-full ${activeFeature === index ? 'bg-blue-600' : 'bg-gray-300'}`}
//                   onClick={() => setActiveFeature(index)}
//                   aria-label={`Go to feature ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>

      
//       </div>
//     </section>
//   );
// };

// export default ResumeBuilderFeatures;







import React, { lazy, useState } from 'react';
import { Tinos } from 'next/font/google';

 const Rak = Tinos({
  subsets:["latin"],
  weight:["400"]
 })
 
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ResumeBuilderFeatures: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0);
  
  const features: Feature[] = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4 text-blue-600" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Create in Seconds",
      description: "Generate professional resumes with just a few clicks. Our intuitive interface makes resume creation faster than ever."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4 text-blue-600" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: "Professional Templates",
      description: "Choose from dozens of ATS-friendly templates designed to get you noticed by employers and pass through automated systems."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12 mb-4 text-blue-600" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "ATS Optimized",
      description: "Our resumes are designed to pass Applicant Tracking Systems with optimized formatting, keywords, and structure."
    },
  ];

  return (
    <section className="py-16 mt-32">
      <div className="container mx-auto px-4">
        {/* Desktop/Tablet View */}
        <div className="hidden md:grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              onMouseEnter={() => setActiveFeature(index)}
            >
              {feature.icon}
              <h3 className="mb-3 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mobile View - Vertical Stack */}
        <div className="md:hidden space-y-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-md"
            >
              {feature.icon}
              <h3 className={`mb-3 text-xl font-semibold text-gray-900 ${Rak.className} `}>{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeBuilderFeatures;