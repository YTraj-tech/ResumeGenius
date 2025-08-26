// import React from 'react';
// import {GlobeDemo} from "@/components/Product_show"

// const WorldAcces = () => {
//     return (
//         <div 
//             className="h-[600px] lg:h-[670px] mt-[100px] lg:mt-[200px]  rounded-tl-[200px] sm:mx-8 md:mx-16 lg:mx-[270px]"
//             style={{
//                 background: "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)"
//             }}
//         >
//             <div className="flex flex-col lg:flex-row h-full">
//                 <div className="w-full lg:w-1/2 p-8  ">
//                     <GlobeDemo />
//                 </div>
//                 {/* Text content occupying remaining space */}
//                 <div className="w-full lg:w-1/2 p-8  flex flex-col justify-center">
//                     <h2 className="text-3xl font-bold text-gray-800 mb-4">Global Access, Seamless Experience</h2>
//                     <p className="text-lg text-gray-600 mb-4">
//                         Unlock a world of opportunities with our platform, designed to provide seamless access to global resources and services. 
//                         Whether you're connecting from a bustling city or a remote corner of the world, our innovative solutions ensure 
//                         unparalleled reliability and performance.
//                     </p>
//                     <p className="text-lg text-gray-600">
//                         Our mission is to empower individuals and businesses by bridging geographical barriers with cutting-edge technology. 
//                         Experience the freedom to collaborate, innovate, and grow without limitations.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WorldAcces;




// import React from 'react';
// import {GlobeDemo} from "@/components/Product_show"

// const WorldAcces = () => {
//     return (
//         <div 
//             className="h-[600px] lg:h-[670px] mt-[100px] lg:mt-[200px] rounded-tl-[200px] sm:mx-8 md:mx-16 lg:mx-[270px] max-sm:mx-4"
//             style={{
//                 background: "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)"
//             }}
//         >
//             <div className="flex flex-col lg:flex-row max-sm:flex-col-reverse h-full">
//                 <div className="w-full lg:w-1/2 lg:mt-[-200px] max-sm:p-4  max-sm:mx-auto">
//                     <GlobeDemo />
//                 </div>
//                 {/* Text content occupying remaining space */}
//                 <div className="w-full lg:w-1/2 p-8 max-sm:p-4 flex flex-col justify-center">
//                     <h2 className="text-3xl max-sm:text-2xl font-bold text-gray-800 mb-4">Global Access, Seamless Experience</h2>
//                     <p className="text-lg max-sm:text-base text-gray-600 mb-4">
//                         Unlock a world of opportunities with our platform, designed to provide seamless access to global resources and services. 
//                         Whether you're connecting from a bustling city or a remote corner of the world, our innovative solutions ensure 
//                         unparalleled reliability and performance.
//                     </p>
//                     <p className="text-lg max-sm:text-base text-gray-600">
//                         Our mission is to empower individuals and businesses by bridging geographical barriers with cutting-edge technology. 
//                         Experience the freedom to collaborate, innovate, and grow without limitations.
//                     </p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default WorldAcces;

// import React from 'react';
// import { GlobeDemo } from "@/components/Product_show"
// import { Cabin } from "next/font/google"


// const Rak = Cabin({
//     subsets:["latin"],
//     weight:["400"]
// })

// const WorldAcces = () => {
//     return (
//         <>
//             {/* Mobile Layout (visible below 640px) */}
//             <div
//                 className=" sm:hidden  rounded-tl-[100px] mt-[150px] pt-[100px] px-[10px] "
//                 style={{
//                     background: "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)"
//                 }}
//             >
//                 <div className="flex flex-col-reverse gap-0" style={{ gap: '0px' }}>
//                     <div className="w-[150px] h-[150px] mx-auto p-0">
//                         <GlobeDemo />
//                     </div>
//                     {/* Text content */}
//                     <div className="p-0 text-center flex flex-col justify-center">
//                         <h2 className={`text-3xl  leading-tight font-bold text-gray-800 mb-2 ${Rak.className} `}>
//                             Create your resume in clicks, get hired worldwide
//                         </h2>
//                         <p className="text-base text-gray-600 mb-4 mt-9">
//                             Build a professional resume instantly and land opportunities across the globe —
//                             fast, simple, and effective.
//                         </p>
//                         <button className="px-6 py-3 bg-blue-600 text-white rounded-2xl font-medium shadow-md hover:bg-blue-700 transition">
//                             Build My Resume →
//                         </button>
//                     </div>

