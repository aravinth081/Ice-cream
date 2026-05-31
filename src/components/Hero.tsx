"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white pt-28 pb-20 overflow-hidden"
    >
      {/* Luxury Radial Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-15%] w-[60%] h-[60%] rounded-full bg-accent-cream/60 blur-[130px] opacity-80" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[55%] h-[55%] rounded-full bg-accent-lightbeige blur-[140px] opacity-90" />
        <div className="absolute top-[30%] left-[20%] w-[350px] h-[350px] rounded-full bg-accent-cream/30 blur-[100px] opacity-40" />
      </div>

      <div className="max-w-[90%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center relative z-10 w-full h-full">
        {/* Left — Luxury Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-cream border border-accent-gold/25 mb-8 shadow-[0_4px_12px_rgba(212,175,55,0.04)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent-gold animate-pulse" />
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-accent-gold">
              Crafted Happiness In Every Scoop
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-[85px] font-extrabold text-brand-primary leading-[0.95] tracking-tight mb-8"
          >
            Creamy Perfection,<br />
            <span className="text-gold-gradient">Crafted Fresh</span><br />
            Every Day.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 border-l-2 border-accent-gold/30 pl-6 mb-10 max-w-xl"
          >
            <p className="font-sans text-sm md:text-base text-brand-secondary leading-relaxed">
              Pure, handcrafted ice creams churned daily with <span className="text-brand-primary font-semibold">100% fresh milk</span> and natural ingredients. Every scoop is a celebration of uncompromised taste.
            </p>
          </motion.div>

          {/* Trust Micro-Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-3 gap-6 border-y border-border-luxury py-5 mb-10 w-full max-w-lg"
          >
            <div>
              <span className="font-sans text-2xl md:text-3xl font-black tracking-tight text-accent-gold block">
                50+
              </span>
              <span className="font-sans text-[9px] font-bold text-brand-secondary uppercase tracking-widest block mt-1">
                Signature Flavours
              </span>
            </div>
            <div>
              <span className="font-sans text-2xl md:text-3xl font-black tracking-tight text-brand-primary block">
                25+
              </span>
              <span className="font-sans text-[9px] font-bold text-brand-secondary uppercase tracking-widest block mt-1">
                Years of Excellence
              </span>
            </div>
            <div>
              <span className="font-sans text-2xl md:text-3xl font-black tracking-tight text-success block">
                100%
              </span>
              <span className="font-sans text-[9px] font-bold text-brand-secondary uppercase tracking-widest block mt-1">
                Natural Ingredients
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#flavours"
              className="btn-magnetic group inline-flex items-center justify-center bg-brand-primary text-white border border-brand-primary px-9 py-4.5 rounded-full font-sans text-[11px] font-bold uppercase tracking-widest transition-all duration-500 hover:bg-accent-gold hover:border-accent-gold shadow-md hover:shadow-xl"
            >
              Explore Flavours
            </a>
            <a
              href="#contact"
              className="btn-magnetic group inline-flex items-center justify-center bg-transparent text-brand-primary border border-border-luxury px-9 py-4.5 rounded-full font-sans text-[11px] font-bold uppercase tracking-widest transition-all duration-500 hover:bg-brand-primary hover:text-white hover:border-brand-primary shadow-sm"
            >
              Order Now
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>

        {/* Right — Premium Product Showcase */}
        <div className="lg:col-span-5 relative flex justify-center items-center h-[450px] lg:h-[650px] z-10">
          {/* Glowing Golden Radial Halo */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)] z-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-[240px] h-[240px] md:w-[350px] md:h-[350px] rounded-full bg-accent-cream/40 border border-accent-gold/15 flex items-center justify-center blur-[1px]" />
          </motion.div>

          {/* Floating Ingredient — Saffron Leaf */}
          <motion.div
            animate={{
              y: [0, -18, 0],
              x: [0, 8, 0],
              rotate: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-12 left-8 md:left-16 z-20 pointer-events-none opacity-95"
          >
            <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8 6 4 10 4 14C4 18 8 21 12 21C16 21 20 18 20 14C20 10 16 6 12 2Z" fill="#D4AF37" fillOpacity="0.1" stroke="#D4AF37" strokeWidth="0.75"/>
              <circle cx="12" cy="14" r="3" fill="#D4AF37" fillOpacity="0.3"/>
            </svg>
          </motion.div>

          {/* Floating Ingredient — Cream Swirl */}
          <motion.div
            animate={{
              y: [0, 16, 0],
              x: [0, -6, 0],
              rotate: [0, -12, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-20 right-8 md:right-16 z-20 pointer-events-none opacity-90"
          >
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 12C4 8 8 4 12 4C16 4 20 8 20 12C20 16 16 20 12 20C8 20 4 16 4 12Z" fill="#F8F4EE" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="3 3"/>
              <path d="M8 12C10 13 14 11 16 12.5" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round"/>
            </svg>
          </motion.div>

          {/* Metallic Gold Sparkle */}
          <motion.div
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-28 right-12 z-20 pointer-events-none"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" fill="#D4AF37" />
            </svg>
          </motion.div>

          {/* Luxury Cream Drop */}
          <motion.div
            animate={{
              y: [0, -12, 0],
              x: [0, 6, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
            className="absolute bottom-24 left-12 z-20 pointer-events-none opacity-85"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.5L17.5 8.5C19.5 10.5 19.5 14 17.5 16C15.5 18 12 18 10 16C8 14 8 10.5 10 8.5L12 2.5Z" fill="#F8F4EE" stroke="#EAEAEA" strokeWidth="0.8"/>
            </svg>
          </motion.div>

          {/* Main Product Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-[300px] h-[300px] md:w-[480px] md:h-[480px] hover:scale-[1.03] transition-transform duration-700 cursor-pointer rounded-[40px] overflow-hidden border-[6px] border-accent-gold/25 shadow-2xl bg-white"
          >
            <Image
              src="/images/hero_ice_cream.png"
              alt="iCream Premium Handcrafted Ice Cream"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
