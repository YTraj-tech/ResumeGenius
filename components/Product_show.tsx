"use client"

import React from 'react'
import { Timeline } from "@/components/ui/timeline";
import { Noto_Sans } from 'next/font/google'

import { Yusei_Magic } from 'next/font/google';

const Rak = Yusei_Magic({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-rak',
});


const  Noto =  Noto_Sans({
    subsets:["latin"],
    weight:["400"],
    variable:"--font-rak",
})

// import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";


const data = [
    {
        title: "Step 1",
        content: (
            <div>
                <p className={`mb-8 ${Noto.className} text-lg lg:text-3xl opacity-70   text-neutral-800 md:text-sm dark:text-neutral-200`}>
                    Enter your LinkedIn profile URL and our system will automatically extract your details like education, skills, work experience, and certifications.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://assets.aceternity.com/templates/startup-1.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Step 2",
        content: (
            <div>
                <p className={`mb-8 ${Noto.className} text-lg lg:text-3xl opacity-70   text-neutral-800 md:text-sm dark:text-neutral-200`}>
                    Once your LinkedIn data is extracted, you can browse through our collection of modern resume templates.
                </p>
                <p className={`mb-8 ${Noto.className} text-lg lg:text-3xl opacity-70   text-neutral-800 md:text-sm dark:text-neutral-200`}>
                    Pick the one that best suits your style and profession — clean, creative, or professional templates are all available at your fingertips.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            </div>
        ),
    },
    {
        title: "Step 3",
        content: (
            <div>
                <p className={`mb-8 ${Noto.className} text-lg lg:text-3xl opacity-70   text-neutral-800 md:text-sm dark:text-neutral-200`}>
                    Your resume is ready! Customize it, download instantly, and start sending it to recruiters and HR teams.
                </p>
                <div className="mb-8 opacity-80">
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Automatically filled with your LinkedIn details
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Choose from multiple modern templates
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Download in one click
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Share directly with HR or recruiters
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                        ✅ Land interviews faster with a polished resume
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            </div>
        ),
    },
];


const Product = () => {
    return (
        <div className="relative w-full overflow-clip">
            <Timeline data={data} />
        </div>
    )
}

export default Product
