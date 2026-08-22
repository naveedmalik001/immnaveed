"use client";

import React from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { ExternalLink, Heart, MessageCircle, ArrowUpRight } from "lucide-react";
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
    url: "https://www.instagram.com/immnaveed",
  },
  {
    id: "ig-2",
    tag: "Meta Ads ROAS",
    title: "How We Scaled Client Revenue to 4.8× ROAS",
    caption: "Creative A/B testing and direct intent targeting outperform mass broad spending every single time.",
    likes: "189",
    comments: "34",
    url: "https://www.instagram.com/immnaveed",
  },
  {
    id: "ig-3",
    tag: "Web Engineering",
    title: "Next.js 15 vs Traditional WordPress for Enterprises",
    caption: "Why sub-800ms Lighthouse scores directly increase Google SEO rankings and cut acquisition costs by 35%.",
    likes: "210",
    comments: "45",
    url: "https://www.instagram.com/immnaveed",
  },
  {
    id: "ig-4",
    tag: "EdTech Growth",
    title: "Cambridge Education Admissions Funnel Breakdown",
    caption: "Integrating WhatsApp API auto-responders reduced counselor lead follow-up time from 6 hours to 45 seconds.",
    likes: "176",
    comments: "31",
    url: "https://www.instagram.com/immnaveed",
  },
  {
    id: "ig-5",
    tag: "Executive Mindset",
    title: "The 3 Moats Every Modern Founder Must Build",
    caption: "1. Brand Identity Authority, 2. Automated Inbound Engine, 3. Proprietary Software Systems.",
    likes: "254",
    comments: "52",
    url: "https://www.instagram.com/immnaveed",
  },
  {
    id: "ig-6",
    tag: "Case Study",
    title: "GoStudy Abroad Consulting 0-to-1 Scale",
    caption: "Transforming overseas education lead generation through interactive course matchers and real-time scheduling.",
    likes: "198",
    comments: "39",
    url: "https://www.instagram.com/immnaveed",
  },
];

export default function InstagramFeed() {
  const { playClick, playHover } = useSound();

  return (
    <section className="section-pad bg-[#F8FAFC] font-sans border-b border-slate-200 select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <SectionHeader
          badgeText="Social Authority & Insights"
          title="Direct Insights from"
          gradientTitle="Instagram (@immnaveed)."
          subtitle="Follow Er. Naveed Malik on Instagram for daily breakdowns on executive brand strategy, Meta ad architecture, and Next.js engineering."
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
                  Official Profile
                </span>
              </div>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                Brand Strategist · Growth Consultant · Next.js Software Architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-8">
            <div className="text-center md:text-left">
              <p className="font-display text-lg sm:text-xl font-bold text-[#0F172A]">900+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Founders &amp; Marketers</p>
            </div>
            <div className="text-center md:text-left">
              <p className="font-display text-lg sm:text-xl font-bold text-[#0F172A]">60+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Strategy Breakdowns</p>
            </div>
            <div className="hidden sm:block">
              <a
                href="https://www.instagram.com/immnaveed"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="btn-teal"
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
              className="card-white p-6 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Tag & Icon Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="badge-teal text-[10px] py-1 px-3">
                    {post.tag}
                  </span>
                  <div className="w-8 h-8 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-[#14B8C4] group-hover:text-white group-hover:border-[#14B8C4] transition-colors">
                    <InstagramIcon className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="font-display text-base font-bold text-[#0F172A] group-hover:text-[#0E8A94] transition-colors leading-snug mb-2.5">
                  {post.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed font-normal mb-6 line-clamp-3">
                  {post.caption}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1 font-semibold text-slate-600">
                    <Heart className="w-3.5 h-3.5 text-rose-500" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-slate-600">
                    <MessageCircle className="w-3.5 h-3.5 text-[#0E8A94]" /> {post.comments}
                  </span>
                </div>

                <span className="text-[11px] font-bold text-[#0E8A94] group-hover:text-[#041E42] uppercase tracking-wider flex items-center gap-1">
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
