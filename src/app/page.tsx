import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesAccordion from "@/components/sections/ServicesAccordion";
import BookingWidget from "@/components/sections/BookingWidget";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* Minimal Navigation Bar */}
      <Navbar />

      {/* Main Page Layout Flow */}
      <main className="flex-grow">
        {/* 1. Minimal Editorial Hero */}
        <Hero />

        {/* 2. Core Capabilities & Services */}
        <ServicesAccordion />

        {/* 3. Direct Consultation Session Form */}
        <BookingWidget />
      </main>

      {/* Minimal Footer */}
      <Footer />
    </div>
  );
}
