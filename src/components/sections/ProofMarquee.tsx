"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Award, TrendingUp } from "lucide-react";

const clientLogos = [
  { name: "Cambridge Education", category: "Education Portal" },
  { name: "GoStudy Edu",          category: "Study Abroad Hub" },
  { name: "Campus Disha",         category: "ERP Software" },
  { name: "Aura FinTech",         category: "Corporate Finance" },
  { name: "OmniWellness",         category: "Healthcare Brand" },
  { name: "Prime RealEstate",     category: "Luxury Property" },
];

const metrics = [
  { icon: Award, label: "Average Growth", value: "+342%" },
  { icon: TrendingUp, label: "Average ROAS", value: "4.8×" },
  { icon: ShieldCheck, label: "Client Retainers", value: "100% Verified" },
  { icon: CheckCircle2, label: "Projects Completed", value: "150+" },
];

export default function ProofMarquee() {
  return (
    <section className="py-12 bg-zinc-950 border-y border-zinc-800/60 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-8">
        <p className="text-center text-[10px] font-black uppercase tracking-widest text-zinc-500">
          Trusted by Industry Leaders in Healthcare, Real Estate, Education & Corporate Enterprise
        </p>
      </div>

      {/* Marquee Row */}
      <div className="flex gap-8 overflow-x-auto scrollbar-hide py-3 px-4 max-w-7xl mx-auto items-center justify-between flex-wrap sm:flex-nowrap">
        {clientLogos.map((client, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center gap-3 px-6 py-3 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 hover:border-amber-500/30 transition-colors"
          >
            <div className="w-2 h-2 rounded-full bg-amber-500/80" />
            <div>
              <p className="text-sm font-black text-white tracking-tight">{client.name}</p>
              <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-wider">{client.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Metric Bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-10 pt-8 border-t border-zinc-900 grid grid-cols-2 md:grid-cols-4 gap-6">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <p className="text-lg font-black text-white leading-none">{m.value}</p>
                <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mt-1">{m.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
