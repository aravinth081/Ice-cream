"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Leaf, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

interface Flavour {
  id: number;
  name: string;
  tagline: string;
  image: string;
  ingredients: string[];
  description: string;
  calories: string;
  isPopular: boolean;
  colorClass: string;
  businessTag: string;
  businessTagColor: string;
}

const flavours: Flavour[] = [
  {
    id: 1,
    name: "Belgian Chocolate",
    tagline: "72% SINGLE ORIGIN COCOA",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=600&auto=format&fit=crop",
    ingredients: ["72% Belgian Cocoa", "Double Cream", "Raw Cane Sugar", "Vanilla Extract"],
    description: "An intense, velvety experience crafted from imported Belgian cocoa beans, slow-churned to achieve a deep flavor profile that chocolate connoisseurs adore.",
    calories: "280 kcal per scoop",
    isPopular: true,
    colorClass: "from-amber-950/20 to-transparent",
    businessTag: "Core Volume Bestseller",
    businessTagColor: "text-green-600 border-green-200/50 bg-green-50/40",
  },
  {
    id: 2,
    name: "Madagascar Vanilla",
    tagline: "GENUINE BOURBON ORCHID PODS",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Madagascar Orchid Pods", "Fresh Whole Milk", "Sweetened Egg Yolks"],
    description: "Classic refinement at its best. Infused with real, hand-scraped vanilla beans from Madagascar, offering a warm aroma and a dotted appearance that signals true authenticity.",
    calories: "220 kcal per scoop",
    isPopular: false,
    colorClass: "from-yellow-100/30 to-transparent",
    businessTag: "High-Margin Staple SKU",
    businessTagColor: "text-accent-gold border-accent-gold/20 bg-accent-cream/40",
  },
  {
    id: 3,
    name: "Alphonso Mango",
    tagline: "RATNAGIRI ALPHONSO PULP",
    image: "/images/product_mango.png",
    ingredients: ["Alphonso Mango Pulp", "Organic Milk", "A Pinch of Cardamom"],
    description: "A tropical celebration. Made exclusively from sweet Ratnagiri Alphonso mangoes, delivering a rich, fruity creaminess that tastes like pure Indian summer.",
    calories: "190 kcal per scoop",
    isPopular: true,
    colorClass: "from-orange-200/20 to-transparent",
    businessTag: "High Velocity Traffic SKU",
    businessTagColor: "text-brand-primary border-border-luxury bg-white",
  },
  {
    id: 4,
    name: "Pistachio Royale",
    tagline: "SLOW-ROASTED IRANIAN GREEN NUTS",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Roasted Iranian Pistachios", "Organic Pistachio Paste", "Full Cream Milk"],
    description: "A nutty, rich masterpiece. Combining real roasted pistachio paste with whole chunks of Iranian pistachios for a satisfying crunch in every bite.",
    calories: "260 kcal per scoop",
    isPopular: false,
    colorClass: "from-emerald-950/20 to-transparent",
    businessTag: "Super-Premium High Yield",
    businessTagColor: "text-accent-gold border-accent-gold/20 bg-accent-cream/40",
  },
  {
    id: 5,
    name: "Strawberry Bliss",
    tagline: "SUN-RIPENED SUMMER BERRIES",
    image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=600&auto=format&fit=crop",
    ingredients: ["Organic Strawberries", "Double Cream", "Raw Wild Honey"],
    description: "Sweet, tangy, and refreshingly light. Packed with real organic strawberry pieces and raw wild honey, offering a burst of summery freshness in every bite.",
    calories: "210 kcal per scoop",
    isPopular: false,
    colorClass: "from-red-200/20 to-transparent",
    businessTag: "High Margin Classic SKU",
    businessTagColor: "text-brand-primary border-border-luxury bg-white",
  },
  {
    id: 6,
    name: "Butterscotch Crunch",
    tagline: "HANDMADE ENGLISH TOFFEE SHARDS",
    image: "/images/product_butterscotch.png",
    ingredients: ["Handmade Toffee Crunch", "Brown Butter Cream", "Sea Salt Caramel"],
    description: "A perfect blend of smooth and crunchy. Our rich brown butter gelato is combined with shards of handmade toffee and a swirl of warm sea salt caramel.",
    calories: "290 kcal per scoop",
    isPopular: true,
    colorClass: "from-amber-200/20 to-transparent",
    businessTag: "Top Rated Margin Driver",
    businessTagColor: "text-green-600 border-green-200/50 bg-green-50/40",
  },
];

