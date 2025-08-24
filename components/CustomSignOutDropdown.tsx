// "use client";

// import { useState } from "react";
// import { SignOutButton, useUser } from "@clerk/nextjs";

// export default function CustomSignOutDropdown() {
//   const [open, setOpen] = useState(false);
//   const { user } = useUser();

//   if (!user) return null;

//   const initial = user.firstName?.charAt(0).toUpperCase() || "U";
//   const imageUrl = user.imageUrl;

//   return (
//     <div className="relative inline-block text-left">
//       <button
//         onClick={() => setOpen(!open)}
//         className="w-10 h-10 rounded-full overflow-hidden bg-blue-600 text-white flex items-center justify-center font-bold"
//       >
//         {imageUrl ? (
//           <img src={imageUrl} alt="Profile" className="w-full h-full object-cover rounded-full" />
//         ) : (
//           initial
//         )}
//       </button>

//       {open && (
//         <div className="absolute right-0 mt-2 w-36 bg-white border rounded-md shadow-lg z-50">
//           <SignOutButton>
//             <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-100">
//               Sign Out
//             </button>
//           </SignOutButton>
//         </div>
//       )}
//     </div>
//   );
// }
