"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Flavours", href: "#flavours" },
  { label: "Gallery", href: "#gallery" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 glass-header shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-[90%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Luxury Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <svg 
              className="w-7 h-7 md:w-8 md:h-8 text-accent-gold group-hover:rotate-12 transition-transform duration-500" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DFBA5A" />
                  <stop offset="50%" stopColor="#C9A227" />
                  <stop offset="100%" stopColor="#A27D12" />
                </linearGradient>
              </defs>
              <path d="M12 2C12.5 2 13 2.5 13 3C13 3.5 12.5 4 12 4C11.5 4 11 3.5 11 3C11 2.5 11.5 2 12 2Z" fill="url(#logo-gold)" />
              <path d="M12 4C8.68629 4 6 6.68629 6 10C6 10.5 6.2 11 6.5 11.5C7.2 12.5 8.5 13 10 13H14C15.5 13 16.8 12.5 17.5 11.5C17.8 11 18 10.5 18 10C18 6.68629 15.3137 4 12 4Z" fill="url(#logo-gold)" opacity="0.85" />
              <path d="M9 8C10.5 7 13.5 7 15 8" stroke="white" strokeWidth="1" strokeLinecap="round" />
              <path d="M6.5 12L12 22L17.5 12H6.5Z" fill="url(#logo-gold)" />
              <path d="M9.5 12L12 17M14.5 12L12 17" stroke="white" strokeWidth="0.8" opacity="0.6" />
            </svg>
            <span className="font-serif text-xl md:text-2xl font-extrabold tracking-tight text-brand-primary">
              i<span className="text-accent-gold">Cream</span>
            </span>
          </a>

          {/* Center Navigation — Desktop */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="luxury-link-hover font-sans text-xs font-semibold tracking-widest uppercase text-brand-secondary hover:text-accent-gold transition-colors duration-300 py-2 block"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Area — Desktop */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              className="btn-magnetic group relative overflow-hidden inline-flex items-center justify-center bg-brand-primary hover:bg-accent-gold text-white border border-brand-primary hover:border-accent-gold px-7 py-3 rounded-full font-sans text-[10px] font-bold uppercase tracking-widest transition-all duration-500 shadow-sm hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                Order Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-brand-primary hover:text-accent-gold transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-white pt-24 px-8 pb-8 flex flex-col justify-between lg:hidden"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl font-medium text-brand-primary hover:text-accent-gold transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-4"
            >
              <a
                href="#flavours"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-4 border border-brand-primary text-brand-primary rounded-full font-sans text-sm font-semibold uppercase tracking-wider hover:bg-brand-primary hover:text-white transition-all duration-300"
              >
                Explore Flavours
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-center py-4 bg-brand-primary text-white rounded-full font-sans text-sm font-semibold uppercase tracking-wider hover:bg-accent-gold transition-all duration-300"
              >
                Order Now
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
