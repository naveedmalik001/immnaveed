"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap, Award } from "lucide-react";
import { useSound } from "@/hooks/useSound";

function useCounter(target: number, duration = 2000, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

export default function Hero() {
  const [started, setStarted] = useState(false);
  const { playClick, playHover } = useSound();

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 300);
    return () => clearTimeout(t);
  }, []);

  const n1 = useCounter(342, 2000, started);
  const n2 = useCounter(48, 1800, started);
  const n3 = useCounter(150, 2200, started);

  return (
    <section className="relative min-h-[90dvh] flex items-center bg-zinc-950 text-white overflow-hidden pt-28 pb-16 font-sans border-b border-zinc-900">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Strategy · Branding · Next.js 15 Architecture
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.6rem] xl:text-[4.2rem] font-black tracking-tight leading-[1.05] mb-6 select-none">
              We Architect <br />
              <span className="text-gradient-bronze">Market-Dominant</span> Brands <br />
              & Scale Systems.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 font-medium leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0">
              Fusing executive brand strategy, Meta performance marketing, and Next.js 15 software engineering into one predictable revenue engine. Led by Er. Naveed Malik.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/contact"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs uppercase tracking-widest px-8 py-4.5 rounded-full transition-all shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95"
              >
                <span>Request Strategy Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-center gap-2 border border-zinc-800 hover:border-amber-500/40 text-white font-black text-xs uppercase tracking-widest px-8 py-4.5 rounded-full transition-all hover:bg-zinc-900"
              >
                <span>View Verified Case Studies</span>
              </Link>
            </div>

            {/* Stat Counters */}
            <div className="grid grid-cols-3 gap-6 border-t border-zinc-900 pt-8 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-black text-white tabular-nums">
                  {n1}<span className="text-amber-500 text-2xl">%</span>
                </p>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mt-1">
                  Avg Client Growth
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-black text-white tabular-nums">
                  {(n2 / 10).toFixed(1)}<span className="text-amber-500 text-2xl">×</span>
                </p>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mt-1">
                  Average ROAS
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl sm:text-4xl font-black text-white tabular-nums">
                  {n3}+
                </p>
                <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mt-1">
                  Projects Scaled
                </p>
              </div>
            </div>

          </div>

          {/* Right Hero Graphic Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="luxury-card rounded-3xl p-6 border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-xl relative z-10 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/60 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[9px] font-bold text-zinc-500 tracking-wider uppercase">
                  Executive Growth Console
                </span>
              </div>

              {/* KPI Cards */}
              <div className="space-y-3 mb-6">
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">Meta & Google ROAS</p>
                      <p className="text-sm font-black text-white">4.8× Verified Lift</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Active</span>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">Next.js 15 Speed</p>
                      <p className="text-sm font-black text-white">Sub-800ms LCP</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Grade A+</span>
                </div>

                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">Enterprise Trust</p>
                      <p className="text-sm font-black text-white">100% Client Retainers</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-amber-400 bg-amber-500/10 px-2 py-1 rounded">Verified</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-1">
                  Executive Consultation Active
                </p>
                <p className="text-xs text-zinc-300 font-medium">Direct Access to Founder Er. Naveed Malik</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
