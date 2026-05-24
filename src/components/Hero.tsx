"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, TrendingUp, Users, BarChart3, Zap } from "lucide-react";

function useCounter(target: number, duration = 2000, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * p * target));          // ease-in
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

// Tiny inline SVG illustrations
function HeroGraphic() {
  return (
    <div className="relative w-full max-w-sm mx-auto lg:max-w-none">
      {/* Main card */}
      <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-neutral-100 overflow-hidden">
        {/* Browser bar */}
        <div className="bg-neutral-900 px-4 py-3 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <div className="flex-1 mx-3 bg-neutral-700 rounded text-[10px] text-neutral-400 px-3 py-1 text-center truncate">
            immnaveed.in/dashboard
          </div>
        </div>

        {/* Dashboard body */}
        <div className="p-4 bg-neutral-50">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[
              { label: "Revenue", val: "₹8.4L", up: "+28%", color: "text-emerald-600", bg: "bg-emerald-50" },
              { label: "ROAS",    val: "4.8×",  up: "+12%", color: "text-brand-orange", bg: "bg-orange-50" },
              { label: "Reach",   val: "1.2M",  up: "+84%", color: "text-blue-600",    bg: "bg-blue-50"   },
            ].map(k => (
              <div key={k.label} className={`${k.bg} rounded-xl p-2.5`}>
                <p className="text-[9px] text-neutral-500 font-semibold mb-1">{k.label}</p>
                <p className="text-sm font-black text-neutral-900">{k.val}</p>
                <p className={`text-[9px] font-bold ${k.color}`}>{k.up} ↑</p>
              </div>
            ))}
          </div>

          {/* Chart bars */}
          <div className="bg-white rounded-xl p-3 border border-neutral-100">
            <div className="flex items-center justify-between mb-3">
              <p className="text-[10px] font-black text-neutral-800">Growth Chart</p>
              <span className="text-[9px] bg-emerald-100 text-emerald-700 font-bold px-2 py-0.5 rounded-full">+342%</span>
            </div>
            <div className="flex items-end gap-1.5 h-16">
              {[20, 35, 28, 50, 42, 65, 55, 80, 70, 88, 78, 100].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm transition-all duration-500"
                  style={{
                    height: `${h}%`,
                    background: i >= 9 ? "#ff5a1f" : i >= 7 ? "#ff5a1f60" : "#e5e7eb",
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {["J","F","M","A","M","J","J","A","S","O","N","D"].map(m => (
                <span key={m} className="text-[7px] text-neutral-400 font-medium">{m}</span>
              ))}
            </div>
          </div>

          {/* Bottom cards */}
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="bg-neutral-900 rounded-xl p-3">
              <BarChart3 className="w-4 h-4 text-brand-orange mb-1" />
              <p className="text-[10px] text-neutral-400">Meta Ads ROI</p>
              <p className="text-sm font-black text-white">4.8× Return</p>
            </div>
            <div className="bg-white border border-neutral-100 rounded-xl p-3">
              <Zap className="w-4 h-4 text-brand-orange mb-1" />
              <p className="text-[10px] text-neutral-500">Active Clients</p>
              <p className="text-sm font-black text-neutral-900">24 Live</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      <div className="absolute -left-4 top-1/4 bg-white rounded-2xl shadow-xl border border-neutral-100 px-3 py-2.5 flex items-center gap-2 float hidden sm:flex">
        <div className="w-8 h-8 bg-emerald-100 rounded-xl flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-emerald-600" />
        </div>
        <div>
          <p className="text-[10px] font-black text-neutral-900">Revenue Up</p>
          <p className="text-[9px] text-emerald-600 font-bold">+₹3.2L this week</p>
        </div>
      </div>

      <div className="absolute -right-4 bottom-1/4 bg-white rounded-2xl shadow-xl border border-neutral-100 px-3 py-2.5 flex items-center gap-2 float hidden sm:flex" style={{ animationDelay: "1.5s" }}>
        <div className="w-8 h-8 bg-orange-100 rounded-xl flex items-center justify-center">
          <Users className="w-4 h-4 text-brand-orange" />
        </div>
        <div>
          <p className="text-[10px] font-black text-neutral-900">New Leads</p>
          <p className="text-[9px] text-brand-orange font-bold">42 today</p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 400);
    return () => clearTimeout(t);
  }, []);

  const n1 = useCounter(342,  2000, started);
  const n2 = useCounter(48,   1800, started);
  const n3 = useCounter(150,  2200, started);

  return (
    <section id="home" ref={ref} className="relative min-h-[100dvh] flex items-center bg-white overflow-hidden pt-16">
      {/* Subtle background shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-orange-50 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full py-8 sm:py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-xs font-bold text-brand-orange uppercase tracking-widest">
                India's #1 Digital Growth Agency
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-6xl font-black text-brand-black leading-[1.08] tracking-tight mb-4 sm:mb-5">
              We Build Brands<br />
              That <span className="text-gradient">Dominate</span><br />
              Their Market.
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-neutral-500 font-medium leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
              IMMNAVEED combines brand strategy, Meta performance ads, and Next.js engineering into one growth pipeline — converting attention into measurable revenue.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8 sm:mb-12">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white font-bold text-base px-7 py-4 rounded-full hover:bg-orange-600 transition-all duration-200 shadow-xl shadow-orange-200 group"
              >
                Book Free Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 border-2 border-neutral-200 text-brand-black font-bold text-base px-7 py-4 rounded-full hover:border-brand-orange hover:text-brand-orange transition-all duration-200"
              >
                See Our Work
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 border-t border-neutral-100 pt-6 sm:pt-8">
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-black tabular-nums">
                  {n1}<span className="text-brand-orange text-2xl">%</span>
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">
                  Avg Growth
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-black tabular-nums">
                  {(n2 / 10).toFixed(1)}<span className="text-brand-orange text-2xl">×</span>
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">
                  Avg ROAS
                </p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-black tabular-nums">
                  {n3}+
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-neutral-400 uppercase tracking-wider mt-1">
                  Projects Done
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT — dashboard mockup */}
          <div className="relative px-4 sm:px-8 lg:px-0">
            <HeroGraphic />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex flex-col items-center mt-16 gap-1 text-neutral-400 animate-bounce">
          <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}
