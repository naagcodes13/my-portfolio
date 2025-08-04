"use client";

import { Navbar, NavbarContent, NavbarItem, Link } from "@heroui/react";
import { Button } from "../ui/moving-border";

// Animated Border Button Component
const AnimatedBorderButton = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link href={href} className="relative inline-block p-[3px] group">
    {/* Default Black Border */}
    <div className="absolute inset-0 bg-black rounded-lg transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-purple-500" />
    
    {/* Button Content */}
    <div className="px-6 py-2 bg-black text-white rounded-[6px] relative transition duration-200 group-hover:bg-transparent">
      {children}
    </div>
  </Link>
);

export default function NavigationBar() {
  return (
    <Navbar className="bg-black text-white fixed top-0 left-0 w-full z-50 flex justify-between px-6">
      {/* Left-aligned navigation links */}
      <NavbarContent className="flex gap-6">
        <NavbarItem>
          <AnimatedBorderButton href="/">Home</AnimatedBorderButton>
        </NavbarItem>
        <NavbarItem>
          <AnimatedBorderButton href="/about">About</AnimatedBorderButton>
        </NavbarItem>
        <NavbarItem>
          <AnimatedBorderButton href="/project">Projects</AnimatedBorderButton>
        </NavbarItem>
        <NavbarItem>
          <AnimatedBorderButton href="/skills">Skills</AnimatedBorderButton>
        </NavbarItem>
      </NavbarContent>

      {/* Right-aligned GitHub and Resume */}
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <AnimatedBorderButton href="https://github.com/naag1311" target="_blank" rel="noopener noreferrer">
            GitHub
          </AnimatedBorderButton>
        </NavbarItem>
        <NavbarItem>
          <a href="/ADI_FINAL.pdf" target="_blank" rel="noopener noreferrer">
            <Button className="cursor-pointer pointer-events-auto">Resume</Button>
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
