"use client";
import React, { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Typewriter() {
  const words = [
    //  for Stable Market Access
    { text: "A" },
    { text: "Contract" },
    { text: "Farming" },
    { text: "System" },
    { text: "For" },
    { text: "Stable" },
    { text: "Market" },
    { text: "Access ." },

    // { text: "AgriBazar.", className: "text-green-500 dark:text-blue-500" },
  ];

  const [restart, setRestart] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setRestart((prev) => !prev);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth
        words={words}
        key={restart ? "restart" : "initial"}
      />
    </div>
  );
}
