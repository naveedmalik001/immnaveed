"use client";

import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ExternalLink, Play, ArrowUpRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import { reelsData } from "@/data/reels-data";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function InstagramFeed() {
  const { playClick, playHover } = useSound();

  return (
    <section className="section-pad bg-[#F8FAFC] font-sans border-b border-slate-200 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <SectionHeader
          badgeText="Social Authority & Video Production"
          title="Direct Video Work on"
          gradientTitle="Instagram (@immnaveed)."
          subtitle="Watch our live reel edits, talking head series, and brand commercials directly on Instagram."
          actionLink={{ label: "Follow @immnaveed", href: "https://www.instagram.com/immnaveed" }}
          theme="light"
        />

        {/* Live Instagram Profile Box */}
        <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#041E42] text-[#14B8C4] flex items-center justify-center flex-shrink-0 shadow-md">
              <InstagramIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display text-lg font-bold text-[#0F172A]">@immnaveed</h3>
                <span className="badge-teal text-[9px] py-0.5 px-2.5">
                  Official Creator Profile
                </span>
              </div>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Brand Strategist · Media Production · Next.js Software Architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/immnaveed"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="btn-teal"
            >
              <span>Visit Instagram Feed</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Real Reels Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reelsData.slice(0, 4).map((reel) => (
            <a
              key={reel.id}
              href={reel.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="card-white p-5 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="badge-teal text-[9px] py-0.5 px-2">
                    {reel.category}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#14B8C4] group-hover:text-white group-hover:border-[#14B8C4] transition-colors">
                    <InstagramIcon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <h4 className="font-display text-sm font-bold text-[#0F172A] group-hover:text-[#0E8A94] transition-colors leading-snug mb-2">
                  {reel.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal mb-4 line-clamp-2">
                  {reel.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#0E8A94] group-hover:text-[#041E42] font-bold uppercase tracking-wider">
                <span>Watch on Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
