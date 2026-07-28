import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IndustryMatrix from "@/components/sections/IndustryMatrix";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Target Sectors & Industries | IMMNAVEED Digital Consultancy",
  description: "Specialized digital growth strategies for Educational Institutions, Healthcare & Hospitals, Real Estate, Luxury Hotels, and High-Growth Startups.",
};

export default function IndustriesPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="py-16 md:py-20 border-b border-zinc-900 bg-zinc-950 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Industry Expertise
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Vertical Solutions for <br />
              <span className="text-gradient-bronze">High-Value Sectors.</span>
            </h1>
            <p className="text-base text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
              We design custom growth engines tailored precisely to the compliance, unit economics, and buyer psychology of your industry.
            </p>
          </div>
        </div>

        {/* Industries Matrix Component */}
        <IndustryMatrix />

        {/* Strategy Consultation Booking */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
