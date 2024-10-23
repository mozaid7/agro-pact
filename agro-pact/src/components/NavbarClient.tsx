import React from "react";
("use client");
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
const NavbarClient = () => {
  const pathname = usePathname();

  const shouldShowNavbar = !["/signup", "/signin"].includes(pathname);

  return shouldShowNavbar ? <Navbar /> : null;
};

export default NavbarClient;
