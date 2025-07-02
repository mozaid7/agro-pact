"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Dashboard from "./Dashboard";
import NavClient from "./NavClient";
import { BiLeaf } from "react-icons/bi";
import { MdOutlineArrowOutward } from "react-icons/md";

const Hero = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleNavigation = (path: string) => {
    if (session) {
      router.push(path);
    } else {
      router.push("/signin");
    }
  };

  return (
    <>
      <NavClient />

      {session ? <Dashboard /> : null}
      {!session && (
        <section className="bg-[#0c5934] border-8 border-[#5ee4a396] h-auto pb-6 min-w-full mt-6 px-8 md:px-20 pt-20 text-white rounded-3xl z-10">
          <div className="flex items-center justify-start gap-1 pl-2">
            <BiLeaf className="size-10 md:size-5 text-white" />
            <span className="font-semibold tracking-tight text-xs md:text-base">
              Connecting farmers and buyers with transparent & secure contracts
            </span>
          </div>
          <h1 className="text-2xl md:text-8xl font-light tracking-tighter font-sans pb-4 md:pb-6">
            Every grain holds value & purpose, ensuring none go to waste &
            turning that purpose into profit.
          </h1>
          <p className="relative md:absolute md:pl-5 text-sm md:text-base md:w-3/5 md:flex justify-center items-center">
            <MdOutlineArrowOutward className="size-8 md:size-24 top-0 left-0" />
            We aim to create an online marketplace that connects farmers and
            buyers for transparent, automated contract farming agreements. Using
            blockchain technology, we ensure security, trust, and transparency
            in every transaction.
          </p>
          <div className="md:pb-10"></div>

          <section className="relative w-full pt-[40%] h-0">
            <svg
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
              viewBox="0 0 100 40"
            >
              <clipPath id="border">
                <path
                  d="M 7 5
                L 85 5
                A 2.5 2.5 0 0 0 87.5 2.5
                A 2.5 2.5 0 0 1 90 0
                L 97.5 0
                A 2.5 2.5 0 0 1 100 2.5
                L 100 25
                A 2.5 2.5 0 0 1 97.5 27.5
                L 80 27.5
                A 2.5 2.5 0 0 0 77.5 30
                L 77.5 35
                A 2.5 2.5 0 0 1 75 37.5
                L 10 37.5
                A 2.5 2.5 0 0 1 7.5 35
                L 7.7 20
                A 2.5 2.5 0 0 0 5 17.5
                L 2.5 17.5
                A 2.5 2.5 0 0 1 0 15
                L 0 7.5
                A 2.5 2.5 0 0 1 2.5 5
            "
                ></path>
              </clipPath>
              <image
                clipPath="url(#border)"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                xlinkHref="https://plus.unsplash.com/premium_photo-1722682239737-4bc41d2b8c0d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              ></image>
            </svg>
          </section>
        </section>
      )}
    </>
  );
};

export default Hero;
