// "use client"

// import React, { useState, useEffect } from 'react';
// import { Libre_Franklin } from 'next/font/google';

// import {GridBackground} from "@/components/ui/grid-background"
// import Image from 'next/image';


//   const libertinus = Libre_Franklin({
//     subsets: ['latin'],
//     weight: ['400', '700'],
//     variable: '--font-libertinus',
// });

// const HeroSection = () => {
//   const [mounted, setMounted] = useState(false);




//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <div className="bg-white pb-6 sm:pb-8 ">


//       {/* Main Section */}

//       <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
//         <div className="mb-8 flex flex-wrap justify-between md:mb-16">

//           {/* Text Content */}
//           <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
//             <h1 className={`mb-4 text-4xl  ${libertinus.className}  font-bold text-black sm:text-5xl md:mb-8 md:text-6xl    lg:text-7xl`}>
//               LinkedIn to<br />Resume in{' '}
//               <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
//                 One Click
//               </span>
//             </h1>
//             <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
//               Transform your LinkedIn profile into a professional resume instantly. No manual formatting required.
//             </p>

//             {/* CTA Button */}
//             <div className="mt-8">
//               <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                 <span className="relative z-10">Generate Resume Now</span>
//                 <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//               </button>
//             </div>
//           </div>

//           {/* Images - Updated Section */}
//           <div className="mb-12 flex w-full md:mb-16 lg:w-2/3 ">
//             <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 border-2 border-blue-50">
//               <Image 
//                 src="/vasu.jpg" 
//                 width={700} 
//                 height={550}
//                 quality={90}
//                 priority
//                 alt="LinkedIn Profile Example" 
//                 className="h-full w-full object-cover object-center" 
//               />
//             </div>

//             <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg border-2 border-white ">
//               <Image 
//                 src="/resume.avif" 
//                 width={550} 
//                 height={550}
//                 quality={90}
//                 priority
//                 alt="Professional Resume Template" 
//                 className="h-full w-full object-cover object-center" 
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
//           {/* Template Categories */}
//           <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
//             <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Modern</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Professional</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Creative</a>
//           </div>

//           {/* Social Links */}
//           <div className="flex items-center justify-center gap-4 lg:justify-start">
//             <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">Share</span>
//             <span className="h-px w-12 bg-gray-200"></span>

//             <div className="flex gap-4">
//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>

//         </div>

//       </section>
//     </div>


//   )
// };
// export default HeroSection;










// "use client"

// import React, { useState, useEffect } from 'react';
// import { Libre_Franklin } from 'next/font/google';
// import Image from 'next/image';

// const libertinus = Libre_Franklin({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-libertinus',
// });

// const HeroSection = () => {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <div className="bg-white pb-6 sm:pb-8">
//       {/* Main Section */}
//       <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
//         <div className="mb-8 flex flex-wrap justify-between md:mb-16">
//           {/* Text Content */}
//           <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
//             <h1 className={`mb-4 text-4xl ${libertinus.className} font-bold text-black sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl`}>
//               LinkedIn to<br />Resume in{' '}
//               <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
//                 One Click
//               </span>
//             </h1>
//             <p className="max-w-md leading-relaxed text-gray-500 xl:text-lg">
//               Transform your LinkedIn profile into a professional resume instantly. No manual formatting required.
//             </p>

//             {/* CTA Button */}
//             <div className="mt-8">
//               <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
//                 <span className="relative z-10">Generate Resume Now</span>
//                 <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//               </button>
//             </div>
//           </div>

//           {/* Images - Updated with fixed 600px dimensions */}
//           <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
//             <div className="relative left-12 top-12 z-10 -ml-12 h-[600px] w-[600px] overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0 border-2 border-blue-50">
//               <Image 
//                 src="/vasu.jpg" 
//                 width={600} 
//                 height={600}
//                 quality={90}
//                 priority
//                 alt="LinkedIn Profile Example" 
//                 className="h-full w-full object-cover object-top" 
//               />
//             </div>

