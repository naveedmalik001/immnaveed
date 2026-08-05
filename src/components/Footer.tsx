"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone, MapPin, MessageSquare, ArrowUpRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import Logo from "@/components/shared/Logo";

const sitemap = [
  { label: "Executive Home", href: "/" },
  { label: "About Founder",  href: "/about" },
  { label: "Core Capabilities", href: "/services" },
  { label: "Case Process", href: "/#process" },
  { label: "Client Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Target Sectors", href: "/industries" },
  { label: "Strategy Contact", href: "/contact" },
];

const services = [
  { label: "Brand Strategy & Positioning", href: "/services/brand-strategy" },
  { label: "Business Growth Consulting", href: "/services/business-consulting" },
  { label: "Meta & Google Performance Ads", href: "/services/performance-marketing" },
  { label: "Next.js 15 Web Engineering", href: "/services/website-development" },
  { label: "Custom ERP & Software Systems", href: "/services/custom-software" },
  { label: "Technical & Authority SEO", href: "/services/seo-optimization" },
];

export default function Footer() {
  const [year, setYear] = useState(2026);
  const { playClick, playHover } = useSound();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-zinc-950 text-white font-sans border-t border-zinc-900 overflow-hidden relative select-none">
      
      {/* Top Banner CTA (Right-Aligned Buttons) */}
      <div className="border-b border-zinc-900 py-12 md:py-16 bg-gradient-to-r from-zinc-950 via-zinc-900/60 to-zinc-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-[10px] font-black text-amber-500 uppercase tracking-widest mb-2">Ready to Scale Your Brand?</p>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Schedule Your Executive <span className="text-gradient-bronze">Strategy Session.</span>
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-all shadow-lg shadow-amber-500/20"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/919018636473"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              onMouseEnter={playHover}
              className="inline-flex items-center justify-center gap-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-full transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Brand Identity Column */}
          <div className="md:col-span-4 space-y-4">
            <Logo />
            <p className="text-xs text-zinc-400 font-medium leading-relaxed max-w-sm">
              IMMNAVEED is a luxury digital growth consultancy founded by Er. Naveed Malik. We engineer high-converting brand strategies, Meta/Google ad funnels, and sub-1s Next.js 15 platforms.
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest text-amber-500">
              Executive Strategy · Software Engineering
            </p>
          </div>

          {/* Quick Sitemap */}
          <div className="md:col-span-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Sitemap</p>
            <ul className="space-y-2.5">
              {sitemap.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="text-xs font-semibold text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Services */}
          <div className="md:col-span-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Capabilities</p>
            <ul className="space-y-2.5">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={playClick}
                    onMouseEnter={playHover}
                    className="text-xs font-semibold text-zinc-400 hover:text-amber-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-4">Direct Contact</p>
            <a
              href="mailto:business@immnaveed.in"
              className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>business@immnaveed.in</span>
            </a>
            <a
              href="tel:+919018636473"
              className="flex items-center gap-2 text-xs font-bold text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>+91 9018636473</span>
            </a>
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 pt-2">
              <MapPin className="w-3.5 h-3.5 text-zinc-600" />
              <span>India · Remote Worldwide</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Scroll Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-zinc-600 font-semibold">
            © {year} IMMNAVEED. Er. Naveed Malik. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-[10px] font-bold text-zinc-500 hover:text-zinc-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-[10px] font-bold text-zinc-500 hover:text-zinc-300 transition-colors">
              Terms of Engagement
            </Link>
            <button
              onClick={() => {
                playClick();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Scroll to top"
              className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amber-500/40 transition-all cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
