"use client";

import { CheckCircle, Award, Target, Globe, Code2, TrendingUp, Layers } from "lucide-react";

const pillars = [
  { icon: Layers,    title: "Brand Identity",        desc: "Full visual language, logos & style guides that build instant trust." },
  { icon: TrendingUp,title: "Performance Marketing", desc: "Data-backed Meta ads with ROAS-optimised campaign frameworks." },
  { icon: Code2,     title: "Product Engineering",   desc: "Next.js websites & ERP dashboards built for speed and scale." },
  { icon: Globe,     title: "Digital Visibility",    desc: "SEO, local discovery & social authority systems." },
  { icon: Target,    title: "Startup Consulting",    desc: "GTM strategy, pitch structure & growth advisory for founders." },
  { icon: Award,     title: "Content Ecosystems",    desc: "Scalable content calendars, reels & copywriting engines." },
];

const checks = [
  "Strategy rooted in data — not guesswork",
  "Full-funnel approach from awareness to conversion",
  "Transparent reporting with real attribution metrics",
  "Human-centred creative that emotionally resonates",
];

const achievements = [
  { val: "50+",   label: "Brands Transformed" },
  { val: "₹12Cr+", label: "Revenue Generated" },
  { val: "15M+",  label: "Reach Built" },
  { val: "4.8×",  label: "Average ROAS" },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-black tracking-widest text-brand-orange uppercase">
            Core Philosophy
          </span>
        </div>

        {/* Two-col layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left text */}
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-[2.6rem] font-black text-brand-black leading-[1.1] tracking-tight mb-4 sm:mb-5">
              We Don't Just Market.<br />
              <span className="text-gradient">We Engineer Growth.</span>
            </h2>

            <p className="text-sm text-neutral-500 leading-relaxed mb-5 sm:mb-6">
              At IMMNAVEED we believe real digital success is built on robust strategy and
              sustainable systems — not temporary hype. We partner with founders, brands, and
              companies to combine brand strategy, high-performance marketing, and custom digital
              engineering into a unified engine that produces measurable growth.
            </p>

            <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
              {checks.map(c => (
                <li key={c} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-neutral-600 font-medium">{c}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-brand-black text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-brand-orange transition-colors duration-200"
            >
              Start Your Growth Journey →
            </a>
          </div>

          {/* Right */}
          <div>
            {/* Achievement pills */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5 sm:mb-6">
              {achievements.map(a => (
                <div key={a.label} className="bg-brand-gray border border-neutral-100 rounded-2xl p-3 sm:p-4 text-center">
                  <p className="text-xl sm:text-2xl font-black text-brand-black">{a.val}</p>
                  <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mt-1">{a.label}</p>
                </div>
              ))}
            </div>

            {/* Pillar cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {pillars.map(p => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="bg-white border border-neutral-100 rounded-2xl p-4 card-hover group cursor-default"
                  >
                    <div className="w-9 h-9 bg-orange-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand-orange transition-colors duration-200">
                      <Icon className="w-4 h-4 text-brand-orange group-hover:text-white transition-colors duration-200" />
                    </div>
                    <h3 className="text-[13px] font-black text-brand-black mb-1 group-hover:text-brand-orange transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">{p.desc}</p>
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