//             <div className="h-[600px] w-[600px] overflow-hidden rounded-lg bg-gray-100 shadow-lg border-2 border-white">
//               <Image 
//                 src="/resume.avif" 
//                 width={600} 
//                 height={600}
//                 quality={90}
//                 priority
//                 alt="Professional Resume Template" 
//                 className="h-full w-full object-cover object-center" 
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
//           {/* Template Categories */}
//           <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
//             <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Modern</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Professional</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">Creative</a>
//           </div>

//           {/* Social Links */}
//           <div className="flex items-center justify-center gap-4 lg:justify-start">
//             <span className="text-sm font-semibold uppercase tracking-widest text-gray-400 sm:text-base">Share</span>
//             <span className="h-px w-12 bg-gray-200"></span>

//             <div className="flex gap-4">
//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;


// "use client"

// import React, { useState } from 'react';
// import RippleGrid from './ui/centergrid';
// import { Libre_Franklin } from 'next/font/google';
// import { FlipButton } from './ui/flip';
// import { Federant } from "next/font/google"
// import { Laila } from "next/font/google"
// import Image from 'next/image'
// import { Noto_Sans_Duployan } from "next/font/google"
// import { cn } from "@/lib/utils";
// import { fromTheme } from 'tailwind-merge';

// const libertinus = Libre_Franklin({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-libertinus',
// });

// const Noto = Noto_Sans_Duployan({
//   subsets: ['latin'],
//   weight: ["400"],
//   variable: '--font-libertinus',
// })


// const Rak = Laila({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-libertinus',
// });








// const HeroSection = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="bg-white pb-6 sm:pb-8">
//       {/* Main Section */}


//       <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
//         <div className="mb-8 flex flex-wrap justify-between md:mb-16">
//           {/* Text Content */}
//           <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
//             <h1 className={`mb-4 text-3xl ${Rak.className} font-bold text-black sm:text-5xl md:mb-8 md:text-6xl lg:text-7xl`}>
//               LinkedIn to<br />Resume in{' '}
//               <span className=" bg-clip-text text-transparent">
//                 <FlipButton frontText="in Click" backText="Effortlesly" className='text-4xl ' />
//               </span>
//             </h1>

//             <p className="max-w-md text-sm leading-relaxed text-gray-500 sm:text-base xl:text-lg">
//               Transform your LinkedIn profile into a professional resume instantly. No manual formatting required.
//             </p>

//             {/* CTA Button */}
//             <div className="mt-6 sm:mt-8">
//               <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg sm:px-8 sm:py-3 sm:text-base">
//                 <span className="relative z-10">Generate Resume Now</span>
//                 <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//               </button>
//             </div>
//           </div>


//           {/* Images Section */}
//           <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
//             {/* First Card with Image/Video */}
//             <div
//               className="relative left-6 top-6 z-10 -ml-6 h-[300px] w-[300px] overflow-hidden rounded-lg shadow-lg sm:left-8 sm:top-8 sm:h-[350px] sm:w-[350px] md:left-12 md:top-12 md:-ml-12 md:h-[400px] md:w-[400px] lg:ml-0 lg:h-[600px] lg:w-[600px] border-2 border-blue-50"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >


//               {/* Image with fade-out animation */}

//               <div className={cn(
//                 "absolute inset-0 transition-all duration-500 ease-in-out",
//                 isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
//               )}>
//                 <Image
//                   src="/vasu.jpg"
//                   width={600}
//                   height={600}
//                   quality={90}
//                   priority
//                   alt="LinkedIn Profile Example"
//                   className="h-full w-full object-cover object-top"
//                 />
//               </div>


//               {/* Video with fade-in animation */}
//               <div className={cn(
//                 "absolute inset-0 transition-all duration-500 ease-in-out",
//                 isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
//               )}>
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="h-full w-full object-cover object-top"
//                 >
//                   <source src="/herovedio.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>

//               <div className={cn(
//                 "absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500",
//                 isHovered ? "bg-black bg-opacity-50" : "bg-transparent"
//               )}>

//               </div>
//             </div>

//             {/* Second Image (Resume) */}
//             <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] border-2 border-white">

//               <Image
//                 src="/resume.avif"
//                 width={600}
//                 height={600}
//                 quality={90}
//                 priority
//                 alt="Professional Resume Template"
//                 className="h-full w-full object-cover object-center"
//                 sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 400px, 600px"
//               />
//             </div>
//           </div>

