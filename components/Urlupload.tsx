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



"use client";

import { useState } from "react";
import { ResumeData } from "@/lib/types/resume.type";

interface UrlUploadProps {
  onDataExtracted?: (newResumeData: ResumeData) => void;
  userId: string;
}

export default function UrlUpload({ onDataExtracted, userId }: UrlUploadProps) {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateLinkedInUrl = (url: string) => {
    const linkedInRegex = /^https:\/\/(www\.)?linkedin\.com\/in\/[\w-]+\/?$/;
    return linkedInRegex.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateLinkedInUrl(url)) {
      console.error("Please enter a valid LinkedIn profile URL");
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

      console.log("LinkedIn data extracted successfully!");

      if (onDataExtracted && data.resume) {
        onDataExtracted(data.resume as ResumeData);
      }
    } catch (err: any) {
      console.error(err.message || "Unexpected error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1rem" }}>
      <div style={{ display: "grid", gap: "0.5rem" }}>
        <label htmlFor="linkedin-url" style={{ fontWeight: 500 }}>
          LinkedIn Profile URL
        </label>
        <input
          id="linkedin-url"
          type="url"
          placeholder="https://linkedin.com/in/your-profile"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          style={{
            padding: "8px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "100%",
          }}
          required
        />
        <p style={{ fontSize: "0.875rem", color: "#555" }}>
          Make sure your LinkedIn profile is public or accessible
        </p>
      </div>

      <button
        type="submit"
        style={{
          padding: "10px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        disabled={isLoading}
      >
        {isLoading ? "Extracting Data..." : "Extract LinkedIn Data"}
      </button>
    </form>
  );
}
