// // components/Urlupload.tsx
// "use client";

// import React, { useState } from "react";
// import { useRouter } from "next/navigation";

// interface UrlUploadProps {
//   onDataExtracted?: () => void;
// }

// export default function UrlUpload({ onDataExtracted }: UrlUploadProps) {
//   const [url, setUrl] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const res = await fetch("/api/scraper", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ profileUrl: url }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.error || "Failed to scrape");

//       // ✅ Trigger the step change after success
//       if (onDataExtracted) {
//         onDataExtracted();
//       }

//     } catch (err: any) {
//       setError(err.message || "Unexpected error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="profileUrl"
//           placeholder="Enter LinkedIn Profile URL"
//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           style={{
//             padding: "8px",
//             width: "400px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//           }}
//         />
//         <button
//           type="submit"
//           style={{
//             marginLeft: "10px",
//             padding: "8px 12px",
//             background: "#0070f3",
//             color: "#fff",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//           disabled={loading}
//         >
//           {loading ? "Processing..." : "Submit"}
//         </button>
//       </form>

//       {error && (
//         <p style={{ color: "red", marginTop: "1rem" }}>Error: {error}</p>
//       )}
//     </div>
//   );
// }



// "use client";

// import { useState } from "react";
// import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
// import { ResumeData } from "@/lib/types/resume.type";

// interface UrlUploadProps {
//   onDataExtracted?: (newResumeData: ResumeData) => void;
//   userId: string;
// }

// export default function UrlUpload({ onDataExtracted, userId }: UrlUploadProps) {
//   const [url, setUrl] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const validateLinkedInUrl = (url: string) => {
//     const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/;
//     return linkedInRegex.test(url);
//   };

//    const placeholders = [
//     "What's the first rule of Fight Club?",
//     "Who is Tyler Durden?",
//     "Where is Andrew Laeddis Hiding?",
//     "Write a Javascript method to reverse a string",
//     "How to assemble your own PC?",
//   ];

