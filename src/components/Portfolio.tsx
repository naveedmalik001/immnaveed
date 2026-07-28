"use client";

import { useState } from "react";
import { X, ArrowRight, TrendingUp, Award, Eye, BarChart2, Sparkles, ExternalLink } from "lucide-react";
import { useSound } from "@/hooks/useSound";

const projects = [
  {
    id: 1,
    cat: "Marketing",
    title: "Cambridge Education Admissions Hub",
    desc: "Sleek, high-converting admissions landing portal and digital student recruitment funnels.",
    challenge: "High student bounce rates on traditional, content-heavy course registrations.",
    strategy: "Designed a clean, conversion-focused registration funnel with direct WhatsApp integration and quick booking buttons.",
    result: "Significantly decreased drop-off rate and increased admissions registrations.",
    metric: "+54% Registration Rate",
    metricIcon: Award,
    color: "#3B82F6",
    bg: "from-blue-100 to-indigo-100",
    url: "https://www.cambridgeeducation.in",
  },
  {
    id: 2,
    cat: "Engineering",
    title: "GoStudy Abroad Consulting Portal",
    desc: "Fast, SEO-optimized study-abroad consultancy Next.js portal with automated course matchers.",
    challenge: "Slow search database queries leading to poor user engagement and low lead capturing.",
    strategy: "Built a fully static Next.js directory with instant client-side filtering, fast loading, and interactive forms.",
    result: "Achieved sub-1s load times, boosting overseas student consulting leads.",
    metric: "4.8× ROAS Lift",
    metricIcon: TrendingUp,
    color: "#10B981",
    bg: "from-emerald-100 to-teal-100",
    url: "https://www.gostudyedu.in",
  },
  {
    id: 3,
    cat: "Engineering",
    title: "Campus Disha Career Platform",
    desc: "Next-gen career counseling and college selection software featuring custom ERP management.",
    challenge: "Fragmented student logs and slow coordination among college admissions partners.",
    strategy: "Unified counseling tools with a secure cloud database and custom lead allocation engine.",
    result: "Enhanced operations speed by removing manual entry bottlenecks.",
    metric: "+84% CRM Operations Speed",
    metricIcon: BarChart2,
    color: "#FF5A1F",
    bg: "from-orange-100 to-red-100",
    url: "https://www.campusdisha.in",
  },
  {
    id: 4,
    cat: "Branding",
    title: "Aura FinTech Corporate Identity",
    desc: "Complete high-end rebrand with logos, style rules, and asset templates.",
    challenge: "The brand looked outdated and failed to communicate security to high-net-worth clients.",
    strategy: "Minimal geometric brand mark with deep navy + gold — conveying extreme security credentials.",
    result: "Unified visual presence across all touchpoints, creating measurable brand-trust lift.",
    metric: "+48% Brand Trust",
    metricIcon: Award,
    color: "#8B5CF6",
    bg: "from-purple-100 to-pink-100",
    url: "#",
  },
  {
    id: 5,
    cat: "Social Media",
    title: "OmniWellness Brand Kit",
    desc: "Cohesive multi-platform content assets and template systems.",
    challenge: "Fractured graphics making the brand look amateur and disorganized online.",
    strategy: "Clean grid rules and templates using custom typography and light organic tones.",
    result: "Visual consistency that significantly boosted organic saves and shares.",
    metric: "+114% Engagement",
    metricIcon: Sparkles,
    color: "#F59E0B",
    bg: "from-amber-100 to-orange-100",
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
    metric: "+28% Profit",
    metricIcon: TrendingUp,
    color: "#64748B",
    bg: "from-slate-100 to-neutral-100",
    url: "#",
  },
];

const cats = ["All", "Branding", "Marketing", "Engineering", "Social Media", "Strategy"];

