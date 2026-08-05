"use client";

import React from "react";
import Link from "next/link";
import { Award, CheckCircle2, ArrowUpRight, MessageSquare } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function FounderSpotlight() {
  const { playClick, playHover } = useSound();

  return (
    <section className="section-pad-luxury bg-zinc-950 font-sans border-b border-zinc-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="luxury-card rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900 shadow-2xl">
          
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -translate-y-24 translate-x-24" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Main Content */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                  Founder & Principal Growth Consultant
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-2">
                Er. Naveed Malik
              </h2>
              <p className="text-xs font-black uppercase tracking-widest text-amber-500 mb-6">
                Brand Strategist | Technology Architect | Growth Consultant
              </p>

              <blockquote className="text-base sm:text-lg text-zinc-300 font-medium leading-relaxed italic mb-8 border-l-2 border-amber-500 pl-4">
                &ldquo;Real digital authority is not born from temporary viral gimmicks or generic templates. It is engineered at the intersection of executive positioning, performance ad funnels, and sub-1s software.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Engineer & Tech Architect Leadership",
                  "Over ₹12Cr+ Verified Client Revenue",
                  "Specialist Across Meta Ads & Next.js 15",
                  "Direct C-Suite Executive Retainers"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800/80">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-xs font-bold text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Action CTAs (Right-Aligned Dominance) */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-black text-xs uppercase tracking-widest px-7 py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20"
                >
                  <span>Book Strategy Call with Founder</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919018636473"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="inline-flex items-center justify-center gap-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-black text-xs uppercase tracking-widest px-7 py-4 rounded-xl transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp Consultation</span>
                </a>
              </div>
            </div>

            {/* Right Card Profile */}
            <div className="lg:col-span-4 bg-zinc-950 p-6 rounded-2xl border border-zinc-800 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 border-2 border-amber-500/40 flex items-center justify-center mx-auto mb-4 shadow-xl shadow-amber-500/10">
                <span className="text-2xl font-black text-amber-400">NM</span>
              </div>
              <h3 className="text-base font-black text-white mb-1">Er. Naveed Malik</h3>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">India · Remote Worldwide</p>
              
              <div className="bg-zinc-900/90 p-3.5 rounded-xl border border-zinc-800/80 mb-4">
                <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest">Consultation Availability</p>
                <p className="text-xs font-bold text-white mt-1">Accepting Select Retainers Q3/Q4</p>
              </div>

              <p className="text-[10px] text-zinc-500 font-medium">Direct Response Within 24 Hours</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
