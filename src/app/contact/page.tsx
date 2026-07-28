import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/sections/BookingWidget";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Strategy Consultation | IMMNAVEED Digital Consultancy",
  description: "Schedule a direct consultation with Er. Naveed Malik. We audit your growth levers and formulate a execution roadmap for your business.",
};

export default function ContactPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-24">
        {/* Header */}
        <div className="py-16 md:py-20 border-b border-zinc-900 bg-zinc-950 text-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Direct Consultation
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6">
              Let&apos;s Build Your <br />
              <span className="text-gradient-bronze">Growth System.</span>
            </h1>
            <p className="text-base text-zinc-400 font-medium max-w-2xl mx-auto leading-relaxed">
              Fill out the project brief below to schedule a direct strategy consultation with Er. Naveed Malik.
            </p>
          </div>
        </div>

        {/* Strategy Consultation Booking Widget */}
        <BookingWidget />
      </main>

      <Footer />
    </div>
  );
}
