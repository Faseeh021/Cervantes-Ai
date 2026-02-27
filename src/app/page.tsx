import { Navbar } from "@/components/layout/Navbar";
import { BackgroundGrid } from "@/components/layout/BackgroundGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { DemoPreviewSection } from "@/components/sections/DemoPreviewSection";
import { TrustedCreatorsSection } from "@/components/sections/TrustedCreatorsSection";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <BackgroundGrid />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <WhyChooseSection />
      <HowItWorksSection />
      <DemoPreviewSection />
      <TrustedCreatorsSection />
      <Footer />
    </main>
  );
}
