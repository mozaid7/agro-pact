"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); 

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.ok) {
      router.push("/");
    } else {
      setError(result?.error || "Failed to sign in");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f8ece4] text-black-100">
      <div className="bg-white shadow-lg rounded-2xl p-10 flex items-center gap-16 border-8 border-white">
        <form onSubmit={handleSignIn} className="flex flex-col gap-6">
          <div>
            <Label htmlFor="email" className="text-gray-600">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-600">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <Button
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Log In
          </Button>
          <hr className="my-2" />
          <Button
            type="button"
            className="bg-black text-white py-2 rounded-lg hover:bg-slate-500 transition-all"
            onClick={() => signIn("github")}
          >
            Sign In with Github
          </Button>
          <Button
            type="button"
            className="bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-all"
            onClick={() => router.push("/signup")}
          >
            Create New Account
          </Button>
        </form>
      </div>
    </div>
  );
}
