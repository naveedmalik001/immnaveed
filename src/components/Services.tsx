"use client";

import { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Services() {
  const [showAll, setShowAll] = useState(false);

  // Take first 6 for default view
  const displayed = showAll ? servicesData : servicesData.slice(0, 6);

  return (
    <section id="services" className="section-pad bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Label + heading */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-black tracking-widest text-brand-orange uppercase">
            Corporate Capabilities
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-black leading-tight">
            Every Service You Need<br />
            <span className="text-gradient">to Scale Your Business.</span>
          </h2>
          <p className="text-sm text-neutral-500 max-w-xs sm:text-right">
            Dedicated growth strategies, engineering, and performance marketing.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayed.map(s => {
            const Icon = s.icon;
            return (
              <Link
                href={`/services/${s.slug}`}
                key={s.id}
                className="text-left bg-white border border-neutral-100 rounded-2xl p-5 sm:p-6 card-hover group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange cursor-pointer block"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4 sm:mb-5">
                  <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-wider bg-neutral-100 text-neutral-600 px-2.5 py-1 rounded-full">
                    {s.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-brand-black mb-2 group-hover:text-brand-orange transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed mb-5">
                  {s.shortDescription}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {s.features.slice(0, 3).map((t: string) => (
                    <span key={t} className="text-[10px] font-semibold text-neutral-500 bg-neutral-50 px-2.5 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-1.5 text-sm font-bold text-brand-orange group-hover:gap-2.5 transition-all">
                  View Full Details <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* View more */}
        {servicesData.length > 6 && (
          <div className="flex justify-center mt-8 sm:mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 border-2 border-brand-black text-brand-black font-bold text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-brand-black hover:text-white transition-all duration-200 cursor-pointer"
            >
              {showAll ? "Show Less" : `View All ${servicesData.length} Services`}
              <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? "-rotate-90" : "rotate-90"}`} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
