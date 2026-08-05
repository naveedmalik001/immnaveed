"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { useSound } from "@/hooks/useSound";
import Logo from "@/components/shared/Logo";

export default function Footer() {
  const [year, setYear] = useState(2026);
  const { playClick, playHover } = useSound();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-zinc-950 text-white font-sans border-t border-zinc-900 py-10 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Logo */}
        <Logo />

        {/* Center Contact */}
        <div className="flex items-center gap-6 text-xs text-zinc-400 font-medium">
          <a
            href="mailto:business@immnaveed.in"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-500" />
            <span>business@immnaveed.in</span>
          </a>
          <a
            href="tel:+919018636473"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>+91 9018636473</span>
          </a>
        </div>

        {/* Right Legal & Top Scroll */}
        <div className="flex items-center gap-6">
          <span className="text-xs text-zinc-500">
            © {year} IMMNAVEED. Er. Naveed Malik.
          </span>
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
    </footer>
  );
}