//                 </div>
//             </div>

//             {/* Desktop Layout (visible at 640px and above) */}
//             <div
//                 className="h-[600px] lg:h-[670px] mt-[100px] lg:mt-[200px] rounded-tl-[200px] sm:mx-8 md:mx-16 lg:mx-[270px] max-sm:hidden"
//                 style={{
//                     background: "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)"
//                 }}
//             >
//                 <div className="flex flex-col lg:flex-row h-full">
//                     <div className="w-full lg:w-1/2 lg:mt-[-30px] p-8">
//                         <GlobeDemo />
//                     </div>
//                     {/* Text content occupying remaining space */}
//                     <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
//                         <h2 className="text-5xl font-bold text-gray-800 mb-4">Global Access, Seamless Experience</h2>
//                         <p className="text-lg text-gray-600 mt-9 mb-4">
//                             Unlock a world of opportunities with our platform, designed to provide seamless access to global resources and services.
//                             Whether you're connecting from a bustling city or a remote corner of the world, our innovative solutions ensure
//                             unparalleled reliability and performance.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default WorldAcces;











// import React from 'react';
// import { GlobeDemo } from "@/components/Product_show"
// import { Cabin } from "next/font/google"

// const Rak = Cabin({
//     subsets: ["latin"],
//     weight: ["700"]
// })

// const content = {
//     title: "Build Your Resume in Just Clicks, Get Hired Anywhere",
//     description1:
//         "Turn your experience into a professional, job-ready resume in minutes. Choose from modern templates",

//     description2: "  let our AI organize your details, and download a polished resume ready to impress employers worldwide.",
//     buttonText: "Click to build",
// };



// const WorldAcces = () => {
//     return (
//         <>
//             {/* Mobile Layout (visible below 640px) */}
//             <div
//                 className=" sm:hidden rounded-tl-[100px] mt-[150px] pt-[80px] pl-[10px] "
//                 style={{
//                     background: "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)"
//                 }}
//             >
//                 <div className="flex flex-col-reverse gap-0" style={{ gap: '0px' }}>
//                     <div className="w-[150px] h-[150px] mx-auto p-0">
//                         <GlobeDemo />
//                     </div>
//                     {/* Text content */}
//                     <div className="p-0 mx-5 flex flex-col justify-center">
//                         <h2 className={`text-4xl    text-gray-800 mb-2 ${Rak.className} `}>
//                             {content.title}
//                         </h2>
//                         <p className="text-gray-600 mx-3 my-3 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//                             {content.description1}
//                         </p>
//                         <p className="text-gray-600  mx-3 my-3 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//                             {content.description2}
//                         </p>
//                         <div className='mt-9'>
//                             <button className="bg-blue-500 no-underline group cursor-pointer relative shadow-5xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
//                                 <span className="absolute inset-0 overflow-hidden rounded-full">
//                                     <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                                 </span>
//                                 <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-500 py-0.5 px-4 ring-1 ring-white/10 ">
//                                     <span className='text-xl'>
//                                         {content.buttonText}
//                                     </span>
//                                     <svg
//                                         fill="none"
//                                         height="16"
//                                         viewBox="0 0 24 24"
//                                         width="16"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M10.75 8.75L14.25 12L10.75 15.25"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="1"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
//                             </button>

