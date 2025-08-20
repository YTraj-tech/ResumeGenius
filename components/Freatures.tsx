// import { HoverEffect } from "./ui/card-hover-effect";
// import { Yusei_Magic } from 'next/font/google';

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





import { HoverEffect } from "./ui/card-hover-effect";
import { Yusei_Magic } from 'next/font/google';
const Rak = Yusei_Magic({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-rak',
});

import { Zap, BarChart2, Lock, Code2, ShieldCheck, Sparkles } from "lucide-react";

export default () => {
    const features = [
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Resume in Seconds",
            description: "Transform your LinkedIn profile into a professional resume instantly — no forms, no hassle.",
            link: "#resume-fast"
        },
        {
            icon: <ShieldCheck className="w-6 h-6" />,
            title: "Privacy First",
            description: "Your LinkedIn data is never shared with anyone. Everything stays private and secure to you.",
            link: "#privacy"
        },
        {
            icon: <Lock className="w-6 h-6" />,
            title: "Bank-Grade Security",
            description: "All your information is protected with industry-standard encryption and safe storage.",
            link: "#security"
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Instant Formatting",
            description: "Automatically organize your details into a professional, job-ready layout in seconds.",
            link: "#formatting"
        },
        {
            icon: <Code2 className="w-6 h-6" />,
            title: "Customizable Templates",
            description: "Choose from modern, ATS-friendly designs to make your resume stand out.",
            link: "#templates"
        },
        {
            icon: <BarChart2 className="w-6 h-6" />,
            title: "Career Insights",
            description: "Get tips and suggestions to strengthen your profile and land more interviews.",
            link: "#insights"
        },
    ];

    return (
        <section
            className="py-14 w-full h-full relative overflow-hidden mb-9 bg-cover bg-center"
            style={{ backgroundImage: "url('/bg1.png')" }} // 👈 background image here
        >
            

            {/* Content */}
            <div className="relative z-10">
                <div className="max-w-screen-xl mx-auto px-4 text-black md:px-8">
                    <div className="relative max-w-2xl mx-auto sm:text-center">
                        <div className="relative z-10 text-center">
                            <div
                                className="absolute lg:mt-[300px] inset-0 blur-xl h-[200px] pointer-events-none"
                                style={{
                                    background:
                                        'linear-gradient(143.6deg, rgba(51, 161, 224, 0.4) 20.79%, rgba(51, 161, 224, 0.2) 50%, rgba(51, 161, 224, 0.05) 80%)',
                                }}
                            />
                            <h3 className={`text-gray-800 text-5xl font-semibold lg:text-6xl sm:text-4xl ${Rak.className}`}>
                                Resume in <span className="text-[#33A1E0]"> Seconds</span>
                            </h3>
                            <p className="mt-3 text-gray-600 text-lg">
                                From LinkedIn to resume — fast, secure, simple.
                            </p>
                        </div>
                        <div
                            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
                            style={{
                                background:
                                    "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 90.2%, rgba(192, 132, 252, 0.1) 77.55%)",
                            }}
                        />
                    </div>

                    <div className="mt-12">
                        <div className="max-w-5xl mx-auto px-4">
                            <HoverEffect items={features} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
