"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UserButton } from "@clerk/nextjs";
import Loader from "./loading";
import HeroSection from "@/components/Herosection";
import BasicFretures from "@/components/Basic_fretures";
import MegaShow from "@/components/Mega_show";
import UrlUpload from "@/components/Urlupload";
import WorldAcces from "@/components/World_acces";
import FAQ from "@/components/Resume/FAQ";
import Footer from "@/components/Resume/Footer";
import ResumeShow from "@/components/Resume/Resume_show";
import { FaceControls } from "@react-three/drei";


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
    return <Loader />;
  }

  return (
    <div>

      <HeroSection />
      <BasicFretures />
      <MegaShow />
      <WorldAcces />
      <ResumeShow />
      <FAQ />
      <Footer />









    </div>
  );
}
