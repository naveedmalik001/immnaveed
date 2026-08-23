"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  X,
  Sparkles,
  ArrowRight,
  Code2,
  Server,
  TrendingUp,
  Target,
  Palette,
  Video,
  Film,
  BarChart3,
  Camera,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { useSound } from "@/hooks/useSound";

interface PillarData {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeColor: string;
  accentGlow: string;
  borderColor: string;
  headerIcon: React.ElementType;
  items: {
    title: string;
    tag: string;
    desc: string;
    slug: string;
    icon: React.ElementType;
  }[];
}

const pillars: PillarData[] = [
  {
    id: "tech-systems",
    title: "Tech & Systems",
    subtitle: "Enterprise Software & Sub-1s Web",
    badge: "Engineering",
    badgeColor: "text-[#14B8C4] bg-[#14B8C4]/15 border-[#14B8C4]/30",
    accentGlow: "from-[#14B8C4]/20 via-transparent to-transparent",
    borderColor: "hover:border-[#14B8C4]/70",
    headerIcon: Cpu,
    items: [
      {
        title: "Website Design & Next.js Development",
        tag: "Sub-1s LCP",
        desc: "Modern Figma UI/UX prototyping and high-speed web apps.",
        slug: "website-design-development",
        icon: Code2,
      },
      {
        title: "Custom Software & ERP Systems",
        tag: "Schools/Clinics",
        desc: "Dedicated ERPs for education, hospitals, and business.",
        slug: "custom-software-erp-development",
        icon: Server,
      },
      {
        title: "Data Analytics & BI Dashboards",
        tag: "Attribution",
        desc: "Real-time Looker & PowerBI dashboards and CAC metrics.",
        slug: "data-analysis-business-intelligence",
        icon: BarChart3,
      },
    ],
  },
  {
    id: "creative-production",
    title: "Creative & Production",
    subtitle: "In-House 4K Cinema & Viral Media",
    badge: "In-House Crew",
    badgeColor: "text-purple-400 bg-purple-500/15 border-purple-500/30",
    accentGlow: "from-purple-500/20 via-transparent to-transparent",
    borderColor: "hover:border-purple-400/70",
    headerIcon: Video,
    items: [
      {
        title: "4K Video Shoots & Viral Reels",
        tag: "Cinema Gear",
        desc: "On-location cinema filming, drone shots & viral reels.",
        slug: "video-shoots-reel-production",
        icon: Video,
      },
      {
        title: "Video Editing & Post-Production",
        tag: "High-Retention",
        desc: "Kinetic typography, sound design & color grading.",
        slug: "video-editing-post-production",
        icon: Film,
      },
      {
        title: "Luxury Wedding & Event Coverage",
        tag: "Cinematic Film",
        desc: "Pre-wedding shoots, drone coverage & luxury films.",
        slug: "wedding-shoots-event-production",
        icon: Camera,
      },
    ],
  },
  {
    id: "growth-marketing",
    title: "Performance & Growth",
    subtitle: "High-ROAS Funnels & Brand Positioning",
    badge: "4.8× Avg ROAS",
    badgeColor: "text-[#F7931E] bg-[#F7931E]/15 border-[#F7931E]/30",
    accentGlow: "from-[#F7931E]/20 via-transparent to-transparent",
    borderColor: "hover:border-[#F7931E]/70",
    headerIcon: TrendingUp,
    items: [
      {
        title: "Social Media Marketing (Meta/Google)",
        tag: "Paid Scaling",
        desc: "Full-funnel Meta & Google Search ad architecture.",
        slug: "social-media-marketing",
        icon: Target,
      },
      {
        title: "Business Growth & Strategy Advisory",
        tag: "1-on-1 Advisory",
        desc: "Executive growth audit, unit economics & scaling roadmaps.",
        slug: "business-growth-consulting",
        icon: TrendingUp,
      },
      {
        title: "Graphic Designing & Brand Identity",
        tag: "Visual Brand",
        desc: "Custom logo marks, promotional collateral & design kits.",
        slug: "graphic-design-content-creation",
        icon: Palette,
      },
    ],
  },
];

