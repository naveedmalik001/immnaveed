"use client";

import { useState } from "react";
import { X, ArrowUpRight, TrendingUp, Award, Eye, BarChart2, Sparkles, ExternalLink, ArrowRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import SectionHeader from "@/components/shared/SectionHeader";

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
    color: "#F59E0B",
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
    color: "#10B981",
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
    color: "#FF5A1F",
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
    color: "#8B5CF6",
    url: "#",
  },
  {
    id: 5,
    cat: "Social Media",
    title: "OmniWellness Brand Kit",
    desc: "Cohesive multi-platform content assets and template systems.",
    challenge: "Fractured graphics making the brand look amateur and disorganized online.",
    strategy: "Clean grid rules and templates using custom typography and rich dark tones.",
    result: "Visual consistency that significantly boosted organic saves and shares.",
    metric: "+114% Engagement",
    metricIcon: Sparkles,
    color: "#F59E0B",
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
    color: "#64748B",
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
    <section id="portfolio" className="section-pad-luxury bg-zinc-950 font-sans border-b border-zinc-900 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="Verified Outcomes"
          title="Proven Results for"
          gradientTitle="Real Businesses."
          subtitle="Review verified client case studies, web applications, and growth architectures engineered by IMMNAVEED."
          actionLink={{ label: "Request Custom Case Audit", href: "/contact" }}
        />

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => {
                playClick();
                setCat(c);
              }}
              onMouseEnter={playHover}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                cat === c
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
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
                className="luxury-card rounded-2xl overflow-hidden group border border-zinc-800 bg-zinc-900/60 cursor-pointer flex flex-col justify-between"
              >
                {/* Visual Header */}
                <div className="p-6 pb-4 border-b border-zinc-800/80 bg-gradient-to-br from-zinc-900 to-zinc-950 relative">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400">
                      {p.cat} Client
                    </span>
                    <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 flex items-center gap-1">
                      <Icon className="w-3 h-3" /> {p.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors leading-snug mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-medium line-clamp-2">
                    {p.desc}
                  </p>
                </div>

                {/* Body Details */}
                <div className="p-6 pt-4 flex items-center justify-between bg-zinc-950">
                  <span className="text-[11px] font-bold text-zinc-500 group-hover:text-zinc-300 transition-colors">
                    Verified Execution
                  </span>
                  
                  {/* Right-Aligned Case Link Button */}
                  <span className="text-xs font-black text-amber-400 group-hover:text-amber-300 uppercase tracking-widest flex items-center gap-1">
                    <span>View Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => {
              playClick();
              setDetail(null);
            }}
          />
          <div className="relative z-10 bg-zinc-950 w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden border border-zinc-800 animate-fadeIn">
            <div className="h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600" />
            <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6">

              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-amber-400 mb-1 block">
                    {detail.cat} Case Study
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">{detail.title}</h3>
                </div>
                <button
                  onClick={() => {
                    playClick();
                    setDetail(null);
                  }}
                  className="p-2.5 rounded-xl bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 flex-shrink-0 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status Metric Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 border border-amber-500/30 font-black text-xs text-amber-400 uppercase tracking-widest">
                <detail.metricIcon className="w-4 h-4" /> {detail.metric}
              </div>

              {/* Case Details */}
              <div className="space-y-4">
                {[
                  { label: "The Challenge", text: detail.challenge },
                  { label: "Our Strategy",  text: detail.strategy  },
                  { label: "The Outcome",   text: detail.result    },
                ].map((s) => (
                  <div key={s.label} className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800/80">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest">{s.label}</p>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-medium">{s.text}</p>
                  </div>
                ))}
              </div>

              {/* Action Buttons (Right-aligned Primary Trigger) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {detail.url && detail.url !== "#" ? (
                  <a
                    href={detail.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="flex items-center justify-center gap-2 w-full border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-900 font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all"
                  >
                    <span>Visit Live Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 w-full border border-zinc-800 text-zinc-500 font-black text-xs uppercase tracking-widest py-3.5 rounded-xl cursor-not-allowed"
                  >
                    Internal Client Case
                  </button>
                )}

                <a
                  href="/contact"
                  onClick={() => {
                    playClick();
                    setDetail(null);
                  }}
                  className="flex items-center justify-center gap-2 w-full bg-amber-500 hover:bg-amber-600 text-black font-black text-xs uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20"
                >
                  <span>Discuss Strategy Call</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
