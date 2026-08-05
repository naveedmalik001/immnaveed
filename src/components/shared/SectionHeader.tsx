"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";

interface SectionHeaderProps {
  badgeText: string;
  title: string;
  gradientTitle?: string;
  subtitle?: string;
  actionLink?: {
    label: string;
    href: string;
  };
  centered?: boolean;
}

export default function SectionHeader({
  badgeText,
  title,
  gradientTitle,
  subtitle,
  actionLink,
  centered = false,
}: SectionHeaderProps) {
  const { playClick, playHover } = useSound();

  return (
    <div
      className={`mb-12 md:mb-16 ${
        centered ? "text-center max-w-3xl mx-auto" : "flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      }`}
    >
      <div className={centered ? "" : "max-w-2xl"}>
        {/* Luxury Badge */}
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-4 ${
            centered ? "mx-auto" : ""
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">
            {badgeText}
          </span>
        </div>

        {/* Editorial Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.1]">
          {title}{" "}
          {gradientTitle && (
            <span className="text-gradient-bronze block sm:inline">{gradientTitle}</span>
          )}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-sm sm:text-base text-zinc-400 font-medium leading-relaxed max-w-xl">
            {subtitle}
          </p>
        )}
      </div>

      {/* Right-Aligned Action Button */}
      {actionLink && !centered && (
        <div className="flex-shrink-0 self-start md:self-end">
          <Link
            href={actionLink.href}
            onClick={playClick}
            onMouseEnter={playHover}
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-amber-500/40 text-xs font-black uppercase tracking-widest text-zinc-300 hover:text-amber-400 transition-all shadow-md group"
          >
            <span>{actionLink.label}</span>
            <div className="w-7 h-7 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-black transition-all">
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
