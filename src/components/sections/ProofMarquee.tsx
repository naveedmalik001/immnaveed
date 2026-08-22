"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Award, TrendingUp } from "lucide-react";

const clientLogos = [
  { name: "Cambridge Education", category: "Education Portal", flag: "🎓" },
  { name: "GoStudy Edu",          category: "Study Abroad Hub", flag: "✈️" },
  { name: "Campus Disha",         category: "ERP Software",     flag: "💻" },
  { name: "Aura FinTech",         category: "Corporate Finance",flag: "🏛️" },
  { name: "OmniWellness",         category: "Healthcare Brand", flag: "🌿" },
  { name: "Prime RealEstate",     category: "Luxury Property",  flag: "🏢" },
];

const metrics = [
  { icon: Award, label: "Average Growth", value: "+342%" },
  { icon: TrendingUp, label: "Average ROAS", value: "4.8×" },
  { icon: ShieldCheck, label: "Client Retainers", value: "100% Verified" },
  { icon: CheckCircle2, label: "Projects Completed", value: "150+" },
];

export default function ProofMarquee() {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200 overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-3 bg-[#14B8C4]/10 text-[#0E8A94] border border-[#14B8C4]/25">
          <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4]" />
          Verified Client Network
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0F172A] tracking-tight">
          Trusted by High-Growth Institutions &amp; Enterprises
        </h2>
        <div className="teal-divider-line-center" />
        <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto">
          Delivering measured ROI across Education, Healthcare, Real Estate, and SaaS Technology.
        </p>
      </div>

      {/* Brand Chips Row */}
      <div className="flex gap-4 overflow-x-auto scrollbar-hide py-3 px-4 max-w-6xl mx-auto items-center justify-center flex-wrap sm:flex-nowrap">
        {clientLogos.map((client, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 hover:border-[#14B8C4] hover:shadow-lg hover:shadow-[#14B8C4]/10 hover:scale-105 transition-all duration-200 cursor-default group"
          >
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-lg group-hover:scale-110 transition-transform">
              {client.flag}
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-[#0F172A] group-hover:text-[#0E8A94] transition-colors leading-tight">
                {client.name}
              </p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">
                {client.category}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Metric Counters Strip */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="flex items-center gap-3.5 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-[#14B8C4]/10 border border-[#14B8C4]/20 flex items-center justify-center flex-shrink-0 text-[#0E8A94]">
                <Icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-xl font-extrabold text-[#0F172A] leading-none">{m.value}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{m.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
