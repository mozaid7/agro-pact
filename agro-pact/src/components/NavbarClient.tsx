"use client";
import React from "react";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
const NavbarClient = () => {
  const pathname = usePathname();

  const shouldShowNavbar = !["/signup", "/signin"].includes(pathname);

  return shouldShowNavbar ? <Navbar /> : null;
};

export default NavbarClient;
