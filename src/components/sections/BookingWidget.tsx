"use client";

import React, { useState } from "react";
import { useSound } from "@/hooks/useSound";
import { CheckCircle2, Mail, Phone, ArrowRight, MessageSquare, Lock, Loader2, Sparkles, Building2, User, Send } from "lucide-react";

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
    name:     "",
    firmName: "",
    email:    "",
    phone:    "",
    service:  "Website Design & Next.js Development (UI/UX)",
    message:  "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { playClick, playHover } = useSound();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      // 1. Persist lead directly into the Database via API
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          sourceUrl: typeof window !== "undefined" ? window.location.href : "https://www.immnaveed.in",
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to save inquiry");
      }

      setSubmitted(true);

      // 2. Open pre-filled WhatsApp conversation in new tab
      const waText = encodeURIComponent(
        `Hello IMMNAVEED & Team,\n\nI have submitted an official inquiry on your website.\n\n*Name:* ${form.name}\n*Company/Firm:* ${form.firmName || "N/A"}\n*Email:* ${form.email}\n*WhatsApp:* ${form.phone}\n*Service:* ${form.service}\n*Brief:* ${form.message}`
      );
      setTimeout(() => {
        window.open(`https://wa.me/919018636473?text=${waText}`, "_blank");
      }, 1200);

    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMsg("An error occurred while saving your inquiry. Please contact us directly via WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-pad bg-[#041E42] text-white border-t border-b border-slate-800 relative overflow-hidden font-sans select-none"
      style={{ backgroundColor: "#041E42" }}
    >
      
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Ambient background glows */}
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
              <span className="text-[#14B8C4]">Growth Strategy Session.</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-sm font-normal">
              Speak directly with <strong className="text-white font-bold">IMMNAVEED &amp; Team</strong> to discuss your Next.js website, custom ERP, marketing funnels, or video shoot.
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
                  <span className="text-xs font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Cards */}
            <div className="p-4 rounded-2xl bg-[#082852] border border-slate-700/80 space-y-2.5 shadow-md">
              <div className="flex items-center gap-3 text-xs font-semibold text-white">
                <div className="w-8 h-8 rounded-lg bg-[#14B8C4]/15 flex items-center justify-center text-[#14B8C4]">
                  <Mail className="w-4 h-4" />
                </div>
                <a href="mailto:business@immnaveed.in" className="hover:text-[#14B8C4] transition-colors text-slate-200 hover:text-white">
                  business@immnaveed.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-white">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919018636473" className="hover:text-[#14B8C4] transition-colors text-slate-200 hover:text-white">
                  +91 9018636473
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Form Card with Database Integration */}
          <div className="lg:col-span-7 bg-[#082852] border border-slate-700/90 p-7 sm:p-9 rounded-3xl shadow-2xl">
            {submitted ? (
              <div className="py-10 text-center animate-fadeIn space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-white tracking-tight">
                  Inquiry Successfully Recorded
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 max-w-sm mx-auto leading-relaxed">
                  Your project brief has been logged into our client database. Opening WhatsApp for direct priority dispatch with IMMNAVEED &amp; Team.
                </p>
                
                <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center items-center">
                  <a
                    href="https://wa.me/919018636473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp text-xs py-3 px-6 rounded-xl font-bold inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open WhatsApp Directly</span>
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        firmName: "",
                        email: "",
                        phone: "",
                        service: "Website Design & Next.js Development (UI/UX)",
                        message: "",
                      });
                    }}
                    className="text-xs text-slate-300 hover:text-white underline p-2 cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {errorMsg && (
                  <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your Full Name"
                      className="w-full px-4 py-3 rounded-xl bg-[#031730] border border-slate-700 text-white placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-[#14B8C4] focus:ring-1 focus:ring-[#14B8C4]"
                    />
                  </div>

                  {/* Company / Firm Name */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Company / Business Name
                    </label>
                    <input
                      type="text"
                      value={form.firmName}
                      onChange={(e) => setForm({ ...form, firmName: e.target.value })}
                      placeholder="Your Company / Firm"
                      className="w-full px-4 py-3 rounded-xl bg-[#031730] border border-slate-700 text-white placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-[#14B8C4] focus:ring-1 focus:ring-[#14B8C4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email Address */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-[#031730] border border-slate-700 text-white placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-[#14B8C4] focus:ring-1 focus:ring-[#14B8C4]"
                    />
                  </div>

                  {/* WhatsApp Phone */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 91234 56789"
                      className="w-full px-4 py-3 rounded-xl bg-[#031730] border border-slate-700 text-white placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-[#14B8C4] focus:ring-1 focus:ring-[#14B8C4]"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                    Primary Service Needed
                  </label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    onFocus={playHover}
                    className="w-full px-4 py-3 rounded-xl bg-[#031730] border border-slate-700 text-white text-xs font-medium focus:outline-none focus:border-[#14B8C4] focus:ring-1 focus:ring-[#14B8C4] cursor-pointer"
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-[#031730] text-white">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Project Brief */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-200 mb-1.5">
                    Project Brief &amp; Requirements *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us about your website vision, ERP/software requirements, marketing goals, or shoot dates..."
                    className="w-full px-4 py-3 rounded-xl bg-[#031730] border border-slate-700 text-white placeholder-slate-400 text-xs font-medium focus:outline-none focus:border-[#14B8C4] focus:ring-1 focus:ring-[#14B8C4] resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div className="flex items-center gap-1.5 text-slate-300 text-xs font-medium">
                    <Lock className="w-3.5 h-3.5 text-[#14B8C4]" />
                    <span>256-bit Encrypted &amp; Stored Securely</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={playHover}
                    className="btn-orange text-xs py-3 px-6 rounded-xl font-bold uppercase tracking-wider cursor-pointer shadow-lg inline-flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Recording Inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Request Strategy Session</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
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
