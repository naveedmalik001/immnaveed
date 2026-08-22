"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: "s1",
    num: "01",
    title: "Brand Strategy & Positioning",
    desc: "Crafting authoritative market positioning, brand identity rulebooks, and competitive moats that command instant client trust.",
    bullets: [
      "Brand Architecture & Visual Identity",
      "Executive Tone of Voice Rulebook",
      "Market Positioning & Whitespace Matrix",
    ],
  },
  {
    id: "s2",
    num: "02",
    title: "Meta & Google Performance Ads",
    desc: "Data-backed advertising campaigns built for maximum ROAS, high-intent lead generation, and measurable revenue scaling.",
    bullets: [
      "Full-Funnel Campaign Architecture",
      "Creative A/B Copywriting & Angles",
      "Multi-Touch Attribution Tracking",
    ],
  },
  {
    id: "s3",
    num: "03",
    title: "Next.js 15 Web Engineering",
    desc: "Bespoke, lightning-fast digital storefronts built on Next.js 15 App Router with 95+ Lighthouse speed scores.",
    bullets: [
      "Sub-1s PageSpeed Performance",
      "SEO Structured Schema & OpenGraph",
      "High-Converting Funnel Architecture",
    ],
  },
  {
    id: "s4",
    num: "04",
    title: "Executive Growth Consulting",
    desc: "Direct guidance with Er. Naveed Malik to remove operational bottlenecks, optimize unit economics, and scale sales funnels.",
    bullets: [
      "1-on-1 Founder Discovery & Audit",
      "CAC to LTV Funnel Optimization",
      "Quarterly Scaling Roadmap",
    ],
  },
];

export default function ServicesAccordion() {
  const [active, setActive] = useState<string | null>("s1");
  const { playClick, playHover } = useSound();

  return (
    <section id="services" className="section-pad bg-gradient-to-b from-[#041E42] to-[#031730] border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="Core Capabilities"
          title="Engineered Capabilities for"
          gradientTitle="Market Dominance."
          subtitle="Every service is structured to reduce acquisition costs, elevate visual prestige, and build long-term commercial value."
          actionLink={{ label: "View All Services", href: "/services" }}
          theme="dark"
        />

        {/* Services — accordion rows */}
        <div className="card-navy bg-[#082852]/90 overflow-hidden divide-y divide-slate-800/80 shadow-2xl">
          {services.map((svc) => {
            const isOpen = active === svc.id;
            return (
              <div key={svc.id}>
                <button
                  onClick={() => { playClick(); setActive(isOpen ? null : svc.id); }}
                  onMouseEnter={playHover}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left group cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-xs font-black uppercase tracking-wider text-[#14B8C4] w-6 flex-shrink-0">
                      {svc.num}
                    </span>
                    <span
                      className={`font-display font-bold transition-colors duration-150 ${
                        isOpen ? "text-[#14B8C4]" : "text-white group-hover:text-[#14B8C4]"
                      }`}
                      style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)" }}
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
                    isOpen ? "max-h-80 px-6 sm:px-7 pb-7 pt-2" : "max-h-0 px-6 sm:px-7 py-0"
                  }`}
                >
                  <div className="pl-12 grid grid-cols-1 md:grid-cols-2 gap-6 pt-3 border-t border-slate-700/60">
                    <p className="text-sm text-slate-300 leading-relaxed font-normal">{svc.desc}</p>
                    <ul className="space-y-2.5">
                      {svc.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-xs font-medium text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-[#14B8C4] flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pl-12 pt-6">
                    <Link
                      href="/contact"
                      onClick={playClick}
                      className="btn-orange text-xs py-2.5 px-5 rounded-xl inline-flex items-center gap-2"
                    >
                      <span>Request Service Audit</span>
                      <ArrowRight className="w-3.5 h-3.5" />
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
