import NavigationBar from "@/components/sections/navbar"; // Fixed import
import HeroSection from "@/components/sections/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      {/* ✅ Navbar at the top */}
      <NavigationBar />

      {/* ✅ Hero Section */}
      <HeroSection />

      {/* ✅ Animated Image on the Right */}
      <Image
        src="/removed_qual.png"
        alt="Animated Illustration"
        width={900}
        height={900}
        className="absolute right-10 bottom-10 hidden md:block"
      />
    </main>
  );
}
