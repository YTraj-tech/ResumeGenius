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
        "Instant PDF download and sharing options",
        "Guided tips to highlight achievements and skills"
    ];

    return (
        <div
            className='min-h-[400px] sm:min-h-[500px] md:min-h-[600px] mt-[80px] sm:mt-[100px] md:mt-[120px] lg:mt-[150px]  lg:mx-[100px] xl:mx-[200px] 2xl:mx-[250px] border-2 border-gray-100 rounded-tr-[50px] sm:rounded-tr-[80px] md:rounded-tr-[120px] lg:rounded-tr-[150px] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16'
            style={{ background: "linear-gradient(to right, #ffffff, #ffffff, #f9fafb)" }}
        >
            <div className="w-full  md:w-1/2 mb-8 md:mb-0 md:pr-8 lg:pr-12">
                <h2 className={`text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight ${Rak.className}`}>
                    {author}
                </h2>
                
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
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
            </div>

            <div className='w-full md:w-1/2 p-2 sm:p-4 flex justify-center'>
                <DirectionAwareHoverDemo />
            </div>
        </div>
    )
}

export default ResumeShow