import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 5-Stage Growth Methodology | IMMNAVEED",
  description: "Discover Er. Naveed Malik's 5-Stage Growth Protocol: Audit, Brand Strategy, Next.js 15 Engineering, Funnel Launch, and Scale.",
};

export default function ProcessPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="py-16 md:py-20 border-b border-zinc-900 bg-zinc-950 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Execution Protocol
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Systematic Growth. <br />
              <span className="text-gradient-bronze">Zero Guesswork.</span>
            </h1>
            <p className="text-base text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Every client engagement follows our strict 5-stage engineering protocol to ensure predictable execution and maximum ROAS.
            </p>
          </div>
        </div>

        {/* Process Timeline */}
        <ProcessTimeline />

        {/* Lead Capture */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
