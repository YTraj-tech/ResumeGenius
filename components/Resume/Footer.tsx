import React from 'react';
import { SparklesText } from '../ui/Sparkels';
import { Tinos } from 'next/font/google';

const Rak = Tinos({
    subsets:["latin"],
    weight:["700"]
})
const Footer = () => {
  return (
    <div
      className="relative h-[550px] flex items-center justify-center  "
      style={{ background: "linear-gradient(to right, #111827, #0f172a, #111827)" }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Sub-heading / hook */}
        <h2 className={`text-blue-400 text-lg sm:text-xl md:text-2xl font-medium mb-4 sm:mb-6 ${Rak.className} `}>
          Ready to land your dream job?
        </h2>

        {/* Main headline */}
        <h1 className={` text-white   bg-clip-text   sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8 ${Rak.className} `}>
         <SparklesText> Build a standout resume in just clicks </SparklesText>
        </h1>

        {/* Supporting tagline */}
        <p className="text-gray-300 mx-5 lg:ml-[80px] text-center sm:text-lg md:text-xl max-w-2xl  mb-8">
          Resumepier turns your experience into a professional, job-winning resume. 
          No stress, no design headaches—just results that get you noticed.
        </p>

        {/* Main CTA */}
        <div className="flex justify-center mb-6">
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
            Build My Resume 
          </button>
        </div>

        {/* Founder contact email */}
        <p className="text-gray-400 text-sm sm:text-base">
          Have questions? Reach out to our founder at{" "}
          <a
            href="mailto:founder@resumepier.com"
            className="text-blue-400 hover:text-blue-500 underline font-medium"
          >
            Siddaran335@gmail.com
          </a>
        </p>

        {/* Decorative glowing elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-0 left-1/3 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
