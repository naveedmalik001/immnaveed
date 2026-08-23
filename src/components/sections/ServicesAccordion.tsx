"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/services";

export default function ServicesAccordion() {
  const [active, setActive] = useState<string | null>("s1");
  const { playClick, playHover } = useSound();

  return (
    <section id="services-accordion" className="section-pad bg-gradient-to-b from-[#041E42] to-[#031730] border-b border-slate-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="Full-Spectrum Growth & Media"
          title="Our 7 Core Services Designed for"
          gradientTitle="Real Business Impact."
          subtitle="From business model optimization and paid social ad campaigns to in-house 4K video shoots, graphic design, data analysis, and wedding cinematography."
          actionLink={{ label: "View All 7 Services", href: "/services" }}
          theme="dark"
        />

        {/* Services — accordion rows */}
        <div className="card-navy bg-[#082852]/90 overflow-hidden divide-y divide-slate-700/80 shadow-2xl">
          {servicesData.map((svc, idx) => {
            const isOpen = active === svc.id;
            return (
              <div key={svc.id}>
                <button
                  onClick={() => { playClick(); setActive(isOpen ? null : svc.id); }}
                  onMouseEnter={playHover}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left group cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-5 sm:gap-6">
                    <span className="text-xs font-black uppercase tracking-wider text-[#14B8C4] w-6 flex-shrink-0">
                      0{idx + 1}
                    </span>
                    <span
                      className={`font-display font-bold transition-colors duration-150 ${
                        isOpen ? "text-[#14B8C4]" : "text-white group-hover:text-[#14B8C4]"
                      }`}
                      style={{ fontSize: "clamp(1.05rem, 2vw, 1.3rem)" }}
                    >
                      {svc.title}
                    </span>
                  </div>

                  {/* Plus / Minus indicator */}
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-150 ${
                      isOpen
                        ? "bg-[#14B8C4] text-[#031730] shadow-md shadow-[#14B8C4]/30"
                        : "bg-[#041E42] text-slate-300 border border-slate-700/60 group-hover:bg-[#14B8C4] group-hover:text-[#031730]"
                    }`}
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {/* Expanded content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 px-5 sm:px-6 pb-6 pt-2" : "max-h-0 px-5 sm:px-6 py-0"
                  }`}
                >
                  <div className="pl-11 grid grid-cols-1 md:grid-cols-2 gap-6 pt-3 border-t border-slate-700/60">
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">{svc.content}</p>
                    <ul className="space-y-2">
                      {svc.features.slice(0, 3).map((b) => (
                        <li key={b} className="flex items-start gap-2 text-xs font-medium text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#14B8C4] flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pl-11 pt-5 flex items-center gap-4">
                    <Link
                      href={`/services/${svc.slug}`}
                      onClick={playClick}
                      className="btn-orange text-xs py-2 px-4 rounded-xl inline-flex items-center gap-1.5"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      onClick={playClick}
                      className="text-xs font-bold uppercase tracking-wider text-[#14B8C4] hover:text-white transition-colors"
                    >
                      Inquire Now →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
