"use client";

import React, { useState } from 'react';
import TextType from './TextType';
import { BorderBeam } from './ui/Borederbeam';
import { GridPattern } from './ui/background-ripple-effect';
import { ShimmerButton } from './ui/shimmer-button';
import { Yusei_Magic } from 'next/font/google';
import { FlipButton } from './ui/flip';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Fullscreen, Square } from 'lucide-react';

const Rak = Yusei_Magic({
  subsets:["latin"],
  weight: ['400'],
  variable: '--font-rak',
});

const Herosection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex  w-full flex-col items-start justify-start overflow-hidden">
      {/* Grid Background */}
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "absolute inset-0 -z-10  h-full w-full [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]",
        )}
      />

      {/* Main Content Container */}
      <div className="relative flex  w-full flex-col items-center  overflow-hidden rounded-none lg:flex-row z-10">
        {/* Text Content - Reduced padding to move text closer to top */}
        <div className="relative flex text-center w-full my-5 flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-12 pt-4 lg:pt-8 xl:pb-24 xl:pt-12 lg:pl-12">
          <div className="relative z-10 mt-2">
            <h1 className={`mb-4 text-5xl ${Rak.className} font-bold text-black sm:text-5xl md:text-5xl lg:text-6xl xl:text-8xl`}>
              LinkedIn to<br />Resume in{' '}
              <span className="relative">
                <br />
                <TextType text={["in Click", "in Sec"]} textColors={["#33A1E0"]} />
              </span>
            </h1>

            {/* CTA Button */}
            <div className="mx-3 relative group flex justify-center sm:justify-start">
              <ShimmerButton className="shadow-2xl text-2xl text-center lg:text-5xl sm:ml-28">
                <span>Start Building</span>
              </ShimmerButton>
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div className="mb-12 mt-9 flex w-full md:mb-9 lg:mb-16 lg:w-2/3 lg:pr-12 lg:mt-12">
          {/* Profile Image with Hover Video */}
          <div
            className="relative mt-5 ml-2 left-4 top-4 z-10  h-[250px] w-[250px] overflow-hidden rounded-lg shadow-blue-400 shadow-lg sm:left-6 sm:top-6 sm:-ml-6 sm:h-[280px] sm:w-[280px] md:left-8 md:top-8 md:-ml-8 md:h-[320px] md:w-[320px] lg:left-12 lg:top-12 lg:ml-0 lg:h-[600px] lg:w-[500px] xl:h-[600px] xl:w-[600px] border-2 border-blue-50"
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
          <div className="relative pr-2  h-[250px] w-[250px] overflow-hidden rounded-lg shadow-blue-400 shadow-lg sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[600px] lg:w-[500px] xl:h-[600px] xl:w-[600px]">
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

    </div>
  )
}

export default Herosection;




