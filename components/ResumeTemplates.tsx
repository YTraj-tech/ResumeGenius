"use client";

import { useState } from "react";
// import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";

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
    id: "executive",
    name: "Executive Suite",
    description: "Professional template for executives and managers",
    preview: "/templates/executive-preview.png",
    category: "Executive",
    color: "bg-green-500"
  },
  {
    id: "minimal",
    name: "Minimal Clean",
    description: "Clean and simple design for any profession",
    preview: "/templates/minimal-preview.png",
    category: "Minimal",
    color: "bg-gray-500"
  },
  {
    id: "modern",
    name: "Modern Style",
    description: "Contemporary design with modern elements",
    preview: "/templates/modern-preview.png",
    category: "Modern",
    color: "bg-indigo-500"
  },
  {
    id: "classic",
    name: "Classic Format",
    description: "Traditional format preferred by most industries",
    preview: "/templates/classic-preview.png",
    category: "Classic",
    color: "bg-amber-500"
  }
];

export function ResumeTemplates() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const router = useRouter();

  const handleTemplateSelect = async (templateId: string) => {
    setSelectedTemplate(templateId);
    
    try {
      await fetch("/api/update-template", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateType: templateId }),
      });
      router.push(`/resume/${templateId}`);
    } catch (error) {
      console.error("Failed to select template:", error);
    }
  };

  return (
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
            boxShadow: "0 2px 5px rgba(0,0,0,0.05)"
          }}
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
                backgroundColor: template.color.replace("bg-", "") // placeholder
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
                  cursor: selectedTemplate === template.id ? "not-allowed" : "pointer"
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
                {/* <Eye style={{ width: "16px", height: "16px" }} /> */}
                <h1>eye</h1>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
