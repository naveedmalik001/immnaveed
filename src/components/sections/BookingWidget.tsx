"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, ShieldCheck, ArrowRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";

export default function BookingWidget() {
  const [form, setForm] = useState({
    name: "",
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
    const waUrl = `https://wa.me/919018636473?text=${waText}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1000);
  };

  return (
    <section id="contact" className="section-pad-minimal bg-zinc-950 font-sans border-b border-zinc-900 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-500 block mb-2">
            Direct Consultation Call
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Schedule 1-on-1 Session.
          </h2>
          <p className="text-sm text-zinc-400 font-medium mt-3">
            Speak directly with Er. Naveed Malik to audit your current business bottlenecks and formulate a bespoke growth roadmap.
          </p>
        </div>

        {/* Minimal Form Box */}
        <div className="minimal-card rounded-3xl p-6 sm:p-10 bg-zinc-900/60 border border-zinc-800">
          {submitted ? (
            <div className="py-10 text-center animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4 text-amber-400">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-white mb-2">Consultation Request Transmitted</h3>
              <p className="text-xs text-zinc-400 max-w-sm mx-auto mb-6">
                Redirecting to WhatsApp for instant priority scheduling with Er. Naveed Malik...
              </p>
              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-500 text-black font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-amber-600 transition-colors shadow-md"
              >
                <span>Open WhatsApp Directly</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Vikram Sharma"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3 rounded-xl text-sm text-white placeholder:text-zinc-600 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                    Email / WhatsApp Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="vikram@company.com or +91 98765..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3 rounded-xl text-sm text-white placeholder:text-zinc-600 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  Primary Capability Needed *
                </label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3 rounded-xl text-sm font-semibold text-white transition-colors cursor-pointer"
                >
                  {[
                    "Brand Strategy & Positioning",
                    "Meta & Google Performance Ads",
                    "Next.js 15 Web Engineering",
                    "Executive Growth Consulting",
                  ].map((s) => (
                    <option key={s} value={s} className="bg-zinc-900 text-white">
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-2">
                  Project Brief & Objectives *
                </label>
                <textarea
                  required
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your brand goals or current growth challenges..."
                  className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3 rounded-xl text-sm text-white placeholder:text-zinc-600 resize-none transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>100% Confidential NDA Guarantee</span>
                </div>

                <button
                  type="submit"
                  onMouseEnter={playHover}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/10 cursor-pointer"
                >
                  <span>Request Strategy Session</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
