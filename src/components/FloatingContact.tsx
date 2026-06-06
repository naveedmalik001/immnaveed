"use client";

import { useState, useEffect } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    let hasPlayed = false;

    const triggerNotification = async () => {
      if (hasPlayed) return;
      hasPlayed = true;

      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        if (!AudioContextClass) return;
        
        const audioCtx = new AudioContextClass();
        
        // Browsers require a user gesture to resume the audio context
        if (audioCtx.state === 'suspended') {
          await audioCtx.resume();
        }

        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.2, audioCtx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
        
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.3);
      } catch (e) {
        console.warn("Audio play failed:", e);
      }

      // Show tooltip exactly when the sound plays
      setShowTooltip(true);
      if (window.innerWidth < 768) {
        setIsOpen(true);
      }

      // Clean up event listeners once triggered
      window.removeEventListener('click', triggerNotification);
      window.removeEventListener('touchstart', triggerNotification);
      window.removeEventListener('keydown', triggerNotification);
    };

    // We wait for the user's first interaction to bypass Chrome's Autoplay Policy
    window.addEventListener('click', triggerNotification, { once: true });
    window.addEventListener('touchstart', triggerNotification, { once: true });
    window.addEventListener('keydown', triggerNotification, { once: true });

    return () => {
      window.removeEventListener('click', triggerNotification);
      window.removeEventListener('touchstart', triggerNotification);
      window.removeEventListener('keydown', triggerNotification);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* Notification Tooltip */}
      <div 
        className={`bg-white text-brand-black px-4 py-3 rounded-2xl rounded-br-sm shadow-2xl border border-neutral-100 flex items-center gap-3 transition-all duration-500 ease-out origin-bottom-right ${
          showTooltip ? "scale-100 opacity-100 translate-y-0" : "scale-50 opacity-0 translate-y-8 pointer-events-none"
        }`}
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-sm font-semibold tracking-tight">How can we help you?</span>
        <button 
          onClick={() => setShowTooltip(false)} 
          className="text-neutral-400 hover:text-brand-orange transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Action Buttons (Vertical) */}
      <div 
        className={`flex flex-col gap-3 transition-all duration-300 origin-bottom ${
          isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-75 opacity-0 translate-y-8 pointer-events-none md:scale-100 md:opacity-100 md:translate-y-0 md:pointer-events-auto"
        }`}
      >
        {/* Phone Button */}
        <a 
          href="tel:+919469328661" 
          className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 hover:scale-110 transition-all duration-200"
          aria-label="Call Us"
        >
          <Phone className="w-6 h-6" />
        </a>

        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/919469328661" 
          target="_blank" 
          rel="noreferrer" 
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#20bd5a] hover:scale-110 transition-all duration-200"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-7 h-7" />
        </a>
      </div>

      {/* Mobile Toggle Button */}
      <button 
        onClick={() => {
          setIsOpen(!isOpen);
          if (showTooltip) setShowTooltip(false); // hide tooltip when toggling manually to keep UI clean
        }} 
        className="md:hidden w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-xl shadow-orange-900/30 hover:bg-orange-600 transition-colors"
        aria-label="Toggle contact options"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
}
