"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp, ShieldCheck, Zap, Award, Activity, CheckCircle2, ChevronRight } from "lucide-react";
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
  const [activeTab, setActiveTab] = useState<"roas" | "speed" | "cases" | "retention">("roas");
  const { playClick, playHover } = useSound();

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 300);
    return () => clearTimeout(t);
  }, []);

  const n1 = useCounter(342, 2000, started);
  const n2 = useCounter(48, 1800, started);
  const n3 = useCounter(150, 2200, started);

  return (
    <section className="relative min-h-[92dvh] flex items-center bg-zinc-950 text-white overflow-hidden pt-28 pb-16 font-sans border-b border-zinc-900">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                Executive Strategy · Meta Ads · Next.js 15 Systems
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
              Unifying executive brand positioning, high-ROAS ad campaign architecture, and sub-1s Next.js 15 software engineering into one predictable revenue engine. Led directly by Er. Naveed Malik.
            </p>

            {/* Action CTAs (Right-Dominant Action Flow) */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
              <Link
                href="/contact"
                onClick={playClick}
                onMouseEnter={playHover}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-black text-xs uppercase tracking-widest px-8 py-4.5 rounded-full transition-all shadow-xl shadow-amber-500/20 hover:scale-105 active:scale-95"
              >
                <span>Request Strategy Consultation</span>
                <ArrowUpRight className="w-4.5 h-4.5" />
              </Link>
              <Link
                href="/#process"
                onClick={playClick}
                onMouseEnter={playHover}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-zinc-800 hover:border-amber-500/40 text-white font-black text-xs uppercase tracking-widest px-7 py-4.5 rounded-full transition-all hover:bg-zinc-900"
              >
                <span>Explore 5-Stage Case Process</span>
              </Link>
            </div>

            {/* Metric Counters */}
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
                  Average ROAS Lift
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

          {/* Right Hero Interactive Executive Dashboard Console */}
          <div className="lg:col-span-5 relative">
            <div className="luxury-card rounded-3xl p-6 border border-zinc-800/90 bg-zinc-950/80 backdrop-blur-xl relative z-10 shadow-2xl overflow-hidden">
              
              {/* Console Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800/80 mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[10px] font-black text-zinc-400 tracking-wider uppercase ml-2">
                    Executive Strategy Console
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[9px] font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <Activity className="w-3 h-3 animate-pulse" /> Live Tracking
                </span>
              </div>

              {/* Interactive Dashboard Tabs */}
              <div className="grid grid-cols-4 gap-1 bg-zinc-900/90 p-1 rounded-xl mb-5 border border-zinc-800/60">
                {[
                  { id: "roas", label: "ROAS", icon: TrendingUp },
                  { id: "speed", label: "Speed", icon: Zap },
                  { id: "cases", label: "Cases", icon: ShieldCheck },
                  { id: "retention", label: "Trust", icon: Award },
                ].map((t) => {
                  const Icon = t.icon;
                  const isActive = activeTab === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => {
                        playClick();
                        setActiveTab(t.id as any);
                      }}
                      onMouseEnter={playHover}
                      className={`flex items-center justify-center gap-1.5 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                        isActive
                          ? "bg-amber-500 text-black shadow-md shadow-amber-500/20"
                          : "text-zinc-400 hover:text-white"
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{t.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Tab Body Display */}
              <div className="bg-zinc-900/60 rounded-2xl p-5 border border-zinc-800/80 mb-5 min-h-[190px] flex flex-col justify-between">
                {activeTab === "roas" && (
                  <div className="animate-fadeIn space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-zinc-400 uppercase tracking-wider">Meta & Google ROAS</span>
                      <span className="text-xs font-black text-emerald-400">+480% ROI</span>
                    </div>
                    <p className="text-2xl font-black text-white">4.8× Verified Lift</p>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 w-[85%] rounded-full" />
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Ad Spend Optimized: ₹2.4Cr+</span>
                      <span className="text-amber-400 font-bold">100% Attribution</span>
                    </div>
                  </div>
                )}

                {activeTab === "speed" && (
                  <div className="animate-fadeIn space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-zinc-400 uppercase tracking-wider">Next.js 15 Engine</span>
                      <span className="text-xs font-black text-blue-400">Score 99/100</span>
                    </div>
                    <p className="text-2xl font-black text-white">Sub-800ms LCP</p>
                    <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-400 w-[95%] rounded-full" />
                    </div>
                    <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-400">
                      <span>Lighthouse PageSpeed</span>
                      <span className="text-blue-400 font-bold">Zero Friction</span>
                    </div>
                  </div>
                )}

                {activeTab === "cases" && (
                  <div className="animate-fadeIn space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-zinc-400 uppercase tracking-wider">Case Processing</span>
                      <span className="text-xs font-black text-amber-400">5-Stage Methodology</span>
                    </div>
                    <p className="text-2xl font-black text-white">100% Audit Rigor</p>
                    <div className="space-y-1.5 pt-1">
                      <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                        <span>Feasibility Audit & Custom Strategy Roadmap</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                        <span>Priority Direct Routing via WhatsApp API</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === "retention" && (
                  <div className="animate-fadeIn space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-zinc-400 uppercase tracking-wider">Executive Retainer</span>
                      <span className="text-xs font-black text-amber-400">C-Suite Level</span>
                    </div>
                    <p className="text-2xl font-black text-white">Direct Founder Access</p>
                    <p className="text-xs text-zinc-400 leading-relaxed font-medium">
                      Every project is directly overseen by Er. Naveed Malik without account manager dilution.
                    </p>
                  </div>
                )}
              </div>

              {/* Consultation Callout Footer */}
              <Link
                href="/contact"
                onClick={playClick}
                onMouseEnter={playHover}
                className="flex items-center justify-between p-4 rounded-2xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-all group cursor-pointer"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-400">
                    Direct Founder Access
                  </p>
                  <p className="text-xs font-bold text-white mt-0.5">Book 1-on-1 Consultation Session</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
