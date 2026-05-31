"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Award, Users, BookOpen, LineChart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import confetti from "canvas-confetti";

const franchiseBenefits = [
  {
    icon: Award,
    title: "Established Brand Equity",
    desc: "Leverage a premium culinary name known for uncompromising quality, low overrun, and 100% natural, slow-churned formulations.",
  },
  {
    icon: BookOpen,
    title: "End-to-End Training",
    desc: "Comprehensive onboarding covering inventory systems, hygiene guidelines, customer relations, and folding table techniques.",
  },
  {
    icon: Users,
    title: "Marketing & Launch Support",
    desc: "National PR, targeted localized digital advertising, social campaigns, and influencer collaborations designed to drive footfall.",
  },
  {
    icon: LineChart,
    title: "Integrated Supply Chain",
    desc: "Stable cold-chain logistics transporting A2 dairy bases directly from our central labs to your boutique, ensuring consistency.",
  },
];

const investmentFormats = [
  {
    format: "Express Kiosk Model",
    investment: "₹12 - 15 Lakhs",
    space: "150 - 250 sq.ft.",
    roi: "42% ROI",
  },
  {
    format: "Boutique Cafe Model",
    investment: "₹25 - 30 Lakhs",
    space: "500 - 800 sq.ft.",
    roi: "38% ROI",
  },
  {
    format: "Experience Salon Model",
    investment: "₹45 - 50 Lakhs",
    space: "1000 - 1500 sq.ft.",
    roi: "35% ROI",
  }
];

