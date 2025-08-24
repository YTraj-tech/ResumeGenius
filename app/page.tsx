"use client";

import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import { UserButton  } from "@clerk/nextjs";
import Nav from "@/components/Nav";
import Loading from "./loading";
import HeroSection from "@/components/Herosection";
import BasicFretures from "@/components/Basic_fretures";
import MegaShow from "@/components/Mega_show";
import UrlUpload from "@/components/Urlupload";
import ProductShow from "@/components/Product_show";



export default function Home() {
  const router = useRouter();
    const [showContent, setShowContent] = useState(false);


  const handleSignInRedirect = () => {
    router.push("/sign-in");
  };

    useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!showContent) {
    return <Loading />;
  }

  return (
    <div>
      
      <HeroSection/>
      <BasicFretures/>
      <MegaShow/>
      <ProductShow/>

     
    
    </div>
  );
}
