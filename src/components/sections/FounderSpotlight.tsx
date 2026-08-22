"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare, Star } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function FounderSpotlight() {
  const { playClick, playHover } = useSound();

  return (
    <section className="section-pad bg-[#041E42] bg-grid-blueprint font-sans border-b border-slate-800 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] top-1/2 left-0 -translate-y-1/2 bg-[#14B8C4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="card-navy p-8 sm:p-12 bg-[#05244C]/90 backdrop-blur-md shadow-2xl border-slate-700/60">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Main Content */}
            <div className="lg:col-span-8">
              <div className="mb-4">
                <span className="badge-teal">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                  Founder &amp; Principal Growth Consultant
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                Er. Naveed Malik
              </h2>
              <p className="text-xs font-bold uppercase tracking-wider text-[#14B8C4] mb-6">
                Brand Strategist · Technology Architect · Performance Growth Consultant
              </p>

              <blockquote className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed italic mb-8 border-l-4 border-[#14B8C4] pl-5 py-2 bg-[#031730]/80 rounded-r-2xl border-y border-r border-slate-800">
                &ldquo;Real digital authority is not born from temporary viral gimmicks or generic templates. It is engineered at the intersection of executive positioning, performance ad funnels, and sub-1s software.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Engineer & Tech Architect Leadership",
                  "Over ₹12Cr+ Verified Client Revenue",
                  "Specialist Across Meta Ads & Next.js 15",
                  "Direct C-Suite Executive Retainers"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-[#031730] p-3.5 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-4 h-4 text-[#14B8C4] flex-shrink-0" />
                    <span className="text-xs font-semibold text-white">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="btn-orange text-sm"
                >
                  <span>Book Strategy Call with Founder</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919018636473"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="btn-whatsapp text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Right Card Profile */}
            <div className="lg:col-span-4 bg-[#031730] p-7 rounded-3xl border border-slate-700/80 text-center shadow-xl">
              <div className="w-22 h-22 rounded-2xl bg-[#041E42] border-2 border-[#14B8C4] text-white flex items-center justify-center mx-auto mb-5 shadow-xl shadow-[#14B8C4]/15">
                <span className="text-3xl font-black font-display tracking-tight text-[#14B8C4]">NM</span>
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-0.5">Er. Naveed Malik</h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-5">India · Remote Worldwide</p>
              
              <div className="bg-[#041E42] p-4 rounded-2xl border border-slate-700/60 mb-5 text-left">
                <div className="flex items-center gap-1.5 mb-1 text-[#F7931E]">
                  <Star className="w-3.5 h-3.5 fill-[#F7931E]" />
                  <p className="text-[10px] font-bold uppercase tracking-wider">Consultation Availability</p>
                </div>
                <p className="text-xs font-bold text-white">Accepting Select Retainers Q3/Q4</p>
              </div>

              <p className="text-xs text-slate-400 font-medium">Direct Response Guaranteed Within 24h</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