export default function Portfolio() {
  const [cat, setCat] = useState("All");
  const [detail, setDetail] = useState<typeof projects[0] | null>(null);
  const { playClick, playHover } = useSound();

  const list = cat === "All" ? projects : projects.filter(p => p.cat === cat);

  return (
    <section id="portfolio" className="section-pad bg-white font-sans select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header Section */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-black tracking-widest text-brand-orange uppercase">Featured Work</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-black leading-tight">
            Proven Results for<br />
            <span className="text-gradient">Real Businesses.</span>
          </h2>
          <p className="text-sm text-neutral-500 max-w-xs sm:text-right font-medium">
            Take a look at websites and systems we built for our trusted clients.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => {
                playClick();
                setCat(c);
              }}
              onMouseEnter={playHover}
              className={`flex-shrink-0 px-4 py-2.5 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                cat === c
                  ? "bg-brand-black text-white shadow-lg shadow-neutral-900/15"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map(p => {
            const Icon = p.metricIcon;
            return (
              <button
                key={p.id}
                onClick={() => {
                  playClick();
                  setDetail(p);
                }}
                onMouseEnter={playHover}
                className="text-left bg-white border border-neutral-100 rounded-2xl overflow-hidden card-hover group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange cursor-pointer"
              >
                {/* Visual Preview */}
                <div className={`h-40 sm:h-44 bg-gradient-to-br ${p.bg} flex items-center justify-center relative overflow-hidden`}>
                  <div
                    className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-25"
                    style={{ background: p.color }}
                  />
                  <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl opacity-20 rotate-12"
                    style={{ background: p.color }}
                  />
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2.5 rounded-xl flex items-center gap-2 shadow-sm group-hover:scale-105 transition-transform z-10">
                    <Icon className="w-4 h-4" style={{ color: p.color }} />
                    <span className="text-xs font-black text-brand-black">{p.cat}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 flex items-center justify-center transition-all">
                    <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100 shadow-xl">
                      <Eye className="w-5 h-5 text-brand-black" />
                    </div>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 sm:p-6">
                  <span className="text-[10px] font-black text-brand-orange uppercase tracking-widest block mb-2">
                    {p.cat} Client
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-brand-black mb-2 group-hover:text-brand-orange transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-4 line-clamp-2">{p.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <span
                      className="text-[10px] font-black px-3 py-1.5 rounded-full"
                      style={{ background: `${p.color}12`, color: p.color }}
                    >
                      {p.metric}
                    </span>
                    <span className="text-[11px] font-black text-neutral-400 group-hover:text-brand-black transition-colors flex items-center gap-1">
                      View Case Study <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {detail && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity" 
            onClick={() => {
              playClick();
              setDetail(null);
            }} 
          />
          <div className="relative z-10 bg-white w-full sm:max-w-xl rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden border border-neutral-100 transform transition-all duration-300">
            <div className="h-1.5" style={{ background: detail.color }} />
            <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">

              {/* Top Row */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-[10px] font-black text-brand-orange uppercase tracking-widest mb-1.5">
                    {detail.cat} Case Study
                  </p>
                  <h3 className="text-xl sm:text-2xl font-black text-brand-black leading-tight">{detail.title}</h3>
                </div>
                <button 
                  onClick={() => {
                    playClick();
                    setDetail(null);
                  }} 
                  className="p-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 flex-shrink-0 transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-500" />
                </button>
              </div>

              {/* Status Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl mb-6 font-black text-xs sm:text-sm tracking-wide" 
                style={{ background: `${detail.color}15`, color: detail.color }}
              >
                <detail.metricIcon className="w-4 h-4" /> {detail.metric}
              </div>

              {/* Case Details */}
              <div className="space-y-5 mb-8">
                {[
                  { label: "The Challenge", text: detail.challenge },
                  { label: "Our Strategy",  text: detail.strategy  },
                  { label: "The Outcome",   text: detail.result    },
                ].map(s => (
                  <div key={s.label} className="bg-neutral-50 p-4 rounded-2xl border border-neutral-100/55">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-brand-orange" />
                      <p className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">{s.label}</p>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {detail.url && detail.url !== "#" ? (
                  <a
                    href={detail.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={playClick}
                    className="flex items-center justify-center gap-2 w-full border-2 border-brand-black text-brand-black hover:bg-neutral-50 font-black text-sm py-4 rounded-2xl transition-all"
                  >
                    Visit Live Website <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <button
                    disabled
                    className="flex items-center justify-center gap-2 w-full border-2 border-neutral-200 text-neutral-400 font-black text-sm py-4 rounded-2xl cursor-not-allowed"
                  >
                    Internal Client Case
                  </button>
                )}
                <a
                  href="#contact"
                  onClick={() => {
                    playClick();
                    setDetail(null);
                  }}
                  className="flex items-center justify-center gap-2 w-full bg-brand-black text-white hover:bg-brand-orange font-black text-sm py-4 rounded-2xl transition-colors shadow-lg"
                >
                  Discuss Custom Growth <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
