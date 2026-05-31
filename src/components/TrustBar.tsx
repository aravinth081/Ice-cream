"use client";

import React from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  { text: "100% Pure Milk" },
  { text: "Natural Ingredients" },
  { text: "No Artificial Preservatives" },
  { text: "Handcrafted Daily" },
  { text: "Premium Quality" },
];

export default function TrustBar() {
  return (
    <section className="bg-gradient-to-r from-accent-cream/15 via-white to-accent-cream/15 border-y border-accent-gold/20 py-6 overflow-hidden relative z-10">
      <div className="max-w-[90%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Desktop: Clean Flex Row */}
        <div className="hidden md:flex items-center justify-between gap-6">
          {trustItems.map((item, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              key={item.text}
              className="flex items-center gap-3"
            >
              <div className="w-5.5 h-5.5 rounded-full bg-accent-cream/50 flex items-center justify-center border border-accent-gold/30 flex-shrink-0">
                <Sparkles className="w-2.5 h-2.5 text-accent-gold" />
              </div>
              <span className="font-sans text-[11px] font-bold tracking-widest uppercase text-brand-primary">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Smooth Infinite Marquee */}
        <div className="md:hidden overflow-hidden relative w-full flex">
          <div className="flex gap-10 whitespace-nowrap animate-infinite-scroll">
            {[...trustItems, ...trustItems].map((item, idx) => (
              <div key={`${item.text}-${idx}`} className="flex items-center gap-2.5">
                <div className="w-4.5 h-4.5 rounded-full bg-accent-cream/50 flex items-center justify-center border border-accent-gold/30 flex-shrink-0">
                  <Sparkles className="w-2 h-2 text-accent-gold" />
                </div>
                <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-brand-primary">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
