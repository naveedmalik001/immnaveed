import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import BusinessGrowth from "@/components/BusinessGrowth";
import Testimonials from "@/components/Testimonials";
import ProofMarquee from "@/components/sections/ProofMarquee";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies & ROAS Metrics | IMMNAVEED",
  description: "Detailed case studies documenting enrollment conversion lifts, sub-second Next.js speeds, and ROAS improvements.",
};

export default function CaseStudiesPage() {
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
                Case Studies &amp; Data
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Data-Backed Proof. <br />
              <span className="text-gradient-teal">Zero Marketing Fluff.</span>
            </h1>
            <p className="text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Examine the exact challenges, growth strategies, and verified ROI metrics behind our client engagements.
            </p>
          </div>
        </div>

        {/* Proof metrics */}
        <ProofMarquee />

        {/* Case Studies Display */}
        <Portfolio />

        {/* Scaling Engine */}
        <BusinessGrowth />

        {/* Partner Endorsements */}
        <Testimonials />

        {/* Lead Capture */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
