"use client";

import NavigationBar from "@/components/sections/navbar";
import { BackgroundBeams } from "../ui/background-beams";
import { CardDemo, CardDemo2,CardDemo3,CardDemo4,CardDemo5 } from "../ui/card";

export default function SkillsDetails() {
  return (
    <div className="relative w-full h-screen bg-black flex flex-col">
      {/* ✅ Background (behind everything) */}
      <BackgroundBeams />

      {/* ✅ Navbar (at the top) */}
      <NavigationBar />

      {/* ✅ Centered Card Container */}
      <div className="flex flex-1 items-center justify-center">
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <CardDemo />
          <CardDemo2 />
          <CardDemo3 />
          <CardDemo4/>
          <CardDemo5/>
          
        </div>
      </div>
    </div>
  );
}
