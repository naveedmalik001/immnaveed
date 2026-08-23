"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { useSound } from "@/hooks/useSound";
import SectionHeader from "@/components/shared/SectionHeader";
import { ArrowRight, Sparkles, RefreshCw, Layers, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ServicesDeckShuffler() {
  const [deck, setDeck] = useState(servicesData);
  const [isShuffling, setIsShuffling] = useState(false);
  const [autoShuffle, setAutoShuffle] = useState(true);
  const { playClick, playHover } = useSound();

  // Function to shuffle top card to back (like counting money or shuffling a card deck)
  const shuffleNext = () => {
    playClick();
    setIsShuffling(true);
    setTimeout(() => {
      setDeck((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
      setIsShuffling(false);
    }, 250);
  };

  // Optional subtle auto-rotation
  useEffect(() => {
    if (!autoShuffle) return;
    const interval = setInterval(() => {
      setDeck((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, [autoShuffle]);

  const activeCard = deck[0];

  return (
    <section className="section-pad bg-gradient-to-b from-[#031730] via-[#041E42] to-[#031730] text-white font-sans border-b border-slate-800 relative overflow-hidden">
      
      {/* Blueprint Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-[#14B8C4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 bg-[#F7931E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <SectionHeader
          badgeText="Interactive Services Deck"
          title="Fanned-Out Capabilities &"
          gradientTitle="Full-Spectrum Solutions."
          subtitle="Explore our complete roster of web engineering, custom ERP software, paid ad funnels, and in-house film production — presented as an interactive deck."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-10">

          {/* Left Column: Active Card Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14B8C4]/15 border border-[#14B8C4]/30 text-[#14B8C4] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Active Service Feature</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight transition-all duration-300">
              {activeCard.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {activeCard.content}
            </p>

            {/* Inclusions */}
            <div className="space-y-2.5 pt-2">
              {activeCard.features.slice(0, 3).map((f) => (
                <div key={f} className="flex items-start gap-3 bg-[#05244C]/90 p-3.5 rounded-2xl border border-slate-700/80">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8C4] flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-100">{f}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={`/services/${activeCard.slug}`}
                onClick={playClick}
                onMouseEnter={playHover}
                className="btn-orange text-sm shadow-lg"
              >
                <span>Explore Full Service Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => {
                  setAutoShuffle(false);
                  shuffleNext();
                }}
                onMouseEnter={playHover}
                className="btn-white text-xs py-3 px-5 rounded-2xl border border-slate-700 bg-[#082852] text-white hover:border-[#14B8C4] cursor-pointer inline-flex items-center gap-2"
                title="Shuffle Deck"
              >
                <RefreshCw className={`w-3.5 h-3.5 text-[#14B8C4] ${isShuffling ? "animate-spin" : ""}`} />
                <span>Shuffle Next Card ({deck.length} Total)</span>
              </button>
            </div>
          </div>

          {/* Right Column: Fanned-Out Card Deck Animation */}
          <div
            className="lg:col-span-6 relative h-[480px] sm:h-[500px] flex items-center justify-center select-none"
            onMouseEnter={() => setAutoShuffle(false)}
            onMouseLeave={() => setAutoShuffle(true)}
          >
            {deck.slice(0, 5).map((card, index) => {
              const Icon = card.icon;
              // Stacking offsets and rotation angles (like holding fanned cards / counting money)
              const rotation = (index - 2) * 4; // -8deg, -4deg, 0deg, 4deg, 8deg
              const translateY = index * 10;
              const scale = 1 - index * 0.04;
              const zIndex = 30 - index;
              const opacity = 1 - index * 0.15;

              return (
                <div
                  key={card.id}
                  onClick={() => {
                    if (index > 0) {
                      playClick();
                      setDeck((prev) => {
                        const newDeck = [...prev];
                        const [selected] = newDeck.splice(index, 1);
                        return [selected, ...newDeck];
                      });
                    }
                  }}
                  style={{
                    transform: `translateY(${translateY}px) rotate(${rotation}deg) scale(${scale})`,
                    zIndex,
                    opacity,
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                  className={`absolute w-full max-w-[340px] sm:max-w-[380px] rounded-3xl p-6 sm:p-7 shadow-2xl cursor-pointer border backdrop-blur-md ${
                    index === 0
                      ? "bg-gradient-to-br from-[#082852] to-[#041E42] border-[#14B8C4]/70 shadow-[#14B8C4]/20 ring-2 ring-[#14B8C4]/30"
                      : "bg-[#05244C]/95 border-slate-700/80 hover:border-[#14B8C4]/50"
                  }`}
                >
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#14B8C4]/15 border border-[#14B8C4]/30 flex items-center justify-center text-[#14B8C4]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="badge-teal text-[9px] py-1 px-3">
                      {card.category}
                    </span>
                  </div>

                  {/* Card Title */}
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2 leading-snug">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6 line-clamp-3">
                    {card.shortDescription}
                  </p>

                  {/* Bottom Strip */}
                  <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400 text-[11px]">
                      Card {index + 1} of {deck.length}
                    </span>
                    <span className="text-[#14B8C4] group-hover:text-white uppercase tracking-wider flex items-center gap-1 text-[11px]">
                      <span>{index === 0 ? "Active In View" : "Click to View"}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
