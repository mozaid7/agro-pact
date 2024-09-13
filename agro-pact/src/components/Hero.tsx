import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

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
    <div>

    </div>
  );
};

export default Hero;
