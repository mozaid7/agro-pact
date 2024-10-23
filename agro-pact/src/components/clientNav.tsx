"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ClientNav() {
  const pathname = usePathname();

  const shouldShowNavbar = !["/signup", "/signin"].includes(pathname);

  return shouldShowNavbar ? <Navbar /> : null;
}
