"use client";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen py-8 px-4 md:px-24 relative justify-between overflow-hidden sm:px-10">
      <Hero />
      <Services/>
      <Footer/>
    </main>
  );
}