//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* Desktop Layout (visible at 640px and above) */}
//             <div
//                 className="h-[600px] lg:h-[670px] mt-[100px] lg:mt-[200px] rounded-tl-[200px] sm:mx-8 md:mx-16 lg:mx-[270px] max-sm:hidden"
//                 style={{
//                     background: "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)"
//                 }}
//             >
//                 <div className="flex flex-col lg:flex-row h-full">
//                     <div className="w-full lg:w-1/2 lg:mt-[-30px] p-8">
//                         <GlobeDemo />
//                     </div>
//                     {/* Text content occupying remaining space */}
//                     <div className="w-1/2 lg:w-1/2 p-8 flex flex-col justify-center">
//                         <h2 className={`text-6xl font-bold text-gray-800 mb-4 ${Rak.className} `}>{content.title}</h2>
//                         <p className="text-gray-600 my-9 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//                             {content.description1}
//                         </p>
//                         <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//                             {content.description2}
//                         </p>
//                         <div className='mt-9'>
//                             <button className="bg-blue-500 no-underline group cursor-pointer relative shadow-5xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
//                                 <span className="absolute inset-0 overflow-hidden rounded-full">
//                                     <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                                 </span>
//                                 <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-500 py-0.5 px-4 ring-1 ring-white/10 ">
//                                     <span className='text-xl'>
//                                         {content.buttonText}
//                                     </span>
//                                     <svg
//                                         fill="none"
//                                         height="16"
//                                         viewBox="0 0 24 24"
//                                         width="16"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M10.75 8.75L14.25 12L10.75 15.25"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="1"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
//                             </button>

//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </>
//     );
// };

// export default WorldAcces;









// import React from 'react';
// import { GlobeDemo } from "@/components/Product_show"
// import { Cabin } from "next/font/google"

// const Rak = Cabin({
//     subsets: ["latin"],
//     weight: ["700"]
// })

// const content = {
//     title: "Build Your Resume in Just Clicks, Get Hired Anywhere",
//     description1:
//         "Turn your experience into a professional, job-ready resume in minutes. Choose from modern templates",

//     description2: "  let our AI organize your details, and download a polished resume ready to impress employers worldwide.",
//     buttonText: "Click to build",
// };

// const WorldAcces = () => {
//     return (
//         <>
//             {/* Mobile Layout (visible below 640px) */}
//             <div
//                 className=" sm:hidden rounded-tl-[100px] mt-[150px] pt-[80px] pl-[10px] "
//                 style={{
//                     background: "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)"
//                 }}
//             >
//                 <div className="flex flex-col-reverse gap-0" style={{ gap: '0px' }}>
//                     {/* Globe container - full width, half height with overflow hidden */}
//                     <div className="w-full h-[200px] overflow-hidden relative">
//                         <div className="w-full h-[400px] absolute top-0 left-0">
//                             <GlobeDemo />
//                         </div>
//                     </div>
//                     {/* Text content */}
//                     <div className="p-0 mx-5 flex flex-col justify-center">
//                         <h2 className={`text-4xl text-gray-800 mb-2 ${Rak.className} `}>
//                             {content.title}
//                         </h2>
//                         <p className="text-gray-600 mx-3 my-3 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//                             {content.description1}
//                         </p>
//                         <p className="text-gray-600  mx-3 my-3 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//                             {content.description2}
//                         </p>
//                         <div className='mt-9'>
//                             <button className="bg-blue-500 no-underline group cursor-pointer relative shadow-5xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
//                                 <span className="absolute inset-0 overflow-hidden rounded-full">
//                                     <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                                 </span>
//                                 <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-500 py-0.5 px-4 ring-1 ring-white/10 ">
//                                     <span className='text-xl'>
//                                         {content.buttonText}
//                                     </span>
//                                     <svg
//                                         fill="none"
//                                         height="16"
//                                         viewBox="0 0 24 24"
//                                         width="16"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M10.75 8.75L14.25 12L10.75 15.25"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="1"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Desktop Layout (visible at 640px and above) */}
//             <div
//                 className="h-[600px] lg:h-[670px] mt-[100px] lg:mt-[200px] rounded-tl-[200px] sm:mx-8 md:mx-16 lg:mx-[270px] max-sm:hidden"
//                 style={{
//                     background: "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)"
//                 }}
//             >
//                 <div className="flex flex-col lg:flex-row h-full">
//                     <div className="w-full lg:w-1/2 lg:mt-[-30px] p-8">
//                         <GlobeDemo />
//                     </div>
//                     {/* Text content occupying remaining space */}
//                     <div className="w-1/2 lg:w-1/2 p-8 flex flex-col justify-center">
//                         <h2 className={`text-6xl font-bold text-gray-800 mb-4 ${Rak.className} `}>{content.title}</h2>
//                         <p className="text-gray-600 my-9 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//                             {content.description1}
//                         </p>
//                         <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//                             {content.description2}
//                         </p>
//                         <div className='mt-9'>
//                             <button className="bg-blue-500 no-underline group cursor-pointer relative shadow-5xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
//                                 <span className="absolute inset-0 overflow-hidden rounded-full">
//                                     <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
//                                 </span>
//                                 <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-500 py-0.5 px-4 ring-1 ring-white/10 ">
//                                     <span className='text-xl'>
//                                         {content.buttonText}
//                                     </span>
//                                     <svg
//                                         fill="none"
//                                         height="16"
//                                         viewBox="0 0 24 24"
//                                         width="16"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                     >
//                                         <path
//                                             d="M10.75 8.75L14.25 12L10.75 15.25"
//                                             stroke="currentColor"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth="1"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default WorldAcces;