//         </div>


//         {/* Bottom Section */}
//         <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
//           {/* Template Categories */}
//           <div className="flex h-10 w-56 divide-x overflow-hidden rounded-lg border sm:h-12 sm:w-64">
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Modern</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Professional</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Creative</a>
//           </div>

//           {/* Social Links */}
//           <div className="flex items-center justify-center gap-3 lg:justify-start sm:gap-4">
//             <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">Share</span>
//             <span className="h-px w-8 bg-gray-200 sm:w-12"></span>

//             <div className="flex gap-3 sm:gap-4">
//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//         {/* AnimatedGridPattern */}




//       </section>
//     </div>
//   );
// };

// export default HeroSection;












// "use client";

// import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
// import { Button } from './ui/button';
// import { BorderBeam } from './ui/Borederbeam';
// import { Libre_Franklin, Patrick_Hand } from 'next/font/google';
// import { FlipButton } from './ui/flip';
// import Image from 'next/image';
// import { cn } from "@/lib/utils";



// const libertinus = Libre_Franklin({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-libertinus',
// });

// const Rak = Patrick_Hand({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-libertinus',
// });

// const HeroSection = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="bg-white pb-6 sm:pb-8">
//       <section className="mx-auto max-w-screen-2xl px-4 md:px-8">
//         <div className="mb-8 flex flex-wrap justify-between md:mb-16">
//           {/* Text Content */}
//           <div className="relative mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">

//             {/* Text Content */}
//             <div className="relative z-10">
//               <h1 className={`mb-4 text-3xl ${Rak.className} font-bold text-black sm:text-5xl md:mb-8 md:text-6xl lg:text-8xl`}>
//                 LinkedIn to<br />Resume in{' '}
//                 <span className="bg-clip-text text-transparent">
//                   <FlipButton frontText="in Click" backText="Effortlessly" className='text-4xl' />
//                 </span>
//               </h1>

//               <p className="max-w-md text-sm leading-relaxed text-gray-500 sm:text-base xl:text-lg">
//                 Transform your LinkedIn profile into a professional resume instantly. No manual formatting required.
//               </p>

//               {/* CTA Button */}
//               <div className="mt-6 sm:mt-8">
//                 <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg sm:px-8 sm:py-3 sm:text-base">
//                   <span className="relative z-10">Generate Resume Now</span>
//                   <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Images Section */}
//           <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
//             {/* First Card with Image/Video */}
//             <div
//               className="relative left-6 top-6 z-10 -ml-6 h-[300px] w-[300px] overflow-hidden rounded-lg shadow-lg sm:left-8 sm:top-8 sm:h-[350px] sm:w-[350px] md:left-12 md:top-12 md:-ml-12 md:h-[400px] md:w-[400px] lg:ml-0 lg:h-[600px] lg:w-[600px] border-2 border-blue-50"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               {/* Image with fade-out animation */}
//               <div className={cn(
//                 "absolute inset-0 transition-all duration-500 ease-in-out",
//                 isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
//               )}>
//                 <Image
//                   src="/vasu.jpg"
//                   width={600}
//                   height={600}
//                   quality={90}
//                   priority
//                   alt="LinkedIn Profile Example"
//                   className="h-full w-full object-cover object-top"
//                 />


//               </div>

//               {/* Video with fade-in animation */}
//               <div className={cn(
//                 "absolute inset-0 transition-all duration-500 ease-in-out",
//                 isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
//               )}>
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="h-full w-full object-cover object-top"
//                 >
//                   <source src="/herovedio.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>

//               <div className={cn(
//                 "absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500",
//                 isHovered ? "bg-black bg-opacity-50" : "bg-transparent"
//               )}>
//               </div>
//             </div>

//             {/* Second Image (Resume) */}

//             <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg bg-gray-100 shadow-lg sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] border-2 border-white">

//               <Image
//                 src="/resume.avif"
//                 width={600}
//                 height={600}
//                 quality={90}
//                 priority
//                 alt="Professional Resume Template"
//                 className="h-full w-full object-cover object-center"
//                 sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 400px, 600px"
//               />

