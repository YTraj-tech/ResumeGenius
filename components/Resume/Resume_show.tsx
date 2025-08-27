import React from 'react'
import { DirectionAwareHoverDemo } from "@/components/Card_direaction"
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Merriweather } from "next/font/google"

const Rak = Merriweather({
    subsets: ["latin"],
    weight: ["700"]
})

const ResumeShow = () => {
    const quote =
        "A well-crafted resume is your ticket to landing interviews. It highlights your strengths, showcase";

    const author = "Career Experts, Resume Builder Team";

    const features = [
        "Professional templates designed for every industry",
        "AI-powered resume writing assistance",
        "Seamless import from LinkedIn or uploaded files",
        "Optimized for ATS (Applicant Tracking Systems)",

    ];

    return (
        <div
            className='h-[650px] mb-[200px] pt-[120px] mt-[150px] sm:mt-[100px] md:mt-[120px] lg:mt-[100px]  lg:mx-[100px] xl:mx-[200px] 2xl:mx-[250px] border-2 border-gray-300 rounded-tr-[150px] flex flex-col md:flex-row items-center justify-center px-9 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16'
            style={{ background: "linear-gradient(to bottom left, #ffffff, #ffffff, #ffffff)" }}
        >
            <div className="w-full lg:mt-[-20px]  md:w-1/2 mb-8 md:mb-0 md:pr-8 lg:pr-12">
                <h2 className={`text-3xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight ${Rak.className}`}>
                    {author}
                </h2>

                <p className="text-lg sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {quote}
                </p>

                <ul className="list-none space-y-2 sm:space-y-3">
                    {features.map((item, idx) => (
                        <li key={idx} className="flex items-start sm:items-center">
                            <span className="text-blue-500 text-base sm:text-lg rounded-3xl font-bold mr-2 sm:mr-3 flex-shrink-0 mt-1 sm:mt-0">
                                <IoShieldCheckmarkOutline />
                            </span>
                            <span className="text-sm sm:text-base text-gray-700 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
                <div className='mt-9'>
                    <button className="bg-blue-500 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                        <span className="absolute inset-0 overflow-hidden rounded-full">
                            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </span>
                        <div className="relative flex space-x-2 items-center z-10 rounded-full bg-blue-500 py-0.5 px-4 ring-1 ring-white/10 ">
                            <span className='text-lg'>
                                Start building
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

            <div className='w-full md:w-1/2 p-2 sm:p-4 '>
                <DirectionAwareHoverDemo />
            </div>
        </div>
    )
}

export default ResumeShow