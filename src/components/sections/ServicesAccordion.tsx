"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services-data";
import SectionHeader from "@/components/shared/SectionHeader";
import { ChevronDown, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function ServicesAccordion() {
  const [activeId, setActiveId] = useState<string>(servicesData[0].id);
  const { playClick, playHover } = useSound();

  return (
    <section id="services" className="section-pad-luxury bg-zinc-950 font-sans border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          badgeText="Capabilities & Services"
          title="Full-Stack Growth &"
          gradientTitle="Engineering Architecture."
          subtitle="Every capability is engineered to establish market authority, lower acquisition costs, and produce predictable revenue."
          actionLink={{ label: "View All 13 Services", href: "/services" }}
        />

        {/* Expandable Luxury Accordion List */}
        <div className="space-y-4">
          {servicesData.slice(0, 6).map((service, index) => {
            const isOpen = activeId === service.id;
            return (
              <div
                key={service.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-zinc-900/80 border-amber-500/40 shadow-2xl shadow-black"
                    : "bg-zinc-900/30 border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => {
                    playClick();
                    setActiveId(isOpen ? "" : service.id);
                  }}
                  onMouseEnter={playHover}
                  className="w-full px-6 py-6 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="text-xs font-black text-amber-500/80 tracking-widest uppercase">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 font-medium hidden sm:block">
                        {service.category} Strategy
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 hidden md:block">
                      {service.category}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-amber-500 text-black border-amber-500" : "text-zinc-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Body */}
                {isOpen && (
                  <div className="px-6 pb-8 pt-2 border-t border-zinc-800/60 grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
                    <div className="md:col-span-7">
                      <p className="text-sm text-zinc-300 leading-relaxed font-medium mb-6">
                        {service.fullDescription}
                      </p>

                      <div className="space-y-2 mb-6">
                        <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest">
                          Key Deliverables:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                              <span className="text-xs text-zinc-400 font-medium">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <Link
                        href={`/services/${service.slug}`}
                        onClick={playClick}
                        className="inline-flex items-center gap-2 text-xs font-black text-amber-400 hover:text-amber-300 uppercase tracking-widest"
                      >
                        Explore Service Specs <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="md:col-span-5 bg-zinc-950/60 p-5 rounded-xl border border-zinc-800/80">
                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3">
                        Expected Impact:
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.impactMetrics.map((m, idx) => (
                          <li key={idx} className="text-xs font-bold text-white flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            {m}
                          </li>
                        ))}
                      </ul>

                      <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">
                        Ideal For:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {service.idealFor.map((target) => (
                          <span
                            key={target}
                            className="text-[9px] font-bold text-zinc-300 bg-zinc-800/80 px-2.5 py-1 rounded-md"
                          >
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
