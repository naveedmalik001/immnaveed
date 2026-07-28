"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, TrendingUp, Users, BarChart3, Zap } from "lucide-react";
import { useSound } from "@/hooks/useSound";

function useCounter(target: number, duration = 2000, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * p * target)); // ease-in
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

// Custom interactive dashboard mockup illustration
function HeroGraphic() {
  const { playHover } = useSound();
  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none">
      {/* Background glowing gradients behind the mockup */}
      <div className="absolute -inset-2 bg-gradient-to-r from-brand-orange/30 to-rose-500/30 rounded-3xl blur-2xl opacity-40 animate-pulse pointer-events-none" />

      {/* Main card - Glassmorphic dashboard container */}
      <div 
        onMouseEnter={playHover}
        className="relative bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl shadow-neutral-900/10 border border-white/40 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500"
      >
        {/* Browser Top bar */}
        <div className="bg-neutral-950 px-5 py-4 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
          <div className="flex-1 mx-4 bg-neutral-800 rounded-lg text-[9px] font-bold text-neutral-400 px-3 py-1.5 text-center truncate tracking-wide">
            immnaveed.in/ad-console
          </div>
        </div>

        {/* Dashboard inner body */}
        <div className="p-5 bg-neutral-50/50">
          {/* KPI metrics row */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Ad Spend Return", val: "4.8× ROAS", up: "+28%", color: "text-emerald-600", bg: "bg-emerald-50/70 border border-emerald-100" },
              { label: "Acr. Admissions", val: "₹18.4L", up: "+14%", color: "text-brand-orange", bg: "bg-orange-50/70 border border-orange-100" },
              { label: "Global Reach",   val: "1.2M+",  up: "+84%", color: "text-blue-600",    bg: "bg-blue-50/70 border border-blue-100"   },
            ].map(k => (
              <div key={k.label} className={`${k.bg} rounded-2xl p-3 shadow-sm`}>
                <p className="text-[8.5px] text-neutral-500 font-bold mb-1.5 uppercase tracking-wide">{k.label}</p>
                <p className="text-xs sm:text-sm font-black text-neutral-900 leading-none mb-1">{k.val}</p>
                <p className={`text-[8.5px] font-black ${k.color} flex items-center gap-0.5`}>{k.up} ↑</p>
              </div>
            ))}
          </div>

          {/* Core Analytics Graph */}
          <div className="bg-white rounded-2xl p-4 border border-neutral-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-[10px] font-black text-neutral-900 uppercase tracking-widest">Growth Analytics</p>
                <p className="text-[9px] text-neutral-400 font-bold mt-0.5">Average Performance Lift</p>
              </div>
              <span className="text-[9px] bg-emerald-100 text-emerald-700 font-black px-2.5 py-1 rounded-full">+342% ROI</span>
            </div>
            <div className="flex items-end gap-2 h-20">
              {[20, 35, 28, 50, 42, 65, 55, 80, 70, 88, 78, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-md transition-all duration-700 hover:opacity-80"
                  style={{
                    height: `${h}%`,
                    background: i >= 9 ? "#ff5a1f" : i >= 7 ? "linear-gradient(to top, #ff5a1f 30%, #ff8c55 100%)" : "#e5e7eb",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-2.5 px-0.5 border-t border-neutral-50 pt-2">
              {["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].map((m, i) => (
                <span key={`${m}-${i}`} className="text-[8px] text-neutral-400 font-bold">{m[0]}</span>
              ))}
            </div>
          </div>

          {/* Extra KPI panels */}
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="bg-neutral-950 rounded-2xl p-4 shadow-md flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-900 flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">Meta Ads ROI</p>
                <p className="text-xs font-black text-white mt-0.5">4.8× Avg. Return</p>
              </div>
            </div>
            <div className="bg-white border border-neutral-100 rounded-2xl p-4 shadow-sm flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider">Speed Grade</p>
                <p className="text-xs font-black text-brand-black mt-0.5">A+ Next.js Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glassmorphic Floating Badges */}
      <div className="absolute -left-6 top-1/4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 px-4 py-3 flex items-center gap-3 float hidden sm:flex">
        <div className="w-9 h-9 bg-emerald-50 rounded-xl flex items-center justify-center border border-emerald-100">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
        </div>
        <div>
          <p className="text-[10px] font-black text-neutral-900 leading-none">Net Conversion</p>
          <p className="text-[9px] text-emerald-600 font-bold mt-1">+₹3.2L this week</p>
        </div>
      </div>

      <div className="absolute -right-6 bottom-1/4 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 px-4 py-3 flex items-center gap-3 float hidden sm:flex" style={{ animationDelay: "1.5s" }}>
        <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center border border-orange-100">
          <Users className="w-4 h-4 text-brand-orange" />
        </div>
        <div>
          <p className="text-[10px] font-black text-neutral-900 leading-none">Active Admissions</p>
          <p className="text-[9px] text-brand-orange font-bold mt-1">24 Active Clients</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { playClick, playHover } = useSound();

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  const n1 = useCounter(342,  2000, started);
  const n2 = useCounter(48,   1800, started);
  const n3 = useCounter(150,  2200, started);

  return (
    <section id="home" ref={ref} className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden pt-20">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-orange-50/50 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Text Column */}
          <div className="text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50/70 border border-orange-100 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-brand-orange uppercase tracking-widest leading-none">
                India&apos;s Premium Digital Growth Agency
              </span>
            </div>

            {/* Main Catchy Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-brand-black leading-[1.08] tracking-tight mb-5 select-none">
              We Scale Brands<br />
              With <span className="text-gradient">Performance</span><br />
              & Next.js Systems.
            </h1>

            {/* Description Subtext */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-500 font-semibold leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              We build custom high-speed Next.js websites, optimize high-conversion Meta ads campaigns, and craft robust software architectures to scale your educational business.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-10">
              <a
                href="#contact"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-black text-base px-8 py-4.5 rounded-full hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-orange-500/20 hover:scale-105 active:scale-95 group"
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-center gap-2 border-2 border-neutral-200 text-brand-black font-black text-base px-8 py-4.5 rounded-full hover:border-brand-orange hover:text-brand-orange transition-all duration-300 hover:scale-105 active:scale-95"
              >
                See Our Work
              </a>
            </div>

            {/* Performance Counters */}
            <div className="grid grid-cols-3 gap-6 border-t border-neutral-100 pt-8 max-w-md mx-auto lg:mx-0">
              <div className="text-center lg:text-left select-none">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-black tabular-nums">
                  {n1}<span className="text-brand-orange font-bold text-2xl">%</span>
                </p>
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mt-1">
                  Avg Growth
                </p>
              </div>
              <div className="text-center lg:text-left select-none">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-black tabular-nums">
                  {(n2 / 10).toFixed(1)}<span className="text-brand-orange font-bold text-2xl">×</span>
                </p>
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mt-1">
                  Avg ROAS
                </p>
              </div>
              <div className="text-center lg:text-left select-none">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-black tabular-nums">
                  {n3}+
                </p>
                <p className="text-[10px] font-black text-neutral-400 uppercase tracking-widest mt-1">
                  Projects Done
                </p>
              </div>
            </div>
          </div>

          {/* Right Mockup Column */}
          <div className="relative px-2 sm:px-8 lg:px-0">
            <HeroGraphic />
          </div>
        </div>

        {/* Scroll hint Indicator */}
        <div className="flex flex-col items-center mt-12 sm:mt-16 gap-1 text-neutral-400 animate-bounce pointer-events-none select-none">
          <span className="text-[8px] font-black uppercase tracking-widest">Scroll Down</span>
          <ChevronDown className="w-4 h-4 text-neutral-300" />
        </div>
      </div>
    </section>
  );
}
