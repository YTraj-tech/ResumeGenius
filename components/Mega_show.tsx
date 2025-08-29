// import React from 'react';
// import Image from 'next/image';
// import CardFlip from './ui/Card_flip';

// const MegaShow = () => {
//   return (
//     <div
//       className='lg:mt-[100px] h-[600px] mx-[200px] rounded-tr-[100px] flex items-center justify-between p-8'
//       style={{ background: "radial-gradient(ellipse at top left, #1e293b, #0f172a, #0f172a)" }}
//     >
//       <div className="text-white max-w-[50%]">
//         <h1 className="text-5xl font-bold mb-6">
//           Build a flexible card<br />
//           program for your<br />
//           business needs
//         </h1>
//         <p className="text-gray-300 text-lg mb-8 leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
//           eiusmod tempor incididunt ut labore et dolore magna aliqua 
//           minim veniam, quis nostrud exercitation.
//         </p>

//         <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
//           Get your card 
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>

//         <div className="mt-8 flex items-center gap-4">
//           <p className="text-gray-300 text-sm">
//             "We know the card market very well and this product<br />
//             provides the speed, flexible account model and API-first<br />
//             approach that no one else can."
//           </p>
//         </div>
//       </div>

//       <div className="relative w-[400px] h-[400px] lg:mr-[100px] flex flex-col items-end justify-center gap-[-50px]">
//         {/* Top card - positioned at top right */}
//          <div className="transform rotate-12 z-30">
//           <Image
//             src="/main3.png"
//             alt="Card 1"
//             width={220}
//             height={140}
//             className="h-[200px] w-[150px] shadow-2xl"
//           />
//         </div>

//         {/* Middle card - positioned below top card */}
//          <div className="transform rotate-[-15deg] z-20">
//           <Image
//             src="/main03.png"
//             alt="Card 2"
//             width={220}
//             height={140}
//             className="rounded-xl h-[200px] w-[150px] shadow-2xl"
//           />
//         </div>

//         {/* Bottom card - positioned below middle card */}
//         <div className="transform rotate-6 z-10">
//           <Image
//             src="/main6.png"
//             alt="Card 3"
//             width={220}
//             height={140}
//             className="rounded-xl h-[200px] w-[150px] shadow-2xl"
//           />
//         </div>



//       </div>
//     </div>
//   );
// };

// export default MegaShow;




// "use client";

// import { Tabs } from "./ui/tabs";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// // Define the props interface for DummyContent
// interface DummyContentProps {
//   image: string;
//   onImageChange: (image: string) => void;
// }

// const MegaShowWithTabs = () => {
//   const [activeImage, setActiveImage] = useState("/main3.png");

//   // Define DummyContent component with proper typing
//   const DummyContent = ({ image, onImageChange }: DummyContentProps) => {
//     // Update the active image when this tab content is rendered
//     useEffect(() => {
//       onImageChange(image);
//     }, [image, onImageChange]);

//     return (
//       <img
//         src="/main02.png"
//         alt="dummy image"
//         width="1000"
//         height="1000"
//         className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
//       />
//     );
//   };

//   const tabs = [
//     {
//       title: "Product",
//       value: "product",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Product Tab</p>
//           <DummyContent image="/main03.png" onImageChange={setActiveImage} />
//         </div>
//       ),
//     },
//     {
//       title: "Services",
//       value: "services",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Services tab</p>
//           <DummyContent image="/main4.png" onImageChange={setActiveImage} />
//         </div>
//       ),
//     },
//     {
//       title: "Playground",
//       value: "playground",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Playground tab</p>
//           <DummyContent image="/main5.png" onImageChange={setActiveImage} />
//         </div>
//       ),
//     },
//     {
//       title: "Content",
//       value: "content",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Content tab</p>
//           <DummyContent image="/main6.png" onImageChange={setActiveImage} />
//         </div>
//       ),
//     },
//     {
//       title: "Random",
//       value: "random",
//       content: (
//         <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Random tab</p>
//           <DummyContent image="/step1.png" onImageChange={setActiveImage} />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div
//       className='lg:mt-[100px] h-[800px] mx-[50px] lg:mx-[200px] rounded-tr-[100px] flex flex-col lg:flex-row items-center justify-between p-8'
//       style={{ background: "radial-gradient(ellipse at top left, #1e293b, #0f172a, #0f172a)" }}
//     >
//       <div className="text-white max-w-full lg:max-w-[50%] mb-10 lg:mb-0">
//         <h1 className="text-4xl lg:text-5xl font-bold mb-6">
//           Build a flexible card<br />
//           program for your<br />
//           business needs
//         </h1>
//         <p className="text-gray-300 text-lg mb-8 leading-relaxed">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
//           eiusmod tempor incididunt ut labore et dolore magna aliqua 
//           minim veniam, quis nostrud exercitation.
//         </p>

