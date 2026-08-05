import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofMarquee from "@/components/sections/ProofMarquee";
import InstagramFeed from "@/components/sections/InstagramFeed";
import CaseProcessEngine from "@/components/sections/CaseProcessEngine";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import Portfolio from "@/components/Portfolio";
import IndustryMatrix from "@/components/sections/IndustryMatrix";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import BookingWidget from "@/components/sections/BookingWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* Sticky Executive Navigation */}
      <Navbar />

      {/* Main Page Layout Flow */}
      <main className="flex-grow">
        {/* Section 1: Executive Hero Console */}
        <Hero />

        {/* Section 2: Social Proof & Client Logos Marquee */}
        <ProofMarquee />

        {/* Section 3: Instagram Content Showcase & Insights (@immnaveed) */}
        <InstagramFeed />

        {/* Section 4: Step-by-Step Case & Consultation Framework */}
        <CaseProcessEngine />

        {/* Section 5: Full Capabilities & Services Accordion */}
        <ServicesAccordion />

        {/* Section 6: Verified Client Case Studies */}
        <Portfolio />

        {/* Section 7: Target Sectors & Industries Matrix */}
        <IndustryMatrix />

        {/* Section 8: Founder Spotlight (Er. Naveed Malik) */}
        <FounderSpotlight />

        {/* Section 9: Interactive Lead & Strategy Consultation Widget */}
        <BookingWidget />
      </main>

      {/* Corporate Executive Footer */}
      <Footer />
    </div>
  );
}
