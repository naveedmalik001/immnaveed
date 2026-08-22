import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import ProofMarquee from "@/components/sections/ProofMarquee";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Portfolio & Verified Work | IMMNAVEED",
  description: "Browse verified websites, high-ROAS marketing funnels, and enterprise ERP portals built for Cambridge Education, GoStudy Edu, and Campus Disha.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-[#081627] text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-[76px]">
        {/* Page Header */}
        <div className="py-16 md:py-20 border-b border-[#1A3E6D] bg-[#0B1E36] bg-grid-pattern text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-4">
              <span className="badge-pill badge-cyan">
                Verified Client Execution
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-4">
              Proven Digital Systems for <br />
              <span className="text-[#00D2D3]">High-Growth Brands.</span>
            </h1>
            <p className="text-base text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
              Explore real websites, Next.js 15 architectures, and performance marketing funnels engineered for our trusted clients.
            </p>
          </div>
        </div>

        {/* Proof metrics */}
        <ProofMarquee />

        {/* Portfolio Showcase Grid */}
        <Portfolio />

        {/* Lead Capture */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