//         <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center gap-2">
//           Get your card 
//           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//           </svg>
//         </button>

//         <div className="mt-8 flex items-center gap-4">
//           <p className="text-gray-300 text-sm">
//             "We know the card market very well and this product<br />
//             provides the speed, flexible account model and API-first<br />
//             approach that no one else can."
//           </p>
//         </div>

//         {/* Tabs component */}
//         <div className="mt-12">
//           <Tabs tabs={tabs} />
//         </div>
//       </div>

//       {/* Right side with card images */}
//       <div className="relative w-full lg:w-[400px] h-[400px] lg:mr-[100px] flex flex-col items-end justify-center">
//         {/* Card stack with the active image */}
//         <div className="transform rotate-12 z-30">
//           <Image
//             src={activeImage}
//             alt="Active Card"
//             width={220}
//             height={140}
//             className="h-[200px] w-[150px] shadow-2xl rounded-xl"
//           />
//         </div>

//         {/* Additional cards for visual effect */}
//         <div className="transform rotate-[-15deg] z-20 mt-[-80px]">
//           <Image
//             src="/main03.png"
//             alt="Card 2"
//             width={220}
//             height={140}
//             className="rounded-xl h-[200px] w-[150px] shadow-2xl opacity-80"
//           />
//         </div>

//         <div className="transform rotate-6 z-10 mt-[-80px]">
//           <Image
//             src="/main6.png"
//             alt="Card 3"
//             width={220}
//             height={140}
//             className="rounded-xl h-[200px] w-[150px] shadow-2xl opacity-60"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MegaShowWithTabs;



// MegaShow.tsx
// import React from 'react';
// import {Tabs} from './ui/tabs'; // Adjust the import path as needed

// const MegaShow = () => {
//     const image1 = "/step1.png";
//   const image2 = "/step2.png";
//   const image3 = "/step3.png";
//   const tabs = [
//     {
//       title: "Feature One",
//       value: "feature-one",
//       content: (
//         <div className="w-full overflow-hidden relative h-60 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
//           <p>Feature One</p>
//           <img src={image1} alt="feature one" className="absolute bottom-0 right-0 w-40 h-40 object-cover rounded-lg" />
//         </div>
//       ),
//     },
//     {
//       title: "Feature Two",
//       value: "feature-two",
//       content: (
//         <div className="w-full overflow-hidden relative h-60 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-cyan-700 to-sky-900">
//           <p>Feature Two</p>
//           <img src={image2} alt="feature two" className="absolute bottom-0 right-0 w-40 h-40 object-cover rounded-lg" />
//         </div>
//       ),
//     },
//     {
//       title: "Feature Three",
//       value: "feature-three",
//       content: (
//         <div className="w-full overflow-hidden relative h-60 rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-emerald-700 to-green-900">
//           <p>Feature Three</p>
//           <img src={image3} alt="feature three" className="absolute bottom-0 right-0 w-40 h-40 object-cover rounded-lg" />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="flex flex-col md:flex-row items-start gap-10 p-8 max-w-6xl mx-auto"
//       style={{    background: "linear-gradient(to top, #1e293b, #1e293b, #1e293b);"}}
//       >
//       {/* Left side text content */}
//       <div className="flex-1">
//         <h2 className="text-3xl font-bold mb-4">Amazing Features</h2>
//         <p className="text-gray-600 mb-6">
//           Discover our incredible features...
//         </p>
//         <p className="text-gray-600">
//           Explore the tabs to learn more...
//         </p>
//       </div>

