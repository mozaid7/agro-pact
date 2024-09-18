"use client"
import ClientNavbar from "@/components/ClientNav";
import Dashboard from "@/components/Dashboard";
import { FaqAccordian } from "@/components/FaqAccordian";
import FeaturesBento from "@/components/FeaturesBento";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewHero from "@/components/NewHero";
import Services from "@/components/Services";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <main className="flex flex-col min-h-screen py-20 px-4 md:px-24 sm:px-10 relative justify-between overflow-hidden  dark:bg-green-950 bg-[#e4efe6]">
      {session ?
        <>
          <ClientNavbar />
          <Dashboard />
        </>

        : null}
      {session ? null :
        <>
          <NewHero />
          {/* <Hero /> */}
          <Services />
          <FeaturesBento />
          <FaqAccordian />
          <Footer />
        </>
      }
    </main>
  );
}
