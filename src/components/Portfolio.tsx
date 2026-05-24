"use client";

import { useState } from "react";
import { X, ArrowRight, TrendingUp, Award, Eye, BarChart2, Sparkles } from "lucide-react";

const projects = [
  {
    id: 1, cat: "Branding",
    title: "Aura FinTech Corporate Identity",
    desc: "Complete high-end rebrand with logos, style rules, and asset templates.",
    challenge: "The brand looked outdated and failed to communicate security to high-net-worth clients.",
    strategy: "Minimal geometric brand mark with deep navy + gold — conveying extreme security credentials.",
    result: "Unified visual presence across all touchpoints, creating measurable brand-trust lift.",
    metric: "+48% Brand Trust",
    metricIcon: Award,
    color: "#3B82F6",
    bg: "from-blue-100 to-indigo-100",
  },
  {
    id: 2, cat: "Marketing",
    title: "ScaleSaaS Acquisition Funnel",
    desc: "Optimised ad layout & landing page pipeline for mid-market corporate leads.",
    challenge: "High CPL and low conversion on generic landing paths.",
    strategy: "Hyper-targeted Meta ads + single-focus acquisition page with zero distractions.",
    result: "Dramatically lowered lead cost while maximising qualified bookings.",
    metric: "4.8× ROI",
    metricIcon: TrendingUp,
    color: "#10B981",
    bg: "from-emerald-100 to-teal-100",
  },
  {
    id: 3, cat: "Engineering",
    title: "PrimeReal Estate Next.js Hub",
    desc: "Blazing-fast property matching platform with Next.js App Router.",
    challenge: "Page load delays were causing visitors to drop before submitting inquiries.",
    strategy: "Static rendering, optimised asset pipeline, and responsive UI grid.",
    result: "Page speeds under 1.2s → immediate lift in web inquiries.",
    metric: "+84% Leads",
    metricIcon: BarChart2,
    color: "#FF5A1F",
    bg: "from-orange-100 to-red-100",
  },
  {
    id: 4, cat: "Video",
    title: "Venture Acceleration Reel Kit",
    desc: "Premium short-form video templates for startup founders.",
    challenge: "Losing viewer retention in the first 3 seconds of content.",
    strategy: "Fast-paced hooks, high-contrast captions, and custom kinetic transitions.",
    result: "Widespread engagement and massive follower growth for founders.",
    metric: "4.2M Views",
    metricIcon: Eye,
    color: "#8B5CF6",
    bg: "from-purple-100 to-pink-100",
  },
  {
    id: 5, cat: "Social Media",
    title: "OmniWellness Brand Kit",
    desc: "Cohesive multi-platform content assets and template systems.",
    challenge: "Fractured graphics making the brand look amateur.",
    strategy: "Clean grid rules and templates using custom typography and light organic tones.",
    result: "Visual consistency that significantly boosted organic saves and shares.",
    metric: "+114% Engagement",
    metricIcon: Sparkles,
    color: "#F59E0B",
    bg: "from-amber-100 to-orange-100",
  },
  {
    id: 6, cat: "Strategy",
    title: "Zeta Logistics Scaling Audit",
    desc: "Strategic consultancy & commercial funnel redesign.",
    challenge: "Stagnated revenue and inefficient lead-to-deal pipelines.",
    strategy: "Overhauled inbound qualification steps and automated partner follow-ups.",
    result: "Shortened sales cycle duration while boosting pipeline margins.",
    metric: "+28% Profit",
    metricIcon: TrendingUp,
    color: "#64748B",
    bg: "from-slate-100 to-neutral-100",
  },
];

const cats = ["All", "Branding", "Marketing", "Engineering", "Video", "Social Media", "Strategy"];

export default function Portfolio() {
  const [cat, setCat] = useState("All");
  const [detail, setDetail] = useState<typeof projects[0] | null>(null);

  const list = cat === "All" ? projects : projects.filter(p => p.cat === cat);

  return (
    <section id="portfolio" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-black tracking-widest text-brand-orange uppercase">Featured Work</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-black leading-tight">
            Proven Results for<br />
            <span className="text-gradient">Real Businesses.</span>
          </h2>
          <p className="text-sm text-neutral-500 max-w-xs sm:text-right">
            Real clients. Real numbers. No fluff.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 sm:mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap scrollbar-hide">
          {cats.map(c => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`flex-shrink-0 px-3.5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                cat === c
                  ? "bg-brand-black text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {list.map(p => {
            const Icon = p.metricIcon;
            return (
              <button
                key={p.id}
                onClick={() => setDetail(p)}
                className="text-left bg-white border border-neutral-100 rounded-2xl overflow-hidden card-hover group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              >
                {/* Visual preview */}
                <div className={`h-36 sm:h-40 bg-gradient-to-br ${p.bg} flex items-center justify-center relative overflow-hidden`}>
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
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-90 group-hover:scale-100 shadow-lg">
                      <Eye className="w-4 h-4 text-brand-black" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 sm:p-5">
                  <span className="text-[10px] font-black text-brand-orange uppercase tracking-wider block mb-1.5">
                    {p.cat}
                  </span>
                  <h3 className="text-sm font-black text-brand-black mb-1.5 group-hover:text-brand-orange transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-neutral-500 leading-relaxed mb-3 line-clamp-2">{p.desc}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                    <span
                      className="text-[11px] font-black px-2.5 py-1 rounded-full"
                      style={{ background: `${p.color}18`, color: p.color }}
                    >
                      {p.metric}
                    </span>
                    <span className="text-[11px] font-bold text-neutral-400 group-hover:text-brand-black transition-colors flex items-center gap-1">
                      View Case <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Detail modal */}
      {detail && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setDetail(null)} />
          <div className="relative z-10 bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden">
            <div className="h-1" style={{ background: detail.color }} />
            <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto">

              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-[10px] font-black text-brand-orange uppercase tracking-wider mb-1">
                    {detail.cat} Case Study
                  </p>
                  <h3 className="text-xl font-black text-brand-black leading-tight">{detail.title}</h3>
                </div>
                <button onClick={() => setDetail(null)} className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 flex-shrink-0">
                  <X className="w-5 h-5 text-neutral-500" />
                </button>
              </div>

              {/* Result badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-5 font-black text-sm" style={{ background: `${detail.color}15`, color: detail.color }}>
                <detail.metricIcon className="w-4 h-4" /> {detail.metric}
              </div>

              <div className="space-y-4 mb-6">
                {[
                  { label: "The Challenge", text: detail.challenge },
                  { label: "Our Strategy",  text: detail.strategy  },
                  { label: "The Outcome",   text: detail.result    },
                ].map(s => (
                  <div key={s.label}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-2 h-2 rounded-full bg-brand-orange" />
                      <p className="text-[10px] font-black text-neutral-600 uppercase tracking-widest">{s.label}</p>
                    </div>
                    <p className="text-sm text-neutral-500 leading-relaxed pl-4">{s.text}</p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                onClick={() => setDetail(null)}
                className="flex items-center justify-center gap-2 w-full bg-brand-black text-white font-bold text-sm py-4 rounded-2xl hover:bg-brand-orange transition-colors"
              >
                Discuss a Similar Project <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
