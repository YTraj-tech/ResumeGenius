


// "use client"

// import React from 'react'
// import { cn } from '@/lib/utils';
// import { Timeline } from "@/components/ui/timeline";
// import { Noto_Sans } from 'next/font/google'
// import { Yusei_Magic } from 'next/font/google';

// import { BsMagic } from "react-icons/bs";
// import { GiOfficeChair } from "react-icons/gi";
// import { SiCssdesignawards } from "react-icons/si";
// import { GoRocket } from "react-icons/go";
// import { SiEasyeda } from "react-icons/si";
// const Rak = Yusei_Magic({
//     subsets: ['latin'],
//     weight: ['400'],
//     variable: '--font-rak',
// });

// const Noto = Noto_Sans({
//     subsets: ["latin"],
//     weight: ["400"],
//     variable: "--font-rak",
// });

// const data = [
//     {
//         title: "Connect & Extract",
//         content: (
//             <div>
//                 <p
//                     className={`mb-6 ${Noto.className} text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-80 text-neutral-800 dark:text-neutral-200 leading-relaxed`}
//                 >
//                     Paste your LinkedIn URL — our system instantly pulls your skills, work
//                     history, education, and certifications. Ready-made for your resume.
//                 </p>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//                     <img
//                         src="https://assets.aceternity.com/templates/startup-1.webp"
//                         alt="LinkedIn profile extraction example"
//                         width={600}
//                         height={400}
//                         className="h-32 sm:h-40 md:h-48 lg:h-56 w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
//                     />
                   
//                 </div>
//             </div>
//         ),
//     },
//     {
//         title: "Choose & Customize",
//         content: (
//             <div>
//                 <p
//                     className={`mb-6 ${Noto.className} text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-80 text-neutral-800 dark:text-neutral-200 leading-relaxed`}
//                 >
//                     Pick from sleek, ATS-friendly templates tailored for tech, creative, or
//                     corporate careers.
//                 </p>
//                 <p
//                     className={`mb-6 ${Noto.className} text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl opacity-80 text-neutral-800 dark:text-neutral-200 leading-relaxed`}
//                 >
//                     Customize colors, fonts, and sections — no design skills needed.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
//                     <img
//                         src="https://assets.aceternity.com/pro/hero-sections.png"
//                         alt="Resume template selection"
//                         width={600}
//                         height={400}
//                         className="h-32 sm:h-40 md:h-48 lg:h-56 w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
//                     />
//                     <img
//                         src="https://assets.aceternity.com/templates/startup-2.webp"
//                         alt="Template customization options"
//                         width={600}
//                         height={400}
//                         className="h-32 sm:h-40 md:h-48 lg:h-56 w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
//                     />
//                 </div>
//             </div>
//         ),
//     },
//     {
//         title: "Download & Impress",
//         content: (
//             <div>
//                <p
//                     className={`mb-6 ${Noto.className} text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl opacity-80 text-neutral-800 dark:text-neutral-200 leading-relaxed`}
//                 >
//                     One click, and your polished resume is ready — PDF or Word, built to
//                     impress recruiters.
//                 </p>

//                 <div className="mb-8 opacity-90 space-y-3">
//                     <div className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//                         <span className="text-blue-500 text-2xl"><BsMagic/></span>
//                         <span>Auto-filled with LinkedIn data</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//                         <span className="text-blue-500 text-2xl"><SiCssdesignawards/></span>
//                         <span>Multiple ATS-friendly designs</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//                         <span className="text-blue-500 text-2xl"><GoRocket/></span>
//                         <span>Instant PDF & Word download</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//                         <span className="text-blue-500 text-2xl"><SiEasyeda/></span>
//                         <span>Easy sharing with employers</span>
//                     </div>
//                     <div className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-300 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
//                         <span className="text-blue-500 text-2xl"><GiOfficeChair/></span>
//                         <span>Boost your job hunt instantly</span>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
//                     <img
//                         src="https://assets.aceternity.com/pro/hero-sections.png"
//                         alt="Final resume example"
//                         width={600}
//                         height={400}
//                         className="h-32 sm:h-40 md:h-48 lg:h-56 w-full rounded-xl object-cover shadow-lg transition-transform duration-300 hover:scale-105"
//                     />
//                     <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 flex flex-col justify-center items-center text-white">
//                         <div className="text-4xl mb-3">🎯</div>
//                         <p
//                             className={`${Noto.className} text-center text-sm sm:text-base md:text-lg font-medium`}
//                         >
//                             Start your career journey today
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         ),
//     },
// ];


// const Product = () => {
//     return (
//         <div className="relative w-full min-h-screen">


//             {/* Content */}
//             <div className="relative flex w-full flex-col items-start justify-start overflow-hidden pt-20">
//                 <Timeline data={data} />
//             </div>
//         </div>
//     )
// }

// export default Product







import React from 'react'

const ProductShow = () => {
  return (
    <div className='h-[300px]'>
      <h1>Hello</h1>
    </div>
  )
}

export default ProductShow





