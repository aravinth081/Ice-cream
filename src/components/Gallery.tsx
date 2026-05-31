"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X, ZoomIn } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop",
    title: "Signature Double Fudge Churn",
    category: "Gourmet formulation",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
    title: "Sicilian Pistachio Churn",
    category: "Legacy Flavor",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&auto=format&fit=crop",
    title: "Sweet Summer Strawberry",
    category: "Raw ingredients",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=600&auto=format&fit=crop",
    title: "Perfect Waffle Churning",
    category: "Handcrafted pastry",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=600&auto=format&fit=crop",
    title: "Summer Berry Sprinkles",
    category: "Signature Waffle",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop",
    title: "Flagship Store Experience",
    category: "Boutique architecture",
  },
];

export default function Gallery() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx === 0 ? galleryImages.length - 1 : selectedIdx - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIdx === null) return;
    setSelectedIdx(selectedIdx === galleryImages.length - 1 ? 0 : selectedIdx + 1);
  };

  return (
    <section id="gallery" className="py-32 bg-white relative overflow-hidden border-b border-border-luxury">
      <div className="max-w-[90%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <ScrollReveal y={30} duration={0.8}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-accent-gold" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-gold">
                Visual Campaign
              </span>
              <span className="w-8 h-[1px] bg-accent-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">
              Inside the <span className="text-gold-gradient">Magic</span>
            </h2>
            <p className="font-sans text-brand-secondary text-sm md:text-base leading-relaxed">
              Explore our visual archives detailing organic sourcing, modern production labs, flagship salon interiors, and curated gastronomic experiences.
            </p>
          </ScrollReveal>
        </div>

        {/* Editorial Masonry-Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              key={img.id}
              onClick={() => setSelectedIdx(idx)}
              className="relative overflow-hidden rounded-[32px] cursor-pointer group border border-border-luxury bg-white h-[320px]"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s] ease-out"
              />

              {/* Hover Luxury Overlay and Metadata */}
              <div className="absolute inset-0 bg-brand-primary/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <div className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white scale-75 group-hover:scale-100 transition-all duration-500">
                  <ZoomIn className="w-4.5 h-4.5" />
                </div>
                
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-sans text-[9px] font-bold text-accent-gold uppercase tracking-widest block mb-1.5">
                    {img.category}
                  </span>
                  <h4 className="font-serif text-xl font-extrabold text-white leading-tight">
                    {img.title}
                  </h4>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal Overlay */}
        <AnimatePresence>
          {selectedIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIdx(null)}
              className="fixed inset-0 z-50 bg-brand-primary/95 backdrop-blur-md flex items-center justify-center p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedIdx(null)}
                className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 flex items-center justify-center text-white transition-colors duration-300"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation Left */}
              <button
                onClick={handlePrev}
                className="absolute left-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 flex items-center justify-center text-white transition-colors duration-300"
                aria-label="Previous image"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>

              {/* Image Frame */}
              <motion.div
                initial={{ scale: 0.96, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.96, y: 15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative max-w-4xl w-full h-[70vh] rounded-[28px] overflow-hidden shadow-2xl border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={galleryImages[selectedIdx].url}
                  alt={galleryImages[selectedIdx].title}
                  fill
                  className="object-contain bg-brand-primary"
                />

                {/* Details Footer */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/40 to-transparent p-8 pt-20 text-left">
                  <span className="font-sans text-[10px] font-bold text-accent-gold uppercase tracking-widest block mb-1">
                    {galleryImages[selectedIdx].category}
                  </span>
                  <h3 className="font-serif text-2xl font-extrabold text-white">
                    {galleryImages[selectedIdx].title}
                  </h3>
                </div>
              </motion.div>

              {/* Navigation Right */}
              <button
                onClick={handleNext}
                className="absolute right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/10 flex items-center justify-center text-white transition-colors duration-300"
                aria-label="Next image"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
