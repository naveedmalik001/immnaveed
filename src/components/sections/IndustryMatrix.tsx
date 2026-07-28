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
    <section id="industries" className="section-pad-luxury bg-zinc-950 font-sans border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeText="Target Sectors"
          title="Bespoke Strategy Tailored to"
          gradientTitle="Your Industry."
          subtitle="Generic marketing fails because every sector has unique compliance, buyer psychology, and decision cycles. We build vertical-specific engines."
          actionLink={{ label: "View All Industries", href: "/industries" }}
        />

        {/* Sector Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind) => (
            <div
              key={ind.id}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Top Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {ind.growthStats}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-amber-500/40 group-hover:bg-amber-500/10 transition-all">
                    <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 transition-colors" />
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {ind.title}
                </h3>
                <p className="text-xs text-amber-500/90 font-bold mb-4">
                  {ind.subtitle}
                </p>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium mb-6">
                  {ind.description}
                </p>

                {/* Core Solutions List */}
                <div className="space-y-2 mb-6 pt-4 border-t border-zinc-800/60">
                  <p className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">Key Solutions:</p>
                  {ind.ourSolutions.slice(0, 2).map((sol, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-zinc-300 font-medium leading-snug">{sol}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href={`/industries/${ind.slug}`}
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center justify-between text-xs font-black uppercase tracking-widest text-zinc-300 group-hover:text-amber-400 transition-colors pt-4 border-t border-zinc-800/60"
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
