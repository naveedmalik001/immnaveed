"use client";

import { Star, ArrowUpRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vikram R. Sharma", role: "Founder & CEO", company: "Aura Fintech Inc.",
    stat: "Revenue 2.4×", statColor: "#10B981", statBg: "#D1FAE5",
    quote: "IMMNAVEED redesigned our complete brand from the ground up. Their understanding of consumer behaviour and positioning is world-class. An immediate asset for our team.",
    initials: "VS", avatarBg: "bg-blue-600",
  },
  {
    name: "Anjali Mehta", role: "Marketing Director", company: "SaaS Scale Metrics",
    stat: "ROAS 4.8×", statColor: "#FF5A1F", statBg: "#FFF0EB",
    quote: "We were burning thousands on generic templates that didn't convert. Naveed's performance funnels completely turned our budget around. The numbers speak for themselves.",
    initials: "AM", avatarBg: "bg-purple-600",
  },
  {
    name: "Arjun K. Singhania", role: "Co-Founder", company: "Vantage Real Estate",
    stat: "+342% Reach", statColor: "#3B82F6", statBg: "#EFF6FF",
    quote: "Naveed is not just a marketer — he is a tech-focused growth strategist. His team built a high-speed property portal and paired it with converting reel strategy. Exceptional.",
    initials: "AS", avatarBg: "bg-emerald-600",
  },
];

const clients = ["Aura FinTech","ScaleSaaS","PrimeReal","Venture Labs","OmniWellness","Zeta Logistics","NexGen Corp","Alpha Digital"];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-brand-gray">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-black tracking-widest text-brand-orange uppercase">Partner Endorsements</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl font-black text-brand-black leading-tight">
            Trusted by Forward-<br />
            <span className="text-gradient">Thinking Leaders.</span>
          </h2>
          {/* Rating summary */}
          <div className="flex items-center gap-4 bg-white border border-neutral-100 rounded-2xl p-4 shadow-sm self-start sm:self-auto">
            <div className="text-center">
              <p className="text-3xl font-black text-brand-black">4.9</p>
              <div className="flex gap-0.5 mt-0.5 justify-center">
                {[...Array(5)].map((_,i) => (
                  <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                ))}
              </div>
              <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-1">Rating</p>
            </div>
            <div className="w-px h-10 bg-neutral-200" />
            <div className="text-center">
              <p className="text-3xl font-black text-brand-black">50+</p>
              <p className="text-[9px] text-neutral-400 font-bold uppercase tracking-wider mt-1">Reviews</p>
            </div>
          </div>
        </div>

        {/* Cards — stacked mobile, 3-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-white border border-neutral-100 rounded-2xl p-6 card-hover group flex flex-col"
            >
              {/* Stat */}
              <div className="flex items-center justify-between mb-5">
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-black"
                  style={{ background: t.statBg, color: t.statColor }}
                >
                  <ArrowUpRight className="w-3 h-3" /> {t.stat}
                </div>
                <Quote className="w-7 h-7 text-neutral-100 group-hover:text-orange-100 transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_,i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-neutral-600 leading-relaxed flex-1 mb-5 italic">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-neutral-100">
                <div className={`w-10 h-10 rounded-xl ${t.avatarBg} text-white flex items-center justify-center text-xs font-black flex-shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-black text-brand-black">{t.name}</p>
                  <p className="text-[10px] text-neutral-400 font-semibold mt-0.5">
                    {t.role}, <span className="text-brand-orange font-bold">{t.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client marquee */}
        <div className="border-t border-neutral-200 pt-8">
          <p className="text-center text-[10px] font-black text-neutral-300 uppercase tracking-widest mb-5">
            Trusted by brands across India
          </p>
          <div className="overflow-hidden">
            <div className="flex marquee">
              {[...clients, ...clients].map((c, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 px-6 py-2 text-sm font-black text-neutral-300 hover:text-brand-orange transition-colors border-r border-neutral-200 last:border-r-0"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
