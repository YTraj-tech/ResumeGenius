"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Nav from "@/components/Nav";
import Loading from "./loading";
import HeroSection from "@/components/Herosection";
import BasicFretures from "@/components/Basic_fretures";
import MegaShow from "@/components/Mega_show";
import UrlUpload from "@/components/Urlupload";
import WorldAcces from "@/components/World_acces";
import ResumeShow from "@/components/Resume/Resume_show";


export default function Home() {
  const router = useRouter();
  const [showContent, setShowContent] = useState(false);


  const handleSignInRedirect = () => {
    router.push("/sign-in");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return <Loading />;
  }

  return (
    <div>

      <HeroSection />
      <BasicFretures />
      <MegaShow />
      <WorldAcces />
      <ResumeShow />
      <WorldAcces />








    </div>
  );
}
