import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Engagement | IMMNAVEED Digital Consultancy",
  description: "Terms of Engagement and corporate consulting standards for IMMNAVEED.",
};

export default function TermsPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-8">Terms of Engagement</h1>
          <div className="space-y-6 text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
            <p>
              Welcome to IMMNAVEED. By accessing our platform or engaging our consulting and engineering services, you agree to comply with the following terms and conditions.
            </p>

            <h2 className="text-lg font-black text-white mt-8">1. Scope of Services</h2>
            <p>
              IMMNAVEED provides executive brand strategy, Next.js 15 software architecture, performance marketing, and business consulting under formalized client retainer agreements.
            </p>

            <h2 className="text-lg font-black text-white mt-8">2. Intellectual Property</h2>
            <p>
              All custom Next.js codebases, brand guidelines, and custom ERP software modules created for clients become the intellectual property of the client upon full settlement of agreed retainer deliverables.
            </p>

            <h2 className="text-lg font-black text-white mt-8">3. Governance & Liability</h2>
            <p>
              All consultancy engagements are governed by the laws of India. For questions regarding service terms, please email <a href="mailto:business@immnaveed.in" className="text-amber-400 underline">business@immnaveed.in</a>.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
