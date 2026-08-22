"use client";

import React from "react";
import { Search, Compass, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";

const steps = [
  {
    phase: "Phase 01", icon: Search,
    title: "Discovery & Positioning Audit",
    desc: "We analyze your business model, audit customer acquisition costs, and map competitor whitespace to find your unfair advantage before we deploy ad spend.",
    deliverables: ["Competitor Gap Analysis", "CAC Feasibility Audit", "Audience Blueprint", "Growth Leak Report"],
    stat: "72h", statLabel: "Audit Turnaround",
    iconColor: "bg-[#14B8C4]/15 border-[#14B8C4]/30 text-[#14B8C4]",
  },
  {
    phase: "Phase 02", icon: Compass,
    title: "Brand & High-Speed UX Foundation",
    desc: "We build your complete visual identity and engineer sub-1s Next.js pages designed to lock in market trust from the very first second of interaction.",
    deliverables: ["Executive Brand Guidelines", "Custom Logo Marks", "SEO Structured Schema", "Bespoke Typography"],
    stat: "14d", statLabel: "Brand Delivery",
    iconColor: "bg-[#F7931E]/15 border-[#F7931E]/30 text-[#F7931E]",
  },
  {
    phase: "Phase 03", icon: Target,
    title: "High-Performance Ad Funnels",
    desc: "We launch multi-touch Meta and Google Search campaigns with optimized landing pages and high-impact reel creatives to generate high-intent inbound leads.",
    deliverables: ["Meta Ads Framework", "Short-Form Creative Engine", "Lead Capture Automation", "A/B Testing Matrix"],
    stat: "4.8×", statLabel: "Average ROAS",
    iconColor: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
  },
  {
    phase: "Phase 04", icon: TrendingUp,
    title: "Automation, Retainers & Scale",
    desc: "We integrate custom ERP automations to manage leads seamlessly and scale high-performing campaigns to maximize ROAS across all channels.",
    deliverables: ["Custom CRM Pipelines", "Quarterly Scaling Roadmaps", "Multi-Touch Attribution", "Monthly Executive Reviews"],
    stat: "90d", statLabel: "Full Scale",
    iconColor: "bg-[#14B8C4]/15 border-[#14B8C4]/30 text-[#14B8C4]",
  },
];

export default function BusinessGrowth() {
  const { playClick, playHover } = useSound();

  return (
    <section id="process" className="section-pad bg-gradient-to-b from-[#041E42] to-[#031730] border-b border-slate-800 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="Our Scaling Engine"
          title="How We Build Systems"
          gradientTitle="That Scale Businesses."
          subtitle="We combine empirical market analysis, sub-1s software engineering, and high-ROAS performance marketing into one repeatable growth cycle."
          actionLink={{ label: "Initiate Audit Call", href: "/contact" }}
          theme="dark"
        />

        {/* Steps */}
        <div className="space-y-4 mt-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                className="card-navy bg-[#082852]/90 border border-slate-700/80 rounded-3xl overflow-hidden group hover:border-[#14B8C4] transition-all shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Main content */}
                  <div className="md:col-span-9 p-6 sm:p-7">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl border ${step.iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold text-[#14B8C4] uppercase tracking-wider block mb-1">
                          {step.phase}
                        </span>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#14B8C4] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-normal">
                          {step.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map(d => (
                            <span key={d} className="inline-flex items-center gap-1.5 bg-[#031730] border border-slate-700/80 text-[11px] font-semibold text-slate-200 px-3 py-1.5 rounded-full">
                              <CheckCircle className="w-3.5 h-3.5 text-[#14B8C4]" /> {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stat panel */}
                  <div className="md:col-span-3 bg-[#031730]/90 border-t md:border-t-0 md:border-l border-slate-700/80 flex flex-row md:flex-col items-center justify-center gap-3 md:gap-1 p-5 md:p-6 text-center">
                    <p className="font-display text-3xl md:text-4xl font-extrabold text-white group-hover:text-[#F7931E] transition-colors">
                      {step.stat}
                    </p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{step.statLabel}</p>
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