//               {/* </Button> */}

//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
//           {/* Template Categories */}
//           <div className="flex h-10 w-56 divide-x overflow-hidden rounded-lg border sm:h-12 sm:w-64">
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Modern</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Professional</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Creative</a>
//           </div>

//           {/* Social Links */}
//           <div className="flex items-center justify-center gap-3 lg:justify-start sm:gap-4">
//             <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">Share</span>
//             <span className="h-px w-8 bg-gray-200 sm:w-12"></span>

//             <div className="flex gap-3 sm:gap-4">
//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;




// "use client";

// import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
// import TextType from './TextType';
// import { Button } from './ui/button';
// import { InteractiveGridPattern } from './ui/InteractiveGridPattern';
// import { BorderBeam } from './ui/Borederbeam';
// import { Playpen_Sans_Hebrew, Karla } from 'next/font/google';
// import { FlipButton } from './ui/flip';
// import Image from 'next/image';
// import { cn } from "@/lib/utils";

// const libertinus = Playpen_Sans_Hebrew({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-libertinus',
// });

// const Rak = Karla({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-libertinus',
// });

// const HeroSection = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className=" pb-6 sm:pb-8 relative flex justify-start h-full w-full">
//       <InteractiveGridPattern
//         className={cn(
//           "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
//         )}
//         width={20}
//         height={20}
//         squares={[80, 80]}
//         squaresClassName="hover:fill-blue-500"
//       />
//       <section className="mx-auto max-w-screen-2xl px-4 md:px-8">


//         <div className="mb-8 flex flex-wrap justify-between md:mb-16">
//           {/* Text Content */}
//           <div className="relative mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48 ">

//             {/* Text Content */}
//             <div className="relative z-10 ">

//               <h1 className={`mb-4 text-3xl ${Rak.className} font-bold text-black sm:text-5xl md:mb-8 md:text-6xl lg:text-8xl`}>
//                 LinkedIn to<br />Resume in{' '}
//                 <span className="bg-clip-text text-transparent ">
//                   <br />
//                   <TextType text={["in Click", "in Sec"]} textColors={["#33A1E0"]} />
//                 </span>
//               </h1>



//               {/* CTA Button */}
//               <div className="mt-6 sm:mt-8 ">
//                 <FlipButton frontText='Make Resume' backText='Shine On' className={`text-5xl text-center  ${libertinus.className}`} />

//               </div>
//             </div>
//           </div>

//           {/* Images Section */}
//           <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
//             {/* First Card with Image/Video */}
//             <div
//               className="relative left-6 top-6 z-10 -ml-6 h-[300px] w-[300px] overflow-hidden rounded-lg shadow-blue-400  shadow-lg  sm:left-8 sm:top-8 sm:h-[350px] sm:w-[350px] md:left-12 md:top-12 md:-ml-12 md:h-[400px] md:w-[400px] lg:ml-0 lg:h-[600px] lg:w-[600px] border-2 border-blue-50"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               {/* Image with fade-out animation */}
//               <div className={cn(
//                 "absolute inset-0 transition-all  duration-500 ease-in-out",
//                 isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
//               )}>
//                 <Image
//                   src="/vasu.jpg"
//                   width={600}
//                   height={600}
//                   quality={90}
//                   priority
//                   alt="LinkedIn Profile Example"
//                   className="h-full w-full object-cover object-top"
//                 />
//               </div>

//               {/* Video with fade-in animation */}
//               <div className={cn(
//                 "absolute inset-0 transition-all duration-500 ease-in-out",
//                 isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
//               )}>
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="h-full w-full object-cover object-top"
//                 >
//                   <source src="/herovedio.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>

//               <div className={cn(
//                 "absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500",
//                 isHovered ? "bg-black bg-opacity-50" : "bg-transparent"
//               )}>
//               </div>

//               {/* BorderBeam for first image */}
//               <BorderBeam
//                 size={60}
//                 duration={12}
//                 delay={9}
//                 colorFrom="#3b82f6"
//                 colorTo="#8b5cf6"
//               />
//             </div>

