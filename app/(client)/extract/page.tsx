// // app/extract/page.tsx - Updated with userId prop

// import { Suspense } from "react";
// import { auth } from "@clerk/nextjs/server";
// import { redirect } from "next/navigation";
// import UrlUpload from "@/components/Urlupload";
// import { checkUserResume } from "@/lib/resume-service";

// import { motion } from "framer-motion";
// import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

// export default async function ExtractPage() {
//   const { userId } = await auth();

//   if (!userId) {
//     redirect("/sign-in");
//   }

//   // Check if user already has extracted data
//   const hasResume = await checkUserResume(userId);

//   if (hasResume) {
//     redirect("/templates");
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-12">
//       <div className="container mx-auto px-4">
//         <div className="max-w-2xl mx-auto">
//           <HeroHighlight>
//             <motion.h1
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: [20, -5, 0],
//               }}
//               transition={{
//                 duration: 0.5,
//                 ease: [0.4, 0.0, 0.2, 1],
//               }}
//               className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
//             >
//               With insomnia, nothing&apos;s real. Everything is far away. Everything
//               is a{" "}
//               <Highlight className="text-black dark:text-white">
//                 copy, of a copy, of a copy.
//               </Highlight>
//             </motion.h1>
//           </HeroHighlight>

//           <div className="bg-white rounded-lg shadow-md p-8">
//             <Suspense fallback={<div>Loading...</div>}>
//               <UrlUpload userId={userId} />
//             </Suspense>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






"use Client"

import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import UrlUpload from "@/components/Urlupload";
import { checkUserResume } from "@/lib/resume-service";
import { motion } from "framer-motion";


import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Highlight } from "@/components/ui/hero-highlight";
import TextHilight from "@/components/Text_hilight";




export default async function ExtractPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Check if user already has extracted data
  const hasResume = await checkUserResume(userId);

  if (hasResume) {
    redirect("/templates");
  }

  return (
    <div className="min-h-screen  py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
           <TextHilight  />       
           
            <div className="bg-white rounded-lg shadow-md p-8 mt-8">
            <Suspense fallback={<div>Loading...</div>}>
              <UrlUpload userId={userId} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}