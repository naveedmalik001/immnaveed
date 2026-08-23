"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { X, Sparkles, ArrowRight, CheckCircle2, Code2, Server, TrendingUp, Target, Palette, Video, Film, BarChart3, Camera } from "lucide-react";
import { useSound } from "@/hooks/useSound";

const serviceHighlights = [
  { icon: Code2, title: "Website Design & Next.js Development", tag: "Web 15", slug: "website-design-development" },
  { icon: Server, title: "Custom Software & ERP Systems", tag: "Schools/Clinics", slug: "custom-software-erp-development" },
  { icon: Target, title: "Social Media Marketing (Meta & Google Ads)", tag: "4.8× ROAS", slug: "social-media-marketing" },
  { icon: Video, title: "Video Shoots & Viral Reel Production", tag: "4K Cinema", slug: "video-shoots-reel-production" },
  { icon: Film, title: "Video Editing & Post-Production", tag: "High Retention", slug: "video-editing-post-production" },
  { icon: Palette, title: "Graphic Designing & Brand Identity", tag: "Creative", slug: "graphic-design-content-creation" },
  { icon: TrendingUp, title: "Business Growth & Scaling Strategy", tag: "Advisory", slug: "business-growth-consulting" },
  { icon: BarChart3, title: "Data Analysis & Business Intelligence", tag: "Dashboards", slug: "data-analysis-business-intelligence" },
  { icon: Camera, title: "Luxury Wedding & Event Production", tag: "In-House Crew", slug: "wedding-shoots-event-production" },
];

export default function ServicesWelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { playClick, playHover } = useSound();

  useEffect(() => {
    // Show pop-up on first visit after 1.5 seconds if not dismissed
    const hasSeen = sessionStorage.getItem("immnaveed_services_seen");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    playClick();
    setIsOpen(false);
    sessionStorage.setItem("immnaveed_services_seen", "true");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 font-sans select-none animate-fadeIn">
      
      {/* Dark Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-[#031730]/85 backdrop-blur-md transition-opacity"
        onClick={handleClose}
      />

      {/* Pop-up Display Card */}
      <div className="relative z-10 w-full max-w-2xl bg-[#041E42] text-white rounded-3xl shadow-2xl border border-slate-700/80 overflow-hidden animate-scaleIn">
        
        {/* Top Cyan Accent Strip */}
        <div className="h-1.5 bg-gradient-to-r from-[#14B8C4] via-[#00D4E0] to-[#F7931E]" />

        <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6">
          
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8C4]/15 border border-[#14B8C4]/30 text-[#14B8C4] text-[10px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3 h-3" />
                <span>Full-Spectrum Solutions</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                Welcome to IMM<span className="text-[#14B8C4]">NAVEED</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-normal mt-1">
                Explore our full spectrum of digital growth, software engineering &amp; in-house film production:
              </p>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-xl bg-[#031730] text-slate-400 hover:text-white transition-colors cursor-pointer flex-shrink-0"
              aria-label="Close Pop-up"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* 9 Services Grid Pop-up Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {serviceHighlights.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  onClick={handleClose}
                  onMouseEnter={playHover}
                  className="p-3.5 rounded-2xl bg-[#082852]/90 border border-slate-700/80 hover:border-[#14B8C4] transition-all group flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-lg bg-[#14B8C4]/15 text-[#14B8C4] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[9px] font-bold text-slate-400 bg-[#031730] px-2 py-0.5 rounded">
                      {svc.tag}
                    </span>
                  </div>

                  <p className="font-display text-xs font-bold text-white group-hover:text-[#14B8C4] transition-colors leading-snug line-clamp-2">
                    {svc.title}
                  </p>
                </Link>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="pt-3 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct In-House Execution · Zero Middlemen</span>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={handleClose}
                className="btn-white text-xs py-2.5 px-4 rounded-xl border border-slate-700 w-full sm:w-auto text-center cursor-pointer"
              >
                Continue to Website
              </button>
              <Link
                href="/contact"
                onClick={handleClose}
                className="btn-orange text-xs py-2.5 px-4 rounded-xl w-full sm:w-auto text-center font-bold"
              >
                <span>Book Strategy Call</span>
                <ArrowRight className="w-3.5 h-3.5 inline-block ml-1" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