//       {/* Right side tabs */}
//       <div className="flex-1 w-full">
//         <Tabs tabs={tabs} />
//       </div>
//     </div>
//   );
// };

// export default MegaShow;



// import React from 'react'
// import { Tabs } from './ui/tabs'

// const MeghaShow = () => {
//   const tabs = [
//     {
//       title: "Nature",
//       value: "nature",
//       content: (
//         <div className="w-full overflow-hidden relative h-96 rounded-xl">
//           <img
//             src="/step1.png"
//             alt="Nature"
//             className="object-contain w-full h-full"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Architecture",
//       value: "architecture",
//       content: (
//         <div className="w-full overflow-hidden relative h-96 rounded-xl">
//           <img
//             src="/step2.png"
//             alt="Architecture"

//           />
//         </div>
//       ),
//     },
//     {
//       title: "Technology",
//       value: "technology",
//       content: (
//         <div className="w-full overflow-hidden relative h-96 rounded-xl">
//           <img
//             src="/step3.png"
//             alt="Technology"
//             className="object-cover w-full h-full"
//           />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="h-[600px] mt-[100px] rounded-tr-[200px] lg:mx-[150px] p-4 bg-gradient-to-r from-gray-800 via-slate-800 to-slate-800">
//       <div className="flex h-full">
//         {/* Left side with text content */}
//         <div className="w-1/2 pr-8 flex flex-col justify-center">
//           <h2 className="text-4xl font-bold text-white mb-6">Discover Our World</h2>
//           <p className="text-gray-300 text-lg mb-4">
//             Explore the beauty of nature, marvel at stunning architecture, and dive into the latest technology innovations.
//           </p>
//           <p className="text-gray-300 text-lg">
//             Our collection showcases the best of what our world has to offer across these three fascinating categories.
//           </p>
//         </div>

//         {/* Right side with tabs component */}
//         <div className="w-1/3 lg:mx-[50px]">
//           <Tabs tabs={tabs} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeghaShow;




// import React from 'react'
// import { Tabs } from './ui/tabs'

// const MeghaShow = () => {
//   const tabs = [
//     {
//       title: "Nature",
//       value: "nature",
//       content: (
//         <div className="w-full overflow-hidden relative h-96 rounded-xl">
//           <img
//             src="/step1.png"
//             alt="Nature"
//             className=" w-full h-full lg:h-[450px] lg:w-[600px] "
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Architecture",
//       value: "architecture",
//       content: (
//         <div className="w-full overflow-hidden relative h-96 rounded-xl">
//           <img
//             src="/step2.png"
//             alt="Architecture"
//             className="object-contain w-full h-full"
//           />
//         </div>
//       ),
//     },
//     {
//       title: "Technology",
//       value: "technology",
//       content: (
//         <div className="w-full overflow-hidden relative h-96 rounded-xl">
//           <img
//             src="/step3.png"
//             alt="Technology"
//             className="object-cover w-full h-full"
//           />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="h-[600px]  mt-[95px] rounded-tr-[150px] lg:mx-[270px] p-4 bg-gradient-to-r from-gray-800 via-slate-800 to-slate-800">
//       <div className="flex h-full">
//         {/* Left side with text content */}
//           <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center  lg:px-[30px] lg:py-[30px]  ">
//               <div className="mb-6">
//                 <div className="flex items-center space-x-2 mb-4">
//                   <span className="text-blue-400 font-semibold text-sm sm:text-base">LinkedIn to Resume</span>
//                 </div>
//                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
//                   Transform Your
//                   <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> LinkedIn </span>
//                   Into a Professional Resume
//                 </h1>
//               </div>

//               <div className="space-y-4 mb-6 sm:mb-8">
//                 <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//                   Convert your LinkedIn profile into a stunning, professionally formatted resume in just a few clicks. 
//                 </p>
//                 <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//                   Choose from multiple templates, let our AI extract your information, and download your resume instantly.
//                 </p>
//               </div>


//             </div>

