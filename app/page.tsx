'use client';

import { BentoGridDemo } from "@/components/BentoGrid";
import FAQ from "@/components/FAQ";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import { AuroraBackground } from "@/components/ui/aurora-background";


export default function Home() {
  return (
    <main className="flex flex-col">
      <AuroraBackground>
        <HeroSection />
      </AuroraBackground>
      <BentoGridDemo />
      <FeaturesSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
