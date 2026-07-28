import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FounderSpotlight from "@/components/sections/FounderSpotlight";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Er. Naveed Malik | IMMNAVEED Digital Growth Consultancy",
  description: "Learn about Er. Naveed Malik, Brand Strategist, Growth Consultant, and Next.js Architect leading IMMNAVEED digital consultancy.",
};

export default function AboutPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Page Header */}
        <div className="py-16 md:py-24 border-b border-zinc-900 bg-zinc-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Philosophy & Leadership
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              We Don&apos;t Just Market. <br />
              <span className="text-gradient-bronze">We Engineer Growth.</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
              IMMNAVEED combines executive brand strategy, Meta performance advertising, and Next.js 15 software architecture into one systematic engine.
            </p>
          </div>
        </div>

        {/* Founder Spotlight */}
        <FounderSpotlight />

        {/* Growth Methodology */}
        <ProcessTimeline />

        {/* Strategy Consultation Booking */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
