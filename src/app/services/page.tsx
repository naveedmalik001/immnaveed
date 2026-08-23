import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import ReelsShowcase from "@/components/sections/ReelsShowcase";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProofMarquee from "@/components/sections/ProofMarquee";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our 7 Core Services | IMMNAVEED Media & Growth Consultancy",
  description: "Explore IMMNAVEED's full suite: Business Growth Consultation, Meta/Google Ads, Graphic Design, Video Shoots & Reels, Video Editing, Data Analysis, and Wedding Event Production.",
};

export default function ServicesPage() {
  return (
    <div className="bg-white text-[#0F172A] min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-[76px]">
        {/* Header */}
        <div className="py-16 md:py-20 border-b border-slate-200 bg-[#F8FAFC] bg-grid-blueprint text-center relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="mb-4">
              <span className="badge-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                Our 7 Core Capabilities
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] mb-4">
              Full-Spectrum Growth Strategy, <br />
              <span className="text-gradient-teal">Paid Media &amp; Video Production.</span>
            </h1>
            <p className="text-base text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
              We provide end-to-end execution: business growth consulting, Meta &amp; Google ad campaigns, bespoke graphic design, in-house 4K video shoots/reels, post-production editing, data analysis, and wedding production.
            </p>
          </div>
        </div>

        {/* Proof metrics */}
        <ProofMarquee />

        {/* 1. The 7 Core Services Grid */}
        <Services />

        {/* 2. Interactive Reels & Video Editing Showcase */}
        <ReelsShowcase />

        {/* 3. Detailed Services Accordion */}
        <ServicesAccordion />

        {/* 4. Why Choose Us */}
        <WhyChooseUs />

        {/* 5. Strategy Booking Form */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
