import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import Dashboard from "./Dashboard";

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
  return <div>{session ? <Dashboard /> : null}</div>;
};

export default Hero;