export default function ServicesWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [activePillar, setActivePillar] = useState<string>("tech-systems");
  const { playClick, playHover } = useSound();

  useEffect(() => {
    // Check if user has seen this splash in current session
    const hasSeen = sessionStorage.getItem("immnaveed_entrance_seen_v2");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    playClick();
    setIsOpen(false);
    sessionStorage.setItem("immnaveed_entrance_seen_v2", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 font-sans select-none overflow-y-auto">
      
      {/* Deep Dark Tech Backdrop with Radial Blur */}
      <div
        className="fixed inset-0 bg-[#070B14]/90 backdrop-blur-2xl transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Main Luxury Splash Overlay Container */}
      <div className="relative z-10 w-full max-w-5xl bg-[#0B0F19]/98 text-white rounded-[32px] sm:rounded-[36px] shadow-[0_0_80px_-15px_rgba(20,184,196,0.25)] border border-slate-800/90 overflow-hidden flex flex-col my-auto transition-all duration-300 animate-fadeIn">
        
        {/* Ambient Top Glow Orbs */}
        <div className="absolute w-[450px] h-[250px] -top-24 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#14B8C4]/25 via-[#00D4E0]/20 to-[#F7931E]/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Architectural Blueprint Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        {/* Top Multi-Gradient Border Highlight Strip */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#14B8C4] via-[#00D4E0] via-purple-500 to-[#F7931E] relative z-10" />

        <div className="p-6 sm:p-9 relative z-10 flex flex-col gap-6">
          
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800/80">
            <div className="space-y-1.5">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8C4]/10 border border-[#14B8C4]/30 text-[#14B8C4] text-[11px] font-extrabold uppercase tracking-widest shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                <span>Full-Spectrum Capabilities</span>
              </div>

              {/* Title */}
              <div className="flex items-center gap-3 pt-1">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Welcome to IMM<span className="text-[#14B8C4]">NAVEED</span>
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-normal max-w-2xl leading-relaxed">
                Explore our unified engine across web &amp; ERP software engineering, in-house 4K cinema production, and high-ROAS performance growth before entering:
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              onMouseEnter={playHover}
              className="p-2.5 rounded-2xl bg-[#101726] border border-slate-700 text-slate-300 hover:text-white hover:border-[#14B8C4] hover:bg-[#14B8C4]/10 transition-all cursor-pointer flex-shrink-0"
              aria-label="Close Splash Screen"
              title="Close & Enter Site"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central 3-Column Interactive Pillar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => {
              const HeaderIcon = pillar.headerIcon;
              const isSelected = activePillar === pillar.id;

              return (
                <div
                  key={pillar.id}
                  onMouseEnter={() => {
                    playHover();
                    setActivePillar(pillar.id);
                  }}
                  className={`relative rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between border backdrop-blur-xl ${
                    isSelected
                      ? "bg-gradient-to-b from-[#101726] to-[#0A0E17] border-slate-700 shadow-xl shadow-black/60 ring-1 ring-white/10"
                      : "bg-[#0E1422]/70 border-slate-800/80 hover:border-slate-700"
                  } ${pillar.borderColor}`}
                >
                  {/* Subtle Top Radial Gradient */}
                  <div
                    className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-b ${pillar.accentGlow} rounded-t-3xl pointer-events-none opacity-80`}
                  />

                  <div className="relative z-10">
                    {/* Pillar Top Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-2xl bg-[#070B14] border border-slate-700/80 flex items-center justify-center text-white shadow-inner">
                        <HeaderIcon className="w-5 h-5 text-[#14B8C4]" />
                      </div>
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${pillar.badgeColor}`}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-slate-400 mb-5 font-medium leading-relaxed">
                      {pillar.subtitle}
                    </p>

                    {/* Itemized Capabilities List */}
                    <div className="space-y-2.5">
                      {pillar.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={item.slug}
                            href={`/services/${item.slug}`}
                            onClick={handleClose}
                            onMouseEnter={playHover}
                            className="group/item p-3 rounded-2xl bg-[#070B14]/90 border border-slate-800/90 hover:border-[#14B8C4]/60 hover:bg-[#101726] transition-all flex items-start gap-3 cursor-pointer block"
                          >
                            <div className="w-8 h-8 rounded-xl bg-[#0E1422] border border-slate-700/70 text-[#14B8C4] flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 group-hover/item:bg-[#14B8C4] group-hover/item:text-[#070B14] transition-all duration-200">
                              <ItemIcon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1.5 mb-0.5">
                                <span className="font-display text-xs font-bold text-slate-100 group-hover/item:text-[#14B8C4] transition-colors leading-tight">
                                  {item.title}
                                </span>
                                <span className="text-[9px] font-bold uppercase text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded flex-shrink-0">
                                  {item.tag}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-400 leading-snug line-clamp-1">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pillar Bottom Indicator */}
                  <div className="pt-4 mt-4 border-t border-slate-800/70 flex items-center justify-between text-[11px] font-bold text-slate-400 relative z-10">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4]" />
                      3 Core Capabilities
                    </span>
                    <span className="text-[#14B8C4] group-hover:text-white uppercase tracking-wider flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar: Trust Badges & Action Buttons */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Trust Signal */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Direct In-House Execution &bull; Zero Middlemen &bull; 100% Confidential</span>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleClose}
                onMouseEnter={playHover}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-[#101726] border border-slate-700/80 text-white hover:border-[#14B8C4] hover:bg-[#14B8C4]/10 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Enter Website</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                href="/contact"
                onClick={handleClose}
                onMouseEnter={playHover}
                className="btn-orange w-full sm:w-auto text-xs py-3 px-6 rounded-2xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25"
              >
                <span>Book Strategy Call</span>
                <Sparkles className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
