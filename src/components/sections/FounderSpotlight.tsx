"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageSquare, Star, Award, ShieldCheck, Briefcase } from "lucide-react";
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
            <div className="lg:col-span-7">
              <div className="mb-4">
                <span className="badge-teal text-xs py-1 px-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                  Founder &amp; Principal Growth Consultant
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-2">
                Er. Naveed Malik
              </h2>
              <p className="text-xs font-bold uppercase tracking-wider text-[#14B8C4] mb-6">
                Brand Strategist · Technology Architect · Media Production Director
              </p>

              <blockquote className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed italic mb-8 border-l-4 border-[#14B8C4] pl-5 py-3 bg-[#031730]/80 rounded-r-2xl border-y border-r border-slate-800">
                &ldquo;Real digital authority is not born from temporary viral gimmicks or generic templates. It is engineered at the intersection of executive brand positioning, high-ROAS paid ad funnels, in-house cinema production, and sub-1s software.&rdquo;
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {[
                  "Engineer & Software Architect Leadership",
                  "Over ₹12Cr+ Verified Client Revenue",
                  "In-House 4K Video Production & Cinema Crew",
                  "Direct Founder Strategy & C-Suite Advisory"
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
                  className="btn-orange text-sm shadow-lg"
                >
                  <span>Book Strategy Call with Er. Naveed Malik</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/919018636473?text=Hello%20Er.%20Naveed%20Malik,%20I%20would%20like%20to%20schedule%20a%20strategy%20session%20for%20my%20business."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="btn-whatsapp text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Direct WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Card Profile with High-Quality Photo */}
            <div className="lg:col-span-5 bg-[#031730] p-6 sm:p-7 rounded-3xl border border-slate-700/80 text-center shadow-2xl relative overflow-hidden">
              
              {/* Photo Frame Container */}
              <div className="relative aspect-[4/4.2] rounded-2xl overflow-hidden border-2 border-[#14B8C4]/40 mb-5 shadow-2xl bg-[#041E42]">
                <img
                  src="/images/founder.jpg"
                  alt="Er. Naveed Malik - Founder of IMMNAVEED"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Official Label Strip on Photo */}
                <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-[#031730]/90 backdrop-blur-md border border-slate-700/80 text-left flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white font-display">Er. Naveed Malik</p>
                    <p className="text-[10px] text-[#14B8C4] font-semibold">Founder &amp; Growth Consultant</p>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-sm shadow-emerald-400/50" />
                </div>
              </div>

              {/* Founder Badges & Availability */}
              <div className="bg-[#041E42] p-4 rounded-2xl border border-slate-700/60 text-left space-y-2 mb-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-300 flex items-center gap-1.5 font-semibold">
                    <Briefcase className="w-3.5 h-3.5 text-[#14B8C4]" /> Strategy Availability
                  </span>
                  <span className="badge-teal text-[9px] py-0.5 px-2">Active Q3/Q4</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-700/60">
                  <span className="text-slate-300 flex items-center gap-1.5 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Response Time
                  </span>
                  <span className="text-emerald-400 font-bold text-[11px]">&lt; 24 Business Hours</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 font-medium">
                Direct C-Suite Advisory · In-House Engineering &amp; Media
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
