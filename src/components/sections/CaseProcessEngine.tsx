"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2, Clock, FileText, ArrowRight, ShieldCheck, Cpu, Target, ArrowUpRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";

interface ProcessPhase {
  id: string;
  step: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  requiredInputs: string[];
  turnaround: string;
  icon: any;
  highlightTag: string;
}

const phases: ProcessPhase[] = [
  {
    id: "stage-1",
    step: "01",
    title: "360° Case Audit & Feasibility Review",
    shortDesc: "Deconstructing your current revenue bottlenecks, legal/market parameters & CAC metrics.",
    fullDesc: "Before proposing any solution, Er. Naveed Malik conducts an exhaustive 1-on-1 audit. We evaluate your existing brand footprint, ad account parameters, technical web setup, or case eligibility to establish exact baseline feasibility.",
    deliverables: [
      "Competitive Landscape & Gap Matrix",
      "Sales Funnel & Conversion Leakage Report",
      "Technical Web Speed & SEO Infrastructure Audit",
      "Target CAC & ROI Feasibility Projection"
    ],
    requiredInputs: [
      "Existing business metrics / case history",
      "30-Minute Discovery Call with Founder"
    ],
    turnaround: "24 – 48 Hours",
    icon: Target,
    highlightTag: "Discovery & Audit",
  },
  {
    id: "stage-2",
    step: "02",
    title: "Custom Strategy Blueprint & Document Roadmap",
    shortDesc: "Architecting a tailored growth roadmap with transparent milestones & zero hidden terms.",
    fullDesc: "We design a comprehensive execution blueprint tailored specifically to your objectives. This includes offer packaging, high-converting copy frameworks, legal/commercial document checklists, and Next.js 15 technical specifications.",
    deliverables: [
      "Custom Strategy PDF & Action Roadmap",
      "Offer Packaging & Pricing Model Restructuring",
      "Complete Legal/Commercial Document Checklist",
      "Figma Desktop & Mobile UI Wireframes"
    ],
    requiredInputs: [
      "Approval of core project scope",
      "Brand collateral & raw copy guidelines"
    ],
    turnaround: "3 – 5 Business Days",
    icon: FileText,
    highlightTag: "Strategy Architecture",
  },
  {
    id: "stage-3",
    step: "03",
    title: "High-Performance Asset & Software Engineering",
    shortDesc: "Engineering sub-1s Next.js 15 digital portals, ad creatives & WhatsApp API funnels.",
    fullDesc: "Our engineering phase translates approved blueprints into production-ready digital infrastructure. We build lightning-fast web applications, high-converting Meta & Google ad creative sets, and automated CRM routing workflows.",
    deliverables: [
      "Sub-1s Next.js 15 App Router Deployment",
      "High-ROAS Meta & Google Ad Creative Sets",
      "WhatsApp Business API & CRM Auto-Routing",
      "Structured Schema & Technical SEO Setup"
    ],
    requiredInputs: [
      "Access to ad accounts & hosting DNS",
      "Design sign-off"
    ],
    turnaround: "7 – 12 Business Days",
    icon: Cpu,
    highlightTag: "Engineering & Assets",
  },
  {
    id: "stage-4",
    step: "04",
    title: "Live Submission, Campaign Execution & Priority Tracking",
    shortDesc: "Deploying targeted ad campaigns & immediate priority routing to maximize lead flow.",
    fullDesc: "We go live with precision. Ad campaigns are pushed across Meta and Google Search, while automated lead workflows capture and route qualified prospects to your sales team in under 60 seconds.",
    deliverables: [
      "Live Meta & Google Search Ad Deployment",
      "Instant WhatsApp Lead Notification Engine",
      "Conversion Tracking Pixel Verification",
      "Real-Time Case Tracking Dashboard"
    ],
    requiredInputs: [
      "Campaign ad spend budget activation",
      "Team availability for lead handling"
    ],
    turnaround: "Immediate / Live 24/7",
    icon: Clock,
    highlightTag: "Live Execution",
  },
  {
    id: "stage-5",
    step: "05",
    title: "Approval, Retainer Management & Scale Optimization",
    shortDesc: "Continuous data analysis, creative split testing & executive retainer support.",
    fullDesc: "Growth is an iterative science. We continually analyze heatmaps, attribution data, and ROAS metrics—split-testing creative variations and refining codebase performance to maintain market dominance.",
    deliverables: [
      "Weekly Transparent ROAS & Analytics Reports",
      "Continuous A/B Creative Testing & Copy Tuning",
      "Monthly Executive Review Meetings with Founder",
      "Long-Term Brand Moat Expansion"
    ],
    requiredInputs: [
      "Monthly performance review alignment"
    ],
    turnaround: "Ongoing Executive Retainer",
    icon: ShieldCheck,
    highlightTag: "Scale & Moat",
  },
];

