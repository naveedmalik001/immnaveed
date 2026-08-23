import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofMarquee from "@/components/sections/ProofMarquee";
import Services from "@/components/Services";
import ServicesDeckShuffler from "@/components/sections/ServicesDeckShuffler";
import ReelsShowcase from "@/components/sections/ReelsShowcase";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BookingWidget from "@/components/sections/BookingWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#14B8C4] selection:text-[#031730]">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Flow */}
      <main className="flex-grow">
        {/* 2. Hero with Web & ERP Engineering, Marketing & Video Production */}
        <Hero />

        {/* 3. Proof Marquee & Verified Client Network (Clean White Section) */}
        <ProofMarquee />

        {/* 4. The Core Real Services Grid (Clean Light Section) */}
        <Services />

        {/* 5. Animated Fanned-Out Services Deck Shuffler */}
        <ServicesDeckShuffler />

        {/* 6. Live Verified 8 Instagram Reels & Video Production Showcase */}
        <ReelsShowcase />

        {/* 7. In-Depth Capabilities Accordion (Deep Navy Section) */}
        <ServicesAccordion />

        {/* 8. Founder Spotlight — Er. Naveed Malik (Deep Navy Section) */}
        <FounderSpotlight />

        {/* 9. The Competitive Edge Matrix (Deep Navy Section) */}
        <WhyChooseUs />

        {/* 10. Partner Endorsements with Kashmiri Client Names (Clean Slate Section) */}
        <Testimonials />

        {/* 11. Direct Strategy Consultation Booking Widget (Deep Navy Section) */}
        <BookingWidget />
      </main>

      {/* 12. Executive Footer */}
      <Footer />
    </div>
  );
}
