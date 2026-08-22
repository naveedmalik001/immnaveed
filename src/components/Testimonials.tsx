"use client";

import React from "react";
import { Star, ArrowUpRight, Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
  {
    name: "Vikram R. Sharma", role: "Founder & CEO", company: "Aura Fintech Inc.",
    stat: "Revenue 2.4×",
    quote: "IMMNAVEED redesigned our complete brand from the ground up. Their understanding of consumer behaviour and positioning is world-class. An immediate asset for our leadership team.",
    initials: "VS",
  },
  {
    name: "Anjali Mehta", role: "Marketing Director", company: "SaaS Scale Metrics",
    stat: "ROAS 4.8×",
    quote: "We were burning thousands on generic templates that didn't convert. Naveed's performance funnels completely turned our budget around. The numbers speak for themselves.",
    initials: "AM",
  },
  {
    name: "Arjun K. Singhania", role: "Co-Founder", company: "Vantage Real Estate",
    stat: "+342% Reach",
    quote: "Naveed is not just a marketer — he is a tech-focused growth strategist. His team built a high-speed property portal and paired it with converting ad strategies. Exceptional.",
    initials: "AS",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-[#F8FAFC] border-b border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header with Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            badgeText="Partner Endorsements"
            title="Trusted by Forward-"
            gradientTitle="Thinking Leaders."
            subtitle="Verified reviews and measurable outcomes from founders, enterprise executives, and marketing directors."
            theme="light"
          />

          {/* Rating summary pill */}
          <div className="flex items-center gap-5 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm self-start md:self-auto mb-10 md:mb-14">
            <div className="text-center">
              <p className="font-display text-2xl font-extrabold text-[#0F172A]">4.9</p>
              <div className="flex gap-0.5 mt-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-[#F7931E] fill-[#F7931E]" />
                ))}
              </div>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Verified Rating</p>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-center">
              <p className="font-display text-2xl font-extrabold text-[#0F172A]">50+</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">Client Retainers</p>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-white p-7 flex flex-col justify-between"
            >
              <div>
                {/* Stat pill */}
                <div className="flex items-center justify-between mb-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <ArrowUpRight className="w-3 h-3" /> {t.stat}
                  </span>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#F7931E] fill-[#F7931E]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-[#041E42] text-[#14B8C4] flex items-center justify-center text-xs font-black font-display flex-shrink-0 shadow-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display text-sm font-bold text-[#0F172A]">{t.name}</p>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">
                    {t.role}, <span className="text-[#0E8A94] font-bold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
