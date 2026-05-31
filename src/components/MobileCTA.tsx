"use client";

import React, { useState, useEffect } from "react";
import { Phone, Compass } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA bar after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
        >
          <div className="w-full bg-white/80 backdrop-blur-md border border-border-luxury p-3 rounded-full flex items-center justify-between shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
            {/* Quick Franchise Call */}
            <a
              href="tel:+9118002087780"
              className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-border-luxury text-brand-primary font-sans text-xs font-bold uppercase tracking-wider bg-white/90 hover:bg-bg-secondary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-accent-gold" />
              Call Hub
            </a>

            {/* Quick Order/Flavours Link */}
            <a
              href="#flavours"
              className="flex-grow text-center flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-brand-primary text-white font-sans text-xs font-bold uppercase tracking-wider hover:bg-accent-gold transition-colors ml-3"
            >
              <Compass className="w-3.5 h-3.5" />
              Order Now
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
