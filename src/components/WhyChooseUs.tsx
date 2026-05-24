"use client";

import { TrendingUp, Users, Heart, Zap, Shield, Target, PiggyBank, LifeBuoy } from "lucide-react";

const items = [
  { icon: TrendingUp,  num: "01", title: "Result-Driven Focus",      desc: "We prioritise actual bottom-line growth over vanity likes and impressions.",                      color: "bg-emerald-100 text-emerald-600" },
  { icon: Users,       num: "02", title: "Human-Centred Strategy",   desc: "Built around real buying psychology and emotional triggers — not assumptions.",                    color: "bg-blue-100 text-blue-600"       },
  { icon: Heart,       num: "03", title: "Creative & Cohesive",      desc: "Timeless visual designs and logos that build immediate market trust.",                             color: "bg-rose-100 text-rose-600"       },
  { icon: PiggyBank,   num: "04", title: "Fair Pricing",             desc: "Enterprise-level value at fair, growth-accessible price points.",                                  color: "bg-amber-100 text-amber-600"     },
  { icon: Shield,      num: "05", title: "Real Performance Mktg",    desc: "Data-backed optimisation using strict multi-touch attribution — not guesses.",                     color: "bg-purple-100 text-purple-600"   },
  { icon: Target,      num: "06", title: "Conversion-Focused",       desc: "Every landing page and campaign is engineered to turn visitors into customers.",                   color: "bg-orange-100 text-brand-orange" },
  { icon: LifeBuoy,    num: "07", title: "Dedicated Support",        desc: "Direct access to lead consultants — not junior account managers.",                                 color: "bg-teal-100 text-teal-600"       },
  { icon: Zap,         num: "08", title: "Speed & Agility",          desc: "Rapid execution cycles and fast turnarounds at every stage of growth.",                           color: "bg-yellow-100 text-yellow-600"   },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-brand-orange" />
          <span className="text-xs font-black tracking-widest text-brand-orange uppercase">
            The Competitive Edge
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-black leading-tight mb-3">
          Why Successful Brands<br />
          <span className="text-gradient">Choose IMMNAVEED.</span>
        </h2>
        <p className="text-xs sm:text-sm text-neutral-500 max-w-xl mb-8 sm:mb-10 leading-relaxed">
          We merge operational strategy, high-converting performance marketing, and elegant product development. Here&apos;s what sets us apart.
        </p>

        {/* Grid — single column mobile, 2 cols sm, 4 cols lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative bg-brand-gray border border-neutral-100 rounded-2xl p-4 sm:p-5 overflow-hidden card-hover group cursor-default"
              >
                {/* Number watermark */}
                <span className="absolute bottom-2 right-3 sm:bottom-3 sm:right-4 text-5xl sm:text-6xl font-black text-neutral-200/60 leading-none select-none pointer-events-none group-hover:text-orange-100/60 transition-colors">
                  {item.num}
                </span>

                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl ${item.color} flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="text-sm font-black text-brand-black mb-1 sm:mb-1.5 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] sm:text-xs text-neutral-500 leading-relaxed relative z-10">
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