export default function CaseProcessEngine() {
  const [activeStageId, setActiveStageId] = useState<string>("stage-1");
  const { playClick, playHover } = useSound();

  const activePhase = phases.find((p) => p.id === activeStageId) || phases[0];

  return (
    <section id="process" className="section-pad-luxury bg-zinc-950 font-sans border-b border-zinc-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Standard Operating Procedure"
          title="The Step-by-Step Case &"
          gradientTitle="Consultation Framework."
          subtitle="Growth is not accidental. It is calculated positioning, rigorous auditing, performance ad execution, and sub-1s software engineering."
          actionLink={{ label: "Request Case Audit Call", href: "/contact" }}
        />

        {/* 5-Step Progress Bar Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-10">
          {phases.map((phase) => {
            const isActive = phase.id === activeStageId;
            const Icon = phase.icon;
            return (
              <button
                key={phase.id}
                onClick={() => {
                  playClick();
                  setActiveStageId(phase.id);
                }}
                onMouseEnter={playHover}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 border-amber-500 shadow-xl shadow-amber-500/10 scale-[1.02]"
                    : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 opacity-80 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xl font-black ${isActive ? "text-amber-400" : "text-zinc-500"}`}>
                    {phase.step}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isActive ? "bg-amber-500 text-black" : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-amber-500/90 block mb-1">
                    {phase.highlightTag}
                  </span>
                  <h3 className="text-xs font-black text-white line-clamp-1">
                    {phase.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Display Box */}
        <div className="luxury-card rounded-3xl p-6 sm:p-10 border border-zinc-800 bg-gradient-to-br from-zinc-900/90 via-zinc-950 to-zinc-900 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Stage Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="text-xs font-black px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 uppercase tracking-widest">
                  Phase {activePhase.step} · {activePhase.highlightTag}
                </span>
                <span className="text-xs font-bold text-zinc-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-500" /> Turnaround: {activePhase.turnaround}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 leading-tight">
                  {activePhase.title}
                </h3>
                <p className="text-sm text-zinc-300 font-medium leading-relaxed">
                  {activePhase.fullDesc}
                </p>
              </div>

              {/* Deliverables Grid */}
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-400 mb-3">
                  Stage Deliverables & Milestones:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePhase.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-zinc-950 p-3 rounded-xl border border-zinc-800/80">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-bold text-zinc-300 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Stage Inputs & Consultation Trigger */}
            <div className="lg:col-span-5 bg-zinc-950 p-6 rounded-2xl border border-zinc-800/90 space-y-6">
              
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-3">
                  Required Inputs from Client:
                </p>
                <ul className="space-y-2">
                  {activePhase.requiredInputs.map((input, i) => (
                    <li key={i} className="text-xs font-semibold text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      {input}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-white">Direct Founder Supervision</span>
                </div>
                <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
                  Er. Naveed Malik personally audits and manages Phase 01 strategy and Phase 05 reporting for every client retainer.
                </p>
              </div>

              {/* Right-Aligned Consultation CTA Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-black text-xs uppercase tracking-widest py-4 rounded-xl transition-all shadow-lg shadow-amber-500/20"
                >
                  <span>Initiate Phase 01 Audit Call</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
