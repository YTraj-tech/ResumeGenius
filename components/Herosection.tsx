// "use client";

// import React, { useState } from 'react';
// import TextType from './TextType';
// import { ImageComparison } from "@/components/ui/Compare"
// import { BorderBeam } from './ui/Borederbeam';
// import { GridPattern } from './ui/background-ripple-effect';
// import { ShimmerButton } from './ui/shimmer-button';
// import { Yusei_Magic } from 'next/font/google';
// import { FlipButton } from './ui/flip';
// import Image from 'next/image';
// import {Knewave} from  "next/font/google";
// import { cn } from "@/lib/utils";
// import { Fullscreen, Square } from 'lucide-react';

// const Rak = Yusei_Magic({
//   subsets: ["latin"],
//   weight: ['400'],
//   variable: '--font-rak',
// });

// const Kne = Knewave({
//    subsets:["latin"],
//    weight:["400"],
//    variable:"--font-rak"
// })

// const Herosection = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="relative bg-[#0046FF] rounded-br-[400px]  h-500px flex lg:pt-[70px]  w-full flex-col items-start justify-start overflow-hidden">
//       {/* Grid Background */}
//       <GridPattern
//         width={30}
//         height={30}
//         x={-1}
//         y={-1}
//         strokeDasharray={"4 2"}
//         className={cn(
//           "absolute inset-0 -z-10  h-full w-full [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
//         )}
//       />

//       {/* Main Content Container */}
//       <div className="relative flex  w-full flex-col items-center  overflow-hidden rounded-none  lg:flex-row z-10">
//         {/* Text Content - Reduced padding to move text closer to top */}
//         {/* Faded blue background for the divider area */}

//         <div className="relative lg:ml-[30px] flex text-center w-full my-5 flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-12 pt-4 lg:pt-8 xl:pb-24 xl:pt-12 lg:pl-12">
//           <div className="relative z-10 mt-2">
//             <h1 className={`mb-4 text-5xl ${Rak.className} font-bold text-[#EAA64D] sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl`}>
//               LinkedIn to<br />Resume in{' '}
//               <span className="relative">
//                 <br />
//                 <TextType text={["in Click", "in Sec"]} textColors={["white"]} />
//               </span>
//             </h1>

//             {/* CTA Button */}
//             <div className="mx-3 lg:pt-[70px]  relative group flex justify-center sm:justify-start">
//               <ShimmerButton className="shadow-2xl text-2xl text-center lg:text-5xl sm:ml-28">
//                 <span className={`${Kne.className}lg:my-3 lg:mx-3`}>Start Building</span>
//               </ShimmerButton>
//             </div>
//           </div>
//         </div>

//         {/* Images Section */}
//         <div className="mb-12 mt-9 flex w-full md:mb-9 lg:mb-16 lg:ml-[150px] lg:w-1/2  lg:mt-[100px]">
//           {/* Profile Image with Hover Video */}
//           <div
//             className="relative mt-5 ml-2 left-4 top-4 z-10  h-[250px] w-[250px] overflow-hidden rounded-lg shadow-blue-400 shadow-lg sm:left-6 sm:top-6 sm:-ml-6 sm:h-[280px] sm:w-[280px] md:left-8 md:top-8 md:-ml-8 md:h-[320px] md:w-[320px] lg:left-12 lg:top-12 lg:ml-0 lg:h-[600px] lg:w-[500px] xl:h-[600px] xl:w-[600px] border-2 border-blue-50"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div
//               className={cn(
//                 "absolute inset-0 transition-all duration-500 ease-in-out",
//                 isHovered ? "opacity-0 scale-95" : "opacity-100 scale-100"
//               )}
//             >
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

//             <div
//               className={cn(
//                 "absolute inset-0 transition-all duration-500 ease-in-out",
//                 isHovered ? "opacity-100 scale-100" : "opacity-0 scale-105"
//               )}
//             >
//               <video
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 className="h-full w-full object-cover object-top"
//               >
//                 <source src="/herovedio.mp4" type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>

//             <div
//               className={cn(
//                 "absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-500",
//                 isHovered ? "bg-black bg-opacity-50" : "bg-transparent"
//               )}
//             />

//             <BorderBeam
//               size={60}
//               duration={12}
//               delay={9}
//               colorFrom="#3b82f6"
//               colorTo="#8b5cf6"
//             />
//           </div>

//           {/* Resume Image */}
//            <div className="relative pr-2  h-[250px] w-[250px] overflow-hidden rounded-lg shadow-blue-400 shadow-lg sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[600px] lg:w-[500px] xl:h-[600px] xl:w-[600px]">
//             <Image
//               src="/resume.avif"
//               width={600}
//               height={600}
//               quality={90}
//               priority
//               alt="Professional Resume Template"
//               className="h-full w-full object-cover object-top"
//               sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 600px, 600px"
//             />
//             <BorderBeam
//               size={60}
//               duration={15}
//               delay={0}
//               colorFrom="#10b981"
//               colorTo="#06b6d4"
//             />
//           </div>


//         </div>
//       </div>

//     </div>
//   )
// }

// export default Herosection;



// import React from 'react';
// import { ShimmerButton } from './ui/shimmer-button';
// import TextType from './TextType';
// import Image from 'next/image';
// import { Yusei_Magic } from 'next/font/google';
// import {Knewave} from 'next/font/google'