//             {/* Second Image (Resume) */}
//             <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg bg-gray-100 shadow-blue-400  shadow-lg  sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px] ">
//               <Image
//                 src="/resume.avif"
//                 width={600}
//                 height={600}
//                 quality={90}
//                 priority
//                 alt="Professional Resume Template"
//                 className="h-full w-full object-cover object-center"
//                 sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 400px, 600px"
//               />

//               {/* BorderBeam for second image */}
//               <BorderBeam
//                 size={60}
//                 duration={15}
//                 delay={0}
//                 colorFrom="#10b981"
//                 colorTo="#06b6d4"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
//           {/* Template Categories */}
//           <div className="flex h-10 w-56 divide-x overflow-hidden rounded-lg border sm:h-12 sm:w-64">
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Modern</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Professional</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Creative</a>
//           </div>

//           {/* Social Links */}
//           <div className="flex items-center justify-center gap-3 lg:justify-start sm:gap-4">
//             <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">Share</span>
//             <span className="h-px w-8 bg-gray-200 sm:w-12"></span>

//             <div className="flex gap-3 sm:gap-4">
//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HeroSection;








// "use client";

// import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
// import TextType from './TextType';
// import { Button } from './ui/button';
// import { GridPattern } from './ui/Dotpattern';
// import { BorderBeam } from './ui/Borederbeam';
// import { Playpen_Sans_Hebrew, Karla } from 'next/font/google';
// import { FlipButton } from './ui/flip';
// import Image from 'next/image';
// import { cn } from "@/lib/utils";

// const libertinus = Playpen_Sans_Hebrew({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-libertinus',
// });

// const Rak = Karla({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-libertinus',
// });

// const HeroSection = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (

//     <div>
//     <div className="relative flex pb-6  h-full w-full mt-0 pt-0 flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">


//       <GridPattern
//         width={20}
//         height={20}
//         x={-1}
//         y={-1}
//         className={cn(
//           "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] ",
//         )}
//       />

//       {/* Content container */}
//       <section className="mx-auto max-w-screen-2xl px-4 md:px-8 w-full relative z-10 py-12">

//         <div className="mb-8 flex flex-wrap justify-between md:mb-16">
//           {/* Text Content */}
//           <div className="relative mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">

//             {/* Text Content */}
//             <div className="relative z-10">

//               <h1 className={`mb-4 text-3xl ${Rak.className} font-bold text-black sm:text-5xl md:mb-8 md:text-6xl lg:text-8xl`}>
//                 LinkedIn to<br />Resume in{' '}
//                 <span className="bg-clip-text text-transparent ">
//                   <br />
//                   <TextType text={["in Click", "in Sec"]} textColors={["#33A1E0"]} />
//                 </span>
//               </h1>

//               {/* CTA Button */}
//               <div className="mt-6 sm:mt-8">
//                 <FlipButton frontText='Make Resume' backText='Shine On' className={`text-5xl text-center ${libertinus.className}`} />
//               </div>
//             </div>
//           </div>

//           {/* Images Section */}
//           <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
//             {/* First Card with Image/Video */}
//             <div
//               className="relative left-6 top-6 z-10 -ml-6 h-[300px] w-[300px] overflow-hidden rounded-lg shadow-blue-400 shadow-lg sm:left-8 sm:top-8 sm:h-[350px] sm:w-[350px] md:left-12 md:top-12 md:-ml-12 md:h-[400px] md:w-[400px] lg:ml-0 lg:h-[600px] lg:w-[600px] border-2 border-blue-50"
//               onMouseEnter={() => setIsHovered(true)}
//               onMouseLeave={() => setIsHovered(false)}
//             >
//               {/* Image with fade-out animation */}
//               <div className={cn(
//                 "absolute inset-0 transition-all duration-500 ease-in-out",
//                 isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
//               )}>
//                 <Image
//                   src="/vasu.jpg"
//                   width={600}
//                   height={600}
//                   quality={90}
//                   priority
//                   alt="LinkedIn Profile Example"
//                   className="h-full w-full object-cover object-top"
//                 />
//               </div>

//               {/* Video with fade-in animation */}
//               <div className={cn(
//                 "absolute inset-0 transition-all duration-500 ease-in-out",
//                 isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
//               )}>
//                 <video
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="h-full w-full object-cover object-top"
//                 >
//                   <source src="/herovedio.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>