//         {/* Right side with tabs component */}
//         <div className="w-1/2 lg:px-[30px]  ">
//           <Tabs tabs={tabs} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeghaShow;


// import React from 'react'
// import { Tabs } from './ui/tabs'
// import { AnimatedShinyText } from './ui/ArrowRightIcon';
// import { ArrowRightIcon } from "@radix-ui/react-icons";
// import { cn } from '@/lib/utils';
// import { Cabin } from "next/font/google"
// import { Merriweather } from "next/font/google"
// import { PixelImage } from './ui/pixel-image';

// const Rak = Merriweather({
//   subsets: ["latin"],
//   weight: ["400"]

// })

// const ca = Cabin({
//   subsets: ["latin"],
//   weight: ["400"]
// })


// const MeghaShow = () => {
//   const tabs = [
//     {
//       title: " Linkdin url ",
//       value: "nature",
//       content: (
//         <div className="w-full overflow-hidden relative h-64 sm:h-80 lg:h-96 rounded-2xl">
//           <PixelImage
//             src="/step1.png"
//             grid="6x4"
//             grayscaleAnimation={true}

//           />
//         </div>
//       ),
//     },
//     {
//       title: "Enter the url",
//       value: "architecture",
//       content: (
//         <div className="w-full overflow-hidden relative h-64 sm:h-80 lg:h-96 rounded-2xl">
//           <PixelImage
//             src="/step2.png"
//             grid="6x4"
//             grayscaleAnimation={true}

//           />
//         </div>
//       ),
//     },
//     {
//       title: "Select the temp",
//       value: "technology",
//       content: (
//         <div className="w-full overflow-hidden relative h-64 sm:h-80 lg:h-96 rounded-2xl">
//           <PixelImage
//             src="/step3.png"
//             grid="6x4"
//             grayscaleAnimation={true}

//           />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="h-[670px] mt-[95px] rounded-tr-[130px]  sm:mx-8 md:mx-16 lg:mx-[270px]  "
//       style={{ background: "linear-gradient(to right, #1e293b, #1e293b, #374151)" }}
//     >
//       {/* Desktop Layout - Side by side */}
//       <div className="hidden lg:flex h-full">

//         {/* Left side with text content - Desktop */}
//         <div className="w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center lg:px-[30px] lg:py-[30px]">
//           <div className={`mb-6 ${Rak.className} `}>
//             <div
//               className={cn(
//                 "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-5 w-fit",
//               )}
//             >

//               <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
//                 <span>✨ Linkdin to Resume</span>
//                 <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
//               </AnimatedShinyText>
//             </div>

//             <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
//               Transform Your
//               <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> LinkedIn </span>
//               Into a Professional Resume
//             </h1>
//           </div>

//           <div className="space-y-4 mb-6 sm:mb-8">
//             <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//               Convert your LinkedIn profile into a stunning, professionally formatted resume in just a few clicks.
//             </p>
//             <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
//               Choose from multiple templates, let our AI extract your information, and download your resume instantly.
//             </p>
//           </div>
//         </div>

//         {/* Right side with tabs component - Desktop */}
//         <div className="w-1/2 lg:mt-[30px]   lg:px-[30px] ">
//           <Tabs tabs={tabs} />
//         </div>
//       </div>

//       {/* Mobile/Tablet Layout - Stacked */}
//       <div className="lg:hidden mt-9 flex flex-col h-full">
//         {/* Text content - Mobile/Tablet */}
//         <div className="w-full p-4 sm:p-6 flex flex-col justify-center">
//           <div
//             className={cn(
//               "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-5 w-fit",
//             )}
//           >

//             <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
//               <span>✨ Linkdin to Resume</span>
//               <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
//             </AnimatedShinyText>
//           </div>
//           <div className={`mb-4 sm:mb-6 ${Rak.className} `}>

//             <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
//               Transform Your
//               <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> LinkedIn </span>
//               Into a Professional Resume
//             </h1>
//           </div>

//           <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
//             <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//               Convert your LinkedIn profile into a stunning, professionally formatted resume in just a few clicks.
//             </p>
//             <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
//               Choose from multiple templates, let our AI extract your information, and download your resume instantly.
//             </p>
//           </div>
//         </div>

