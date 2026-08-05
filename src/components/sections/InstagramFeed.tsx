"use client";

import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ExternalLink, Heart, MessageCircle, Sparkles, TrendingUp, ShieldCheck, ArrowUpRight, Share2 } from "lucide-react";
import { useSound } from "@/hooks/useSound";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const instagramPosts = [
  {
    id: "ig-1",
    tag: "Brand Strategy",
    title: "Why Generic Websites Fail High-Ticket Conversion",
    caption: "Stop using template designs. High-net-worth clients look for authority positioning, crisp typography, and sub-1s load times.",
    likes: "142",
    comments: "28",
    color: "#F59E0B",
    url: "https://www.instagram.com/immnaveed",
  },
  {
    id: "ig-2",
    tag: "Meta Ads ROAS",
    title: "How We Scaled Client Revenue to 4.8× ROAS",
    caption: "Creative A/B testing and direct intent targeting outperform mass broad spending every single time.",
    likes: "189",
    comments: "34",
    color: "#10B981",
    url: "https://www.instagram.com/immnaveed",
  },
  {
    id: "ig-3",
    tag: "Web Engineering",
    title: "Next.js 15 vs Traditional WordPress for Enterprises",
    caption: "Why sub-800ms Lighthouse scores directly increase Google SEO rankings and cut acquisition costs by 35%.",
    likes: "210",
    comments: "45",
    color: "#3B82F6",
    url: "https://www.instagram.com/immnaveed",
  },
  {
    id: "ig-4",
    tag: "EdTech Growth",
    title: "Cambridge Education Admissions Funnel Breakdown",
    caption: "Integrating WhatsApp API auto-responders reduced counselor lead follow-up time from 6 hours to 45 seconds.",
    likes: "176",
    comments: "31",
    color: "#FF5A1F",
    url: "https://www.instagram.com/immnaveed",
  },
  {
    id: "ig-5",
    tag: "Executive Mindset",
    title: "The 3 Moats Every Modern Founder Must Build",
    caption: "1. Brand Identity Authority, 2. Automated Inbound Engine, 3. Proprietary Software Systems.",
    likes: "254",
    comments: "52",
    color: "#8B5CF6",
    url: "https://www.instagram.com/immnaveed",
  },
  {
    id: "ig-6",
    tag: "Case Study",
    title: "GoStudy Abroad Consulting 0-to-1 Scale",
    caption: "Transforming overseas education lead generation through interactive course matchers and real-time scheduling.",
    likes: "198",
    comments: "39",
    color: "#EC4899",
    url: "https://www.instagram.com/immnaveed",
  },
];

export default function InstagramFeed() {
  const { playClick, playHover } = useSound();

  return (
    <section className="section-pad-luxury bg-zinc-950 font-sans border-b border-zinc-900 overflow-hidden relative select-none">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <SectionHeader
          badgeText="Social Authority & Insights"
          title="Direct Insights from"
          gradientTitle="Instagram (@immnaveed)."
          subtitle="Follow Er. Naveed Malik on Instagram for daily breakdowns on executive brand strategy, Meta ad architecture, and Next.js engineering."
          actionLink={{ label: "Follow @immnaveed", href: "https://www.instagram.com/immnaveed" }}
        />

        {/* Live Instagram Community Stats Bar */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-zinc-900 p-6 rounded-2xl border border-zinc-800/80 mb-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 via-pink-500 to-purple-600 p-0.5 shadow-lg">
              <div className="w-full h-full bg-zinc-950 rounded-full flex items-center justify-center">
                <InstagramIcon className="w-6 h-6 text-pink-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-black text-white">@immnaveed</h3>
                <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded bg-pink-500/10 text-pink-400 border border-pink-500/20">
                  Official Handle
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-medium mt-0.5">
                Brand Strategist | Growth Consultant | Digital Architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-8">
            <div className="text-center md:text-left">
              <p className="text-lg sm:text-xl font-black text-white">900+</p>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Founders & Marketers</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-lg sm:text-xl font-black text-white">60+</p>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Strategy Breakdown Posts</p>
            </div>
            <div className="hidden sm:block">
              <a
                href="https://www.instagram.com/immnaveed"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 hover:opacity-90 text-white font-black text-xs uppercase tracking-widest px-5 py-3 rounded-xl transition-all shadow-lg"
              >
                <span>Visit Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Content Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="luxury-card rounded-2xl p-6 border border-zinc-800 bg-zinc-900/60 hover:border-pink-500/40 transition-all group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Tag & Icon Row */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-md"
                    style={{ background: `${post.color}15`, color: post.color, border: `1px solid ${post.color}30` }}
                  >
                    {post.tag}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all">
                    <InstagramIcon className="w-4 h-4 text-zinc-400 group-hover:text-pink-400 transition-colors" />
                  </div>
                </div>

                <h4 className="text-base font-black text-white group-hover:text-amber-400 transition-colors leading-snug mb-3">
                  {post.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-medium mb-6 line-clamp-3">
                  {post.caption}
                </p>
              </div>

              {/* Footer Engagement Metrics & Right-aligned link */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 font-bold text-zinc-400 group-hover:text-pink-400 transition-colors">
                    <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500/20" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-zinc-400">
                    <MessageCircle className="w-3.5 h-3.5" /> {post.comments}
                  </span>
                </div>

                {/* Right-aligned trigger link */}
                <span className="text-[11px] font-black text-amber-400 group-hover:text-amber-300 uppercase tracking-widest flex items-center gap-1">
                  <span>Read Post</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
