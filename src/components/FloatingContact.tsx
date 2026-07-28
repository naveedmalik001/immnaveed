"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, Mail, X } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const { playClick, playHover, playWelcome } = useSound();

  useEffect(() => {
    let hasPlayed = false;

    const triggerNotification = async () => {
      if (hasPlayed) return;
      hasPlayed = true;

      playWelcome();

      setShowTooltip(true);
      if (window.innerWidth < 768) {
        setIsOpen(true);
      }

      window.removeEventListener("click", triggerNotification);
      window.removeEventListener("touchstart", triggerNotification);
      window.removeEventListener("keydown", triggerNotification);
    };

    window.addEventListener("click", triggerNotification, { once: true });
    window.addEventListener("touchstart", triggerNotification, { once: true });
    window.addEventListener("keydown", triggerNotification, { once: true });

    return () => {
      window.removeEventListener("click", triggerNotification);
      window.removeEventListener("touchstart", triggerNotification);
      window.removeEventListener("keydown", triggerNotification);
    };
  }, [playWelcome]);

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-start gap-4 font-sans select-none">
      {/* Notification Tooltip */}
      <div
        className={`bg-zinc-950 text-white px-4 py-3 rounded-2xl rounded-bl-xs shadow-2xl border border-zinc-800 flex items-center gap-3 transition-all duration-500 ease-out origin-bottom-left ${
          showTooltip ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
        <span className="text-xs font-bold tracking-wide">Strategy Consultation Active</span>
        <button
          onClick={() => {
            playClick();
            setShowTooltip(false);
          }}
          className="text-zinc-500 hover:text-amber-400 transition-colors p-1"
          aria-label="Close Notification"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Action Buttons (Vertical Slider) */}
      <div
        className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-8 pointer-events-none md:scale-100 md:opacity-100 md:translate-y-0 md:pointer-events-auto"
        }`}
      >
        {/* Call Directly */}
        <a
          href="tel:+919018636473"
          onClick={playClick}
          onMouseEnter={playHover}
          className="w-12 h-12 bg-zinc-900 border border-zinc-800 text-white rounded-full flex items-center justify-center shadow-2xl hover:border-amber-500/50 hover:bg-zinc-800 hover:scale-110 transition-all duration-200 relative group"
          aria-label="Call Directly"
        >
          <Phone className="w-5 h-5 text-amber-400" />
          <span className="absolute left-14 bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-zinc-800 whitespace-nowrap">
            Call Directly (+91 9018636473)
          </span>
        </a>

        {/* WhatsApp Live */}
        <a
          href="https://wa.me/919018636473"
          target="_blank"
          rel="noreferrer"
          onClick={playClick}
          onMouseEnter={playHover}
          className="w-12 h-12 bg-[#25D366] text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all duration-200 relative group"
          aria-label="WhatsApp Live"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute left-14 bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-zinc-800 whitespace-nowrap">
            WhatsApp Direct
          </span>
        </a>

        {/* Email Inquiry */}
        <a
          href="mailto:business@immnaveed.in"
          onClick={playClick}
          onMouseEnter={playHover}
          className="w-12 h-12 bg-amber-500 text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-amber-600 hover:scale-110 transition-all duration-200 relative group"
          aria-label="Email Inquiry"
        >
          <Mail className="w-5 h-5" />
          <span className="absolute left-14 bg-zinc-950 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl border border-zinc-800 whitespace-nowrap">
            Email Strategy Brief
          </span>
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => {
          playClick();
          setIsOpen(!isOpen);
          if (showTooltip) setShowTooltip(false);
        }}
        className="md:hidden w-12 h-12 bg-amber-500 text-black rounded-full flex items-center justify-center shadow-2xl hover:bg-amber-600 transition-colors"
        aria-label="Toggle Contact Drawer"
      >
        {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>
    </div>
  );
}
