import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProofMarquee from "@/components/sections/ProofMarquee";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Core Capabilities & Services | IMMNAVEED Digital Consultancy",
  description: "Explore IMMNAVEED's full suite of services including Brand Strategy, Meta Ads, Next.js 15 Web Engineering, Custom ERPs, and Marketing Automation.",
};

export default function ServicesPage() {
  return (
    <div className="bg-[#031730] text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-[76px]">
        {/* Header */}
        <div className="py-16 md:py-20 border-b border-slate-800 bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] bg-grid-blueprint text-center relative overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-[#14B8C4]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="mb-4">
              <span className="badge-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                Corporate Capabilities
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Engineered Capabilities for <br />
              <span className="text-gradient-teal">Market Dominance.</span>
            </h1>
            <p className="text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Every service is structured to reduce customer acquisition costs, elevate brand authority, and build scalable digital software.
            </p>
          </div>
        </div>

        {/* Proof metrics */}
        <ProofMarquee />

        {/* Interactive Services Accordion */}
        <ServicesAccordion />

        {/* Full Services Grid with Slugs */}
        <Services />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Strategy Booking */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
