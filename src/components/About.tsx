"use client";

import React from "react";
import { CheckCircle2, Award, Target, Globe, Code2, TrendingUp, Layers, ArrowRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import Link from "next/link";
import SectionHeader from "@/components/shared/SectionHeader";

const pillars = [
  { icon: Layers,    title: "Brand Identity",        desc: "Full visual language, executive marks & style guides that command instant trust." },
  { icon: TrendingUp,title: "Performance Marketing", desc: "Data-backed Meta & Google ad funnels with verified ROAS scaling frameworks." },
  { icon: Code2,     title: "Software Engineering",  desc: "Lightning-fast Next.js 15 web portals & custom ERPs built for sub-1s load times." },
  { icon: Globe,     title: "Digital Visibility",    desc: "Structured schema SEO, local discovery & authority positioning." },
  { icon: Target,    title: "Startup Consulting",    desc: "Unit economics, pricing model restructuring & quarterly scaling advisory." },
  { icon: Award,     title: "Content Ecosystems",    desc: "High-retention social content calendars, reels & conversion copywriting." },
];

const checks = [
  "Strategy rooted in empirical data — zero guesswork",
  "Full-funnel architecture from awareness to bottom-line conversion",
  "Transparent reporting with multi-touch attribution metrics",
  "Human-centered creative that emotionally connects with buyers",
];

const achievements = [
  { val: "50+",    label: "Brands Scaled" },
  { val: "₹12Cr+", label: "Client Revenue" },
  { val: "15M+",   label: "Audience Reach" },
  { val: "4.8×",   label: "Average ROAS" },
];

export default function About() {
  const { playClick, playHover } = useSound();

  return (
    <section id="about" className="section-pad bg-white border-b border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="Core Philosophy"
          title="We Don't Just Market."
          gradientTitle="We Engineer Growth."
          subtitle="At IMMNAVEED, real digital success is built on robust strategy and sustainable systems — not temporary hype. We build high-converting brands, performance funnels, and sub-1s web platforms."
          theme="light"
        />

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">

          {/* Left text & credentials */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0F172A] leading-tight">
              A Unified Engine for <span className="text-gradient-teal">Market Authority.</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Founded by Er. Naveed Malik, IMMNAVEED eliminates the fragmentation between brand agencies and software teams. We unify executive brand design, high-converting Meta and Google ad campaigns, and custom Next.js engineering into one cohesive retainer.
            </p>

            <ul className="space-y-3 pt-2">
              {checks.map((c) => (
                <li key={c} className="flex items-start gap-3 bg-[#F8FAFC] p-3 rounded-xl border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#0E8A94] flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-semibold">{c}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="/contact"
                onClick={playClick}
                onMouseEnter={playHover}
                className="btn-orange text-sm font-bold"
              >
                <span>Start Your Growth Journey</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Pillar Cards & Stats */}
          <div className="lg:col-span-6 space-y-6">
            {/* Achievement pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {achievements.map((a) => (
                <div key={a.label} className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-4 text-center shadow-xs">
                  <p className="font-display text-2xl font-extrabold text-[#0F172A]">{a.val}</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-1">{a.label}</p>
                </div>
              ))}
            </div>

            {/* Pillar cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="card-white p-5 group cursor-default"
                  >
                    <div className="w-10 h-10 bg-[#14B8C4]/10 border border-[#14B8C4]/20 rounded-xl flex items-center justify-center mb-3 text-[#0E8A94] group-hover:scale-110 group-hover:bg-[#14B8C4] group-hover:text-white transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-[#0F172A] mb-1 group-hover:text-[#0E8A94] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
