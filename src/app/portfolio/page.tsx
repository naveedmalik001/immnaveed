import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ReelsShowcase from "@/components/sections/ReelsShowcase";
import Portfolio from "@/components/Portfolio";
import ProofMarquee from "@/components/sections/ProofMarquee";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reels, Video Production & Client Portfolio | IMMNAVEED",
  description: "Browse verified Instagram reels, 4K corporate video shoots, wedding films, and digital growth case studies produced by IMMNAVEED.",
};

export default function PortfolioPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-[76px]">
        {/* Page Header */}
        <div className="py-16 md:py-20 border-b border-slate-200 bg-[#F8FAFC] bg-grid-blueprint text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="mb-4">
              <span className="badge-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                Media &amp; Digital Portfolio
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] mb-4">
              Reels, Video Shoots &amp; <br />
              <span className="text-gradient-teal">Client Growth Work.</span>
            </h1>
            <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
              Explore our in-house 4K video shoots, viral Instagram reels, performance ad creatives, and digital client architectures.
            </p>
          </div>
        </div>

        {/* Proof metrics */}
        <ProofMarquee />

        {/* 1. Interactive Reels & Video Editing Showcase */}
        <ReelsShowcase />

        {/* 2. Client Case Studies & Web Deployments */}
        <Portfolio />

        {/* Lead Capture */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
