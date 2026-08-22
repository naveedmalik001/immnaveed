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
  theme?: "dark" | "light";
}

export default function SectionHeader({
  badgeText,
  title,
  gradientTitle,
  subtitle,
  actionLink,
  centered = false,
  theme = "dark",
}: SectionHeaderProps) {
  const { playClick, playHover } = useSound();
  const isLight = theme === "light";

  return (
    <div
      className={`mb-10 md:mb-14 ${
        centered ? "text-center max-w-3xl mx-auto" : "flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      }`}
    >
      <div className={centered ? "" : "max-w-2xl"}>
        {/* Cambridge Style Pill Badge */}
        <div className={`mb-3 ${centered ? "flex justify-center" : ""}`}>
          <span className="badge-teal">
            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
            {badgeText}
          </span>
        </div>

        {/* Heading with font-display */}
        <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] ${isLight ? "text-[#0F172A]" : "text-white"}`}>
          {title}{" "}
          {gradientTitle && (
            <span className="text-gradient-teal block sm:inline">{gradientTitle}</span>
          )}
        </h2>

        {/* Decorative Teal Divider Line */}
        <div className={centered ? "teal-divider-line-center" : "teal-divider-line"} />

        {/* Subtitle */}
        {subtitle && (
          <p className={`text-sm sm:text-base font-normal leading-relaxed max-w-xl ${isLight ? "text-slate-600" : "text-slate-300"}`}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Action Link */}
      {actionLink && !centered && (
        <div className="flex-shrink-0 self-start md:self-end pb-2">
          <Link
            href={actionLink.href}
            onClick={playClick}
            onMouseEnter={playHover}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#14B8C4] hover:text-[#00D4E0] transition-colors group"
          >
            <span>{actionLink.label}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      )}
    </div>
  );
}