export default function Contact() {
  const [formType, setFormType] = useState<"franchise" | "general">("franchise");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [franchiseCity, setFranchiseCity] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !phone) return;

    setIsSubmitted(true);

    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#C9A227", "#111111", "#F8F4EE"],
    });

    setTimeout(() => {
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setFranchiseCity("");
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden border-b border-border-luxury">
      {/* Background soft gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-cream rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-[90%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Brand Franchise Presentation (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScrollReveal y={30} duration={0.8}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-accent-gold" />
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-gold">
                  Franchise Opportunity
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-primary leading-[1.1] mb-8">
                Own A Piece Of <span className="text-gold-gradient">iCream</span>
              </h2>

              <p className="font-sans text-brand-secondary text-sm md:text-base leading-relaxed mb-12">
                Join India's fastest-growing super-premium dessert network. We are seeking visionaries to establish Flagship Salons and Experience Galleries in key tier-1 and tier-2 metros.
              </p>
            </ScrollReveal>

            {/* Investment Formats Cards */}
            <div className="flex flex-col gap-4 mb-12">
              {investmentFormats.map((format, idx) => (
                <ScrollReveal key={format.format} y={15} duration={0.6} delay={idx * 0.08}>
                  <div className="bg-white border border-border-luxury p-5 rounded-2xl flex items-center justify-between shadow-[0_4px_12px_rgba(0,0,0,0.01)] hover:border-accent-gold/45 transition-all duration-300">
                    <div className="w-[45%]">
                      <span className="font-sans text-[9px] font-bold text-accent-gold uppercase tracking-widest block">
                        Format
                      </span>
                      <span className="font-serif text-sm font-extrabold text-brand-primary mt-1 block">
                        {format.format}
                      </span>
                    </div>
                    <div className="w-[30%]">
                      <span className="font-sans text-[9px] font-bold text-brand-secondary uppercase tracking-widest block">
                        Investment
                      </span>
                      <span className="font-sans text-xs font-semibold text-brand-primary mt-1 block">
                        {format.investment}
                      </span>
                    </div>
                    <div className="w-[25%] text-right">
                      <span className="font-sans text-[9px] font-bold text-accent-gold uppercase tracking-widest block">
                        Est. Return
                      </span>
                      <span className="font-sans text-xs font-extrabold text-green-650 text-green-600 mt-1 block">
                        {format.roi}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Support Pillars Grid */}
            <div className="space-y-8 mb-12">
              {franchiseBenefits.map((benefit, idx) => {
                const Icon = benefit.icon;
                return (
                  <ScrollReveal key={benefit.title} y={20} duration={0.6} delay={idx * 0.08}>
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white border border-border-luxury flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon className="w-5 h-5 text-accent-gold stroke-[1.5]" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-bold text-brand-primary">{benefit.title}</h4>
                        <p className="font-sans text-xs text-brand-secondary mt-1.5 leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Direct Lines */}
            <ScrollReveal y={20} duration={0.6} delay={0.4}>
              <div className="border-t border-border-luxury pt-8 flex flex-col sm:flex-row gap-6 text-xs text-brand-secondary">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent-gold" />
                  <span>1800 208 7780 (Toll Free)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent-gold" />
                  <span>franchise@icream.in</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Form Card (7 Columns) */}
          <div className="lg:col-span-7 w-full">
            <ScrollReveal y={40} duration={0.9} delay={0.25}>
              <div className="bg-white border border-border-luxury rounded-[36px] p-8 md:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.015)] hover:border-accent-gold/25 transition-all duration-700">
                
                {/* Form Mode Selector tabs */}
                <div className="flex items-center border-b border-border-luxury pb-5 mb-8">
                  <button
                    type="button"
                    onClick={() => setFormType("franchise")}
                    className={`pb-3 font-sans text-xs font-bold uppercase tracking-widest relative mr-8 transition-colors ${
                      formType === "franchise" ? "text-brand-primary" : "text-brand-secondary hover:text-brand-primary"
                    }`}
                  >
                    Franchise Application
                    {formType === "franchise" && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-gold" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormType("general")}
                    className={`pb-3 font-sans text-xs font-bold uppercase tracking-widest relative transition-colors ${
                      formType === "general" ? "text-brand-primary" : "text-brand-secondary hover:text-brand-primary"
                    }`}
                  >
                    Catering & Events
                    {formType === "general" && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent-gold" />
                    )}
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center py-16 text-center"
                    >
                      <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-6 border border-green-200">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <h3 className="font-serif text-2xl font-extrabold text-brand-primary mb-3">
                        Proposal Securely Received
                      </h3>
                      <p className="font-sans text-brand-secondary text-xs md:text-sm leading-relaxed max-w-sm">
                        {formType === "franchise"
                          ? "Thank you for your application. Our Business Expansion Director will coordinate with you via telephone within 48 business hours."
                          : "Thank you for reaching out. A guest relations manager will assist you shortly."}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key={formType}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      {/* Info Notice */}
                      {formType === "franchise" && (
                        <div className="p-4 bg-white border border-border-luxury rounded-xl">
                          <span className="font-sans text-[10.5px] font-bold text-green-650 text-green-600 block leading-relaxed uppercase tracking-wider">
                            ★ India Expansion Phase 2: Reviewing proposals for Master Franchise and Individual Outlets in Tier 1 & 2 cities.
                          </span>
                          <p className="font-sans text-[10px] text-brand-secondary mt-1.5 leading-relaxed">
                            *All financial estimates are audited under <span className="text-accent-gold font-bold">corporate FSSAI & retail guidelines</span>. Average EBITDA ranges from <span className="text-green-600 font-bold">35% to 42%</span> based on standard format audits.
                          </p>
                        </div>
                      )}

                      {/* Name Input */}
                      <div>
                        <label className="font-sans text-[9px] font-bold text-brand-primary uppercase tracking-widest block mb-2 ml-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="E.g. Rohan Mehta"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-white border border-border-luxury rounded-xl px-5 py-4 font-sans text-xs md:text-sm text-brand-primary focus:outline-none focus:border-accent-gold transition-colors placeholder:text-gray-300"
                        />
                      </div>

                      {/* Email & Phone Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="font-sans text-[9px] font-bold text-brand-primary uppercase tracking-widest block mb-2 ml-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="rohan@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white border border-border-luxury rounded-xl px-5 py-4 font-sans text-xs md:text-sm text-brand-primary focus:outline-none focus:border-accent-gold transition-colors placeholder:text-gray-300"
                          />
                        </div>
                        <div>
                          <label className="font-sans text-[9px] font-bold text-brand-primary uppercase tracking-widest block mb-2 ml-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 99999 99999"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-white border border-border-luxury rounded-xl px-5 py-4 font-sans text-xs md:text-sm text-brand-primary focus:outline-none focus:border-accent-gold transition-colors placeholder:text-gray-300"
                          />
                        </div>
                      </div>

                      {/* Dynamic Franchise Field */}
                      {formType === "franchise" && (
                        <div>
                          <label className="font-sans text-[9px] font-bold text-brand-primary uppercase tracking-widest block mb-2 ml-1">
                            Proposed Territory / City
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="E.g. South Bengaluru, Indiranagar"
                            value={franchiseCity}
                            onChange={(e) => setFranchiseCity(e.target.value)}
                            className="w-full bg-white border border-border-luxury rounded-xl px-5 py-4 font-sans text-xs md:text-sm text-brand-primary focus:outline-none focus:border-accent-gold transition-colors placeholder:text-gray-300"
                          />
                        </div>
                      )}

                      {/* Message Area */}
                      <div>
                        <label className="font-sans text-[9px] font-bold text-brand-primary uppercase tracking-widest block mb-2 ml-1">
                          {formType === "franchise" ? "Investment & Business Overview" : "Event / Inquiry Details"}
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder={
                            formType === "franchise"
                              ? "Briefly outline your previous retail/food service experience and your investment capacity."
                              : "Details regarding your event location, guest count, and preferred custom flavors."
                          }
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full bg-white border border-border-luxury rounded-xl px-5 py-4 font-sans text-xs md:text-sm text-brand-primary focus:outline-none focus:border-accent-gold transition-colors placeholder:text-gray-300 resize-none font-sans"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full group bg-brand-primary hover:bg-accent-gold text-white font-sans text-xs font-bold uppercase tracking-widest py-4.5 rounded-full flex items-center justify-center gap-2.5 transition-all duration-500 shadow-md hover:shadow-lg"
                      >
                        {formType === "franchise" ? "Submit Corporate Proposal" : "Send Event Query"}
                        <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-350" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
