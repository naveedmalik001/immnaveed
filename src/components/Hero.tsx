"use client";

import React from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";
import { ArrowRight, Film, MessageCircle, ShieldCheck, Code2, Server, TrendingUp, BarChart3, Video, Palette } from "lucide-react";

export default function Hero() {
  const { playClick, playHover } = useSound();

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#F8FAFC] pt-28 pb-20 border-b border-slate-200 font-sans">

      {/* Subtle Background Glows */}
      <div className="absolute w-[500px] h-[500px] -top-30 -left-30 bg-[#14B8C4]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-[600px] h-[600px] -bottom-30 -right-20 bg-[#0E8A94]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-[350px] h-[350px] top-1/3 right-1/4 bg-[#F7931E]/8 rounded-full blur-3xl pointer-events-none" />

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Headline & Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14B8C4]/12 border border-[#14B8C4]/25 text-[#0E8A94] text-xs font-bold uppercase tracking-wider mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#14B8C4] animate-pulse" />
              <span>Next.js Web &amp; ERP Engineering · Media Production · Growth Marketing</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F172A] leading-[1.08] tracking-tight mb-6">
              Web &amp; ERP Engineering, <br />
              <span className="text-gradient-teal">Growth Strategy, Paid Ads</span><br />
              &amp; In-House Video Production.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 mb-8 max-w-xl font-normal">
              We engineer sub-1s Next.js websites, custom ERPs for schools &amp; hospitals, high-ROAS Meta &amp; Google ad campaigns, graphic design, and in-house 4K corporate &amp; wedding video shoots.
            </p>

            {/* 3 Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 w-full sm:w-auto mb-10">
              <Link
                href="/contact"
                onClick={playClick}
                onMouseEnter={playHover}
                className="btn-orange text-sm shadow-md"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#reels-portfolio"
                onClick={playClick}
                onMouseEnter={playHover}
                className="btn-white text-sm border border-slate-300 hover:border-[#14B8C4]"
              >
                <Film className="w-4 h-4 text-[#041E42]" />
                <span>Watch Reels &amp; Video Portfolio</span>
              </Link>

              <a
                href="https://wa.me/919018636473?text=Hello%20Er.%20Naveed%20Malik,%20I%20would%20like%20to%20discuss%20a%20website%20or%20marketing%20project."
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                onMouseEnter={playHover}
                className="btn-whatsapp text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200 w-full">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <Code2 className="w-4 h-4 text-[#0E8A94]" />
                <span>Sub-1s Next.js Apps</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <Server className="w-4 h-4 text-[#F7931E]" />
                <span>Custom School/Hospital ERPs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                <Video className="w-4 h-4 text-[#0E8A94]" />
                <span>In-House Cinema Crew</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Center Card */}
            <div className="relative w-full max-w-[420px] rounded-[32px] shadow-2xl overflow-hidden border border-slate-200 bg-white p-7 z-10 flex flex-col justify-between">
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="badge-teal text-[10px] py-1 px-3">
                    Full-Spectrum Software &amp; Media
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#0F172A] leading-snug">
                  IMMNAVEED &amp; Team
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Combining software architecture, tailored ERP systems, quantitative ad execution, and in-house film production.
                </p>
              </div>

              {/* Service Matrix Highlights */}
              <div className="space-y-2.5">
                {[
                  { title: "Next.js Web & UI/UX Design", stat: "Sub-1s Speeds", color: "text-[#0E8A94] bg-[#14B8C4]/10" },
                  { title: "Custom ERPs (Schools/Clinics)", stat: "Tailored Dashboards", color: "text-blue-700 bg-blue-50" },
                  { title: "Meta & Google Ad Scaling", stat: "4.8× ROAS", color: "text-[#F7931E] bg-[#F7931E]/10" },
                  { title: "In-House 4K Shoots & Reels", stat: "Cinema Gear", color: "text-purple-700 bg-purple-50" },
                ].map((item) => (
                  <div key={item.title} className="p-3 rounded-xl bg-[#F8FAFC] border border-slate-200 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0F172A]">{item.title}</span>
                    <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md ${item.color}`}>
                      {item.stat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Guarantee Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> 100% In-House Engineering
                </span>
                <span className="text-[10px] font-bold uppercase text-slate-400">Direct Retainers</span>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
