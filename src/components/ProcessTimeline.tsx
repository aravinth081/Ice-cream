"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

interface Step {
  number: string;
  title: string;
  description: ReactNode;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Organic Farm Sourcing",
    description: (
      <span>
        Our dairy base is harvested daily from single-origin certified A2 pastures and chilled immediately to <strong className="text-green-650 text-green-600 font-bold">4°C</strong> to preserve fresh cellular structure and secure supply margin.
      </span>
    ),
  },
  {
    number: "02",
    title: "Infusion & Homogenization",
    description: (
      <span>
        The base cream is blended with raw botanicals and natural cane sugar, pasteurized, and gently homogenized under high pressure at <strong className="text-accent-gold font-bold">150 Bar</strong> to merge flavor profiles.
      </span>
    ),
  },
  {
    number: "03",
    title: "Slow-Aging Churn",
    description: (
      <span>
        We slow-churn our gelato in Italian batch freezers. This gentle aeration technique yields a dense, velvety consistency with <strong className="text-brand-primary font-bold">low overrun</strong> for intense flavor delivery.
      </span>
    ),
  },
  {
    number: "04",
    title: "Thermal Locking",
    description: (
      <span>
        The fresh ice cream is rapidly blast-frozen at <strong className="text-green-650 text-green-600 font-bold">-40°C</strong>. This locks in raw aroma structures and prevents the formation of large ice crystals.
      </span>
    ),
  },
  {
    number: "05",
    title: "Cold-Chain Telemetry",
    description: (
      <span>
        Our temperature-monitored fleet maintains a strict sub-zero environment of <strong className="text-accent-gold font-bold">-18°C</strong>, delivering pristine tubs directly to our retail boutiques.
      </span>
    ),
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-32 bg-white relative overflow-hidden border-b border-border-luxury">
      <div className="max-w-[90%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <ScrollReveal y={30} duration={0.8}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-accent-gold" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-gold">
                The Churning Process
              </span>
              <span className="w-8 h-[1px] bg-accent-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">
              The Journey Of <span className="text-gold-gradient">Creamy Perfection</span>
            </h2>
            <p className="font-sans text-brand-secondary text-sm md:text-base leading-relaxed">
              From organic farm extraction to the final luxury packaging, we maintain strict controls to deliver gastronome standards.
            </p>
          </ScrollReveal>
        </div>

        {/* Elegant Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[1px] bg-border-luxury -translate-x-1/2 z-0" />

          {/* Timeline steps */}
          <div className="space-y-20 relative z-10">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className={`p-8 md:p-10 bg-white border border-border-luxury rounded-[28px] shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:border-accent-gold/25 transition-all duration-350 ${
                      isEven ? "md:text-left" : "md:text-right"
                    }`}>
                      <span className="font-serif text-3xl font-extrabold text-accent-gold/20 block mb-3">
                        {step.number}
                      </span>
                      <h3 className="font-serif text-xl font-extrabold text-brand-primary mb-3">
                        {step.title}
                      </h3>
                      <p className="font-sans text-brand-secondary text-xs md:text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Bullet Marker */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-accent-gold -translate-x-1/2 flex items-center justify-center z-20 shadow-md">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-gold" />
                  </div>

                  {/* Empty spacer column on desktop */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
