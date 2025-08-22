

import React from 'react'
import CustomSignOutDropdown from './CustomSignOutDropdown';
import { Yusei_Magic } from 'next/font/google';

import { Libre_Franklin, Patrick_Hand } from 'next/font/google';




const Rak = Yusei_Magic({
  subsets:["latin"],
  weight:["400"],
  variable:"--font-rak"
})

const Nav = () => {
  return (
    <div>


      <header className=" border-b">
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
            <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            <h1 className={`${Rak.className} lg:text-4xl`} >ResumeGenius</h1>
          </a>

          {/* Navigation */}
          <nav className="hidden gap-9 lg:flex 2xl:ml-16  lg:pr-28 ">
            <a href="#" className={`text-lg lg:text-3xl  font-semibold text-indigo-500 ${Rak.className} `}>Home</a>
            <a href="#" className={`text-lg lg:text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 ${Rak.className}`}>Templates</a>
            <a href="#" className={`text-lg lg:text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 ${Rak.className}`}>About</a>
          </nav>

          {/* Action Buttons */}
          <div className="flex divide-x border-r sm:border-l">
           
    <div>
      <CustomSignOutDropdown/>
    </div>

            <a href="#" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className={`hidden text-xs font-semibold text-gray-500 sm:block ${Rak.className} `}>Resumes</span>
            </a>

            <button type="button" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
              <span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
            </button>
          </div>
        </div>
      </header>

    </div>
  )
}

export default Nav
