"use client";

import React from "react";
import { ResumeData } from "@/lib/types/resume.type";

interface TemplateSelectorProps {
  onTemplateSelected: (updatedResume: ResumeData) => void;
  currentResume: ResumeData | null;
  userId: string;
}

export default function TemplateSelector({
  onTemplateSelected,
  currentResume,
  userId,
}: TemplateSelectorProps) {
  if (!currentResume) return null;

  const selectTemplate = (templateType: ResumeData["templateType"]) => {
    // Update the resume with new template type
    const updatedResume = {
      ...currentResume,
      templateType,
      userId,
    };

    onTemplateSelected(updatedResume);
  };

  return (
    <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
      <button
        onClick={() => selectTemplate("technical")}
        className="border p-6 hover:bg-gray-100 rounded"
      >
        Technical Template
      </button>
      <button
        onClick={() => selectTemplate("creative")}
        className="border p-6 hover:bg-gray-100 rounded"
      >
        Creative Template
      </button>
      <button
        onClick={() => selectTemplate("minimal")}
        className="border p-6 hover:bg-gray-100 rounded"
      >
        Minimal Template
      </button>
    </div>
  );
}
