"use client";

import { useState } from "react";
import { X, ArrowUpRight, TrendingUp, Award, BarChart2, Sparkles, ExternalLink, ArrowRight, CheckCircle2 } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import SectionHeader from "@/components/shared/SectionHeader";
import Link from "next/link";

const projects = [
  {
    id: 1,
    cat: "Marketing",
    title: "Cambridge Education Admissions Hub",
    desc: "High-converting admissions landing portal & digital student recruitment funnels.",
    challenge: "High student bounce rates on traditional, content-heavy course registrations.",
    strategy: "Designed a clean, conversion-focused registration funnel with direct WhatsApp integration and instant booking triggers.",
    result: "Significantly decreased drop-off rate and increased admissions registrations.",
    metric: "+54% Registration Rate",
    metricIcon: Award,
    color: "#14B8C4",
    url: "https://www.cambridgeeducation.in",
  },
  {
    id: 2,
    cat: "Engineering",
    title: "GoStudy Abroad Consulting Portal",
    desc: "Fast, SEO-optimized study-abroad consultancy Next.js portal with automated course matchers.",
    challenge: "Slow search database queries leading to poor user engagement and low lead capturing.",
    strategy: "Built a fully static Next.js directory with instant client-side filtering, sub-1s page load times, and interactive forms.",
    result: "Achieved sub-1s load times, boosting overseas student consulting leads.",
    metric: "4.8× ROAS Lift",
    metricIcon: TrendingUp,
    color: "#14B8C4",
    url: "https://www.gostudyedu.in",
  },
  {
    id: 3,
    cat: "Engineering",
    title: "Campus Disha Career Platform",
    desc: "Next-gen career counseling & college selection platform featuring custom ERP management.",
    challenge: "Fragmented student logs and slow coordination among college admissions partners.",
    strategy: "Unified counseling tools with a secure cloud database and custom lead allocation engine.",
    result: "Enhanced operations speed by removing manual entry bottlenecks.",
    metric: "+84% CRM Speed",
    metricIcon: BarChart2,
    color: "#14B8C4",
    url: "https://www.campusdisha.in",
  },
  {
    id: 4,
    cat: "Branding",
    title: "Aura FinTech Corporate Identity",
    desc: "Complete high-end rebrand with logos, visual identity rules, and asset templates.",
    challenge: "The brand looked outdated and failed to communicate security credentials to high-net-worth clients.",
    strategy: "Minimal geometric brand mark with deep obsidian + gold — conveying extreme security credentials.",
    result: "Unified visual presence across all touchpoints, creating measurable brand-trust lift.",
    metric: "+48% Brand Trust",
    metricIcon: Award,
    color: "#F7931E",
    url: "#",
  },
  {
    id: 5,
    cat: "Social Media",
    title: "OmniWellness Brand Kit",
    desc: "Cohesive multi-platform content assets and template systems.",
    challenge: "Fractured graphics making the brand look amateur and disorganized online.",
    strategy: "Clean grid rules and templates using custom typography and rich tones.",
    result: "Visual consistency that significantly boosted organic saves and shares.",
    metric: "+114% Engagement",
    metricIcon: Sparkles,
    color: "#F7931E",
    url: "#",
  },
  {
    id: 6,
    cat: "Strategy",
    title: "Zeta Logistics Scaling Audit",
    desc: "Strategic consultancy & commercial funnel redesign.",
    challenge: "Stagnated revenue and inefficient lead-to-deal pipelines.",
    strategy: "Overhauled inbound qualification steps and automated partner follow-ups.",
    result: "Shortened sales cycle duration while boosting pipeline margins.",
    metric: "+28% Profit Margin",
    metricIcon: TrendingUp,
    color: "#14B8C4",
    url: "#",
  },
];

const cats = ["All", "Branding", "Marketing", "Engineering", "Social Media", "Strategy"];

export default function Portfolio() {
  const [cat, setCat] = useState("All");
  const [detail, setDetail] = useState<typeof projects[0] | null>(null);
  const { playClick, playHover } = useSound();

  const list = cat === "All" ? projects : projects.filter((p) => p.cat === cat);

  return (
    <section id="portfolio" className="section-pad bg-[#F8FAFC] font-sans border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="Verified Outcomes"
          title="Proven Results for"
          gradientTitle="Real Businesses."
          subtitle="Review verified client case studies, web applications, and growth architectures engineered by IMMNAVEED."
          actionLink={{ label: "Request Custom Case Audit", href: "/contact" }}
          theme="light"
        />

        {/* Filter Tabs */}
        <div className="flex gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => {
                playClick();
                setCat(c);
              }}
              onMouseEnter={playHover}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                cat === c
                  ? "bg-[#041E42] text-white shadow-md font-extrabold"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#14B8C4] hover:text-[#041E42]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => {
            const Icon = p.metricIcon;
            return (
              <div
                key={p.id}
                onClick={() => {
                  playClick();
                  setDetail(p);
                }}
                onMouseEnter={playHover}
                className="card-white p-6 sm:p-7 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="badge-teal text-[10px] py-1 px-3">
                      {p.cat} Client
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                      <Icon className="w-3 h-3 text-emerald-600" /> {p.metric}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-[#0F172A] group-hover:text-[#0E8A94] transition-colors leading-snug mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-6 font-normal">
                    {p.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-400">
                    Verified Execution
                  </span>
                  
                  <span className="text-xs font-bold text-[#0E8A94] group-hover:text-[#041E42] uppercase tracking-wider flex items-center gap-1 transition-colors">
                    <span>View Breakdown</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {detail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#031730]/80 backdrop-blur-md transition-opacity"
            onClick={() => {
              playClick();
              setDetail(null);
            }}
          />
          <div className="relative z-10 bg-[#041E42] text-white w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border border-slate-700/60 animate-fadeIn">
            {/* Top Teal Accent Strip */}
            <div className="h-1.5 bg-gradient-to-r from-[#14B8C4] to-[#00D4E0]" />

            <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6">

              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#14B8C4] mb-1 block">
                    {detail.cat} Case Study
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    {detail.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    playClick();
                    setDetail(null);
                  }}
                  className="p-2 rounded-xl bg-[#031730] text-slate-300 hover:text-white hover:bg-slate-800 flex-shrink-0 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Metric Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 font-bold text-xs text-emerald-300 uppercase tracking-wider">
                <detail.metricIcon className="w-4 h-4 text-emerald-400" /> {detail.metric}
              </div>

              {/* Case Breakdown */}
              <div className="space-y-4">
                {[
                  { label: "The Challenge", text: detail.challenge },
                  { label: "Our Strategy",  text: detail.strategy  },
                  { label: "The Outcome",   text: detail.result    },
                ].map((s) => (
                  <div key={s.label} className="bg-[#031730] p-4 rounded-2xl border border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#14B8C4]" />
                      <p className="text-[11px] font-black text-[#14B8C4] uppercase tracking-wider">{s.label}</p>
                    </div>
                    <p className="text-xs text-slate-200 leading-relaxed font-normal">{s.text}</p>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {detail.url && detail.url !== "#" ? (
                  <a
                    href={detail.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="btn-white text-center text-xs font-bold"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#041E42]" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="btn-white opacity-50 cursor-not-allowed text-center text-xs font-bold"
                  >
                    Internal Client Case
                  </button>
                )}

                <Link
                  href="/contact"
                  onClick={() => {
                    playClick();
                    setDetail(null);
                  }}
                  className="btn-orange text-center text-xs font-bold"
                >
                  <span>Discuss Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
