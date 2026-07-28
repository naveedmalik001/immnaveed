import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | IMMNAVEED Digital Consultancy",
  description: "Privacy Policy and client data protection guidelines for IMMNAVEED.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-zinc-950 text-white min-h-screen flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-8">Privacy Policy</h1>
          <div className="space-y-6 text-xs sm:text-sm text-zinc-400 leading-relaxed font-medium">
            <p>
              At IMMNAVEED, founded by Er. Naveed Malik, we maintain strict executive standards of privacy and data security. This privacy policy outlines how we collect, handle, and protect your information when engaging with our website and consulting services.
            </p>

            <h2 className="text-lg font-black text-white mt-8">1. Information Collection</h2>
            <p>
              We collect information provided directly by you through our consultation booking form, WhatsApp communication, or email inquiries (such as your name, business email, organization name, and project brief details).
            </p>

            <h2 className="text-lg font-black text-white mt-8">2. Use of Information</h2>
            <p>
              Your information is exclusively utilized to assess your growth requirements, formulate bespoke strategy roadmaps, and communicate directly regarding your consultation request. We do not sell or share client data with third-party advertisers.
            </p>

            <h2 className="text-lg font-black text-white mt-8">3. Confidentiality & Non-Disclosure</h2>
            <p>
              All client metrics, strategy documents, proprietary systems, and business discussions are protected under strict non-disclosure principles.
            </p>

            <h2 className="text-lg font-black text-white mt-8">4. Contact Information</h2>
            <p>
              For privacy inquiries or data requests, contact us directly at <a href="mailto:business@immnaveed.in" className="text-amber-400 underline">business@immnaveed.in</a> or +91 9018636473.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
