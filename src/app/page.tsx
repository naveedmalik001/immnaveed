import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofMarquee from "@/components/sections/ProofMarquee";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import Portfolio from "@/components/Portfolio";
import IndustryMatrix from "@/components/sections/IndustryMatrix";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
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
        {/* Section 1: Editorial Hero */}
        <Hero />

        {/* Section 2: Social Proof & Client Logos Marquee */}
        <ProofMarquee />

        {/* Section 3: Core Capabilities & Services Accordion */}
        <ServicesAccordion />

        {/* Section 4: Verified Client Case Studies (Cambridge Edu, GoStudy, Campus Disha) */}
        <Portfolio />

        {/* Section 5: Target Industries Matrix */}
        <IndustryMatrix />

        {/* Section 6: 5-Stage Growth Methodology Timeline */}
        <ProcessTimeline />

        {/* Section 7: Founder Spotlight (Er. Naveed Malik) */}
        <FounderSpotlight />

        {/* Section 8: Interactive Lead Booking Widget */}
        <BookingWidget />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
