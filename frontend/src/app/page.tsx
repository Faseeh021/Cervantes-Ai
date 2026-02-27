import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </main>
  );
}
