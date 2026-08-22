import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofMarquee from "@/components/sections/ProofMarquee";
import About from "@/components/About";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import Portfolio from "@/components/Portfolio";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import CaseProcessEngine from "@/components/sections/CaseProcessEngine";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/sections/InstagramFeed";
import BookingWidget from "@/components/sections/BookingWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#031730] text-white font-sans antialiased selection:bg-[#14B8C4] selection:text-[#031730]">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Flow */}
      <main className="flex-grow">
        {/* 2. Hero with Cambridge Navy, Teal Gradients & Floating Stat Cards */}
        <Hero />

        {/* 3. Proof Marquee & Verified Client Network (Clean White Contrast) */}
        <ProofMarquee />

        {/* 4. Core Philosophy & Pillars (High-Contrast Clean White Section) */}
        <About />

        {/* 5. Core Capabilities & Services Accordion (Deep Navy Section) */}
        <ServicesAccordion />

        {/* 6. Verified Client Portfolio & Case Breakdown (Clean Light Section) */}
        <Portfolio />

        {/* 7. Founder Spotlight — Er. Naveed Malik (Deep Navy Section) */}
        <FounderSpotlight />

        {/* 8. 5-Stage Execution Framework (Clean White Section) */}
        <CaseProcessEngine />

        {/* 9. The Competitive Edge Matrix (Deep Navy Section) */}
        <WhyChooseUs />

        {/* 10. Partner Endorsements & Testimonials (Clean Slate Section) */}
        <Testimonials />

        {/* 11. Social Authority & Instagram Insights (Clean Light Section) */}
        <InstagramFeed />

        {/* 12. Direct Strategy Consultation Booking Widget (Deep Navy Section) */}
        <BookingWidget />
      </main>

      {/* 13. Executive Footer */}
      <Footer />
    </div>
  );
}
