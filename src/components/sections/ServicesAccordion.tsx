"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services-data";
import SectionHeader from "@/components/shared/SectionHeader";
import { ChevronDown, ArrowUpRight, CheckCircle2, ShieldCheck, TrendingUp, Target, Code2, Server, Search, Share2, FileText, Video, Palette, Layout, Zap, Cpu } from "lucide-react";
import { useSound } from "@/hooks/useSound";

const iconMap: Record<string, any> = {
  ShieldCheck,
  TrendingUp,
  Target,
  Code2,
  Server,
  Search,
  Share2,
  FileText,
  Video,
  Palette,
  Layout,
  Zap,
  Cpu
};

export default function ServicesAccordion() {
  const [activeId, setActiveId] = useState<string>(servicesData[0].id);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const { playClick, playHover } = useSound();

  const categories = ["All", "Strategy", "Performance", "Engineering", "Consulting", "Design"];

  const filteredServices = selectedCategory === "All" 
    ? servicesData 
    : servicesData.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="section-pad-luxury bg-zinc-950 font-sans border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header with Right-Aligned Link */}
        <SectionHeader
          badgeText="Capabilities & Services"
          title="Full-Stack Growth &"
          gradientTitle="Software Engineering."
          subtitle="Every service is engineered to establish market authority, lower acquisition costs, and produce predictable revenue."
          actionLink={{ label: "Explore All Capabilities", href: "/services" }}
        />

        {/* Category Filter Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setSelectedCategory(cat);
              }}
              onMouseEnter={playHover}
              className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Expandable Luxury Accordion List */}
        <div className="space-y-4">
          {filteredServices.map((service, index) => {
            const isOpen = activeId === service.id;
            const IconComponent = iconMap[service.iconName] || ShieldCheck;

            return (
              <div
                key={service.id}
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-zinc-900/90 border-amber-500/50 shadow-2xl shadow-black"
                    : "bg-zinc-900/40 border-zinc-800/80 hover:border-zinc-700"
                }`}
              >
                {/* Header Row */}
                <button
                  onClick={() => {
                    playClick();
                    setActiveId(isOpen ? "" : service.id);
                  }}
                  onMouseEnter={playHover}
                  className="w-full px-6 py-6 flex items-center justify-between text-left cursor-pointer"
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    {/* Styled Dual-Layer Icon Container */}
                    <div className="w-11 h-11 rounded-xl icon-box-gold flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5 font-medium hidden sm:block">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700 hidden md:block">
                      {service.category}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full border border-zinc-700 flex items-center justify-center transition-transform duration-300 ${
                        isOpen ? "rotate-180 bg-amber-500 text-black border-amber-500" : "text-zinc-400"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Body */}
                {isOpen && (
                  <div className="px-6 pb-8 pt-2 border-t border-zinc-800/60 grid grid-cols-1 md:grid-cols-12 gap-6 animate-fadeIn">
                    <div className="md:col-span-7 space-y-5">
                      <p className="text-sm text-zinc-300 leading-relaxed font-medium">
                        {service.fullDescription}
                      </p>

                      <div>
                        <p className="text-[10px] font-black text-amber-400 uppercase tracking-widest mb-2">
                          Key Deliverables:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.deliverables.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 bg-zinc-950 p-2.5 rounded-lg border border-zinc-800/80">
                              <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                              <span className="text-xs text-zinc-300 font-semibold">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right-aligned service specs link */}
                      <div className="pt-2 flex justify-start">
                        <Link
                          href={`/services/${service.slug}`}
                          onClick={playClick}
                          className="inline-flex items-center gap-2 text-xs font-black text-amber-400 hover:text-amber-300 uppercase tracking-widest"
                        >
                          <span>Explore Service Specs</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    <div className="md:col-span-5 bg-zinc-950 p-5 rounded-xl border border-zinc-800/80 space-y-4">
                      <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">
                          Verified Expected Impact:
                        </p>
                        <ul className="space-y-2">
                          {service.impactMetrics.map((m, idx) => (
                            <li key={idx} className="text-xs font-bold text-white flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                              {m}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2">
                          Target Clients:
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {service.idealFor.map((target) => (
                            <span
                              key={target}
                              className="text-[9px] font-bold text-zinc-300 bg-zinc-900 border border-zinc-800 px-2.5 py-1 rounded-md"
                            >
                              {target}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <Link
                          href="/contact"
                          onClick={playClick}
                          className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs uppercase tracking-widest py-3 rounded-lg transition-all"
                        >
                          Book Strategy Call <ArrowUpRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
