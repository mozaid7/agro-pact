"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "/images/img1.svg",
  },
  {
    id: 2,
    src: "/images/img2.svg",
  },
  {
    id: 3,
    src: "/images/img3.svg",
  },
  {
    id: 4,
    src: "/images/img4.svg",
  },
  {
    id: 5,
    src: "/images/img5.svg",
  },
  {
    id: 6,
    src: "/images/img6.svg",
  },
  {
    id: 7,
    src: "/images/img7.svg",
  },
  {
    id: 8,
    src: "/images/img8.svg",
  },
  {
    id: 9,
    src: "/images/img9.svg",
  },
  {
    id: 10,
    src: "/images/img10.svg",
  },
  {
    id: 11,
    src: "/images/img11.svg",
  },
  {
    id: 12,
    src: "/images/img12.svg",
  },
  {
    id: 13,
    src: "/images/img13.svg",
  },
  {
    id: 14,
    src: "/images/img14.svg",
  },
  {
    id: 15,
    src: "/images/img15.svg",
  },
  {
    id: 16,
    src: "/images/img16.svg",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    if (res.ok) {
      router.push("/api/auth/signin");
    } else {
      // Handle error
      console.log("Signup failed");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-black-100">
      
      <div className="w-96">
      <ShuffleGrid />
      </div>
        
        
        
        <div className="bg-white shadow-lg rounded-2xl p-10 flex items-center gap-16">
          <div>
            <div className="text-5xl font-bold text-gray-800 mb-4">Sign Up</div>
            <div className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => router.push("/api/auth/signin")}
                className="text-blue-500 hover:underline"
              >
                Sign In
              </button>
            </div>
          </div>
        
          <form onSubmit={handleSignup} className="flex flex-col gap-6 *:rounded-xl">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
              type="submit"
              className=" bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
