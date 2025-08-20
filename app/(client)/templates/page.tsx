// app/templates/page.tsx - Resume Templates
import { Suspense } from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ResumeTemplates } from "@/components/ResumeTemplates";
import { checkUserResume } from "@/lib/resume-service";

export default async function TemplatesPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const hasResume = await checkUserResume(userId);

  if (!hasResume) {
    redirect("/extract");
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f9fafb", padding: "3rem 0" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#111", marginBottom: "1rem" }}>
            Choose Your Resume Template
          </h1>
          <p style={{ color: "#555", maxWidth: "600px", margin: "0 auto" }}>
            Select from our collection of professional resume templates.
            Your LinkedIn data will be automatically populated.
          </p>
        </div>

        <Suspense fallback={<div>Loading templates...</div>}>
          <ResumeTemplates />
        </Suspense>
      </div>
    </div>
  );
}
