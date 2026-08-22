import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ProofMarquee from "@/components/sections/ProofMarquee";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Er. Naveed Malik | IMMNAVEED Digital Growth Consultancy",
  description: "Learn about Er. Naveed Malik, Brand Strategist, Growth Consultant, and Next.js Architect leading IMMNAVEED digital consultancy.",
};

export default function AboutPage() {
  return (
    <div className="bg-[#031730] text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-[76px]">
        {/* Page Header */}
        <div className="py-16 md:py-24 border-b border-slate-800 bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] bg-grid-blueprint text-center relative overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-[#14B8C4]/15 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="mb-4">
              <span className="badge-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                Philosophy &amp; Leadership
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              We Don&apos;t Just Market. <br />
              <span className="text-gradient-teal">We Engineer Growth.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              IMMNAVEED combines executive brand strategy, Meta performance advertising, and Next.js software architecture into one systematic engine.
            </p>
          </div>
        </div>

        {/* Proof Stats */}
        <ProofMarquee />

        {/* About Philosophy */}
        <About />

        {/* Founder Spotlight */}
        <FounderSpotlight />

        {/* Competitive Advantage */}
        <WhyChooseUs />

        {/* Testimonials */}
        <Testimonials />

        {/* Strategy Consultation Booking */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