//               <div className={cn(
//                 "absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500",
//                 isHovered ? "bg-black bg-opacity-50" : "bg-transparent"
//               )}>
//               </div>

//               {/* BorderBeam for first image */}
//               <BorderBeam
//                 size={60}
//                 duration={12}
//                 delay={9}
//                 colorFrom="#3b82f6"
//                 colorTo="#8b5cf6"
//               />
//             </div>

//             {/* Second Image (Resume) */}
//             <div className="relative h-[300px] w-[300px] overflow-hidden rounded-lg bg-gray-100 shadow-blue-400 shadow-lg sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[600px] lg:w-[600px]">
//               <Image
//                 src="/resume.avif"
//                 width={600}
//                 height={600}
//                 quality={90}
//                 priority
//                 alt="Professional Resume Template"
//                 className="h-full w-full object-cover object-center"
//                 sizes="(max-width: 768px) 300px, (max-width: 1024px) 350px, 400px, 600px"
//               />

//               {/* BorderBeam for second image */}
//               <BorderBeam
//                 size={60}
//                 duration={15}
//                 delay={0}
//                 colorFrom="#10b981"
//                 colorTo="#06b6d4"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
//           {/* Template Categories */}
//           <div className="flex h-10 w-56 divide-x overflow-hidden rounded-lg border sm:h-12 sm:w-64">
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Modern</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Professional</a>
//             <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Creative</a>
//           </div>

//           {/* Social Links */}
//           <div className="flex items-center justify-center gap-3 lg:justify-start sm:gap-4">
//             <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">Share</span>
//             <span className="h-px w-8 bg-gray-200 sm:w-12"></span>

//             <div className="flex gap-3 sm:gap-4">
//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                 </svg>
//               </a>

//               <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                 <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                 </svg>
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//     </div>
//   );
// };

// export default HeroSection;



// "use client";

// import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
// import TextType from './TextType';
// import { Button } from './ui/button';
// import Squares from './ui/Boxes';
// import { BorderBeam } from './ui/Borederbeam';
// import { Playpen_Sans_Hebrew, Karla } from 'next/font/google';
// import { FlipButton } from './ui/flip';
// import Image from 'next/image';
// import { cn } from "@/lib/utils";

// const libertinus = Playpen_Sans_Hebrew({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-libertinus',
// });

// const Rak = Karla({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-libertinus',
// });

// const HeroSection = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="-mt-1">


//       <div className="relative flex pb-6 h-full w-full flex-col items-center justify-center overflow-hidden rounded-none border-0 bg-background">
//         <Squares
//           speed={0.5}
//           squareSize={40}
//           direction='diagonal' // up, down, left, right, diagonal
//           borderColor='#33A1E0'
//           hoverFillColor='#222'

//         />
//         {/* Content container */}
//         <section className="mx-auto max-w-screen-2xl px-4 md:px-8 w-full relative z-10 py-6 sm:py-8 md:py-12">
//           <div className="mb-8 flex flex-wrap justify-between md:mb-16">
//             {/* Text Content */}
//             <div className="relative mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-12 lg:pt-24 xl:pb-24 xl:pt-48">
//               {/* Text Content */}
//               <div className="relative z-10">
//                 <h1 className={`mb-4 text-3xl ${Rak.className} font-bold text-black sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl`}>
//                   LinkedIn to<br />Resume in{' '}
//                   <span className="bg-clip-text text-transparent ">
//                     <br />
//                     <TextType text={["in Click", "in Sec"]} textColors={["#33A1E0"]} />
//                   </span>
//                 </h1>

//                 {/* CTA Button */}
//                 <div className="mt-4 sm:mt-6 md:mt-8">
//                   <FlipButton frontText='Make Resume' backText='Shine On' className={`text-3xl sm:text-4xl md:text-5xl text-center ${libertinus.className}`} />
//                 </div>
//               </div>
//             </div>

