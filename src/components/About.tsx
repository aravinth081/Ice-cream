"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

interface StatItemProps {
  value: number;
  suffix: string;
  label: string;
  colorClass?: string;
}

function StatCard({ value, suffix, label, colorClass }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    const end = value;
    const duration = 1.8;
    const totalFrames = 60 * duration;
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const current = Math.floor(end * (1 - Math.pow(1 - progress, 3)));
      
      setCount(current);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className="bg-white p-8 rounded-2xl border border-border-luxury flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-accent-gold/30 transition-all duration-500 hover:shadow-[0_15px_30px_rgba(212,175,55,0.04)]"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-accent-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
      <span className={`font-sans text-3xl md:text-4xl font-black tracking-tight mb-2 ${colorClass || "text-brand-primary"}`}>
        {count}
        {suffix}
      </span>
      <span className="font-sans text-[10px] font-bold text-brand-secondary uppercase tracking-widest leading-normal">
        {label}
      </span>
    </div>
  );
}

export default function About() {
  const features = [
    "Made with 100% fresh farm milk, sourced daily for purity and taste.",
    "Real fruits and natural ingredients — never artificial flavours or colours.",
    "Traditional recipes perfected over 25 years of craftsmanship.",
    "Modern quality standards meeting international food safety benchmarks.",
  ];

  return (
    <section id="about" className="relative pt-12 pb-32 bg-white overflow-hidden border-b border-border-luxury">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-[-10%] -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent-cream/40 blur-[120px] opacity-60 z-0 pointer-events-none" />

      <div className="max-w-[90%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left — Premium Brand Image */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal y={50} duration={1}>
              <div className="relative aspect-[4/3] md:aspect-[16/11] rounded-3xl overflow-hidden shadow-2xl border border-border-luxury bg-white group p-4 md:p-6 flex gap-4 md:gap-6">
                {/* Left side: Legacy platter */}
                <div className="relative w-[55%] h-full rounded-2xl overflow-hidden border border-border-luxury/60 bg-accent-cream/5">
                  <Image
                    src="/images/about_legacy.png"
                    alt="iCream — A Legacy of Frozen Excellence"
                    fill
                    className="object-cover group-hover:scale-[1.02] transition-transform duration-[1.5s] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/5 to-transparent pointer-events-none" />
                </div>

                {/* Right side: Two ice cream images */}
                <div className="relative w-[42%] h-full flex flex-col justify-between gap-3 md:gap-4">
                  <div className="relative w-full h-[47%] rounded-2xl overflow-hidden border border-border-luxury bg-accent-cream/10 group/item transition-colors duration-300 hover:border-accent-gold/30">
                    <Image
                      src="/images/product_cone.png"
                      alt="Signature Strawberry Waffle Cone"
                      fill
                      className="object-contain p-2 md:p-3 group-hover/item:scale-108 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative w-full h-[47%] rounded-2xl overflow-hidden border border-border-luxury bg-accent-cream/10 group/item transition-colors duration-300 hover:border-accent-gold/30">
                    <Image
                      src="/images/product_cup.png"
                      alt="Golden Vanilla Glaze Cup"
                      fill
                      className="object-contain p-2 md:p-3 group-hover/item:scale-108 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
              {/* Heritage Badge */}
              <div className="absolute -bottom-8 -right-4 md:right-8 bg-white border border-border-luxury p-6 rounded-2xl shadow-xl flex items-center gap-4 hover:border-accent-gold/30 transition-colors duration-500">
                <div className="w-12 h-12 rounded-full bg-accent-cream flex items-center justify-center flex-shrink-0">
                  <span className="font-sans text-xl font-black text-accent-gold">25</span>
                </div>
                <div>
                  <p className="font-sans text-[9px] font-bold text-brand-secondary uppercase tracking-widest">Est.</p>
                  <p className="font-serif text-base font-extrabold text-brand-primary">Since 2001</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Brand Story */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <ScrollReveal y={30} duration={0.8} delay={0.1}>
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-8 h-[1px] bg-accent-gold" />
                <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-gold">
                  Our Story
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-primary leading-[1.1] mb-8">
                A Legacy Of <span className="text-gold-gradient">Frozen Excellence</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal y={30} duration={0.8} delay={0.2}>
              <p className="font-sans text-brand-secondary text-sm md:text-base leading-relaxed mb-8">
                For over two decades, iCream has been crafting moments of pure joy. What started as a small family passion for perfecting the creamiest ice cream has grown into a beloved brand trusted by millions. We believe that great ice cream begins with the <span className="text-brand-primary font-semibold">finest ingredients</span> — pure milk from local farms, hand-selected fruits at peak ripeness, and recipes refined through generations of expertise.
              </p>
            </ScrollReveal>

            <ScrollReveal y={30} duration={0.8} delay={0.3}>
              <ul className="space-y-4 mb-12">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-5.5 h-5.5 rounded-full bg-accent-cream flex items-center justify-center flex-shrink-0 border border-accent-gold/15">
                      <Check className="w-3 h-3 text-accent-gold stroke-[2.5]" />
                    </div>
                    <span className="font-sans text-xs md:text-sm text-brand-secondary leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Statistics Cards */}
            <ScrollReveal y={30} duration={0.8} delay={0.4} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <StatCard value={50} suffix="+" label="Flavours" colorClass="text-accent-gold" />
              <StatCard value={25} suffix="+" label="Years Experience" colorClass="text-brand-primary" />
              <StatCard value={1} suffix="M+" label="Happy Customers" colorClass="text-success" />
              <StatCard value={100} suffix="%" label="Premium Quality" colorClass="text-accent-gold" />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