export default function FlavourExperience() {
  const [selectedFlavour, setSelectedFlavour] = useState<Flavour | null>(null);

  return (
    <section id="flavours" className="py-32 bg-white relative overflow-hidden border-b border-border-luxury">
      {/* Dynamic light visual details */}
      <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-accent-cream/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[90%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <ScrollReveal y={30} duration={0.8}>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[1px] bg-accent-gold" />
              <span className="font-sans text-xs font-bold uppercase tracking-widest text-accent-gold">
                Interactive Tasting Salon
              </span>
              <span className="w-8 h-[1px] bg-accent-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-extrabold text-brand-primary mb-6">
              The Flavour <span className="text-gold-gradient">Experience</span>
            </h2>
            <p className="font-sans text-brand-secondary text-sm md:text-base leading-relaxed">
              Interact with our signature portfolio catalog below to reveal gourmet ingredient profiles, profit contribution tiers, and culinary origin narratives.
            </p>
          </ScrollReveal>
        </div>

        {/* Asymmetric / Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {flavours.map((flavour, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              key={flavour.id}
              onClick={() => setSelectedFlavour(flavour)}
              className="group bg-white border border-border-luxury rounded-[24px] overflow-hidden cursor-pointer hover:border-blue-500/40 shadow-[0_4px_30px_rgba(0,0,0,0.01)] hover:shadow-[0_20px_45px_rgba(37,99,235,0.04)] transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] overflow-hidden bg-white">
                <Image
                  src={flavour.image}
                  alt={flavour.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                
                {/* Popular Badge */}
                {flavour.isPopular && (
                  <div className="absolute top-4 left-4 bg-accent-gold text-white px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                    <Sparkles className="w-3 h-3 fill-current" />
                    <span className="font-sans text-[9px] font-bold uppercase tracking-wider">Popular Selection</span>
                  </div>
                )}
 
                <div className={`absolute inset-0 bg-gradient-to-t ${flavour.colorClass} opacity-60`} />
              </div>
 
              {/* Card Meta Content */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="font-sans text-[10px] font-bold text-accent-gold uppercase tracking-widest block mb-1.5">
                  {flavour.tagline}
                </span>
                <h3 className="font-serif text-2xl font-extrabold text-brand-primary mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {flavour.name}
                </h3>
                <div className="mb-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider border ${flavour.businessTagColor}`}>
                    {flavour.businessTag}
                  </span>
                </div>
                <p className="font-sans text-brand-secondary text-xs md:text-sm line-clamp-3 leading-relaxed mb-6">
                  {flavour.description}
                </p>
 
                <div className="border-t border-border-luxury pt-5 flex items-center justify-between mt-auto">
                  <span className="font-sans text-[10px] font-bold text-brand-secondary uppercase tracking-widest">
                    {flavour.calories}
                  </span>
                  <span className="font-sans text-xs font-bold text-blue-600 group-hover:text-blue-700 group-hover:underline decoration-blue-600 underline-offset-4 transition-colors">
                    View Ingredients
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Modal / Ingredients Details Card Popup */}
        <AnimatePresence>
          {selectedFlavour && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-primary/80 backdrop-blur-md"
              onClick={() => setSelectedFlavour(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white max-w-2xl w-full rounded-[28px] overflow-hidden shadow-2xl border border-border-luxury flex flex-col md:flex-row relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedFlavour(null)}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-border-luxury flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-colors duration-300"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Left Side: Product Image */}
                <div className="md:w-1/2 relative min-h-[240px] md:min-h-full bg-white">
                  <Image
                    src={selectedFlavour.image}
                    alt={selectedFlavour.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right Side: Quality Breakdown */}
                <div className="md:w-1/2 p-8 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-sans text-[10px] font-bold text-accent-gold uppercase tracking-widest block">
                        {selectedFlavour.tagline}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-extrabold text-brand-primary mb-3">
                      {selectedFlavour.name}
                    </h3>
                    <div className="mb-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider border ${selectedFlavour.businessTagColor}`}>
                        {selectedFlavour.businessTag}
                      </span>
                    </div>
                    <p className="font-sans text-brand-secondary text-xs leading-relaxed mb-6">
                      {selectedFlavour.description}
                    </p>

                    <div className="mb-6">
                      <span className="font-sans text-[10px] font-bold text-brand-primary uppercase tracking-widest block mb-3">
                        Formulation Breakdown:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {selectedFlavour.ingredients.map((ing) => (
                          <span
                            key={ing}
                            className="font-sans text-[10px] font-bold text-brand-secondary bg-white border border-border-luxury px-3.5 py-1.5 rounded-full shadow-[0_2px_4px_rgba(0,0,0,0.01)]"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border-luxury pt-4.5 flex items-center justify-between mt-6">
                    <div className="flex items-center gap-1.5">
                      <Leaf className="w-3.5 h-3.5 text-accent-gold" />
                      <span className="font-sans text-[11px] font-semibold text-brand-secondary">{selectedFlavour.calories}</span>
                    </div>
                    <button
                      onClick={() => setSelectedFlavour(null)}
                      className="bg-brand-primary hover:bg-accent-gold text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-colors duration-300 shadow-sm"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
