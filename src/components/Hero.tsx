"use client";

import React from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";
import { ArrowRight, Download, MessageCircle, ShieldCheck, Star, Award, TrendingUp, Users } from "lucide-react";

export default function Hero() {
  const { playClick, playHover } = useSound();

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] pt-28 pb-20">

      {/* Ambient background glows (like Cambridge Education) */}
      <div className="absolute w-[600px] h-[600px] -top-40 -left-40 bg-[#0E8A94]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-[700px] h-[700px] -bottom-30 -right-20 bg-[#14B8C4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] top-1/4 right-1/4 bg-[#F7931E]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Badge */}
            <div className="badge-navy-glow mb-6">
              <span className="w-2 h-2 rounded-full bg-[#14B8C4] animate-pulse" />
              <span>Brand Strategy &amp; Growth Consultant</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
              Your Trusted Partner in<br />
              <span className="block mt-1 text-gradient-teal">Turning Growth Dreams</span>
              into Reality
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg leading-relaxed text-slate-300 mb-8 max-w-xl font-normal">
              Helping ambitious founders secure market authority, deploy high-ROAS Meta &amp; Google ad funnels, and build lightning-fast Next.js digital platforms. Direct advisory from Er. Naveed Malik.
            </p>

            {/* 3-Button Action Row (Orange + White + WhatsApp) */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 w-full sm:w-auto mb-10">
              <Link
                href="/contact"
                id="hero-strategy-btn"
                onClick={playClick}
                onMouseEnter={playHover}
                className="btn-orange text-sm"
              >
                <span>Schedule Consultation Call</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/portfolio"
                id="hero-portfolio-btn"
                onClick={playClick}
                onMouseEnter={playHover}
                className="btn-white text-sm"
              >
                <Download className="w-4 h-4 text-[#041E42]" />
                <span>Explore Client Portfolio</span>
              </Link>

              <a
                href="https://wa.me/919018636473?text=Hello%20Er.%20Naveed%20Malik,%20I%20am%20interested%20in%20a%20strategy%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                onClick={playClick}
                onMouseEnter={playHover}
                className="btn-whatsapp text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Counsel</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 w-full">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#14B8C4]" />
                <span>100% Verified Outcomes</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Star className="w-4 h-4 text-[#F7931E] fill-[#F7931E]" />
                <span>₹12Cr+ Revenue (50+ Brands)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                <Award className="w-4 h-4 text-[#14B8C4]" />
                <span>Executive C-Suite Retainers</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Showcase Visual with Floating Stat Badges */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Center Hero Card Box */}
            <div className="relative w-full aspect-[4/5] max-w-[400px] rounded-[32px] md:rounded-[40px] shadow-2xl overflow-hidden border border-slate-700/60 bg-[#031730] z-10 flex flex-col justify-between p-7">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#14B8C4]/15 border border-[#14B8C4]/30 text-xs font-bold text-[#14B8C4]">
                  <span>Er. Naveed Malik</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white leading-snug">
                  Engineering Systems for High-Growth Enterprises
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  From Brand Identity architecture to high-intent Meta ad funnels and sub-1s web platforms.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#041E42] border border-[#14B8C4]/20 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-[#14B8C4]">Average ROAS Lift</span>
                  <span className="text-white font-extrabold">4.8×</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#14B8C4] to-[#00D4E0] h-2 rounded-full w-[88%]" />
                </div>
              </div>
            </div>

            {/* Floating Badge 1 (Top Left) */}
            <div className="absolute md:-left-8 left-0 top-8 bg-[#041E42]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/60 flex items-center gap-3.5 z-20">
              <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-[#14B8C4] border border-[#14B8C4]/30">
                <Star className="w-5 h-5 fill-[#14B8C4]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-display">10+</div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Years Excellence</div>
              </div>
            </div>

            {/* Floating Badge 2 (Bottom Right) */}
            <div className="absolute md:-right-6 right-0 bottom-20 bg-[#041E42]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/60 flex items-center gap-3.5 z-20">
              <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-[#14B8C4] border border-[#14B8C4]/30 animate-pulse-ring">
                <Users className="w-5 h-5 text-[#14B8C4]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-display">50+</div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Brands Scaled</div>
              </div>
            </div>

            {/* Floating Badge 3 (Bottom Left) */}
            <div className="absolute md:-bottom-6 -bottom-2 md:left-6 left-2 bg-[#041E42]/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-slate-700/60 flex items-center gap-3.5 z-20">
              <div className="w-10 h-10 rounded-xl bg-blue-950 flex items-center justify-center text-[#F7931E] border border-[#F7931E]/30">
                <TrendingUp className="w-5 h-5 text-[#F7931E]" />
              </div>
              <div>
                <div className="text-lg font-bold text-white font-display">₹12Cr+</div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Client Revenue</div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
