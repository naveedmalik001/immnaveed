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

      // Play synthesized welcome audio feedback
      playWelcome();

      // Show tooltip exactly when the sound plays
      setShowTooltip(true);
      if (window.innerWidth < 768) {
        setIsOpen(true);
      }

      // Clean up event listeners once triggered
      window.removeEventListener("click", triggerNotification);
      window.removeEventListener("touchstart", triggerNotification);
      window.removeEventListener("keydown", triggerNotification);
    };

    // We wait for the user's first interaction to bypass Chrome's Autoplay Policy
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
        className={`bg-white text-brand-black px-4 py-3 rounded-2xl rounded-bl-sm shadow-2xl border border-neutral-100 flex items-center gap-3 transition-all duration-500 ease-out origin-bottom-left ${
          showTooltip ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-semibold tracking-tight text-neutral-800">How can we help you?</span>
        <button 
          onClick={() => {
            playClick();
            setShowTooltip(false);
          }} 
          className="text-neutral-400 hover:text-brand-orange transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Action Buttons (Vertical, Sliding) */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-8 pointer-events-none md:scale-100 md:opacity-100 md:translate-y-0 md:pointer-events-auto"
        }`}
      >
        {/* Phone Button */}
        <a 
          href="tel:+919018636473" 
          onClick={playClick}
          onMouseEnter={playHover}
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200 relative group"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute left-16 bg-brand-black text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md whitespace-nowrap">
            Call Directly
          </span>
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919018636473" 
          target="_blank" 
          rel="noreferrer" 
          onClick={playClick}
          onMouseEnter={playHover}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-200 relative group"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="absolute left-16 bg-brand-black text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md whitespace-nowrap">
            WhatsApp Live
          </span>
        </a>

        {/* Email Button */}
        <a 
          href="mailto:business@immnaveed.in" 
          onClick={playClick}
          onMouseEnter={playHover}
          className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 hover:scale-110 transition-all duration-200 relative group"
          aria-label="Email Us"
        >
          <Mail className="w-6 h-6" />
          <span className="absolute left-16 bg-brand-black text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md whitespace-nowrap">
            Email Us
          </span>
        </a>
      </div>

      {/* Mobile Toggle Button (Visible only on small devices) */}
      <button 
        onClick={() => {
          playClick();
          setIsOpen(!isOpen);
          if (showTooltip) setShowTooltip(false);
        }} 
        className="md:hidden w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-xl shadow-orange-900/30 hover:bg-orange-600 transition-colors"
        aria-label="Toggle contact options"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
