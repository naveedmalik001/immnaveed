"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import { useSound } from "@/hooks/useSound";

export default function Services() {
  const [filterCategory, setFilterCategory] = useState("All");
  const { playClick, playHover } = useSound();

  const categories = [
    "All",
    "Web Engineering",
    "Software & ERP",
    "Paid Advertising",
    "Video Production",
    "Consultation",
    "Branding & Creative",
    "Analytics & Data",
    "Event Production",
  ];

  const filteredServices = filterCategory === "All"
    ? servicesData
    : servicesData.filter((s) => s.category === filterCategory);

  return (
    <section id="services" className="section-pad bg-[#F8FAFC] border-b border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="Corporate Capabilities & Execution"
          title="Every Service You Need"
          gradientTitle="to Build Market Authority."
          subtitle="From high-speed Next.js web applications and specialized ERP software to Meta/Google ad campaigns, graphic branding, in-house 4K shoots, and data analytics."
          actionLink={{ label: "Schedule Strategy Call", href: "/contact" }}
          theme="light"
        />

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setFilterCategory(cat);
              }}
              onMouseEnter={playHover}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filterCategory === cat
                  ? "bg-[#041E42] text-white shadow-md font-extrabold"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#14B8C4] hover:text-[#041E42]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Original Clean Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((s, idx) => {
            const Icon = s.icon;
            return (
              <Link
                href={`/services/${s.slug}`}
                key={s.id}
                onClick={playClick}
                onMouseEnter={playHover}
                className="text-left bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 card-white group focus:outline-none cursor-pointer flex flex-col justify-between shadow-xs hover:shadow-xl hover:border-[#14B8C4] transition-all duration-300"
              >
                <div>
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${s.color} border border-current/20 flex items-center justify-center group-hover:scale-110 transition-all duration-200`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="badge-teal text-[9px] py-1 px-3">
                      {s.category}
                    </span>
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F172A] mb-2 group-hover:text-[#0E8A94] transition-colors leading-snug">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-5 font-normal line-clamp-3">
                    {s.shortDescription}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="space-y-1.5 mb-6 pt-2 border-t border-slate-100">
                    {s.features.slice(0, 2).map((t: string) => (
                      <div key={t} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E8A94] flex-shrink-0" />
                        <span className="truncate">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0E8A94] group-hover:text-[#041E42] uppercase tracking-wider transition-colors">
                  <span>Explore Service &amp; ROI</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
