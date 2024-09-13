"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen py-8 px-24 relative justify-between overflow-hidden sm:px-10">
      <Hero />
    </main>
  );
}
