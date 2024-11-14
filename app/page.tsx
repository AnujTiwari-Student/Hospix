'use client';

import { BentoGridDemo } from "@/components/BentoGrid";
import FAQ from "@/components/FAQ";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";


export default function Home() {
  return (
    <main className="flex flex-col">
      <BackgroundGradientAnimation>
        <HeroSection />
      </BackgroundGradientAnimation>
      <BentoGridDemo />
      <FeaturesSection />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
