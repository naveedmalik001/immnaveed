import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import ProofMarquee from "@/components/sections/ProofMarquee";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request Strategy Consultation | IMMNAVEED Digital Consultancy",
  description: "Schedule a direct consultation with Er. Naveed Malik. We audit your growth levers and formulate an execution roadmap for your business.",
};

export default function ContactPage() {
  return (
    <div className="bg-[#031730] text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-[76px]">
        {/* Contact Discovery & Briefing Form */}
        <Contact />

        {/* Proof metrics */}
        <ProofMarquee />
      </main>

      <Footer />
    </div>
  );
}
