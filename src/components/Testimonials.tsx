"use client";

import React from "react";
import { Star, ArrowUpRight, Quote } from "lucide-react";
import SectionHeader from "@/components/shared/SectionHeader";

const testimonials = [
  {
    name: "Suhail Wahid Malik",
    role: "Managing Director",
    company: "Cambridge Education Group",
    stat: "Admissions 3.2×",
    quote: "IMMNAVEED completely engineered our admissions marketing and web infrastructure. Their understanding of student acquisition funnels and digital positioning in Jammu & Kashmir and abroad is peerless.",
    initials: "SM",
  },
  {
    name: "Sajjad Ahmad Bhat",
    role: "Managing Partner",
    company: "Valley Healthcare & Clinics",
    stat: "ROAS 4.8×",
    quote: "We used to struggle with scattered marketing and manual appointment scheduling. Naveed's team built our custom clinic portal and paired it with high-converting Meta ads. The results speak for themselves.",
    initials: "SB",
  },
  {
    name: "Murtaza Mehdi",
    role: "Director of Operations",
    company: "Grand Residency & Luxury Events",
    stat: "+340% Reach",
    quote: "Their in-house 4K video crew and reel editing team captured our property and wedding events with cinematic perfection. IMMNAVEED is the only agency in Kashmir delivering this level of media quality.",
    initials: "MM",
  },
  {
    name: "Sairan Mir",
    role: "Founder & Creative Lead",
    company: "Mir Lifestyle & Retail",
    stat: "Revenue 2.6×",
    quote: "From our brand identity and packaging design to our sub-second Next.js e-commerce storefront, IMMNAVEED executed every deliverable ahead of schedule. An indispensable growth partner.",
    initials: "SM",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-[#F8FAFC] border-b border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header with Rating Summary */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            badgeText="Verified Partner Endorsements"
            title="Trusted by Forward-"
            gradientTitle="Thinking Leaders & Founders."
            subtitle="Real outcomes, verified ROAS, and custom software deployments delivered for prominent businesses across Kashmir, India, and worldwide."
            theme="light"
          />

          {/* Rating summary pill */}
          <div className="flex items-center gap-5 bg-white border border-slate-200 rounded-2xl p-4 shadow-xs self-start md:self-auto mb-10 md:mb-14">
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-white p-6 flex flex-col justify-between rounded-3xl border border-slate-200 shadow-xs hover:shadow-xl hover:border-[#14B8C4] transition-all duration-300"
            >
              <div>
                {/* Stat pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <ArrowUpRight className="w-3 h-3" /> {t.stat}
                  </span>
                  <Quote className="w-5 h-5 text-slate-300" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#F7931E] fill-[#F7931E]" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5 italic line-clamp-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-[#041E42] text-[#14B8C4] flex items-center justify-center text-xs font-black font-display flex-shrink-0 shadow-xs">
                  {t.initials}
                </div>
                <div>
                  <p className="font-display text-xs font-bold text-[#0F172A]">{t.name}</p>
                  <p className="text-[10px] text-slate-500 font-semibold leading-tight mt-0.5">
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
