"use client";

import React, { useState } from "react";
import { useSound } from "@/hooks/useSound";
import { CheckCircle2, Mail, Phone, ArrowRight, MessageSquare, ShieldCheck, Lock } from "lucide-react";

export default function BookingWidget() {
  const [form, setForm] = useState({
    name:    "",
    contact: "",
    service: "Brand Strategy & Positioning",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const { playClick, playHover } = useSound();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Hello Er. Naveed Malik,\n\nI would like to schedule a strategy consultation.\n\n*Name:* ${form.name}\n*Contact (Email/Phone):* ${form.contact}\n*Service:* ${form.service}\n*Brief Notes:* ${form.message}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919018636473?text=${waText}`, "_blank");
    }, 1000);
  };

  return (
    <section id="contact" className="section-pad bg-gradient-to-br from-[#041E42] via-[#05244C] to-[#031730] bg-grid-blueprint border-b border-slate-800 relative overflow-hidden">
      
      {/* Ambient background blur */}
      <div className="absolute w-[500px] h-[500px] -top-20 -right-20 bg-[#14B8C4]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] -bottom-20 -left-20 bg-[#F7931E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Heading & Trust Signals */}
          <div className="lg:col-span-5">
            <div className="mb-3.5">
              <span className="badge-teal">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8C4] animate-pulse" />
                Direct Strategy Advisory
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-4">
              Schedule Your 1-on-1<br />
              <span className="text-gradient-teal">Strategy Session.</span>
            </h2>

            <div className="teal-divider-line" />

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-sm font-normal">
              Speak directly with Er. Naveed Malik to audit your current business bottlenecks and formulate a bespoke growth roadmap.
            </p>

            {/* Trust Signals */}
            <div className="space-y-3 border-t border-slate-700/60 pt-6 mb-8">
              {[
                "100% Confidential — NDA signed on request",
                "Reply guaranteed within 24 business hours",
                "No obligation — initial feasibility review",
                "Direct access to principal growth strategist",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#14B8C4] flex-shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Cards */}
            <div className="p-4 rounded-2xl bg-[#031730]/90 border border-slate-700/60 space-y-2.5">
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-200">
                <div className="w-7 h-7 rounded-lg bg-[#14B8C4]/15 flex items-center justify-center text-[#14B8C4]">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <a href="mailto:business@immnaveed.in" className="hover:text-[#14B8C4] transition-colors">
                  business@immnaveed.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-slate-200">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <a href="tel:+919018636473" className="hover:text-[#14B8C4] transition-colors">
                  +91 9018636473
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: High-Converting Form Card */}
          <div className="lg:col-span-7 bg-[#05244C]/95 backdrop-blur-md border border-slate-700/60 p-7 sm:p-10 rounded-3xl shadow-2xl">
            {submitted ? (
              <div className="py-10 text-center animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white mb-2 tracking-tight">
                  Consultation Request Transmitted
                </h3>
                <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6 leading-relaxed">
                  Redirecting to WhatsApp for direct priority scheduling with Er. Naveed Malik.
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
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Vikram Sharma"
                      className="input-cambridge"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                      Email / WhatsApp Phone *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.contact}
                      onChange={(e) => setForm({ ...form, contact: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="input-cambridge"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Primary Capability Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    onFocus={playHover}
                    className="input-cambridge cursor-pointer"
                  >
                    {[
                      "Brand Strategy & Positioning",
                      "Meta & Google Performance Ads",
                      "Next.js 15 Web Engineering",
                      "Executive Growth Consulting",
                      "Complete Agency Retainer",
                    ].map((s) => (
                      <option key={s} value={s} className="bg-[#031730] text-white">{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Project Brief &amp; Current Bottlenecks *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your brand goals, target timeline, or current acquisition challenges..."
                    className="input-cambridge resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-[#14B8C4]" />
                    <span>256-bit Encrypted &amp; Confidential</span>
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={playHover}
                    className="btn-orange text-sm font-semibold"
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