//             {/* Images Section */}
//             <div className="mb-8 flex w-full md:mb-12 lg:mb-16 lg:w-2/3">
//               {/* First Card with Image/Video */}
//               <div
//                 className="relative left-4 top-4 z-10 -ml-4 h-[250px] w-[250px] overflow-hidden rounded-lg shadow-blue-400 shadow-lg sm:left-6 sm:top-6 sm:-ml-6 sm:h-[280px] sm:w-[280px] md:left-8 md:top-8 md:-ml-8 md:h-[320px] md:w-[320px] lg:left-12 lg:top-12 lg:ml-0 lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px] border-2 border-blue-50"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               >
//                 {/* Image with fade-out animation */}
//                 <div className={cn(
//                   "absolute inset-0 transition-all duration-500 ease-in-out",
//                   isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
//                 )}>
//                   <Image
//                     src="/vasu.jpg"
//                     width={600}
//                     height={600}
//                     quality={90}
//                     priority
//                     alt="LinkedIn Profile Example"
//                     className="h-full w-full object-cover object-top"
//                   />
//                 </div>

//                 {/* Video with fade-in animation */}
//                 <div className={cn(
//                   "absolute inset-0 transition-all duration-500 ease-in-out",
//                   isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
//                 )}>
//                   <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="h-full w-full object-cover object-top"
//                   >
//                     <source src="/herovedio.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>

//                 <div className={cn(
//                   "absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500",
//                   isHovered ? "bg-black bg-opacity-50" : "bg-transparent"
//                 )}>
//                 </div>

//                 {/* BorderBeam for first image */}
//                 <BorderBeam
//                   size={60}
//                   duration={12}
//                   delay={9}
//                   colorFrom="#3b82f6"
//                   colorTo="#8b5cf6"
//                 />
//               </div>

//               {/* Second Image (Resume) */}
//               <div className="relative h-[250px] w-[250px] overflow-hidden rounded-lg bg-gray-100 shadow-blue-400 shadow-lg sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px]">
//                 <Image
//                   src="/resume.avif"
//                   width={600}
//                   height={600}
//                   quality={90}
//                   priority
//                   alt="Professional Resume Template"
//                   className="h-full w-full object-cover object-center"
//                   sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 500px, 600px"
//                 />

//                 {/* BorderBeam for second image */}
//                 <BorderBeam
//                   size={60}
//                   duration={15}
//                   delay={0}
//                   colorFrom="#10b981"
//                   colorTo="#06b6d4"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Bottom Section */}
//           <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row md:gap-8">
//             {/* Template Categories */}
//             <div className="flex h-8 w-48 divide-x overflow-hidden rounded-lg border sm:h-10 sm:w-56 md:h-12 md:w-64">
//               <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Modern</a>
//               <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Professional</a>
//               <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Creative</a>
//             </div>

//             {/* Social Links */}
//             <div className="flex items-center justify-center gap-2 lg:justify-start sm:gap-3 md:gap-4">
//               <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">Share</span>
//               <span className="h-px w-6 bg-gray-200 sm:w-8 md:w-12"></span>

//               <div className="flex gap-2 sm:gap-3 md:gap-4">
//                 <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                   <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//                   </svg>
//                 </a>

//                 <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                   <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//                   </svg>
//                 </a>

//                 <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
//                   <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                     <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;









"use client";

import React, { useState } from 'react';
import TextType from './TextType';
import { BorderBeam } from './ui/Borederbeam';
import { ShimmerButton } from './ui/shimmer-button';
import { Yusei_Magic } from 'next/font/google';
import { FlipButton } from './ui/flip';
import Image from 'next/image';
import { cn } from "@/lib/utils";