//    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     console.log(e.target.value);
//   };
//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("submitted");
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateLinkedInUrl(url)) {
//       console.error("Please enter a valid LinkedIn profile URL");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/scraper", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ profileUrl: url, userId }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "Failed to scrape");

//       console.log("LinkedIn data extracted successfully!");

//       if (onDataExtracted && data.resume) {
//         onDataExtracted(data.resume as ResumeData);
//       }
//     } catch (err: any) {
//       console.error(err.message || "Unexpected error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
//       <div style={{ display: "grid", gap: "0.5rem" }}>
//         <label htmlFor="linkedin-url" style={{ fontWeight: 500 }}>
//           LinkedIn Profile URL
//         </label>

//         <input

//           value={url}
//           onChange={(e) => setUrl(e.target.value)}
//           style={{
//             padding: "8px",
//             border: "1px solid #ccc",
//             borderRadius: "4px",
//             width: "100%",
//           }}
//           required
//         />
//         <p style={{ fontSize: "0.875rem", color: "#555" }}>
//           Make sure your LinkedIn profile is public or accessible
//         </p>
//       </div>

//       <button
//         type="submit"
//         style={{
//           padding: "10px",
//           backgroundColor: "#0070f3",
//           color: "#fff",
//           border: "none",
//           borderRadius: "4px",
//           cursor: "pointer",
//         }}
//         disabled={isLoading}
//       >
//         {isLoading ? "Extracting Data..." : "Extract LinkedIn Data"}
//       </button>
//     </form>
//   );
// }









// "use client";

// import { useState } from "react";
// import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
// import { ResumeData } from "@/lib/types/resume.type";

// interface UrlUploadProps {
//   onDataExtracted?: (newResumeData: ResumeData) => void;
//   userId: string;
// }

// export default function UrlUpload({ onDataExtracted, userId }: UrlUploadProps) {
//   const [url, setUrl] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const validateLinkedInUrl = (url: string) => {
//     const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/;
//     return linkedInRegex.test(url);
//   };

//   const placeholders = [
//     "Enter your LinkedIn profile URL...",
//     "https://www.linkedin.com/in/your-profile",
//     "Paste your LinkedIn URL here to extract data",
//     "LinkedIn.com/in/username",
//     "Make sure your profile is public for best results",
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUrl(e.target.value);
//   };

//   const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     handleExtractData();
//   };

//   const handleExtractData = async () => {
//     if (!validateLinkedInUrl(url)) {
//       console.error("Please enter a valid LinkedIn profile URL");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/scraper", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ profileUrl: url, userId }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "Failed to scrape");

//       console.log("LinkedIn data extracted successfully!");

//       if (onDataExtracted && data.resume) {
//         onDataExtracted(data.resume as ResumeData);
//       }
//     } catch (err: any) {
//       console.error(err.message || "Unexpected error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       <form onSubmit={handleSubmitForm}>
//         <div className="mb-4">
//           <PlaceholdersAndVanishInput
//             placeholders={placeholders}
//             onChange={handleChange}
//             onSubmit={handleSubmitForm}
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors duration-200"
//           disabled={isLoading || !url}
//         >
//           {isLoading ? "Extracting Data..." : "Extract LinkedIn Data"}
//         </button>

//         <p className="mt-3 text-sm text-gray-600 text-center">
//           Make sure your LinkedIn profile is public or accessible
//         </p>
//       </form>
//     </div>
//   );
// }






// "use client";

// import { useState } from "react";
// import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
// import { ResumeData } from "@/lib/types/resume.type";

// interface UrlUploadProps {
//   onDataExtracted?: (newResumeData: ResumeData) => void;
//   userId: string;
// }

// export default function UrlUpload({ onDataExtracted, userId }: UrlUploadProps) {
//   const [url, setUrl] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const validateLinkedInUrl = (url: string) => {
//     const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/;
//     return linkedInRegex.test(url);
//   };

//   const placeholders = [
//     "Enter your LinkedIn profile URL...",
//     "https://www.linkedin.com/in/your-profile",
//     "Paste your LinkedIn URL here to extract data",
//     "LinkedIn.com/in/username",
//     "Make sure your profile is public for best results",
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUrl(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handleExtractData();
//   };

//   const handleExtractData = async () => {
//     if (!validateLinkedInUrl(url)) {
//       console.error("Please enter a valid LinkedIn profile URL");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/scraper", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ profileUrl: url, userId }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "Failed to scrape");

//       console.log("LinkedIn data extracted successfully!");

//       if (onDataExtracted && data.resume) {
//         onDataExtracted(data.resume as ResumeData);
//       }
//     } catch (err: any) {
//       console.error(err.message || "Unexpected error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-full    max-w-md mx-auto">
//       {/* Remove the outer form and let PlaceholdersAndVanishInput handle the form */}
//       <div className="mb-4">
//         <PlaceholdersAndVanishInput
//           placeholders={placeholders}
//           onChange={handleChange}
//           onSubmit={handleSubmit}
//         />
//       </div>

//       <button
//         onClick={handleExtractData}
//         className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors duration-200"
//         disabled={isLoading || !url}
//       >
//         {isLoading ? "Extracting Data..." : "Extract LinkedIn Data"}
//       </button>

//       <p className="mt-3 text-sm text-gray-600 text-center">
//         Make sure your LinkedIn profile is public or accessible
//       </p>
//     </div>
//   );
// }


// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
// import { ResumeData } from "@/lib/types/resume.type";

// interface UrlUploadProps {
//   onDataExtracted?: (newResumeData: ResumeData) => void;
//   userId: string;
// }

// export default function UrlUpload({ onDataExtracted, userId }: UrlUploadProps) {
//   const [url, setUrl] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const validateLinkedInUrl = (url: string) => {
//     const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/;
//     return linkedInRegex.test(url);
//   };

//   const placeholders = [
//     "Enter your LinkedIn profile URL...",
//     "https://www.linkedin.com/in/your-profile",
//     "Paste your LinkedIn URL here to extract data",
//     "LinkedIn.com/in/username",
//     "Make sure your profile is public for best results",
//   ];

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setUrl(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handleExtractData();
//   };

//   const handleExtractData = async () => {
//     if (!validateLinkedInUrl(url)) {
//       console.error("Please enter a valid LinkedIn profile URL");
//       return;
//     }

//     setIsLoading(true);

//     try {
//       const res = await fetch("/api/scraper", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ profileUrl: url, userId }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.error || "Failed to scrape");

//       console.log("LinkedIn data extracted successfully!");

//       if (onDataExtracted && data.resume) {
//         onDataExtracted(data.resume as ResumeData);
//       }
//     } catch (err: any) {
//       console.error(err.message || "Unexpected error");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="w-full flex flex-col gap-2">
//       <div>
//         <PlaceholdersAndVanishInput
//           placeholders={placeholders}
//           onChange={handleChange}
//           onSubmit={handleSubmit}
//         />
//       </div>
//       <Link href={"/templates"}>
//         <button
//           onClick={handleExtractData}
//           className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
//           disabled={isLoading || !url}
//         >
//           {isLoading ? "Extracting Data..." : "Extract LinkedIn Data"}
//         </button>
//       </Link>


//       <p className="text-xs text-gray-600 text-center">
//         Make sure your LinkedIn profile is public or accessible
//       </p>
//     </div>
//   );
// }




"use client";

import { useState } from "react";
import { ResumeData } from "@/lib/types/resume.type";
import FullPageLoader from "./FullPageLoader";
import { useRouter } from "next/navigation";

interface UrlUploadProps {
  onDataExtracted?: (newResumeData: ResumeData) => void;
  userId: string;
}

export default function UrlUpload({ onDataExtracted, userId }: UrlUploadProps) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const validateLinkedInUrl = (url: string) => {
    const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/;
    return linkedInRegex.test(url);
  };

  const handleExtractData = async () => {
    if (!validateLinkedInUrl(url)) {
      alert("Please enter a valid LinkedIn profile URL");
      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch("/api/scraper", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profileUrl: url, userId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to scrape");

      if (onDataExtracted && data.resume) {
        onDataExtracted(data.resume as ResumeData);
      }

      // ✅ Redirect once done
      router.push("/templates");
    } catch (err: any) {
      alert(err.message || "Unexpected error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <FullPageLoader />}
      <div className="w-full flex flex-col gap-2">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter LinkedIn profile URL"
          className="w-full px-3 py-2 border rounded-lg text-sm"
        />
        <button
          onClick={handleExtractData}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium rounded-lg transition-colors duration-200 text-sm"
          disabled={isLoading || !url}
        >
          {isLoading ? "Extracting Data..." : "Extract LinkedIn Data"}
        </button>
        <p className="text-xs text-gray-600 text-center">
          Make sure your LinkedIn profile is public or accessible
        </p>
      </div>
    </>
  );
}
