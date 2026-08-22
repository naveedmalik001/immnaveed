"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";
import Logo from "@/components/shared/Logo";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Home",         href: "/" },
  { label: "Services",     href: "/services" },
  { label: "Portfolio",    href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Process",      href: "/process" },
  { label: "About",        href: "/about" },
  { label: "Industries",   href: "/industries" },
  { label: "Contact",      href: "/contact" },
  { label: "Privacy",      href: "/privacy" },
  { label: "Terms",        href: "/terms" },
];

export default function Footer() {
  const [year, setYear] = useState(2026);
  const { playClick } = useSound();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#031730] text-white select-none border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 md:py-16">

        {/* Top Row: Logo + Info + Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Logo + Tagline */}
          <div className="md:col-span-5">
            <Logo className="mb-4" />
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm font-normal">
              Strategic brand positioning, high-ROAS performance marketing, and bespoke Next.js software architecture for companies seeking market authority.
            </p>
            <div className="mt-4 flex items-center gap-2.5 text-xs text-[#14B8C4] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#14B8C4] animate-pulse" />
              <span>Available for Select Retainers &amp; Strategic Advisory</span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#14B8C4] mb-4">
              Directory &amp; Navigation
            </p>
            <nav className="grid grid-cols-2 gap-2.5">
              {footerLinks.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={playClick}
                  className="text-xs font-medium text-slate-300 hover:text-[#14B8C4] transition-colors duration-150 py-0.5"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Direct Contact Points */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#14B8C4] mb-4">
              Direct Contact
            </p>
            <a
              href="tel:+919018636473"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#14B8C4] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#14B8C4]" />
              <span>+91 9018636473</span>
            </a>
            <a
              href="mailto:business@immnaveed.in"
              className="flex items-center gap-2 text-xs text-slate-300 hover:text-[#14B8C4] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#14B8C4]" />
              <span>business@immnaveed.in</span>
            </a>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>Srinagar, J&amp;K · Remote Worldwide</span>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-400">
          <p>
            © {year} IMMNAVEED — Er. Naveed Malik. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Scroll to top"
              className="w-9 h-9 rounded-xl bg-[#041E42] border border-slate-700/60 hover:border-[#14B8C4] text-slate-300 hover:text-[#14B8C4] flex items-center justify-center transition-colors shadow-xs"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