const Rak = Yusei_Magic({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rak',
});

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="-mt-1 relative">
      {/* Gradient background */}
      <div
        className="absolute lg:mt-[300px] inset-0 blur-xl h-[200px] pointer-events-none"
        style={{
          background:
            'linear-gradient(143.6deg, rgba(51, 161, 224, 0.4) 20.79%, rgba(51, 161, 224, 0.2) 50%, rgba(51, 161, 224, 0.05) 80%)',
        }}
      />


      {/* Content container */}
      <div className="relative flex pb-6 h-full lg:mt-12 w-full flex-col items-center justify-center overflow-hidden rounded-none border-0 bg-background/30 backdrop-blur-sm lg:flex-row">

        {/* Text Content - now on the left */}
        <div className="relative mb-6 flex text-center pt-5 w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-12 lg:pt-24 xl:pb-24 xl:pt-48 lg:pl-12">
          <div className="relative z-10 mt-5">
            <h1 className={`mb-4 opacity-80 text-5xl ${Rak.className} font-bold text-black sm:text-5xl   md:text-5xl lg:text-6xl xl:text-8xl`}>
              LinkedIn to<br />Resume in{' '}
              <span className="relative">
                <span className="absolute inset-0 bg-[#33A1E0]/20 rounded-lg -z-10 transform scale-105" />
                <span className="bg-clip-text text-transparent relative">
                  <br />
                  <TextType text={["in Click", "in Sec"]} textColors={["#33A1E0"]} />
                </span>
              </span>
            </h1>

            {/* CTA Button */}
            <div className="mx-1 relative group flex justify-center sm:justify-start">
              <ShimmerButton className="shadow-2xl text-2xl text-center lg:text-5xl  sm:ml-28">
                <span>Start Building</span>
              </ShimmerButton>
            </div>

          </div>
        </div>

        {/* Images Section - now on the right */}
        <div className="mb-12 mx-9  flex w-full md:mb-9 lg:mb-16 lg:w-2/3 lg:pr-12 lg:mt-12">
          {/* Profile Image with Hover Video */}
          <div
            className="relative left-4 top-4 z-10 -ml-4 h-[250px] w-[250px] overflow-hidden rounded-lg shadow-blue-400 shadow-lg sm:left-6 sm:top-6 sm:-ml-6 sm:h-[280px] sm:w-[280px] md:left-8 md:top-8 md:-ml-8 md:h-[320px] md:w-[320px] lg:left-12 lg:top-12 lg:ml-0 lg:h-[600px] lg:w-[500px] xl:h-[600px] xl:w-[600px] border-2 border-blue-50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={cn(
                "absolute inset-0 transition-all duration-500 ease-in-out",
                isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              <Image
                src="/vasu.jpg"
                width={600}
                height={600}
                quality={90}
                priority
                alt="LinkedIn Profile Example"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div
              className={cn(
                "absolute inset-0 transition-all duration-500 ease-in-out",
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
              )}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover object-top"
              >
                <source src="/herovedio.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div
              className={cn(
                "absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500",
                isHovered ? "bg-black bg-opacity-50" : "bg-transparent"
              )}
            />

            <BorderBeam
              size={60}
              duration={12}
              delay={9}
              colorFrom="#3b82f6"
              colorTo="#8b5cf6"
            />
          </div>

          {/* Resume Image */}
          <div className="relative h-[250px] w-[250px] overflow-hidden rounded-lg bg-gray-100 shadow-blue-400 shadow-lg sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[600px] lg:w-[500px] xl:h-[600px] xl:w-[600px]">
            <Image
              src="/resume.avif"
              width={600}
              height={600}
              quality={90}
              priority
              alt="Professional Resume Template"
              className="h-full w-full object-cover object-top"
              sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 600px, 600px"
            />
            <BorderBeam
              size={60}
              duration={15}
              delay={0}
              colorFrom="#10b981"
              colorTo="#06b6d4"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 md:flex-row md:gap-8">
        {/* Template Categories */}
        <div className="flex h-8 w-48 divide-x overflow-hidden rounded-lg border sm:h-10 sm:w-56 md:h-12 md:w-64">
          <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Modern</a>
          <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Professional</a>
          <a href="#" className="flex w-1/3 items-center justify-center text-xs text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:text-sm">Creative</a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-2 lg:justify-start sm:gap-3 md:gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 sm:text-sm">Share</span>
          <span className="h-px w-6 bg-gray-200 sm:w-8 md:w-12"></span>

          <div className="flex gap-2 sm:gap-3 md:gap-4">
            {/* Instagram */}
            <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ..." />
              </svg>
            </a>
            {/* Twitter */}
            <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832..." />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" target="_blank" className="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
              <svg className="h-4 w-4 sm:h-5 sm:w-5" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569..." />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;









