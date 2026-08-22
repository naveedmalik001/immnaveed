import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryMatrix from "@/components/sections/IndustryMatrix";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ProofMarquee from "@/components/sections/ProofMarquee";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Target Sectors & Industries | IMMNAVEED Digital Consultancy",
  description: "Specialized digital growth strategies for Educational Institutions, Healthcare & Hospitals, Real Estate, Luxury Hotels, and High-Growth Startups.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#031730] text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-[76px]">
        {/* Header */}
        <div className="py-16 md:py-20 border-b border-slate-800 bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] bg-grid-blueprint text-center relative overflow-hidden">
          <div className="absolute w-[500px] h-[500px] -top-20 -left-20 bg-[#14B8C4]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="mb-4">
              <span className="badge-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                Industry Expertise
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Vertical Solutions for <br />
              <span className="text-gradient-teal">High-Value Sectors.</span>
            </h1>
            <p className="text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              We design custom growth engines tailored precisely to the compliance, unit economics, and buyer psychology of your industry.
            </p>
          </div>
        </div>

        {/* Proof metrics */}
        <ProofMarquee />

        {/* Industries Matrix Component */}
        <IndustryMatrix />

        {/* Competitive Advantage */}
        <WhyChooseUs />

        {/* Client Endorsements */}
        <Testimonials />

        {/* Strategy Consultation Booking */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
