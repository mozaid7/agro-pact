"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Nav className="top-6" />
    </div>
  );
}

function Nav({ className }: { className?: string }) {
  const { data: session } = useSession();
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-4xl mx-auto z-50 *:flex *:justify-between",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="grid grid-cols-3 w-full">

          <Link href={"/"} className="flex gap-2 items-center justify-start">
            <Image src="../phasalCombinatorLogo2.svg" alt="Phasal Combinator Logo" className="overflow-hidden" width={24} height={24} priority />
            <p className="font-bold tracking-tight">Phasal Combinator</p>
          </Link>


          <div className="flex items-center gap-4 justify-center">
            <MenuItem setActive={setActive} active={active} item="What we do?">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/objective">Our Goal</HoveredLink>
                <HoveredLink href="/help">Our Work</HoveredLink>
                <HoveredLink href="/contact">Why choose us</HoveredLink>
                <HoveredLink href="/support">Resources</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contract">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/createContract">Create a Contract</HoveredLink>
                <HoveredLink href="/liveContracts">Sign a Contract</HoveredLink>
              </div>
            </MenuItem>
          </div>


          <div className="flex justify-end">
            <div className="py-2 px-3 rounded-xl bg-[#ffc744] hover:*:text-white hover:bg-[#f0ac0e] transition-all ease-in-out duration-300">
              <MenuItem setActive={setActive} active={active} item="Login / Signup">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/signin">Login</HoveredLink>
                  <HoveredLink href="/signup">Sign Up</HoveredLink>
                </div>
              </MenuItem>
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default Navbar;
