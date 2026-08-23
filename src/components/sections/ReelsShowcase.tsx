"use client";

import React, { useState } from "react";
import { ExternalLink, Film, Camera, Sparkles, Filter } from "lucide-react";
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

const categories = ["All", "Reels", "Brand Commercial", "Corporate Video", "Talking Head"];

export default function ReelsShowcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { playClick, playHover } = useSound();

  const filteredReels = activeCategory === "All"
    ? reelsData
    : reelsData.filter((r) => r.category === activeCategory);

  return (
    <section id="reels-portfolio" className="section-pad bg-[#F8FAFC] font-sans border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <SectionHeader
          badgeText="Verified Video Production & Reels Portfolio"
          title="Viral Reels, Brand Shoots &"
          gradientTitle="Cinematic Video Portfolio."
          subtitle="Watch our real video work directly below: viral Instagram reels, corporate promo shoots, talking head founder interviews, and commercial brand productions."
          actionLink={{ label: "Book a Shoot / Video Project", href: "/contact" }}
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
                  : "bg-white text-slate-600 border border-slate-200 hover:border-[#14B8C4] hover:text-[#041E42]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reels Live Grid — 4 Columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredReels.map((reel) => (
            <div
              key={reel.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Header */}
              <div className="p-4 pb-2 flex items-center justify-between border-b border-slate-100">
                <span className="badge-teal text-[9px] py-0.5 px-2">
                  {reel.category}
                </span>
                <a
                  href={reel.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-[#0E8A94] transition-colors p-1"
                  title="Open on Instagram"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Direct Instagram Embed Container */}
              <div className="relative w-full bg-slate-900 overflow-hidden min-h-[460px] flex items-center justify-center">
                <iframe
                  src={`https://www.instagram.com/reel/${reel.reelCode}/embed`}
                  className="w-full h-[470px] border-0"
                  allowTransparency
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Card Footer Info */}
              <div className="p-4 bg-white flex flex-col justify-between flex-1 border-t border-slate-100">
                <div>
                  <h3 className="font-display text-sm font-bold text-[#0F172A] leading-snug mb-1">
                    {reel.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal mb-3">
                    {reel.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {reel.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[9px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={reel.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold text-[#0E8A94] hover:text-[#041E42] flex items-center gap-1 uppercase tracking-wider transition-colors"
                  >
                    <InstagramIcon className="w-3 h-3 text-rose-500" />
                    <span>View Post</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shoot & Video Production Call to Action Box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-[#041E42] to-[#082852] text-white border border-slate-700/80 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="badge-teal text-[10px] py-1 px-3 mb-2 inline-block">
              In-House Production Crew
            </span>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              Need 4K Video Shoots, Viral Reels, or Wedding Films?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              We provide on-location cinema cameras, aerial drones, studio lighting, sound recording, and expert post-production editing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="btn-orange text-xs py-3 px-6 rounded-xl font-bold text-center"
            >
              <Camera className="w-4 h-4 mr-1.5 inline-block" />
              <span>Book Shoot / Video Project</span>
            </Link>
            <a
              href="https://wa.me/919018636473?text=Hello%20Er.%20Naveed%20Malik,%20I%20would%20like%20to%20discuss%20a%20video%20shoot%20or%20reel%20editing%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-xs py-3 px-6 rounded-xl font-bold text-center"
            >
              <span>WhatsApp In-House Crew</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
