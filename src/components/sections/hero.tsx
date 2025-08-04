"use client";

import { useEffect, useState } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Boxes } from "../ui/background-boxes";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  // ✅ Wait for animations to preload before showing content
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* ✅ Static background while animations load */}
      <div className="absolute inset-0 bg-black" />

      {/* ✅ Background animation (prevents sudden appearance) */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Boxes />
      </div>

      {/* ✅ Typewriter effect with smooth fade-in */}
      <div
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 ml-10 z-10 transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <TypewriterEffectDemo />
      </div>
    </div>
  );
}

export function TypewriterEffectDemo() {
  const words = [
    { text: "Hi,", className: "text-white" },
    { text: "I", className: "text-white" },
    { text: "am", className: "text-white" },
    { text: "Aditiyaa", className: "text-white" },
    { text: "Naag.", className: "text-blue-900 dark:text-blue-900" },
  ];

  return (
    <div className="flex flex-col items-start">
      <TypewriterEffectSmooth words={words} />
    </div>
  );
}
