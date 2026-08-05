"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, CheckCircle2 } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function Hero() {
  const { playClick, playHover } = useSound();

  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-zinc-950 font-sans border-b border-zinc-900 overflow-hidden select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Minimal Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
            Er. Naveed Malik · Brand Strategist & Growth Consultant
          </span>
        </div>

        {/* Minimal Editorial Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08] mb-6">
          Architecting <span className="text-gradient-gold">Market Authority</span> & Growth Systems.
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-zinc-400 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
          Helping businesses scale through strategic brand positioning, high-ROAS Meta & Google ad performance, and modern Next.js 15 web engineering.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <Link
            href="/#contact"
            onClick={playClick}
            onMouseEnter={playHover}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all shadow-xl shadow-amber-500/10 hover:scale-105 active:scale-95"
          >
            <span>Schedule Consultation Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>

          <a
            href="https://wa.me/919018636473"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playClick}
            onMouseEnter={playHover}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-widest px-7 py-4 rounded-full transition-all"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp Direct</span>
          </a>
        </div>

        {/* Minimal Stat Badges */}
        <div className="pt-8 border-t border-zinc-900/80 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
            <p className="text-2xl sm:text-3xl font-black text-white">342%</p>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Avg Client Growth</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
            <p className="text-2xl sm:text-3xl font-black text-white">4.8× Lift</p>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Verified Ad ROAS</p>
          </div>
          <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800/60">
            <p className="text-2xl sm:text-3xl font-black text-white">Sub-1s</p>
            <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mt-1">Next.js Speed</p>
          </div>
        </div>

      </div>
    </section>
  );
}
