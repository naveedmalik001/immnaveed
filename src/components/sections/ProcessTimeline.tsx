"use client";

import React from "react";
import { processStages } from "@/data/process-data";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function ProcessTimeline() {
  return (
    <section id="process" className="section-pad-luxury bg-zinc-950 font-sans border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeText="Methodology"
          title="The 5-Stage Growth"
          gradientTitle="Execution Framework."
          subtitle="Growth is not accidental. It is calculated positioning, performance optimization, and robust Next.js engineering."
          centered
        />

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mt-12">
          {processStages.map((stage, idx) => (
            <div
              key={stage.stepNumber}
              className="luxury-card rounded-2xl p-6 relative flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-amber-500/90 tracking-tighter">
                    {stage.stepNumber}
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-black text-white mb-2 leading-snug group-hover:text-amber-400 transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium mb-4">
                  {stage.subtitle}
                </p>

                {/* Deliverables List */}
                <div className="space-y-1.5 pt-3 border-t border-zinc-800/60">
                  {stage.deliverables.slice(0, 2).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3 h-3 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] text-zinc-300 font-medium leading-tight">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
