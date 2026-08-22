import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseProcessEngine from "@/components/sections/CaseProcessEngine";
import BusinessGrowth from "@/components/BusinessGrowth";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProofMarquee from "@/components/sections/ProofMarquee";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 5-Stage Growth Methodology | IMMNAVEED",
  description: "Discover Er. Naveed Malik's 5-Stage Growth Protocol: Audit, Brand Strategy, Next.js 15 Engineering, Funnel Launch, and Scale.",
};

export default function ProcessPage() {
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
                Execution Protocol
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-4">
              Systematic Growth. <br />
              <span className="text-gradient-teal">Zero Guesswork.</span>
            </h1>
            <p className="text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Every client engagement follows our strict 5-stage engineering protocol to ensure predictable execution and maximum ROAS.
            </p>
          </div>
        </div>

        {/* Proof metrics */}
        <ProofMarquee />

        {/* Interactive Case Process Engine (5-Stage Framework) */}
        <CaseProcessEngine />

        {/* Scaling Engine Timeline */}
        <BusinessGrowth />

        {/* Competitive Advantage */}
        <WhyChooseUs />

        {/* Lead Capture */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
