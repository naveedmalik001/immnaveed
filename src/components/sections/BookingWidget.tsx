"use client";

import React, { useState } from "react";
import { useSound } from "@/hooks/useSound";
import { CheckCircle2, Mail, Phone, ArrowRight, MessageSquare, Lock, ShieldCheck } from "lucide-react";

const serviceOptions = [
  "Website Design & Next.js Development (UI/UX)",
  "Custom Software & ERP Development (Education/Hospitals/Business)",
  "Business Growth & Strategy Consultation",
  "Social Media Marketing (Meta & Google Ads)",
  "Graphic Designing & Content Creation",
  "Video Shoots & Reel Production",
  "Video Editing & Post-Production",
  "Data Analysis & Business Intelligence",
  "Wedding Shoots & In-House Event Production",
  "Complete Agency Retainer",
];

export default function BookingWidget() {
  const [form, setForm] = useState({
    name:    "",
    contact: "",
    service: "Website Design & Next.js Development (UI/UX)",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { playClick, playHover } = useSound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Hello IMMNAVEED & Team,\n\nI would like to schedule a strategy session / project consultation.\n\n*Name:* ${form.name}\n*Contact (Email/Phone):* ${form.contact}\n*Service:* ${form.service}\n*Project Brief:* ${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919018636473?text=${waText}`, "_blank");
    }, 1000);
  };

  return (
    <section id="contact" className="section-pad bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] bg-grid-blueprint border-b border-slate-800 relative overflow-hidden font-sans">
      
      {/* Ambient background blur */}
      <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-[#14B8C4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 bg-[#F7931E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Left Column: Heading & Trust Signals */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <span className="badge-teal text-xs py-1 px-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                Direct Client Consultation
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.08]">
              Schedule Your Web, Software &amp;<br />
              <span className="text-gradient-teal">Growth Strategy Session.</span>
            </h2>

            <div className="teal-divider-line" />

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-sm font-normal">
              Speak directly with IMMNAVEED &amp; Team to discuss your Next.js website, custom ERP, marketing funnels, or video shoot.
            </p>

            {/* Trust Signals */}
            <div className="space-y-3 border-t border-slate-700/80 pt-5">
              {[
                "100% Confidential — NDA signed on request",
                "Guaranteed reply within 24 business hours",
                "Direct in-house engineers & creators — zero middlemen",
                "Custom ERP demos for schools, clinics & businesses",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8C4] flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Cards */}
            <div className="p-4 rounded-2xl bg-[#082852]/90 border border-slate-700/80 space-y-2.5">
              <div className="flex items-center gap-3 text-xs font-semibold text-white">
                <div className="w-8 h-8 rounded-lg bg-[#14B8C4]/15 flex items-center justify-center text-[#14B8C4]">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:business@immnaveed.in" className="hover:text-[#14B8C4] transition-colors">
                  business@immnaveed.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-white">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919018636473" className="hover:text-[#14B8C4] transition-colors">
                  +91 9018636473
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Form Card */}
          <div className="lg:col-span-7 bg-[#05244C]/95 backdrop-blur-md border border-slate-700/80 p-7 sm:p-9 rounded-3xl shadow-2xl">
            {submitted ? (
              <div className="py-10 text-center animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white mb-2 tracking-tight">
                  Consultation Request Transmitted
                </h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6 leading-relaxed">
                  Redirecting to WhatsApp for direct priority scheduling with IMMNAVEED &amp; Team.
                </p>
                <a
                  href="https://wa.me/919018636473"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-sm font-semibold"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Directly</span>
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Suhail Wahid"
                      className="input-cambridge"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email / WhatsApp Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      placeholder="e.g. +91 90186 36473"
                      className="input-cambridge"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    onFocus={playHover}
                    className="input-cambridge cursor-pointer"
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-[#031730] text-white">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Project Brief &amp; Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your website vision, ERP/software requirements, marketing goals, or shoot dates..."
                    className="input-cambridge resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-[#14B8C4]" />
                    <span>256-bit Encrypted &amp; Confidential</span>
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={playHover}
                    className="btn-orange text-sm font-semibold cursor-pointer shadow-lg"
                  >
                    <span>Request Strategy Session</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
