"use client";

import React, { useState } from "react";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Store {
  id: number;
  city: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  mapCoords: { x: number; y: number };
  gmapsLink: string;
  roi: string;
  ebitda: string;
}

const stores: Store[] = [
  {
    id: 1,
    city: "Delhi",
    name: "Connaught Place Flagship Salon",
    address: "Radial Road 3, Block E, Connaught Place, New Delhi, 110001",
    hours: "11:00 AM - 12:00 AM",
    phone: "+91 11 4056 9890",
    mapCoords: { x: 55, y: 35 },
    gmapsLink: "https://maps.google.com/?q=Connaught+Place+New+Delhi",
    roi: "42%",
    ebitda: "38%",
  },
  {
    id: 2,
    city: "Mumbai",
    name: "Colaba Boutique Reserve",
    address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001",
    hours: "11:00 AM - 1:00 AM",
    phone: "+91 22 2845 1012",
    mapCoords: { x: 30, y: 70 },
    gmapsLink: "https://maps.google.com/?q=Colaba+Mumbai",
    roi: "45%",
    ebitda: "41%",
  },
  {
    id: 3,
    city: "Bengaluru",
    name: "Indiranagar Experience Gallery",
    address: "100 Feet Rd, Indiranagar, Bengaluru, Karnataka 560038",
    hours: "11:00 AM - 12:00 AM",
    phone: "+91 80 4356 0998",
    mapCoords: { x: 42, y: 85 },
    gmapsLink: "https://maps.google.com/?q=Indiranagar+Bengaluru",
    roi: "38%",
    ebitda: "35%",
  },
  {
    id: 4,
    city: "Jaipur",
    name: "C-Scheme Royal Parlour",
    address: "Rambagh Circle, C-Scheme, Jaipur, Rajasthan 302001",
    hours: "11:00 AM - 11:00 PM",
    phone: "+91 141 2678 1234",
    mapCoords: { x: 46, y: 45 },
    gmapsLink: "https://maps.google.com/?q=C-Scheme+Jaipur",
    roi: "40%",
    ebitda: "36%",
  },
];

export default function StoreLocator() {
  const [activeStoreId, setActiveStoreId] = useState(1);
  const activeStore = stores.find((s) => s.id === activeStoreId) || stores[0];

  return (
    <section id="locations" className="py-20 sm:py-28 bg-white relative overflow-hidden border-b border-slate-100">
      {/* Background Soft Glows */}
      <div className="absolute top-1/3 -left-20 w-[400px] h-[400px] rounded-full bg-amber-100/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-[300px] h-[300px] rounded-full bg-slate-100/40 blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
              <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-amber-600">
                Flagship Outlets
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Boutiques & <span className="text-amber-500">Flagships</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base sm:text-lg max-w-md leading-relaxed">
            Step into our ambient, architect-designed physical locations. Experience sensory cold stone folding tables and private catalog tasting menus.
          </p>
        </div>

        {/* Locator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Area: Store List (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-4 max-h-[550px] overflow-y-auto pr-3 scrollbar-thin">
            {stores.map((store) => (
              <div
                key={store.id}
                onClick={() => setActiveStoreId(store.id)}
                className={`p-6 rounded-[2rem] border cursor-pointer transition-all duration-300 flex flex-col relative overflow-hidden ${
                  activeStoreId === store.id
                    ? "bg-white border-amber-500/80 shadow-[0_15px_35px_-10px_rgba(212,175,55,0.06)]"
                    : "bg-white border-slate-100 hover:border-amber-200/40 hover:shadow-[0_10px_25px_rgba(0,0,0,0.01)]"
                }`}
              >
                {/* Active Indicator Left Strip */}
                <div 
                  className="absolute top-0 left-0 w-[4px] h-full bg-amber-500 transition-transform duration-300 origin-top" 
                  style={{ transform: activeStoreId === store.id ? 'scaleY(1)' : 'scaleY(0)' }} 
                />

                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">
                    {store.city} Flagship Hub
                  </span>
                  {activeStoreId === store.id && (
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  )}
                </div>

                <h3 className="font-serif text-xl font-bold text-slate-900 mb-3">
                  {store.name}
                </h3>

                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border border-amber-200/50 bg-amber-50/30 text-amber-700">
                    {store.roi} ROI Yield
                  </span>
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider border border-slate-200 bg-slate-50 text-slate-600">
                    {store.ebitda} EBITDA Margin
                  </span>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5 text-slate-500">
                    <MapPin className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm leading-relaxed">{store.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-slate-500">
                    <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">{store.hours}</span>
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="flex items-center gap-6 pt-4 border-t border-slate-100 mt-auto">
                  <a
                    href={`tel:${store.phone}`}
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amber-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-500" />
                    Call Boutique
                  </a>
                  <a
                    href={store.gmapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-amber-500 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Directions
                    <ExternalLink className="w-3 h-3 text-amber-500" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Area: Premium Interactive Google Map (7 Columns) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-[2.5rem] relative overflow-hidden min-h-[450px] md:min-h-full shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col justify-end p-2 bg-slate-50">
            <div className="w-full h-full rounded-[2.2rem] overflow-hidden relative">
              <iframe
                title={activeStore.name}
                width="100%"
                height="100%"
                className="absolute inset-0 w-full h-full border-0"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(activeStore.name + " " + activeStore.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Active Store Showcase Card Overlay */}
            <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStore.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className="bg-white/95 backdrop-blur-md border border-slate-100/80 p-5 rounded-2xl shadow-xl flex items-center justify-between gap-4 pointer-events-auto"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0 border border-amber-100/30">
                      <MapPin className="w-5 h-5 text-amber-500" />
                    </div>
                    <div>
                      <p className="font-serif text-sm sm:text-base font-bold text-slate-900 leading-tight">
                        {activeStore.name}
                      </p>
                      <p className="font-sans text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                        {activeStore.city} Premium Hub
                      </p>
                    </div>
                  </div>
                  <a
                    href={activeStore.gmapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0 bg-slate-900 hover:bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest px-5 py-3 rounded-full transition-colors duration-300 shadow-sm"
                  >
                    Get Route
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
