// "use client";

// import { useState } from "react";
// // import { Eye } from "lucide-react";
// import { useRouter } from "next/navigation";

// const templates = [
//   {
//     id: "technical",
//     name: "Technical Pro",
//     description: "Perfect for software developers and engineers",
//     preview: "/templates/technical-preview.png",
//     category: "Technical",
//     color: "bg-blue-500"
//   },
//   {
//     id: "creative",
//     name: "Creative Edge",
//     description: "Ideal for designers and creative professionals",
//     preview: "/templates/creative-preview.png",
//     category: "Creative",
//     color: "bg-purple-500"
//   },

//   {
//     id: "minimal",
//     name: "Minimal Clean",
//     description: "Clean and simple design for any profession",
//     preview: "/templates/minimal-preview.png",
//     category: "Minimal",
//     color: "bg-gray-500"
//   }
// ];

// export function ResumeTemplates() {
//   const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
//   const router = useRouter();

//   const handleTemplateSelect = async (templateId: string) => {
//     setSelectedTemplate(templateId);

//     try {
//       await fetch("/api/update-template", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ templateType: templateId }),
//       });
//       router.push(`/resume/${templateId}`);
//     } catch (error) {
//       console.error("Failed to select template:", error);
//     }
//   };


//   return (
//     <div style={{
//       display: "grid",
//       gap: "2rem",
//       gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
//     }}>
//       {templates.map((template) => (
//         <div
//           key={template.id}
//           style={{
//             border: "1px solid #ddd",
//             borderRadius: "8px",
//             overflow: "hidden",
//             boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
//           }}
//         >
//           <div style={{ position: "relative", paddingTop: "133%", backgroundColor: "#f3f4f6" }}>
//             <div
//               style={{
//                 position: "absolute",
//                 inset: "0",
//                 backgroundColor: "rgba(0,0,0,0.03)"
//               }}
//             />
//             <span
//               style={{
//                 position: "absolute",
//                 top: "8px",
//                 right: "8px",
//                 padding: "4px 8px",
//                 borderRadius: "4px",
//                 color: "#fff",
//                 backgroundColor: template.color.replace("bg-", "") // placeholder
//               }}
//             >
//               {template.category}
//             </span>
//           </div>

//           <div style={{ padding: "1rem" }}>
//             <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>
//               {template.name}
//             </h3>
//             <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "1rem" }}>
//               {template.description}
//             </p>

//             <div style={{ display: "flex", gap: "0.5rem" }}>
//               <button
//                 onClick={() => handleTemplateSelect(template.id)}

//                 disabled={selectedTemplate === template.id}
//                 style={{
//                   flex: 1,
//                   backgroundColor: selectedTemplate === template.id ? "#ccc" : "#2563eb",
//                   color: "#fff",
//                   border: "none",
//                   padding: "0.5rem 1rem",
//                   borderRadius: "4px",
//                   cursor: selectedTemplate === template.id ? "not-allowed" : "pointer"
//                 }}
//               >
//                 {selectedTemplate === template.id ? "Selected" : "Use Template"}
//               </button>
//               <button
//                 style={{
//                   border: "1px solid #ddd",
//                   padding: "0.5rem",
//                   borderRadius: "4px",
//                   background: "#fff",
//                   cursor: "pointer"
//                 }}
//               >
//                 {/* <Eye style={{ width: "16px", height: "16px" }} /> */}
//                 <h1>eye</h1>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }





"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// Loading component (create this as a separate file if preferred)
const FullPageLoader = () => {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      backdropFilter: "blur(5px)"
    }}>
      <div style={{
        width: "50px",
        height: "50px",
        border: "5px solid #f3f3f3",
        borderTop: "5px solid #2563eb",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
        marginBottom: "1rem"
      }}></div>
      <p style={{ 
        fontSize: "1.2rem", 
        color: "#333",
        fontWeight: "500"
      }}>
        Preparing your resume template...
      </p>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const templates = [
  {
    id: "technical",
    name: "Technical Pro",
    description: "Perfect for software developers and engineers",
    preview: "/templates/technical-preview.png",
    category: "Technical",
    color: "bg-blue-500"
  },
  {
    id: "creative",
    name: "Creative Edge",
    description: "Ideal for designers and creative professionals",
    preview: "/templates/creative-preview.png",
    category: "Creative",
    color: "bg-purple-500"
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Clean and simple design for any profession",
    preview: "/templates/minimal-preview.png",
    category: "Minimal",
    color: "bg-gray-500"
  }
];

export function ResumeTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleTemplateSelect = async (templateId: string) => {
    setSelectedTemplate(templateId);
    setIsLoading(true); // Show loading overlay

    try {
     
      router.push(`/resume/${templateId}`);
    } catch (error) {
      console.error("Failed to select template:", error);
      setIsLoading(false); // Hide loading on error
    }
  };

  return (
    <>
      {isLoading && <FullPageLoader />}
      
      <div style={{
        display: "grid",
        gap: "2rem",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))"
      }}>
        {templates.map((template) => (
          <div
            key={template.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              transition: "transform 0.2s, box-shadow 0.2s",
              cursor: "pointer"
            }}
            onClick={() => handleTemplateSelect(template.id)}
          >
            <div style={{ position: "relative", paddingTop: "133%", backgroundColor: "#f3f4f6" }}>
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  backgroundColor: "rgba(0,0,0,0.03)"
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "8px",
                  right: "8px",
                  padding: "4px 8px",
                  borderRadius: "4px",
                  color: "#fff",
                  backgroundColor: template.color.replace("bg-", ""),
                  fontSize: "0.75rem",
                  fontWeight: "600"
                }}
              >
                {template.category}
              </span>
            </div>

            <div style={{ padding: "1rem" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: "600", marginBottom: "0.5rem" }}>
                {template.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#555", marginBottom: "1rem" }}>
                {template.description}
              </p>

              <div style={{ display: "flex", gap: "0.5rem" }}>
                <button
                  onClick={() => handleTemplateSelect(template.id)}
                  disabled={selectedTemplate === template.id}
                  style={{
                    flex: 1,
                    backgroundColor: selectedTemplate === template.id ? "#ccc" : "#2563eb",
                    color: "#fff",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "4px",
                    cursor: selectedTemplate === template.id ? "not-allowed" : "pointer",
                    transition: "background-color 0.2s"
                  }}
                >
                  {selectedTemplate === template.id ? "Selected" : "Use Template"}
                </button>
                <button
                  style={{
                    border: "1px solid #ddd",
                    padding: "0.5rem",
                    borderRadius: "4px",
                    background: "#fff",
                    cursor: "pointer"
                  }}
                >
                  {/* Preview icon would go here */}
                  <span>👁️</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}