import React, { useState } from 'react';
import { Tinos } from 'next/font/google';

const Rak = Tinos({
  subsets: ["latin"],
  weight: ["700"]
});

// Define types for FAQ items
interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  // FAQ data in a structured format
 const faqData: FAQItem[] = [
  {
    question: "What is Resumpier?",
    answer: "Resumpier is a smart platform where you can build a professional resume in just a few clicks. No complex steps, no endless forms—simply upload your details and let our system do the rest."
  },
  {
    question: "Is my data safe on Resumpier?",
    answer: "Yes, absolutely. Your data is fully secured and private. We don’t share your information with third parties, so you can focus on building your career without worrying about privacy."
  },
  {
    question: "Will I be able to edit my resume after creating it?",
    answer: "Yes. You’ll soon be able to edit both the resume design and the data you’ve built. This means you can update your information anytime and customize how your resume looks."
  },
  {
    question: "Does Resumpier plan to support CVs too?",
    answer: "Yes. In the near future, we’ll be expanding beyond resumes to also help you build professional CVs with the same simple, click-based process."
  }
];

  // State to track which FAQ item is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);
    
  
  // Toggle function to open/close FAQ items
  const toggleFAQ = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className='mb-[100px]' >
      <section className="dark:bg-gray-100 dark:text-gray-800">
        <div className="container flex flex-col justify-center px-4  mx-auto md:p-8">
          <h2 className={`mb-12 text-4xl md:text-5xl font-bold ${Rak.className} leading-none text-center lg:text-6xl`}>
            Frequently Asked Questions
          </h2>
          <div className="divide-y dark:divide-gray-300">
            {faqData.map((faq, index) => (
              <div 
                key={index} 
                className="py-6 cursor-pointer transition-all duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-lg lg:text-2xl opacity-80 md:text-xl md:col-span-5 pr-4">
                    {faq.question}
                  </h3>
                  <span className="text-xl transition-transform duration-300 transform">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-600  dark:text-gray-700  lg:text-lg  md:pl-0 md:col-span-7">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;