import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofMarquee from "@/components/sections/ProofMarquee";
import Services from "@/components/Services";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import ReelsShowcase from "@/components/sections/ReelsShowcase";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import BookingWidget from "@/components/sections/BookingWidget";
import ServicesWelcomeModal from "@/components/sections/ServicesWelcomeModal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#14B8C4] selection:text-[#031730]">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Pop-up Services Overview Banner on Site Visit */}
      <ServicesWelcomeModal />

      {/* Main Flow */}
      <main className="flex-grow">
        {/* 2. Hero with Web & ERP Engineering, Marketing & Video Production */}
        <Hero />

        {/* 3. Proof Marquee & Verified Client Network (Clean White Section) */}
        <ProofMarquee />

        {/* 4. The Original Clean Services Grid with Category Switcher */}
        <Services />

        {/* 5. In-Depth Capabilities Accordion (Deep Navy Section) */}
        <ServicesAccordion />

        {/* 6. Live Verified 8 Instagram Reels & Video Production Showcase */}
        <ReelsShowcase />

        {/* 7. Founder Spotlight — Er. Naveed Malik (Deep Navy Section) */}
        <FounderSpotlight />

        {/* 8. The Competitive Edge Matrix (Deep Navy Section) */}
        <WhyChooseUs />

        {/* 9. Verified Partner Endorsements with Kashmiri Client Names (Clean Slate Section) */}
        <Testimonials />

        {/* 10. Direct Strategy Consultation Booking Widget (Deep Navy Section) */}
        <BookingWidget />
      </main>

      {/* 11. Executive Deep Navy Footer */}
      <Footer />
    </div>
  );
}
