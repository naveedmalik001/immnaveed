"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/shared/SectionHeader";
import { Send, CheckCircle2, MessageSquare, ShieldCheck, ArrowRight, Clock, Award, ChevronRight } from "lucide-react";
import { useSound } from "@/hooks/useSound";

const serviceOptions = [
  { id: "s1", label: "Executive Brand Strategy & Positioning", icon: "Strategy" },
  { id: "s2", label: "Meta & Google Performance Ads (ROAS)", icon: "Ads" },
  { id: "s3", label: "Next.js 15 Web & Software Engineering", icon: "Tech" },
  { id: "s4", label: "Custom ERP & Admission Systems", icon: "Systems" },
  { id: "s5", label: "Corporate Mobility & Legal Consultation", icon: "Legal" },
];

export default function BookingWidget() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "Educational Institutions",
    service: "Executive Brand Strategy & Positioning",
    budget: "₹50,000 – ₹1,00,000",
    timeline: "Immediate / Within 14 Days",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const { playClick, playHover } = useSound();

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    if (step < 3) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);

    const waText = encodeURIComponent(
      `Hello Er. Naveed Malik,\n\nI would like to schedule an Executive Strategy Consultation session.\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}\n*Company:* ${form.company}\n*Service:* ${form.service}\n*Target Budget:* ${form.budget}\n*Timeline:* ${form.timeline}\n*Brief Notes:* ${form.message}`
    );
    const waUrl = `https://wa.me/919018636473?text=${waText}`;

    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1200);
  };

  return (
    <section id="contact" className="section-pad-luxury bg-zinc-950 font-sans border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <SectionHeader
          badgeText="Executive Strategy Consultation"
          title="Engineered for Business Leaders Ready to"
          gradientTitle="Scale Predictably."
          subtitle="Schedule a 1-on-1 consultation session directly with Er. Naveed Malik. We audit your growth levers and formulate a bespoke execution roadmap."
          centered
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-8">
          
          {/* Main Interactive Form Card */}
          <div className="lg:col-span-8 luxury-card rounded-3xl p-6 sm:p-10 border border-zinc-800 bg-zinc-900/80">
            
            {/* Step Progress Indicator */}
            {!submitted && (
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-amber-500 text-black font-black text-xs flex items-center justify-center">
                    {step}
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-white">
                    {step === 1 && "Select Service & Scope"}
                    {step === 2 && "Timeline & Budget Tier"}
                    {step === 3 && "Contact Details & Brief"}
                  </span>
                </div>
                <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">
                  Step {step} of 3
                </span>
              </div>
            )}

            {submitted ? (
              <div className="py-12 text-center animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">Consultation Brief Transmitted!</h3>
                <p className="text-sm text-zinc-400 max-w-md mx-auto mb-6 leading-relaxed">
                  Connecting you directly to Er. Naveed Malik via WhatsApp for priority scheduling...
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/919018636473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-amber-500 text-black font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl hover:bg-amber-600 transition-colors shadow-lg"
                  >
                    <span>Open WhatsApp Directly</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 text-zinc-300 font-black text-xs uppercase tracking-widest px-6 py-3.5 rounded-xl hover:text-white"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNextStep} className="space-y-6">
                
                {/* STEP 1: Select Service */}
                {step === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                      Select Primary Capability Needed *
                    </label>
                    <div className="space-y-3">
                      {serviceOptions.map((opt) => {
                        const isSelected = form.service === opt.label;
                        return (
                          <div
                            key={opt.id}
                            onClick={() => {
                              playClick();
                              setForm({ ...form, service: opt.label });
                            }}
                            onMouseEnter={playHover}
                            className={`p-4 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                              isSelected
                                ? "bg-amber-500/10 border-amber-500 text-white"
                                : "bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700"
                            }`}
                          >
                            <span className="text-xs font-black uppercase tracking-wider">{opt.label}</span>
                            <div
                              className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                isSelected ? "border-amber-500 bg-amber-500 text-black" : "border-zinc-700"
                              }`}
                            >
                              {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: Timeline & Budget */}
                {step === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                        Target Execution Timeline *
                      </label>
                      <select
                        value={form.timeline}
                        onChange={(e) => setForm({ ...form, timeline: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
                      >
                        {[
                          "Immediate / Urgent (Within 7 Days)",
                          "Standard (Within 14 – 30 Days)",
                          "Q3/Q4 Strategic Planning",
                        ].map((t) => (
                          <option key={t} value={t} className="bg-zinc-900 text-white">
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-2">
                        Estimated Budget Allocation *
                      </label>
                      <select
                        value={form.budget}
                        onChange={(e) => setForm({ ...form, budget: e.target.value })}
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3.5 rounded-xl text-sm font-semibold text-white cursor-pointer"
                      >
                        {[
                          "₹25,000 – ₹50,000 (Single Audit / Setup)",
                          "₹50,000 – ₹1,00,000 (Growth Engine Build)",
                          "₹1,00,000 – ₹2,50,000 (Full Retainer & Engineering)",
                          "₹2,50,000+ (Enterprise Custom Platform)",
                        ].map((b) => (
                          <option key={b} value={b} className="bg-zinc-900 text-white">
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact Details & Brief */}
                {step === 3 && (
                  <div className="space-y-5 animate-fadeIn">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Vikram Sharma"
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3 rounded-xl text-sm font-semibold text-white placeholder:text-zinc-600"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                          Phone / WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3 rounded-xl text-sm font-semibold text-white placeholder:text-zinc-600"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Cambridge Education / Enterprise"
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3 rounded-xl text-sm font-semibold text-white placeholder:text-zinc-600"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                          Business Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="vikram@company.com"
                          className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3 rounded-xl text-sm font-semibold text-white placeholder:text-zinc-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] font-black uppercase tracking-widest text-zinc-400 mb-2">
                        Project Brief & Growth Target *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Briefly describe your business goals, target audience, or current bottlenecks..."
                        className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500 focus:outline-none px-4 py-3 rounded-xl text-sm font-semibold text-white placeholder:text-zinc-600 resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Controls (Right-aligned Primary Trigger) */}
                <div className="flex items-center justify-between pt-6 border-t border-zinc-800">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => {
                        playClick();
                        setStep(step - 1);
                      }}
                      className="px-5 py-3 rounded-xl border border-zinc-800 text-zinc-400 hover:text-white text-xs font-black uppercase tracking-widest"
                    >
                      Back
                    </button>
                  ) : <div />}

                  <button
                    type="submit"
                    onMouseEnter={playHover}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-black text-xs uppercase tracking-widest px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                  >
                    <span>{step === 3 ? "Transmit Request Brief" : "Continue to Next Step"}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            )}

          </div>

          {/* Right Information & NDA Guarantee Panel */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="bg-zinc-900/80 p-6 rounded-3xl border border-zinc-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-white">What Happens Next?</h4>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">30-Min Strategy Call</p>
                </div>
              </div>

              <ul className="space-y-2.5 pt-2 border-t border-zinc-800/80">
                <li className="text-xs text-zinc-300 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Direct 1-on-1 video call with Er. Naveed Malik.</span>
                </li>
                <li className="text-xs text-zinc-300 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Review of CAC, conversion bottlenecks, & target metrics.</span>
                </li>
                <li className="text-xs text-zinc-300 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>Receive a custom PDF execution roadmap.</span>
                </li>
              </ul>
            </div>

            <div className="bg-zinc-900/80 p-6 rounded-3xl border border-zinc-800 space-y-3">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold text-white">Direct WhatsApp Assistance</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed font-medium">
                Need an immediate response or custom enterprise proposal? Speak directly with Er. Naveed Malik on WhatsApp.
              </p>
              <a
                href="https://wa.me/919018636473"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClick}
                className="inline-flex items-center gap-2 text-xs font-black text-emerald-400 hover:text-emerald-300 uppercase tracking-widest pt-1"
              >
                <span>Chat on WhatsApp (+91 9018636473)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800/80 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <p className="text-[11px] text-zinc-400 font-medium leading-normal">
                Strict Non-Disclosure Guarantee. All client metrics and project details are held under mutual NDA.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
