// import React from 'react'
// import { Yusei_Magic } from 'next/font/google';
// import CustomSignOutDropdown from './CustomSignOutDropdown';

// const Rak = Yusei_Magic({
//   subsets:["latin"],
//   weight:["400"],
//   variable:"--font-rak"
// })

// const Nav = () => {
//   return (
//     <div>
//       <header className=" border-b">
//         <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
//           {/* Logo */}
//           <a href="/" className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
//             <svg width="95" height="94" viewBox="0 0 95 94" className="h-auto w-6 text-indigo-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//               <path d="M96 0V47L48 94H0V47L48 0H96Z" />
//             </svg>
//             <h1 className={`${Rak.className} lg:text-4xl`} >ResumeGenius</h1>
//           </a>

//           {/* Navigation */}
//           <nav className="hidden gap-9 lg:flex 2xl:ml-16  lg:pr-28 ">
//             <a href="#" className={`text-lg lg:text-3xl  font-semibold text-indigo-500 ${Rak.className} `}>Home</a>
//             <a href="#" className={`text-lg lg:text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 ${Rak.className}`}>Templates</a>
//             <a href="#" className={`text-lg lg:text-3xl font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700 ${Rak.className}`}>About</a>
//           </nav>

//           {/* Action Buttons */}
//           <div className="flex divide-x border-r sm:border-l">
//             {/* Custom SignOut Dropdown */}
//             <div className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24">
//               <CustomSignOutDropdown/>
//             </div>

//             <button type="button" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
//               </svg>
//               <span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
//             </button>
//           </div>
//         </div>
//       </header>
//     </div>
//   )
// }

// export default Nav


"use client";

import { useState } from "react";
import { useUser, SignInButton, SignUpButton, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { isSignedIn, user } = useUser();

  return (
    <nav className="w-full bg-white border-b shadow-sm px-6 py-3 flex items-center justify-between">
      {/* Left - Logo */}
      <Link href="/" className="text-xl font-bold text-blue-600">
        Resumpier
      </Link>

      {/* Right - Auth Controls */}
      <div className="flex items-center space-x-4">
        {!isSignedIn ? (
          <>
            <SignInButton mode="modal">
              <button className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="px-4 py-2 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 transition">
                Sign Up
              </button>
            </SignUpButton>
          </>
        ) : (
          <div className="relative">
            {/* Profile Avatar */}
            <button
              onClick={() => setOpen(!open)}
              className="w-10 h-10 rounded-full overflow-hidden bg-blue-600 text-white flex items-center justify-center font-bold"
            >
              {user.imageUrl ? (
                <img
                  src={user.imageUrl}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                user.firstName?.charAt(0).toUpperCase() || "U"
              )}
            </button>

            {/* Dropdown */}
            {open && (
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
                <div className="px-4 py-2 border-b text-gray-700">
                  {user.fullName || "User"}
                </div>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Dashboard
                </Link>
                <Link
                  href="/settings"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                >
                  Settings
                </Link>
                <SignOutButton>
                  <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-100">
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
