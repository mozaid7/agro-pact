import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="bg-black text-black flex mx-8 md:mx-24 ">{children}</div>
    </div>
  );
}
