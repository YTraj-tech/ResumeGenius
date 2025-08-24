// import { HoverEffect } from "./ui/card-hover-effect";
// import { Yusei_Magic } from 'next/font/google';

import { TableOfContents } from "lucide-react";

// import { Zap, BarChart2, Lock, Code2, ShieldCheck, Sparkles } from "lucide-react";
// // border

// const Rak = Yusei_Magic({
//     subsets: ['latin'],
//     weight: ['400'],
//     variable: '--font-rak',
// });

// export default () => {

//     const features = [
//         {
//             icon: <Zap className="w-6 h-6" />,
//             title: "Resume in Seconds",
//             description: "Transform your LinkedIn profile into a professional resume instantly — no forms, no hassle.",
//             link: "#resume-fast"
//         },
//         {
//             icon: <ShieldCheck className="w-6 h-6" />,
//             title: "Privacy First",
//             description: "Your LinkedIn data is never shared with anyone. Everything stays private and secure to you.",
//             link: "#privacy"
//         },
//         {
//             icon: <Lock className="w-6 h-6" />,
//             title: "Bank-Grade Security",
//             description: "All your information is protected with industry-standard encryption and safe storage.",
//             link: "#security"
//         },
//         {
//             icon: <Sparkles className="w-6 h-6" />,
//             title: "Instant Formatting",
//             description: "Automatically organize your details into a professional, job-ready layout in seconds.",
//             link: "#formatting"
//         },
//         {
//             icon: <Code2 className="w-6 h-6" />,
//             title: "Customizable Templates",
//             description: "Choose from modern, ATS-friendly designs to make your resume stand out.",
//             link: "#templates"
//         },
//         {
//             icon: <BarChart2 className="w-6 h-6" />,
//             title: "Career Insights",
//             description: "Get tips and suggestions to strengthen your profile and land more interviews.",
//             link: "#insights"
//         },
//     ];

//     return (
//         <section className="py-14 w-full h-full relative overflow-hidden mb-9">



//             {/* Content */}
//             <div className="relative z-10">
//                 <div className="max-w-screen-xl mx-auto px-4 text-black md:px-8">
//                     <div className="relative max-w-2xl mx-auto sm:text-center">
//                         <div className="relative z-10 text-center">

//                             <div
//                                 className="absolute lg:mt-[300px] inset-0 blur-xl h-[200px] pointer-events-none"
//                                 style={{
//                                     background:
//                                             'linear-gradient(143.6deg, rgba(51, 161, 224, 0.4) 20.79%, rgba(51, 161, 224, 0.2) 50%, rgba(51, 161, 224, 0.05) 80%)',
//                                 }}
//                             />
//                             <h3 className={`text-gray-800 text-5xl font-semibold lg:text-6xl sm:text-4xl ${Rak.className}`}>
//                                 Resume in <span className="text-[#33A1E0]"> Seconds</span>
//                             </h3>

//                             <p className="mt-3 text-gray-600 text-lg">
//                                 From LinkedIn to resume — fast, secure, simple.
//                             </p>

//                         </div>
//                         <div className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
//                             style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 90.2%, rgba(192, 132, 252, 0.1) 77.55%)" }} />
//                     </div>

//                     <div className="mt-12">
//                         <div className="max-w-5xl mx-auto px-4">
//                             <HoverEffect items={features} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }













// import React from 'react';
// import { BiSolidZap } from "react-icons/bi";
// import { Yusei_Magic } from 'next/font/google';
// import CardFlip from "./ui/Card_flip";
// import { SiEasyeda } from "react-icons/si";
// import { RiSecurePaymentLine } from "react-icons/ri";
// import { GiChoice } from "react-icons/gi";
// import { GridPattern } from "./ui/background-ripple-effect";
// import { cn } from "@/lib/utils";

// const Rak = Yusei_Magic({
//     subsets: ["latin"],
//     weight: ["400"],
//     variable: "--font-rak"
// })

// const Features = () => {
//     return (
//         <section className="dark:bg-gray-900 pt-[100px] relative overflow-hidden">
//             {/* Grid Background */}
//             <div className="absolute inset-0 -z-10 overflow-hidden">
//                 <GridPattern
//                     width={30}
//                     height={30}
//                     x={-1}
//                     y={-1}
//                     strokeDasharray={"4 2"}
//                     className={cn(
//                         "h-full w-full [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
//                     )}
//                 />
//             </div>

//             <div className="container px-6 py-10 mx-auto relative z-10">
//                 <h1 className={`text-3xl font-semibold text-gray-800 capitalize lg:text-6xl dark:text-white ${Rak.className}`}>
//                     Build your resume in seconds with <br/> <span className="text-blue-500 lg:text-5xl mt-0.5">Resumpier</span>
//                 </h1>



//                 <div className="mt-2 lg:pr-[400px]">
//                     <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
//                     <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
//                     <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
//                 </div>

