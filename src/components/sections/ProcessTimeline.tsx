"use client";

import React from "react";
import { processStages } from "@/data/process-data";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2 } from "lucide-react";

export default function ProcessTimeline() {
  return (
    <section id="process" className="section-pad bg-[#081627] font-sans border-b border-[#1A3E6D]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeText="Execution Protocol"
          title="The 5-Stage Growth"
          gradientTitle="Execution Framework."
          subtitle="Growth is not accidental. It is calculated positioning, performance optimization, and robust Next.js engineering."
          centered
        />

        {/* Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mt-10">
          {processStages.map((stage, idx) => (
            <div
              key={stage.stepNumber}
              className="card-clean p-5 relative flex flex-col justify-between group"
            >
              <div>
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#00D2D3] tracking-tighter">
                    {stage.stepNumber}
                  </span>
                  <span className="badge-pill badge-neutral text-[9px]">
                    Phase {idx + 1}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-2 leading-snug group-hover:text-[#00D2D3] transition-colors">
                  {stage.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal mb-4">
                  {stage.subtitle}
                </p>

                {/* Deliverables List */}
                <div className="space-y-1.5 pt-3 border-t border-[#1A3E6D]">
                  {stage.deliverables.slice(0, 2).map((d, i) => (
                    <div key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2D3] flex-shrink-0 mt-0.5" />
                      <span className="text-[11px] text-slate-200 font-medium leading-tight">{d}</span>
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
