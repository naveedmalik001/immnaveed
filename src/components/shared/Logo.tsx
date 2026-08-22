"use client";

import React from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";

interface LogoProps {
  className?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
}

export default function Logo({ className = "", onClick }: LogoProps) {
  const { playClick, playHover } = useSound();

  return (
    <Link
      href="/"
      onClick={() => {
        if (onClick) onClick();
        playClick();
      }}
      onMouseEnter={playHover}
      className={`inline-flex items-center gap-3 group cursor-pointer ${className}`}
    >
      {/* Monogram emblem in Deep Navy with Cyan border */}
      <div
        className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105 rounded-lg bg-[#0E2849] border border-[#00D2D3]/40 shadow-sm"
      >
        <span className="font-black text-sm text-[#00D2D3] tracking-tight">N</span>
      </div>

      <div className="flex flex-col leading-none">
        <span className="text-base font-black tracking-tight text-white">
          IMM<span className="text-[#00D2D3]">NAVEED</span>
        </span>
        <span className="text-[8px] font-bold uppercase tracking-[0.14em] text-slate-400 mt-0.5">
          Brand &amp; Growth Consultancy
        </span>
      </div>
    </Link>
  );
}
