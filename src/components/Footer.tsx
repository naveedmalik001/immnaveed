"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";
import Logo from "@/components/shared/Logo";
import { ArrowUp, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const footerLinks = [
  { label: "Home",         href: "/" },
  { label: "Services",     href: "/services" },
  { label: "Reels & Videos", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Methodology",  href: "/process" },
  { label: "About Naveed", href: "/about" },
  { label: "Industries",   href: "/industries" },
  { label: "Contact Us",   href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  const [year, setYear] = useState(2026);
  const { playClick, playHover } = useSound();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#F8FAFC] text-[#0F172A] select-none border-t border-slate-200 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">

        {/* Top Row: Logo + Info + Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          
          {/* Logo + Tagline */}
          <div className="md:col-span-5 space-y-4">
            <Logo variant="light" className="mb-2" />
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm font-normal">
              High-speed Next.js web applications, custom ERPs for education &amp; healthcare, high-ROAS Meta/Google ads, graphic design, and in-house 4K video shoots.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#0E8A94] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#14B8C4] animate-pulse" />
              <span>Available for Select Retainers &amp; Strategic Advisory</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0E8A94] mb-4">
              Directory &amp; Navigation
            </p>
            <nav className="grid grid-cols-2 gap-2.5">
              {footerLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={playClick}
                  onMouseEnter={playHover}
                  className="text-xs font-semibold text-slate-600 hover:text-[#0E8A94] transition-colors duration-150 py-0.5"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Direct Contact Points */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#0E8A94] mb-4">
              Direct Contact &amp; Channels
            </p>
            
            <a
              href="tel:+919018636473"
              onClick={playClick}
              className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 hover:text-[#0E8A94] transition-colors p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#0E8A94]" />
              <span>+91 9018636473</span>
            </a>

            <a
              href="mailto:business@immnaveed.in"
              onClick={playClick}
              className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 hover:text-[#0E8A94] transition-colors p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#0E8A94]" />
              <span>business@immnaveed.in</span>
            </a>

            <a
              href="https://www.instagram.com/immnaveed"
              target="_blank"
              rel="noopener noreferrer"
              onClick={playClick}
              className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 hover:text-[#0E8A94] transition-colors p-2.5 rounded-xl bg-white border border-slate-200 shadow-xs"
            >
              <InstagramIcon className="w-4 h-4 text-rose-500" />
              <span>@immnaveed Official</span>
              <ExternalLink className="w-3 h-3 ml-auto text-slate-400" />
            </a>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>Srinagar, J&amp;K · Remote Worldwide</span>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>
            © {year} IMMNAVEED — Er. Naveed Malik. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                playClick();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-xl bg-white border border-slate-200 hover:border-[#14B8C4] text-[#0F172A] hover:bg-[#041E42] hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
