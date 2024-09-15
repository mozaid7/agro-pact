import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Dashboard from "./Dashboard";
import ClientNavbar from "./ClientNav";

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
  function rgb(arg0: number, arg1: number, arg2: number): import("csstype").Property.Color | undefined {
    throw new Error("Function not implemented.");
  }

  return <>
    {session ?  null : <ClientNavbar />}
    {session ? <Dashboard /> : null}
    
  </>;
};

export default Hero;
