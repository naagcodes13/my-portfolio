"use client";

import NavigationBar from "@/components/sections/navbar";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { GridBackgroundDemo } from "@/components/ui/grid-background";

const words = `To Know more about me scroll !!`;


export function TextGenerateEffectDemo() {
  return <TextGenerateEffect 
    words={words} 
    textColor="text-white"
    className="text-3xl md:text-5xl lg:text-6xl" // Purple color
  />;
}

export default function AboutMe() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black">
      {/* ✅ Grid Background (absolute instead of fixed) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <GridBackgroundDemo />
      </div>

      {/* ✅ Navbar (higher z-index) */}
      <div className="relative z-20">
        <NavigationBar />
      </div>

      {/* ✅ MacBook Scroll with text effect */}
      <div className="relative z-10 flex-1 flex justify-center items-center">
        <MacbookScroll
          title={<TextGenerateEffectDemo />}
          src={`/linear.webp`}
          showGradient={false}
        />
      </div>
    </main>
  );
}
