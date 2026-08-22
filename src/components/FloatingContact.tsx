"use client";

import { useState, useEffect } from "react";
import { useSound } from "@/hooks/useSound";
import { Phone, MessageSquare, Mail, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen,      setIsOpen]      = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { playClick, playHover, playWelcome } = useSound();

  useEffect(() => {
    let hasPlayed = false;

    const triggerNotification = async () => {
      if (hasPlayed) return;
      hasPlayed = true;
      playWelcome();
      setShowTooltip(true);
      if (window.innerWidth < 768) setIsOpen(true);
      window.removeEventListener("click",      triggerNotification);
      window.removeEventListener("touchstart", triggerNotification);
      window.removeEventListener("keydown",    triggerNotification);
    };

    window.addEventListener("click",      triggerNotification, { once: true });
    window.addEventListener("touchstart", triggerNotification, { once: true });
    window.addEventListener("keydown",    triggerNotification, { once: true });

    return () => {
      window.removeEventListener("click",      triggerNotification);
      window.removeEventListener("touchstart", triggerNotification);
      window.removeEventListener("keydown",    triggerNotification);
    };
  }, [playWelcome]);

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-3 font-sans select-none">

      {/* Notification tooltip */}
      <div
        className={`bg-[#0E2849] text-white px-4 py-2.5 shadow-xl border border-[#1A3E6D] flex items-center gap-3 transition-all duration-300 ease-out rounded-xl origin-bottom-left ${
          showTooltip
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-50 opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-[#00D2D3] animate-pulse flex-shrink-0" />
        <span className="text-xs font-semibold text-white whitespace-nowrap">
          Strategy Consultation Open
        </span>
        <button
          onClick={() => { playClick(); setShowTooltip(false); }}
          className="text-slate-400 hover:text-white transition-colors p-0.5"
          aria-label="Close"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Action buttons */}
      <div
        className={`flex flex-col gap-2.5 transition-all duration-300 origin-bottom ${
          isOpen
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-75 opacity-0 translate-y-8 pointer-events-none md:scale-100 md:opacity-100 md:translate-y-0 md:pointer-events-auto"
        }`}
      >
        {/* Call */}
        <a
          href="tel:+919018636473"
          onClick={playClick}
          onMouseEnter={playHover}
          className="w-11 h-11 bg-[#0E2849] border border-[#1A3E6D] rounded-xl flex items-center justify-center shadow-md hover:border-[#00D2D3] transition-all duration-150 relative group"
          aria-label="Call Directly"
        >
          <Phone className="w-4 h-4 text-[#00D2D3]" />
          <span className="absolute bg-[#081627] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md rounded-lg whitespace-nowrap border border-[#1A3E6D]" style={{ left: "3.25rem" }}>
            Call: +91 9018636473
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919018636473"
          target="_blank"
          rel="noreferrer"
          onClick={playClick}
          onMouseEnter={playHover}
          className="w-11 h-11 bg-[#25D366] rounded-xl flex items-center justify-center shadow-md hover:bg-[#20bd5a] transition-all duration-150 relative group"
          aria-label="WhatsApp"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.127 1.533 5.858L.07 23.516a.5.5 0 00.609.609l5.671-1.461A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818c-1.983 0-3.836-.55-5.415-1.503l-.388-.232-4.023 1.036 1.059-3.876-.253-.404A9.81 9.81 0 012.182 12C2.182 6.573 6.573 2.182 12 2.182 17.427 2.182 21.818 6.573 21.818 12c0 5.427-4.391 9.818-9.818 9.818z"/>
          </svg>
          <span className="absolute bg-[#081627] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md rounded-lg whitespace-nowrap border border-[#1A3E6D]" style={{ left: "3.25rem" }}>
            WhatsApp Direct
          </span>
        </a>

        {/* Email */}
        <a
          href="mailto:business@immnaveed.in"
          onClick={playClick}
          onMouseEnter={playHover}
          className="w-11 h-11 bg-[#0E2849] border border-[#1A3E6D] rounded-xl flex items-center justify-center shadow-md hover:border-[#00D2D3] transition-all duration-150 relative group"
          aria-label="Email"
        >
          <Mail className="w-4 h-4 text-[#00D2D3]" />
          <span className="absolute bg-[#081627] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md rounded-lg whitespace-nowrap border border-[#1A3E6D]" style={{ left: "3.25rem" }}>
            Email Inquiry
          </span>
        </a>
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => { playClick(); setIsOpen(!isOpen); if (showTooltip) setShowTooltip(false); }}
        className="md:hidden w-11 h-11 bg-[#00D2D3] text-[#081627] rounded-xl flex items-center justify-center shadow-lg"
        aria-label="Toggle Contact"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageSquare className="w-5 h-5" />}
      </button>
    </div>
  );
}
