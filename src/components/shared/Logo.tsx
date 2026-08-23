"use client";

import React from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";

interface LogoProps {
  className?: string;
  onClick?: () => void;
  variant?: "dark" | "light";
}

export default function Logo({ className = "", onClick, variant = "light" }: LogoProps) {
  const { playClick, playHover } = useSound();
  const isDarkCanvas = variant === "dark";

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
      {/* Monogram emblem in Deep Navy with Teal border */}
      <div
        className="w-9 h-9 flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105 rounded-xl bg-[#041E42] border border-[#14B8C4]/40 shadow-sm"
      >
        <span className="font-black text-sm text-[#14B8C4] font-display tracking-tight">NM</span>
      </div>

      <div className="flex flex-col leading-none">
        <span className={`text-base font-extrabold tracking-tight font-display ${isDarkCanvas ? "text-white" : "text-[#0F172A]"}`}>
          IMM<span className="text-[#0E8A94]">NAVEED</span>
        </span>
        <span className={`text-[8px] font-bold uppercase tracking-[0.14em] mt-0.5 ${isDarkCanvas ? "text-slate-400" : "text-slate-500"}`}>
          Growth &amp; Media Agency
        </span>
      </div>
    </Link>
  );
}
