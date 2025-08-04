"use client";

import Projects from "@/components/sections/project"; // Import the main Projects component

export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-black">
      {/* Render the Projects component */}
      <Projects />
    </main>
  );
}
