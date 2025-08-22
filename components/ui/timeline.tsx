// "use client";
// import {
//   useMotionValueEvent,
//   useScroll,
//   useTransform,
//   motion,
// } from "motion/react";
// import React, { useEffect, useRef, useState } from "react";
// import { Yusei_Magic } from 'next/font/google';
// import {IBM_Plex_Sans_Condensed} from 'next/font/google'
// import { Noto_Sans } from 'next/font/google'
// import { GridPattern } from "./background-ripple-effect";
// import { cn } from '@/lib/utils';
// import next from "next";

// const Rak = Yusei_Magic({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-rak",
// })

// const Noto = Noto_Sans({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-rank"
// })

// const Fox = IBM_Plex_Sans_Condensed({
//   subsets:["latin"],
//   weight:["400"],
//   variable:"--font-Fox",

// })

// interface TimelineEntry {
//   title: string;
//   content: React.ReactNode;
// }

// export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [height, setHeight] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start 10%", "end 50%"],
//   });

//   const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

//   return (
//     <div className="relative w-full min-h-screen">
//       {/* Grid Background covering full screen */}
//       <div className="fixed inset-0 -z-10">
//         <GridPattern
//           width={30}
//           height={30}
//           x={-1}
//           y={-1}
//           strokeDasharray={"4 2"}
//           className={cn(
//             "h-full w-full [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
//           )}
//         />
//       </div>

//       <div
//         className="w-full bg-transparent font-sans md:px-10"
//         ref={containerRef}
//       >
//         <div className="max-w-7xl mx-auto py-9 px-4 md:px-8 lg:px-10">
//           <h2 className={`text-4xl text-center md:text-4xl mb-4 text-black lg:text-6xl dark:text-white max-w-4xl ${Rak.className}`}>
//             Build your resume in <span className="text-blue-300">3 simple steps</span>
//           </h2>

//           <p className={`${Noto.className} text-neutral-700 text-lg lg:text-3xl opacity-70 dark:text-neutral-300 md:text-base max-w-sm text-center md:text-left`}>
//             Simply enter your LinkedIn profile link
//           </p>
//         </div>

//         <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
//           {data.map((item, index) => (
//             <div
//               key={index}
//               className="flex justify-start pt-10 md:pt-40 md:gap-10"
//             >
//               <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
//                 <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
//                   <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
//                 </div>
//                 <h3 className={`hidden md:block text-xl  md:pl-20 md:text-5xl font-bold text-blue-300 dark:text-neutral-500 ${Rak.className} `}>
//                   {item.title}
//                 </h3>
//               </div>

//               <div className="relative pl-20 pr-4 md:pl-4 w-full">
//                 <h3 className={`md:hidden   block text-lg mb-4 text-left opacity-50  font-bold text-blue-300  dark:text-neutral-500 ${Fox.className} `}>
//                   {item.title}
//                 </h3>
//                 {item.content}{""}
//               </div>
//             </div>
//           ))}
//           <div
//             style={{
//               height: height + "px",
//             }}
//             className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
//           >
//             <motion.div
//               style={{
//                 height: heightTransform,
//                 opacity: opacityTransform,
//               }}
//               className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };




"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Yusei_Magic } from 'next/font/google';
import { IBM_Plex_Sans_Condensed } from 'next/font/google'
import { Noto_Sans } from 'next/font/google'
import { GridPattern } from "./background-ripple-effect";
import { cn } from '@/lib/utils';
import { BsMagic } from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";
import { SiCssdesignawards } from "react-icons/si";
import { GoRocket } from "react-icons/go";
import { SiEasyeda } from "react-icons/si";

const Rak = Yusei_Magic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rak",
})

const Noto = Noto_Sans({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rank"
})

const Fox = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-Fox",
})

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Grid Background covering full screen */}
      <div className="fixed inset-0 -z-10">
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

      <div
        className="w-full bg-transparent font-sans md:px-10"
        ref={containerRef}
      >
        <div className="max-w-7xl mx-auto py-9 px-4 md:px-8 lg:px-10">
          <h2 className={`text-4xl text-center md:text-4xl mb-4 text-black lg:text-6xl dark:text-white max-w-4xl ${Rak.className}`}>
            Build your resume in <span className="text-blue-300">3 simple steps</span>
          </h2>

          <p className={`${Noto.className} text-neutral-700 text-lg lg:text-3xl lg:ml-[40px] opacity-70 dark:text-neutral-300 md:text-base max-w-sm text-center md:text-left`}>
            Simply enter your LinkedIn profile link
          </p>
        </div>

        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-40 md:gap-10"
            >
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                </div>
                <h3 className={`hidden md:block text-xl lg:text-5xl md:pl-20 md:text-5xl font-bold text-blue-500 dark:text-neutral-500 ${Rak.className} `}>
                  {item.title}
                </h3>
              </div>

              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                {/* <h3 className={`md:hidden block text-lg mb-4 text-left opacity-50 font-bold text-white dark:text-neutral-500 ${Fox.className}`}>
                  {item.title}
                </h3> */}

                {/* 3D Card Integration */}
                <CardContainer className="inter-var">
                  <CardBody className="bg-blue-300 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">

                    <CardItem
                      as="div"
                      translateZ="60"
                      className="text-white text-sm max-w-full mt-2 dark:text-neutral-300"
                    >
                      {item.content}
                    </CardItem>
                    <div className="flex justify-between items-center mt-10">

                    </div>
                  </CardBody>
                </CardContainer>
              </div>
            </div>
          ))}
          <div
            style={{
              height: height + "px",
            }}
            className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
          >
            <motion.div
              style={{
                height: heightTransform,
                opacity: opacityTransform,
              }}
              className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};