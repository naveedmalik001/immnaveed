import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofMarquee from "@/components/sections/ProofMarquee";
import Services from "@/components/Services";
import ReelsShowcase from "@/components/sections/ReelsShowcase";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import InstagramFeed from "@/components/sections/InstagramFeed";
import BookingWidget from "@/components/sections/BookingWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-[#14B8C4] selection:text-[#031730]">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Flow */}
      <main className="flex-grow">
        {/* 2. Hero with Cambridge Navy, Teal Gradients & Floating Stat Cards */}
        <Hero />

        {/* 3. Proof Marquee & Verified Client Network (Clean White Section) */}
        <ProofMarquee />

        {/* 4. The 7 Core Real Services (Clean Light Section) */}
        <Services />

        {/* 5. Interactive Reels & Video Editing Portfolio Showcase */}
        <ReelsShowcase />

        {/* 6. In-Depth 7 Core Capabilities Accordion (Deep Navy Section) */}
        <ServicesAccordion />

        {/* 7. Founder Spotlight — Er. Naveed Malik (Deep Navy Section) */}
        <FounderSpotlight />

        {/* 8. The Competitive Edge Matrix (Deep Navy Section) */}
        <WhyChooseUs />

        {/* 9. Partner Endorsements & Testimonials (Clean Slate Section) */}
        <Testimonials />

        {/* 10. Social Authority & Instagram Insights (Clean Light Section) */}
        <InstagramFeed />

        {/* 11. Direct Strategy Consultation Booking Widget (Deep Navy Section) */}
        <BookingWidget />
      </main>

      {/* 12. Executive Footer */}
      <Footer />
    </div>
  );
}
