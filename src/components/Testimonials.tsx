"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: ReactNode;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Mehta",
    role: "Culinary Critic, The Indian Gastronome",
    quote: (
      <span>
        iCream has completely elevated what we expect from frozen desserts. The Belgian Fudge Tub is exceptionally rich and dense. The <span className="text-amber-600 font-semibold italic">slow-churned texture is easily on par with artisanal gelaterias in Florence</span>.
      </span>
    ),
    rating: 5,
  },
  {
    id: 2,
    name: "Ananya Sen",
    role: "Franchise Partner (Bengaluru Indiranagar)",
    quote: (
      <span>
        Partnering with iCream for our franchise gallery was a <span className="text-amber-600 font-semibold italic">highly rewarding corporate decision</span>. The supply chain consistency, strict quality controls, and massive brand appeal make it a <span className="text-amber-600 font-semibold italic">top-tier business venture</span>.
      </span>
    ),
    rating: 5,
  },
  {
    id: 3,
    name: "Chef Kabir Kapoor",
    role: "Pastry Consultant & Gastronomy Director",
    quote: (
      <span>
        The Madagascar Vanilla formulation is a masterclass in dessert elegance. Dotted with real, aromatic vanilla bean pods instead of synthetic essence. It demonstrates an <span className="text-amber-600 font-semibold italic">uncompromising dedication to high-end ingredient sourcing</span>.
      </span>
    ),
    rating: 5,
  },
  {
    id: 4,
    name: "Meera Deshmukh",
    role: "Loyal Connoisseur & Brand Advocate",
    quote: (
      <span>
        iCream has become a staple for our private catering events. The Alphonso Mango tastes like fresh hand-scooped mangoes directly from Ratnagiri. There is a <span className="text-slate-900 font-bold">clean creaminess that you simply do not get with mass-market brands</span>.
      </span>
    ),
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setActiveIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        ),
      7000
    );

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 sm:py-28 bg-slate-50/40 relative overflow-hidden border-b border-slate-100">
      {/* Premium Background Soft Glows */}
      <div className="absolute top-1/3 -left-20 w-[350px] h-[350px] rounded-full bg-amber-100/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-slate-100/50 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
              Brand Advocacy
            </span>
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Loved By <span className="text-amber-500">Connoisseurs</span>
          </h2>
        </div>

        {/* Carousel Frame */}
        <div className="relative bg-white border border-slate-100/80 rounded-[2.5rem] p-8 sm:p-16 lg:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:border-amber-200/50 hover:shadow-[0_20px_50px_rgba(245,158,11,0.03)] transition-all duration-500 max-w-5xl mx-auto">
          
          {/* Elegant Quote Icon Badge */}
          <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-100/50 flex items-center justify-center text-amber-500 mb-8 sm:mb-10">
            <Quote className="w-6 h-6 fill-current" />
          </div>

          <div className="relative min-h-[240px] sm:min-h-[160px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="text-left flex flex-col items-start w-full"
              >
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="font-serif text-lg sm:text-xl lg:text-2xl text-slate-800 leading-relaxed mb-8 max-w-4xl">
                  "{testimonials[activeIndex].quote}"
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="font-serif text-lg font-bold text-slate-900">
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className="font-sans text-[10px] font-bold text-amber-600 uppercase tracking-widest mt-1.5">
                    {testimonials[activeIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Footer */}
          <div className="flex items-center justify-between mt-12 border-t border-slate-100 pt-8">
            {/* Indicators Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === idx ? "w-8 bg-amber-500" : "w-2 bg-slate-200"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Direction Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full border border-slate-100 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-950 hover:text-white hover:border-slate-950 shadow-sm transition-all duration-300 focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full border border-slate-100 bg-white flex items-center justify-center text-slate-700 hover:bg-slate-950 hover:text-white hover:border-slate-950 shadow-sm transition-all duration-300 focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
