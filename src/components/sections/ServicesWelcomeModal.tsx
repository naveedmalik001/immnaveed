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
  Layers,
  CheckCircle2,
} from "lucide-react";
import { useSound } from "@/hooks/useSound";

interface PillarData {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  badgeStyle: string;
  iconStyle: string;
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
    title: "Web & ERP Systems",
    subtitle: "Enterprise Software & Sub-1s Web Apps",
    badge: "Web Engineering",
    badgeStyle: "text-[#0E8A94] bg-[#14B8C4]/12 border-[#14B8C4]/25",
    iconStyle: "bg-[#14B8C4]/10 text-[#0E8A94] border-[#14B8C4]/20",
    headerIcon: Cpu,
    items: [
      {
        title: "Website Design & Next.js 15 Apps",
        tag: "Sub-1s LCP",
        desc: "Modern Figma UI/UX prototyping and high-speed web apps.",
        slug: "website-design-development",
        icon: Code2,
      },
      {
        title: "Custom Software & ERP Systems",
        tag: "Schools/Clinics",
        desc: "Dedicated ERPs for education institutes, hospitals, and business.",
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
    title: "In-House Video & Media",
    subtitle: "4K Cinema Filming & Viral Reel Editing",
    badge: "In-House Crew",
    badgeStyle: "text-purple-700 bg-purple-50 border-purple-200",
    iconStyle: "bg-purple-50 text-purple-700 border-purple-200",
    headerIcon: Video,
    items: [
      {
        title: "4K Video Shoots & Viral Reels",
        tag: "Cinema Gear",
        desc: "On-location multi-camera cinema filming & aerial drones.",
        slug: "video-shoots-reel-production",
        icon: Video,
      },
      {
        title: "Video Editing & Post-Production",
        tag: "High Retention",
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
    subtitle: "High-ROAS Ad Campaigns & Strategy",
    badge: "4.8× Avg ROAS",
    badgeStyle: "text-amber-700 bg-amber-50 border-amber-200",
    iconStyle: "bg-amber-50 text-amber-700 border-amber-200",
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
  const { playClick, playHover } = useSound();

  useEffect(() => {
    // Check if user has seen this splash in current session
    const hasSeen = sessionStorage.getItem("immnaveed_clean_entrance_seen_v3");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    playClick();
    setIsOpen(false);
    sessionStorage.setItem("immnaveed_clean_entrance_seen_v3", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 font-sans select-none overflow-y-auto">
      
      {/* Dark Corporate Navy Blurred Backdrop */}
      <div
        className="fixed inset-0 bg-[#031730]/80 backdrop-blur-md transition-opacity duration-300"
        onClick={handleClose}
      />

      {/* Main Clean White & Navy Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-white text-[#0F172A] rounded-[32px] sm:rounded-[36px] shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto transition-all duration-300 animate-fadeIn">
        
        {/* Top Cambridge Corporate Navy & Teal Accent Strip */}
        <div className="h-2 w-full bg-gradient-to-r from-[#041E42] via-[#14B8C4] to-[#F7931E] relative z-10" />

        {/* Blueprint Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none" />

        <div className="p-6 sm:p-9 relative z-10 flex flex-col gap-6">
          
          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-200">
            <div className="space-y-1.5">
              
              {/* Eyebrow Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8C4]/12 border border-[#14B8C4]/25 text-[#0E8A94] text-[11px] font-extrabold uppercase tracking-widest shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                <span>Full-Spectrum Capabilities</span>
              </div>

              {/* Title */}
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A] leading-tight">
                Welcome to IMM<span className="text-[#0E8A94]">NAVEED</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 font-normal max-w-2xl leading-relaxed">
                Explore our unified capabilities across high-speed Next.js web apps, custom ERP software, in-house 4K cinema production, and high-ROAS marketing before entering:
              </p>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              onMouseEnter={playHover}
              className="p-2.5 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-slate-500 hover:text-[#0F172A] hover:border-[#14B8C4] hover:bg-[#14B8C4]/10 transition-all cursor-pointer flex-shrink-0"
              aria-label="Close Splash Screen"
              title="Close & Enter Website"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central 3-Column Interactive Pillar Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {pillars.map((pillar) => {
              const HeaderIcon = pillar.headerIcon;

              return (
                <div
                  key={pillar.id}
                  className="relative rounded-3xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between border bg-[#F8FAFC] border-slate-200 hover:border-[#14B8C4] hover:shadow-lg"
                >
                  <div className="relative z-10">
                    {/* Pillar Top Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-11 h-11 rounded-2xl ${pillar.iconStyle} border flex items-center justify-center shadow-xs`}>
                        <HeaderIcon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border ${pillar.badgeStyle}`}
                      >
                        {pillar.badge}
                      </span>
                    </div>

                    {/* Pillar Title */}
                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#0F172A] mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mb-5 font-medium leading-relaxed">
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
                            className="group/item p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#14B8C4] hover:shadow-md transition-all flex items-start gap-3 cursor-pointer block"
                          >
                            <div className="w-8 h-8 rounded-xl bg-[#F8FAFC] border border-slate-200 text-[#0E8A94] flex items-center justify-center flex-shrink-0 group-hover/item:scale-105 group-hover/item:bg-[#14B8C4] group-hover/item:text-white transition-all duration-200">
                              <ItemIcon className="w-4 h-4" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-1.5 mb-0.5">
                                <span className="font-display text-xs font-bold text-[#0F172A] group-hover/item:text-[#0E8A94] transition-colors leading-tight">
                                  {item.title}
                                </span>
                                <span className="text-[9px] font-bold uppercase text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded flex-shrink-0">
                                  {item.tag}
                                </span>
                              </div>
                              <p className="text-[10px] text-slate-500 leading-snug line-clamp-1 font-normal">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pillar Bottom Indicator */}
                  <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between text-[11px] font-bold text-slate-500 relative z-10">
                    <span className="flex items-center gap-1.5 text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4]" />
                      3 Core Capabilities
                    </span>
                    <span className="text-[#0E8A94] group-hover:text-[#041E42] uppercase tracking-wider flex items-center gap-1">
                      <span>Explore</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar: Trust Badges & Action Buttons */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Trust Signal */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Direct In-House Execution &bull; Zero Middlemen &bull; 100% Confidential</span>
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleClose}
                onMouseEnter={playHover}
                className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-white border border-slate-300 text-[#0F172A] hover:border-[#14B8C4] hover:bg-[#F8FAFC] transition-all text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Enter Website</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <Link
                href="/contact"
                onClick={handleClose}
                onMouseEnter={playHover}
                className="btn-orange w-full sm:w-auto text-xs py-3 px-6 rounded-2xl font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
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
