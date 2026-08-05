"use client";

import React from "react";
import Link from "next/link";
import { useSound } from "@/hooks/useSound";

interface LogoProps {
  className?: string;
  onClick?: () => void;
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
      className={`inline-flex items-center gap-2.5 group cursor-pointer ${className}`}
    >
      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-sm group-hover:border-amber-500/60 transition-all">
        N
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-lg font-black tracking-tight text-white">
          IMM<span className="text-amber-500">NAVEED</span>
        </span>
        <span className="text-[8px] font-bold text-zinc-400 uppercase tracking-widest mt-0.5">
          Brand & Growth Consultancy
        </span>
      </div>
    </Link>
  );
}
