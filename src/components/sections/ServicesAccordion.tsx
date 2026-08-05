"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, TrendingUp, Target, Code2, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { useSound } from "@/hooks/useSound";

const minimalServices = [
  {
    id: "s1",
    title: "Brand Strategy & Positioning",
    desc: "Crafting authoritative market positioning, brand identity rulebooks, and competitive moats that command instant client trust.",
    bullets: ["Brand Architecture & Identity", "Tone of Voice Rulebook", "Market Positioning Matrix"],
    icon: ShieldCheck,
  },
  {
    id: "s2",
    title: "Meta & Google Performance Ads",
    desc: "Data-backed advertising campaigns built for maximum ROAS, high-intent lead generation, and measurable revenue scaling.",
    bullets: ["Full-Funnel Campaign Setup", "Creative A/B Copywriting", "Conversion Tracking & Attribution"],
    icon: Target,
  },
  {
    id: "s3",
    title: "Next.js 15 Web Engineering",
    desc: "Bespoke, lightning-fast digital storefronts built on Next.js 15 App Router with 95+ Lighthouse speed scores.",
    bullets: ["Sub-1s PageSpeed Performance", "SEO Structured Schema", "Mobile-First Usability"],
    icon: Code2,
  },
  {
    id: "s4",
    title: "Executive Growth Consulting",
    desc: "Direct guidance with Er. Naveed Malik to remove operational bottlenecks, optimize unit economics, and scale sales funnels.",
    bullets: ["1-on-1 Strategy Discovery Call", "CAC to LTV Funnel Audit", "Operational Scaling Roadmap"],
    icon: TrendingUp,
  },
];

export default function ServicesAccordion() {
  const { playClick, playHover } = useSound();

  return (
    <section id="services" className="section-pad-minimal bg-zinc-950 font-sans border-b border-zinc-900 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Minimal Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 block mb-2">
            Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Capabilities & Services.
          </h2>
          <p className="text-sm text-zinc-400 font-medium mt-3">
            Engineered to establish market leadership, lower customer acquisition costs, and build predictable revenue engines.
          </p>
        </div>

        {/* Minimal 4-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {minimalServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                onMouseEnter={playHover}
                className="minimal-card rounded-2xl p-6 sm:p-8 bg-zinc-900/50 border border-zinc-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-xl font-black text-white mb-3">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-medium leading-relaxed mb-6">
                    {svc.desc}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-zinc-800/80 mb-6">
                    {svc.bullets.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-zinc-300 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Link
                    href="/#contact"
                    onClick={playClick}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-widest"
                  >
                    <span>Request Service Audit</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