//         {/* Tabs component - Mobile/Tablet (Below text) */}
//         <div className="w-full p-4 sm:p-6 flex-1">
//           <Tabs tabs={tabs} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MeghaShow;









import React from 'react'
import { Tabs } from './ui/tabs'
import { AnimatedShinyText } from './ui/ArrowRightIcon';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from '@/lib/utils';
import { Cabin } from "next/font/google"
import { Merriweather } from "next/font/google"


import { IoCopyOutline } from "react-icons/io5";
import { LuClipboardPaste } from "react-icons/lu";
import { GrSelect } from "react-icons/gr";


const Rak = Merriweather({
  subsets: ["latin"],
  weight: ["400"]
})

const ca = Cabin({
  subsets: ["latin"],
  weight: ["400"]
})

const MeghaShow = () => {
  const tabs = [
    {
      title: <IoCopyOutline/>,
      value: "nature",
      content: (
        <div className="w-full overflow-hidden relative h-64 sm:h-80 lg:h-96 rounded-2xl">
          <img
            src="/step1.png"
            alt="Nature"
            className="w-full h-full lg:h-[450px] lg:w-[600px] object-cover"
          />
        </div>
      ),
    },
    {
      title: <LuClipboardPaste/>,
      value: "architecture",
      content: (
        <div className="w-full overflow-hidden relative h-64 sm:h-80 lg:h-96 rounded-2xl">
          <img
            src="/step2.png"
            alt="Architecture"
            className="w-full h-full  shadow-lg shadow-blue-900 lg:h-[450px] lg:w-[600px] object-cover"
          />
        </div>
      ),
    },
    {
      title: <GrSelect/>,
      value: "technology",
      content: (
        <div className="w-full overflow-hidden relative h-64 sm:h-80 lg:h-96 rounded-2xl">
          <img
            src="/step3.png"
            alt="Technology"
            className="object-cover w-full h-full"
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-[670px] lg:h-[670px] mt-[95px] rounded-tr-[130px] sm:mx-8 md:mx-16 lg:mx-[270px]"
      style={{ background: "linear-gradient(to right, #1f2937, #334155, #4b5563)"}}
    >
      {/* Desktop Layout - Side by side */}
      <div className="hidden lg:flex h-full">
        {/* Left side with text content - Desktop */}
        <div className="w-1/2 p-6 sm:p-8 lg:p-12 flex flex-col justify-center lg:px-[30px] lg:py-[30px]">
          <div className={`mb-6 ${Rak.className}`}>
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-5 w-fit",
              )}
            >
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Linkdin to Resume</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>

            <h1 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> LinkedIn </span>
              Into a Professional Resume
            </h1>
          </div>

          <div className="space-y-4 mb-6 sm:mb-8">
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              Convert your LinkedIn profile into a stunning, professionally formatted resume in just a few clicks.
            </p>
            <p className="text-gray-300 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed">
              Choose from multiple templates, let our AI extract your information, and download your resume instantly.
            </p>
          </div>
        </div>

        {/* Right side with tabs component - Desktop */}
        <div className="w-1/2 flex flex-col justify-center lg:px-[30px] lg:py-[30px]">
          <div className="h-[500px] relative">
            <Tabs tabs={tabs} />
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Stacked */}
      <div className="lg:hidden mt-[30px] flex flex-col min-h-full">
        {/* Text content - Mobile/Tablet */}
        <div className="w-full p-4 sm:p-6 flex flex-col justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-5 w-fit",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Linkdin to Resume</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
          <div className={`mb-4 sm:mb-6 ${Rak.className}`}>
            <h1 className="text-3xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"> LinkedIn </span>
              Into a Professional Resume
            </h1>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Convert your LinkedIn profile into a stunning, professionally formatted resume in just a few clicks.
            </p>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Choose from multiple templates, let our AI extract your information, and download your resume instantly.
            </p>
          </div>
        </div>

        {/* Tabs component - Mobile/Tablet (Below text) */}
        <div className="w-full p-4 sm:p-6 flex-1 min-h-[300px]">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default MeghaShow;