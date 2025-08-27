import React from 'react';
import Link from 'next/link';
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
    <div className="h-[600px] pt-[300px]  lg:pt-[80px] flex items-center justify-center  rounded-bl-[100px] md:rounded-bl-[200px] "
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
                    <Link href={"/extract"}> Click to build</Link>
                  
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