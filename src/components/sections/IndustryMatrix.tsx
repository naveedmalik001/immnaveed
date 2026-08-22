"use client";

import React from "react";
import Link from "next/link";
import { industriesData } from "@/data/industries-data";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function IndustryMatrix() {
  const { playClick, playHover } = useSound();

  return (
    <section id="industries" className="section-pad bg-[#041E42] font-sans border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeText="Target Sectors"
          title="Bespoke Strategy Tailored to"
          gradientTitle="Your Industry."
          subtitle="Generic marketing fails because every sector has unique compliance, buyer psychology, and decision cycles. We build vertical-specific engines."
          actionLink={{ label: "View All Industries", href: "/industries" }}
          theme="dark"
        />

        {/* Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="card-navy p-7 flex flex-col justify-between group cursor-default bg-[#05244C]/90"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-teal text-[10px] py-1 px-3">
                    {ind.growthStats}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#031730] border border-slate-700/60 flex items-center justify-center group-hover:border-[#14B8C4] group-hover:bg-[#14B8C4] transition-all">
                    <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-[#031730] transition-colors" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-white mb-1.5 group-hover:text-[#14B8C4] transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-[#14B8C4] font-bold mb-3">
                  {ind.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6">
                  {ind.description}
                </p>

                {/* Core Solutions List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-700/60">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Key Solutions:</p>
                  {ind.ourSolutions.slice(0, 2).map((sol, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8C4] flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-200 font-normal leading-snug">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/industries`}
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-300 group-hover:text-[#14B8C4] transition-colors pt-4 border-t border-slate-700/60"
              >
                <span>Read Sector Strategy</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
