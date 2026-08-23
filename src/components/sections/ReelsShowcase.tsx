"use client";

import React, { useState } from "react";
import { Play, ExternalLink, X, Film, Sparkles, Eye, Camera, ArrowUpRight } from "lucide-react";
import { reelsData, ReelItem } from "@/data/reels-data";
import SectionHeader from "@/components/shared/SectionHeader";
import { useSound } from "@/hooks/useSound";
import Link from "next/link";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const categories = ["All", "Reels", "Corporate Video", "Wedding & Events", "Social Media Ad"];

export default function ReelsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const { playClick, playHover } = useSound();

  const filteredReels = activeCategory === "All"
    ? reelsData
    : reelsData.filter((r) => r.category === activeCategory);

  return (
    <section id="reels-portfolio" className="section-pad bg-white font-sans border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="In-House Media Production & Editing"
          title="Viral Reels, Corporate Shoots &"
          gradientTitle="Cinematic Video Portfolio."
          subtitle="Explore our in-house video production work: high-retention Instagram reels, corporate brand films, performance ad creatives, and luxury wedding cinematography."
          actionLink={{ label: "Book a Shoot / Edit Project", href: "/contact" }}
          theme="light"
        />

        {/* Category Filter Pills */}
        <div className="flex gap-2.5 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={playHover}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#041E42] text-white shadow-md font-extrabold"
                  : "bg-[#F8FAFC] text-slate-600 border border-slate-200 hover:border-[#14B8C4] hover:text-[#041E42]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reels Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => {
                playClick();
                setSelectedReel(reel);
              }}
              onMouseEnter={playHover}
              className="card-white overflow-hidden group cursor-pointer flex flex-col justify-between border border-slate-200 hover:border-[#14B8C4] shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={reel.thumbnail}
                  alt={reel.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031730]/90 via-[#031730]/30 to-transparent" />

                {/* Top Badge Row */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                  <span className="badge-teal text-[10px] py-1 px-3 bg-[#031730]/80 backdrop-blur-md">
                    {reel.category}
                  </span>
                  {reel.views && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15">
                      <Eye className="w-3 h-3 text-[#14B8C4]" />
                      {reel.views}
                    </span>
                  )}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-12 h-12 rounded-full bg-[#14B8C4] text-[#031730] flex items-center justify-center shadow-lg shadow-[#14B8C4]/40 group-hover:scale-115 group-hover:bg-[#F7931E] group-hover:text-white transition-all duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Tags */}
                <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5 z-10">
                  {reel.tags.map((tag) => (
                    <span key={tag} className="text-[9px] font-bold uppercase tracking-wider text-slate-200 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                <div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#0F172A] group-hover:text-[#0E8A94] transition-colors leading-snug mb-2">
                    {reel.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4 font-normal">
                    {reel.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                    <InstagramIcon className="w-3.5 h-3.5 text-rose-500" /> Instagram Ready
                  </span>
                  <span className="text-[#0E8A94] group-hover:text-[#041E42] flex items-center gap-1 uppercase tracking-wider text-[11px] transition-colors">
                    <span>Preview &amp; Play</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Interactive Reel Playback Modal */}
      {selectedReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-[#031730]/85 backdrop-blur-md transition-opacity"
            onClick={() => {
              playClick();
              setSelectedReel(null);
            }}
          />

          <div className="relative z-10 bg-[#041E42] text-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border border-slate-700/80 animate-fadeIn">
            {/* Top Teal Strip */}
            <div className="h-1.5 bg-gradient-to-r from-[#14B8C4] to-[#00D4E0]" />

            <div className="p-6 sm:p-8 max-h-[85vh] overflow-y-auto space-y-6">
              
              {/* Header Row */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold text-[#14B8C4] uppercase tracking-widest block mb-1">
                    {selectedReel.category} · Media Portfolio
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white leading-tight">
                    {selectedReel.title}
                  </h3>
                </div>
                <button
                  onClick={() => {
                    playClick();
                    setSelectedReel(null);
                  }}
                  className="p-2 rounded-xl bg-[#031730] text-slate-300 hover:text-white flex-shrink-0 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Player / Instagram Embed Placeholder Container */}
              <div className="relative aspect-[16/9] bg-black rounded-2xl overflow-hidden border border-slate-700 flex items-center justify-center shadow-inner">
                <img
                  src={selectedReel.thumbnail}
                  alt={selectedReel.title}
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-black/40">
                  <div className="w-16 h-16 rounded-full bg-[#14B8C4] text-[#031730] flex items-center justify-center mb-3 shadow-xl">
                    <Film className="w-8 h-8" />
                  </div>
                  <p className="font-display text-base font-bold text-white mb-1">
                    In-House 4K Production &amp; Color Graded Edit
                  </p>
                  <p className="text-xs text-slate-300 max-w-sm mb-4">
                    Captured on cinema gear &amp; edited with custom sound design.
                  </p>
                  <a
                    href={selectedReel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-orange text-xs py-2.5 px-5 rounded-xl inline-flex items-center gap-2"
                  >
                    <InstagramIcon className="w-4 h-4" />
                    <span>Watch Reel on Instagram</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Description & Tags */}
              <div className="p-4 rounded-2xl bg-[#031730] border border-slate-700/80 space-y-3">
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                  {selectedReel.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
                  {selectedReel.tags.map((t) => (
                    <span key={t} className="badge-teal text-[9px] py-0.5 px-2.5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={selectedReel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-white text-center text-xs font-bold cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4 text-[#041E42] inline-block mr-1.5" />
                  <span>Open in Instagram App</span>
                </a>

                <Link
                  href="/contact"
                  onClick={() => {
                    playClick();
                    setSelectedReel(null);
                  }}
                  className="btn-orange text-center text-xs font-bold"
                >
                  <Camera className="w-4 h-4" />
                  <span>Book Shoot / Video Project</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