//                 <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
//                     <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">

//                         {/* Feature 1 */}
//                         <div className="space-y-3">
//                             <span className="inline-block p-3 text-white text-3xl bg-[#33a1e0] rounded-xl dark:text-white dark:bg-blue-500">
//                                 <BiSolidZap />
//                             </span>
//                             <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
//                                 Resume in Seconds
//                             </h1>
//                             <p className="text-gray-500 dark:text-gray-300">
//                                 Skip the manual input — simply use your LinkedIn profile, and Resumpier instantly generates a professional resume.
//                             </p>
//                         </div>

//                         {/* Feature 2 */}
//                         <div className="space-y-3">
//                             <span className="inline-block p-3 text-white text-3xl bg-[#33a1e0] rounded-xl dark:text-white dark:bg-blue-500">
//                                 <GiChoice />
//                             </span>
//                             <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
//                                 Elegant Templates
//                             </h1>
//                             <p className="text-gray-500 dark:text-gray-300">
//                                 Choose from ATS-friendly, modern templates designed to make your resume stand out to recruiters.
//                             </p>
//                         </div>

//                         {/* Feature 3 */}
//                         <div className="space-y-3">
//                             <span className="inline-block p-3 text-white text-3xl bg-[#33a1e0] rounded-xl dark:text-white dark:bg-blue-500">
//                                 <SiEasyeda />
//                             </span>
//                             <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
//                                 Easy Customization
//                             </h1>
//                             <p className="text-gray-500 dark:text-gray-300">
//                                 Personalize layouts, fonts, and sections to match your career goals — all with just a few clicks.
//                             </p>
//                         </div>

//                         {/* Feature 4 */}
//                         <div className="space-y-3">
//                             <span className="inline-block p-3 text-white text-3xl bg-[#33a1e0] rounded-xl dark:text-white dark:bg-blue-500">
//                                 <RiSecurePaymentLine />
//                             </span>
//                             <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
//                                 Secure & Private
//                             </h1>
//                             <p className="text-gray-500 dark:text-gray-300">
//                                 Your LinkedIn data stays safe — we never share it. All resumes are generated securely, just for you.
//                             </p>
//                         </div>
//                     </div>

//                     <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
//                         <CardFlip />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Features;








import React from 'react';
import { BiSolidZap } from "react-icons/bi";
import { Yusei_Magic } from 'next/font/google';
import CardFlip from "./ui/Card_flip";
import { SiEasyeda } from "react-icons/si";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiChoice } from "react-icons/gi";
import { GridPattern } from "./ui/background-ripple-effect";
import { cn } from "@/lib/utils";

const Rak = Yusei_Magic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rak"
});

// ✅ Dynamic feature data
const features = [
  {
    icon: <BiSolidZap />,
    title: "Resume in Seconds",
    description:
      "Skip the manual input — simply use your LinkedIn profile, and Resumpier instantly generates a professional resume.",
  },
  {
    icon: <GiChoice />,
    title: "Elegant Templates",
    description:
      "Choose from ATS-friendly, modern templates designed to make your resume stand out to recruiters.",
  },
  {
    icon: <SiEasyeda />,
    title: "Easy Customization",
    description:
      "Personalize layouts, fonts, and sections to match your career goals — all with just a few clicks.",
  },
  {
    icon: <RiSecurePaymentLine />,
    title: "Secure & Private",
    description:
      "Your LinkedIn data stays safe — we never share it. All resumes are generated securely, just for you.",
  },
];

const Features = () => {
  return (
    <section className="dark:bg-gray-900 pt-[100px] relative  min-h-screen overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "h-full w-full [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
          )}
        />
      </div>

      <div className="container px-6 py-10 mx-auto relative z-10">
        <h1
          className={`text-4xl font-semibold text-gray-800 capitalize lg:text-6xl dark:text-white ${Rak.className}`}
        >
          Build your resume in seconds with <br />
          <span className="text-blue-500 lg:text-5xl mt-0.5">Resumpier</span>
        </h1>

        <div className="mt-2 lg:pr-[400px]">
          <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-blue-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-blue-500 rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            
            {/* ✅ Dynamic Mapping */}
            {features.map((feature, index) => (
              <div key={index} className="space-y-2 border-5 px-5 py-5 bg-[#33A1E0] border-[#BBDCE5] rounded-3xl">
                <span className="inline-block p-3 border-2 border-[#BBDCE5] text-white text-3xl bg-[#33A1E0] rounded-xl dark:text-white dark:bg-blue-500">
                  {feature.icon}
                </span>
                <h1 className="text-xl font-semibold text-black capitalize dark:text-white">
                  {feature.title}
                </h1>
                <p className="text-white dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

          <div className=" mt-9 lg:flex lg:w-1/2 lg:justify-center">
            <CardFlip />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

