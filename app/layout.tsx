



// app/layout.tsx
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { syncUser } from "./actions/syncUser";
import { Nav } from "@/components/Nav";
// import { mooLahLah, bungee } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "LinkedIn to Resume",
  description: "Convert your LinkedIn profile to a professional resume",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await syncUser();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`antialiased`}>
          <Nav/>
          {children}

        </body>
      </html>
    </ClerkProvider>
  );
}