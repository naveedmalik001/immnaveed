"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { useSound } from "@/hooks/useSound";

export default function Services() {
  const [showAll, setShowAll] = useState(false);
  const { playClick, playHover } = useSound();

  const displayed = showAll ? servicesData : servicesData.slice(0, 6);

  return (
    <section id="services" className="section-pad bg-[#F8FAFC] border-b border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="Corporate Capabilities"
          title="Every Capability You Need"
          gradientTitle="to Scale Your Business."
          subtitle="Dedicated growth strategies, Next.js software architecture, and high-ROAS performance marketing."
          theme="light"
        />

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {displayed.map(s => {
            const Icon = s.icon;
            return (
              <Link
                href={`/services/${s.slug}`}
                key={s.id}
                onClick={playClick}
                onMouseEnter={playHover}
                className="text-left bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 card-white group focus:outline-none cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#14B8C4]/10 border border-[#14B8C4]/20 flex items-center justify-center text-[#0E8A94] group-hover:scale-110 group-hover:bg-[#14B8C4] group-hover:text-white transition-all duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="badge-teal text-[9px] py-1 px-3">
                      {s.category}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#0E8A94] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-normal">
                    {s.shortDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {s.features.slice(0, 3).map((t: string) => (
                      <span key={t} className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E8A94] group-hover:text-[#041E42] uppercase tracking-wider transition-colors">
                  <span>View Full Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View more */}
        {servicesData.length > 6 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => {
                playClick();
                setShowAll(!showAll);
              }}
              className="btn-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-2xl border border-slate-300 hover:border-[#14B8C4]"
            >
              {showAll ? "Show Less" : `View All ${servicesData.length} Capabilities`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
