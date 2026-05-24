"use client";

import { Search, Compass, Target, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const steps = [
  {
    phase: "Phase 01", icon: Search,
    title: "Discovery & Positioning Audit",
    desc: "We analyse your business model, audit customer acquisition costs, and map competitor whitespace to find your unfair advantage before we do anything else.",
    deliverables: ["Competitor Analysis", "CAC Audit", "Audience Blueprint", "Growth Leak Report"],
    stat: "72h", statLabel: "Audit Turnaround",
    iconColor: "bg-blue-100 text-blue-600",
  },
  {
    phase: "Phase 02", icon: Compass,
    title: "Brand & UX Foundation",
    desc: "We build your complete visual identity and engineer high-speed Next.js pages designed to lock in trust from the very first second of interaction.",
    deliverables: ["Brand Style Guide", "Logo Marks", "SEO-Optimised Pages", "Typography System"],
    stat: "14d", statLabel: "Brand Delivery",
    iconColor: "bg-orange-100 text-brand-orange",
  },
  {
    phase: "Phase 03", icon: Target,
    title: "High-Performance Funnels",
    desc: "We launch multi-touch Meta campaigns, optimised landing pages, and high-impact reel content to generate a consistent flow of premium inbound leads.",
    deliverables: ["Meta Ads Framework", "Short-Form Engine", "Lead Capture", "A/B Test Structure"],
    stat: "4.8×", statLabel: "Average ROAS",
    iconColor: "bg-emerald-100 text-emerald-600",
  },
  {
    phase: "Phase 04", icon: TrendingUp,
    title: "Automation & Scale",
    desc: "We integrate custom ERP automations to manage leads seamlessly and scale high-performing campaigns to maximise ROAS across all channels.",
    deliverables: ["ERP Dashboards", "Scaling Roadmaps", "Attribution Tracking", "Monthly Reports"],
    stat: "90d", statLabel: "Full Scale",
    iconColor: "bg-purple-100 text-purple-600",
  },
];

export default function BusinessGrowth() {
  return (
    <section id="process" className="section-pad bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-black tracking-widest text-brand-orange uppercase">
            Our Scaling Engine
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-black leading-tight">
            How We Build Systems<br />
            <span className="text-gradient">That Scale Businesses.</span>
          </h2>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-brand-orange text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-orange-600 transition-colors self-start md:self-auto shadow-lg shadow-orange-200"
          >
            Start the Process <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Steps — stacked on mobile, side-by-side on lg */}
        <div className="space-y-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.phase}
                className="bg-white border border-neutral-100 rounded-2xl overflow-hidden card-hover group"
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* Main content */}
                  <div className="md:col-span-9 p-5 sm:p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${step.iconColor} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider block mb-1">
                          {step.phase}
                        </span>
                        <h3 className="text-base font-black text-brand-black mb-2 group-hover:text-brand-orange transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-neutral-500 leading-relaxed mb-4">
                          {step.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map(d => (
                            <span key={d} className="inline-flex items-center gap-1 bg-neutral-50 border border-neutral-100 text-[11px] font-semibold text-neutral-600 px-3 py-1.5 rounded-full">
                              <CheckCircle className="w-3 h-3 text-brand-orange" /> {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stat panel */}
                  <div className="md:col-span-3 bg-neutral-50 border-t md:border-t-0 md:border-l border-neutral-100 flex flex-row md:flex-col items-center justify-center gap-3 md:gap-1 p-4 md:p-6 text-center">
                    <p className="text-3xl md:text-4xl font-black text-brand-black group-hover:text-brand-orange transition-colors">
                      {step.stat}
                    </p>
                    <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{step.statLabel}</p>
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
