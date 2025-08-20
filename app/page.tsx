"use client";

import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import { UserButton  } from "@clerk/nextjs";
import Nav from "@/components/Nav";
import Loading from "./loading";
import Freatures from "@/components/Freatures";
import Product from "@/components/Product_show";
import HeroSection from "@/components/Herosection";
import CustomSignOutDropdown from "@/components/CustomSignOutDropdown";



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
      <Nav/>
      <HeroSection/>
      <Freatures/>
      <Product/>
       
    </div>
  );
}
