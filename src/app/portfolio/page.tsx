import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portfolio & Verified Work | IMMNAVEED",
  description: "Browse verified websites, high-ROAS marketing funnels, and enterprise ERP portals built for Cambridge Education, GoStudy Edu, and Campus Disha.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="py-16 md:py-20 border-b border-zinc-900 bg-zinc-950 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Verified Work
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Proven Digital Systems for <br />
              <span className="text-gradient-bronze">High-Growth Brands.</span>
            </h1>
            <p className="text-base text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Explore real websites, Next.js 15 architectures, and performance funnels engineered for our trusted clients.
            </p>
          </div>
        </div>

        {/* Portfolio Showcase Grid */}
        <Portfolio />

        {/* Lead Capture */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