// const Rak  = Yusei_Magic({
//   subsets:["latin"],
//   weight:["400"],
//    variable:"--font-rak"
// })

// const Kne = Knewave({
//    subsets:["latin"],
//    weight:["400"],
//    variable:"--font-rak"
// })


// const Herosection = () => {
//   return (
//     <div className="h-[600px] flex items-center justify-center bg-gradient-to-tr from-blue-800 via-blue-600 to-blue-300 rounded-bl-[100px] md:rounded-bl-[200px]">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
//               <div className="relative lg:ml-[30px] flex text-center w-full my-5 flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-12 pt-4 lg:pt-8 xl:pb-24 xl:pt-12 lg:pl-12">
//            <div className="relative z-10 mt-2">
//              <h1 className={`mb-4 text-5xl ${Rak.className} font-bold text-[#EAA64D] sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl`}>
//                LinkedIn to<br />Resume in{' '}
//                <span className="relative">
//                  <br />
//                  <TextType text={["in Click", "in Sec"]} textColors={["white"]} />
//                </span>
//              </h1>

//              {/* CTA Button */}
//              <div className="mx-3 lg:pt-[70px]  relative group flex justify-center sm:justify-start">
//                <ShimmerButton className="shadow-2xl text-2xl text-center lg:text-5xl sm:ml-28">
//                  <span className={`${Kne.className}lg:my-3 lg:mx-3`}>Start Building</span>
//                </ShimmerButton>
//              </div>
//            </div>
//          </div>
//         {/* Right side - Image */}
//         <div className="md:w-1/2 flex  md:justify-end relative">
//           <Image
//             src="/img240.png"
//             alt="Illustration of Next.js features"
//             width={625}
//             height={1000}
//             className=" lg:h-[600px] lg:w-[900px] lg:mt-[200px] translate-y-5  "
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Herosection;





import React from 'react';
import { Tinos } from 'next/font/google';
import { Highlighter } from "@/components/ui/Highlighter"
import { Merriweather } from "next/font/google"
import Image from 'next/image';

const Rak = Tinos({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rak"
});

const Kne = Merriweather({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-kne"
});

const Herosection = () => {
  return (
    <div className="h-[600px] pt-[300px] lg:pt-[100px] flex items-center justify-center  rounded-bl-[100px] md:rounded-bl-[200px] py-12"
      style={{ background: "linear-gradient(to right, #1e40af, #2563eb, #60a5fa)" }}
    >
      <div className="container px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12">
        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left max-w-2xl order-1 md:order-1">
          <div className="space-y-6 lg:mt-[50px] md:space-y-8">
            {/* Main Heading */}
            <h1 className={`${Rak.className}  font-bold text-white leading-[1.1] tracking-tight`}>
              <span className="relative">
                <span className="text-white  font-bold text-5xl sm:text-5xl lg:text-6xl xl:text-7xl">

                  LinkedIn URL

                  to
                  Resume
                  in
                  <br />
                  <Highlighter action='underline' color="#FF9800" iterations={3} padding={1}>
                    One Click
                  </Highlighter>
                  <br />
                </span>
                {/* <svg
                  className="absolute -bottom-3 left-0 w-full h-3 sm:-bottom-5 sm:h-4"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,8 Q50,0 100,8"
                    stroke="#22c55e"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg> */}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-blue-100 text-lg sm:text-xl md:text-xl lg:text-2xl leading-relaxed font-light max-w-xl mx-auto md:mx-0">
              Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
            </p>

            {/* CTA Buttons */}
            <div className="pt-4 md:pt-6 lg:mt-[-30px] w-full flex justify-center md:justify-start">
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                  <span className='lg:text-lg text-xl'>
                   Click to build
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
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="mb-12 mt-9 flex w-full md:mb-9 lg:mb-16 lg:ml-[150px] lg:w-1/2 lg:mt-[100px] order-2 md:order-2">
          {/* Profile Image */}
          <div className="relative mt-5 ml-2 left-4 top-4 z-10 h-[250px] w-[250px] overflow-hidden rounded-lg shadow-blue-400 shadow-lg sm:left-6 sm:top-6 sm:-ml-6 sm:h-[280px] sm:w-[280px] md:left-8 md:top-8 md:-ml-8 md:h-[320px] md:w-[320px] lg:left-12 lg:top-12 lg:ml-0 lg:h-[500px] lg:w-[500px] xl:h-[500px] xl:w-[600px] border-2 border-blue-50">
            <Image
              src="/vasu.jpg"
              width={600}
              height={800}
              quality={90}
              priority
              alt="LinkedIn Profile Example"
              className="  w-full h-full object-cover object-top"
              sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 600px, 600px"
            />
          </div>

          {/* Resume Image */}
          <div className="relative pr-2 h-[250px] w-[250px] overflow-hidden rounded-lg shadow-blue-400 shadow-lg sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[500px] lg:w-[500px] xl:h-[500px] xl:w-[600px]">
            <Image
              src="/resume.avif"
              width={600}
              height={600}
              quality={90}
              priority
              alt="Professional Resume Template"
              className="h-full w-full object-top"
              sizes="(max-width: 640px) 250px, (max-width: 768px) 280px, (max-width: 1024px) 320px, (max-width: 1280px) 600px, 600px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;