import React from 'react';
import { GlobeDemo } from "@/components/Product_show"
import { Cabin } from "next/font/google"

const Rak = Cabin({
    subsets: ["latin"],
    weight: ["700"]
})

const content = {
    title: "Build Your Resume in Just Clicks, Get Hired Anywhere",
    description1:
        "Turn your experience into a professional, job-ready resume in minutes. Choose from modern templates",

    description2: "  let our AI organize your details, and download a polished resume ready to impress employers worldwide.",
    buttonText: "Click to build",
};

const WorldAcces = () => {
    return (
        <>
            {/* Mobile Layout (visible below 640px) */}
            <div
                className="sm:hidden rounded-tl-[100px] mt-[150px] pt-[80px] pl-[10px]"
                style={{
                    background: "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)"
                }}
            >
                <div className="flex flex-col-reverse gap-0">
                    {/* Globe container - full width, controlled height with overflow hidden */}
                    <div className="w-full h-[250px] overflow-hidden relative -mx-[10px]">
                        <div className="w-full h-[500px] absolute -top-[100px] mt-[100px] left-0">
                            <GlobeDemo />
                        </div>
                    </div>
                    {/* Text content */}
                    <div className="p-0 mx-5 flex flex-col justify-center z-10 relative">
                        <h2 className={`text-4xl text-gray-800 mb-2 ${Rak.className}`}>
                            {content.title}
                        </h2>
                        <p className="text-gray-600 mx-3 my-3 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                            {content.description1}
                        </p>
                        <p className="text-gray-600 mx-3 my-3 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                            {content.description2}
                        </p>
                        <div className='mt-9'>
                            <button className="bg-blue-500 no-underline group cursor-pointer relative shadow-5xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </span>
                                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-500 py-0.5 px-4 ring-1 ring-white/10">
                                    <span className='text-xl'>
                                        {content.buttonText}
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
                                            strokeWidth="1"
                                        />
                                    </svg>
                                </div>
                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Desktop Layout (visible at 640px and above) */}
            <div
                className="h-[600px] lg:h-[670px] mt-[100px] lg:mt-[200px] rounded-tl-[200px] sm:mx-8 md:mx-16 lg:mx-[270px] max-sm:hidden"
                style={{
                    background: "linear-gradient(to bottom, #dbeafe, #eff6ff, #ffffff)"
                }}
            >
                <div className="flex flex-col lg:flex-row h-full">
                    <div className="w-full lg:w-1/2 lg:mt-[-30px] p-8">
                        <GlobeDemo />
                    </div>
                    {/* Text content occupying remaining space */}
                    <div className="w-1/2 lg:w-1/2 p-8 flex flex-col justify-center">
                        <h2 className={`text-6xl font-bold text-gray-800 mb-4 ${Rak.className}`}>{content.title}</h2>
                        <p className="text-gray-600 my-9 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                            {content.description1}
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
                            {content.description2}
                        </p>
                        <div className='mt-9'>
                            <button className="bg-blue-500 no-underline group cursor-pointer relative shadow-5xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
                                <span className="absolute inset-0 overflow-hidden rounded-full">
                                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </span>
                                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-500 py-0.5 px-4 ring-1 ring-white/10">
                                    <span className='text-xl'>
                                        {content.buttonText}
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
                                            strokeWidth="1"
                                        />
                                    </svg>
                                </div>
                                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WorldAcces;