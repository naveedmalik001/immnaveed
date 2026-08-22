"use client";

import React from "react";
import { TrendingUp, Users, Heart, Zap, Shield, Target, PiggyBank, LifeBuoy } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const items = [
  { icon: TrendingUp,  num: "01", title: "Result-Driven Focus",      desc: "We prioritize bottom-line client revenue over vanity likes and meaningless impressions.",            color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30" },
  { icon: Users,       num: "02", title: "Human-Centered Strategy",  desc: "Engineered around deep buyer psychology and conversion triggers — never assumptions.",               color: "text-[#14B8C4] bg-[#14B8C4]/15 border-[#14B8C4]/30" },
  { icon: Heart,       num: "03", title: "Creative & Cohesive",      desc: "Timeless visual design systems and logos that build instant, unshakeable market trust.",            color: "text-rose-400 bg-rose-500/15 border-rose-500/30" },
  { icon: PiggyBank,   num: "04", title: "Predictable Value",        desc: "Enterprise-grade strategy, ad execution, and software architecture at transparent pricing.",         color: "text-[#F7931E] bg-[#F7931E]/15 border-[#F7931E]/30" },
  { icon: Shield,      num: "05", title: "Real Performance Mktg",    desc: "Rigorous ROAS optimization using strict multi-touch attribution and verified data models.",         color: "text-purple-400 bg-purple-500/15 border-purple-500/30" },
  { icon: Target,      num: "06", title: "Conversion-Focused",       desc: "Every landing page, ad creative, and software portal is built to convert traffic into revenue.",    color: "text-[#F7931E] bg-[#F7931E]/15 border-[#F7931E]/30" },
  { icon: LifeBuoy,    num: "07", title: "Direct Lead Advisory",     desc: "Direct access to Er. Naveed Malik — zero junior account managers or outsourced intermediaries.",    color: "text-[#14B8C4] bg-[#14B8C4]/15 border-[#14B8C4]/30" },
  { icon: Zap,         num: "08", title: "Speed & Agile Delivery",   desc: "Rapid deployment cycles, sub-1s load times, and agile execution at every growth milestone.",        color: "text-amber-300 bg-amber-400/15 border-amber-400/30" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-[#041E42] bg-grid-blueprint font-sans border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="The Competitive Advantage"
          title="Why Leading Brands"
          gradientTitle="Choose IMMNAVEED."
          subtitle="We merge operational strategy, high-converting performance marketing, and bespoke software development into one systematic engine."
          theme="dark"
        />

        {/* Grid — 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative bg-[#082852]/90 border border-slate-700/80 rounded-2xl p-5 overflow-hidden group hover:border-[#14B8C4] hover:-translate-y-1 transition-all duration-200 shadow-lg cursor-default"
              >
                {/* Number watermark */}
                <span className="absolute bottom-1 right-2 text-5xl font-black text-white/5 leading-none select-none pointer-events-none group-hover:text-[#14B8C4]/10 transition-colors font-display">
                  {item.num}
                </span>

                <div className={`w-10 h-10 rounded-xl ${item.color} border flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-sm font-bold text-white mb-1 group-hover:text-[#14B8C4] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed relative z-10 font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
