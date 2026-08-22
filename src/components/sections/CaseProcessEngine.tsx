"use client";

import React, { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";
import { CheckCircle2, Clock, FileText, ArrowRight, ShieldCheck, Cpu, Target } from "lucide-react";
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
    <section id="process" className="section-pad bg-white font-sans border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <SectionHeader
          badgeText="Standard Operating Procedure"
          title="The Step-by-Step Case &"
          gradientTitle="Consultation Framework."
          subtitle="Growth is not accidental. It is calculated positioning, rigorous auditing, performance ad execution, and sub-1s software engineering."
          actionLink={{ label: "Request Case Audit Call", href: "/contact" }}
          theme="light"
        />

        {/* 5-Step Stepper Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
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
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isActive
                    ? "bg-[#041E42] border-[#041E42] text-white shadow-xl shadow-[#041E42]/15 scale-[1.02]"
                    : "bg-[#F8FAFC] border-slate-200 text-slate-600 hover:border-[#14B8C4] hover:text-[#041E42]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-display text-xl font-extrabold ${isActive ? "text-[#14B8C4]" : "text-slate-400"}`}>
                    {phase.step}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center ${
                      isActive ? "bg-white/10 text-[#14B8C4]" : "bg-white border border-slate-200 text-slate-500"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider block mb-1 ${isActive ? "text-[#14B8C4]" : "text-[#0E8A94]"}`}>
                    {phase.highlightTag}
                  </span>
                  <h3 className={`text-xs font-bold line-clamp-1 ${isActive ? "text-white" : "text-[#0F172A]"}`}>
                    {phase.title}
                  </h3>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Phase Detail Display Box */}
        <div className="card-white p-6 sm:p-10 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Stage Details */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <span className="badge-teal">
                  Phase {activePhase.step} · {activePhase.highlightTag}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0E8A94]" /> Turnaround: {activePhase.turnaround}
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3 leading-tight">
                  {activePhase.title}
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  {activePhase.fullDesc}
                </p>
              </div>

              {/* Deliverables Grid */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#0F172A] mb-3">
                  Stage Deliverables &amp; Milestones:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activePhase.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-[#F8FAFC] p-3.5 rounded-xl border border-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-[#0E8A94] flex-shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-700 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Stage Inputs & Consultation Trigger */}
            <div className="lg:col-span-5 bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 space-y-6">
              
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-3">
                  Required Inputs from Client:
                </p>
                <ul className="space-y-2">
                  {activePhase.requiredInputs.map((input, i) => (
                    <li key={i} className="text-xs font-semibold text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4]" />
                      {input}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 shadow-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="text-xs font-bold text-[#0F172A]">Direct Founder Supervision</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  Er. Naveed Malik personally audits and manages Phase 01 strategy and Phase 05 reporting for every client retainer.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="btn-orange w-full flex items-center justify-center gap-2 text-center text-sm font-semibold"
                >
                  <span>Initiate Phase 01 Audit Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
