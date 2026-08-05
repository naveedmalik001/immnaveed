"use client";

import React from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  onClick?: () => void;
}

export default function Logo({ className = "", showSubtitle = true, onClick }: LogoProps) {
  const { playClick, playHover } = useSound();

  return (
    <Link
      href="/"
      onClick={() => {
        if (onClick) onClick();
        playClick();
      }}
      onMouseEnter={playHover}
      className={`inline-flex items-center gap-3.5 group cursor-pointer ${className}`}
    >
      {/* Luxury Metallic Crest SVG */}
      <div className="relative p-2 rounded-xl bg-gradient-to-br from-amber-500/20 via-amber-500/10 to-transparent border border-amber-500/30 group-hover:border-amber-500/60 transition-all duration-300 shadow-lg shadow-amber-500/5 group-hover:shadow-amber-500/20">
        <svg
          className="w-7 h-7 text-amber-400 transform group-hover:scale-105 transition-transform duration-300"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Shield Frame */}
          <path
            d="M16 3L27 7V15C27 22.18 22.28 27.65 16 29.5C9.72 27.65 5 22.18 5 15V7L16 3Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />
          {/* Monogram Inner N Line */}
          <path
            d="M11 21V11L21 21V11"
            stroke="#FFFFFF"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Top Gold Accent */}
          <circle cx="16" cy="8" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1">
          <span className="text-xl font-black tracking-tight text-white font-sans">
            IMM<span className="text-amber-500">NAVEED</span>
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
        </div>
        {showSubtitle && (
          <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest mt-1">
            Executive Strategy & Mobility
          </span>
        )}
      </div>
    </Link>
  );
}
