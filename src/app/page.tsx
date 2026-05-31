"use client";
import React from "react";
import confetti from "canvas-confetti";
import {
  ArrowRight, Sparkles, ShieldCheck, Heart, Award,
  MessageCircle, Mail, MapPin, Phone,
  Droplets, Leaf, Star, Send, BookOpen,
  Menu, X
} from 'lucide-react';

// === IMPORTING UNTOUCHED COMPONENTS ===
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FlavourExperience from "@/components/FlavourExperience";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import StoreLocator from "@/components/StoreLocator";
import MobileCTA from "@/components/MobileCTA";

// ==========================================
// UTILITY: SMOOTH SCROLL FUNCTION (Shared Speed)
// ==========================================
const handleSmoothScroll = (e: React.MouseEvent<any>, targetId: string) => {
  e.preventDefault();
  const target = document.querySelector(targetId);
  if (!target) return;

  if (typeof window !== "undefined" && (window as any).lenis) {
    (window as any).lenis.scrollTo(target, {
      offset: -100,
      duration: 0.8,
    });
  } else {
    const headerOffset = 100;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

// ==========================================
// 1. HEADER COMPONENT (Click Enabled)
// ==========================================
const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navLinks = [
    { name: 'HOME' },
    { name: 'ABOUT' },
    { name: 'PRODUCTS' },
    { name: 'FLAVOURS' },
    { name: 'GALLERY' },
    { name: 'LOCATIONS' },
    { name: 'CONTACT' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div
            onClick={(e) => {
              setIsMenuOpen(false);
              handleSmoothScroll(e, '#home');
            }}
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <div className="w-8 h-10 bg-amber-500 rounded-b-full rounded-t-sm flex items-center justify-center text-white font-serif font-bold">
              iC
            </div>
            <span className="font-serif font-bold text-2xl text-amber-500 tracking-tight">
              iCream
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <span
                key={link.name}
                onClick={(e) => handleSmoothScroll(e, `#${link.name.toLowerCase()}`)}
                className="text-sm font-bold text-slate-600 hover:text-amber-500 transition-colors tracking-widest uppercase cursor-pointer"
              >
                {link.name}
              </span>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-700 hover:text-amber-500 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          <div className="hidden md:flex items-center">
          </div>
        </div>
      </div>

      {/* Premium Mobile Menu Popup Drawer */}
      <div
        className={`md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-xl overflow-hidden transition-all duration-350 ease-in-out z-40 ${isMenuOpen ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => (
            <span
              key={link.name}
              onClick={(e) => {
                setIsMenuOpen(false);
                handleSmoothScroll(e, `#${link.name.toLowerCase()}`);
              }}
              className="text-sm font-serif font-bold text-slate-800 hover:text-amber-500 tracking-widest uppercase transition-all duration-200 py-3.5 border-b border-slate-50 last:border-0 flex items-center justify-between group cursor-pointer"
            >
              <span>{link.name}</span>
              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-200" />
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
};

// ==========================================
// 2. ABOUT US COMPONENT
// ==========================================
const AboutComponent = () => {
  const highlights = [
    { icon: <Droplets className="w-5 h-5 text-amber-600" />, text: "Farm-Fresh Milk", desc: "Daily sourced pure A2 dairy", bg: "bg-amber-50/50" },
    { icon: <Leaf className="w-5 h-5 text-emerald-500" />, text: "100% Natural", desc: "No artificial ingredients", bg: "bg-emerald-50/50" },
    { icon: <Star className="w-5 h-5 text-amber-500" />, text: "50+ Flavours", desc: "Artisanal chef creations", bg: "bg-amber-50/50" },
    { icon: <ShieldCheck className="w-5 h-5 text-slate-700" />, text: "Artisanal Quality", desc: "ISO 22000 certified standards", bg: "bg-slate-50" },
  ];

  return (
    <section className="relative py-16 lg:py-28 bg-white overflow-hidden">
      {/* Premium Background Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] rounded-full bg-amber-100/25 blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full bg-slate-100/40 blur-[80px] sm:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Left Column: Brand Story */}
          <div className="lg:col-span-6 flex flex-col gap-6 lg:gap-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 lg:mb-4">
                <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
                <span className="text-xs font-bold tracking-[0.25em] text-amber-600 uppercase">
                  Our Legacy & Passion
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight mb-4 lg:mb-6">
                A Spoonful of Magic, <br />
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Since Day One.</span>
              </h2>
              <p className="text-slate-600 leading-relaxed text-base lg:text-lg mb-2">
                We believe the best memories are made over a perfect scoop. Crafted with pure farm-fresh milk and handpicked natural ingredients, our artisanal ice creams deliver a taste of pure joy in every bite.
              </p>
            </div>

            {/* Highlights Premium Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 lg:p-5 rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-amber-200/50 transition-all duration-300 group cursor-default"
                >
                  <div className={`w-12 h-12 rounded-xl flex shrink-0 items-center justify-center transition-transform duration-300 group-hover:scale-110 ${item.bg}`}>
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-sm tracking-wide">{item.text}</span>
                    <span className="text-[11px] text-slate-400 font-medium leading-normal mt-0.5">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={(e) => handleSmoothScroll(e, '#locations')}
                className="group bg-slate-950 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold tracking-wider transition-all shadow-[0_10px_25px_-5px_rgba(15,23,42,0.15)] hover:shadow-[0_10px_25px_-5px_rgba(245,158,11,0.25)] flex items-center gap-2 hover:-translate-y-0.5 duration-300"
              >
                VISIT A PARLOUR
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Collage */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:pl-10 mt-12 lg:mt-0 pb-8 lg:pb-0 px-2 sm:px-0">
            {/* Main Image Frame with Gold Accents */}
            <div className="relative aspect-[4/3] sm:aspect-[16/12] w-full max-w-[520px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] group bg-slate-50 p-2">
              <div className="w-full h-full rounded-[1.8rem] sm:rounded-[2.2rem] overflow-hidden relative">
                <img
                  src="/images/about_legacy.png"
                  alt="Our artisanal heritage"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Overlapping Badge: Legacy Year */}
            <div className="absolute -top-4 -left-1 sm:left-4 bg-amber-500 text-white px-4 py-3 sm:px-5 sm:py-4 rounded-2xl shadow-xl flex flex-col items-center justify-center border border-amber-400 hover:scale-105 transition-transform duration-300 cursor-default">
              <span className="text-2xl sm:text-3xl font-bold font-serif leading-none">25+</span>
              <span className="text-[8px] sm:text-[9px] font-bold tracking-widest uppercase mt-1">Years Legacy</span>
            </div>

            {/* Overlapping Floating Card: Top Rated */}
            <div className="absolute -bottom-6 -right-1 sm:right-6 bg-white/95 backdrop-blur-md border border-slate-100 p-4 sm:p-5 rounded-2xl shadow-xl flex items-center gap-3 sm:gap-4 hover:border-amber-300 transition-colors duration-300 max-w-[210px] sm:max-w-[250px] cursor-default">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 fill-amber-500" />
              </div>
              <div>
                <p className="font-serif font-bold text-slate-800 text-xs sm:text-sm">Top Rated Brand</p>
                <p className="text-[9px] sm:text-[10px] text-slate-400 leading-normal mt-0.5">Voted India's best artisanal ice cream network</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// 3. FEATURED PRODUCTS COMPONENT
// ==========================================
const FeaturedProductsComponent = () => {
  const products = [
    {
      name: "Royal Saffron Pistachio",
      subtitle: "SLOW-CHURNED IRANIAN NUTS & SAFFRON",
      badge: "ROYAL SIGNATURE",
      desc: "A majestic fusion of roasted Iranian pistachio paste, crushed premium nuts, and handpicked Kashmiri saffron strands.",
      kcal: "270 KCAL PER SCOOP",
      img: "/images/product_pistachio.png",
      isPopular: false
    },
    {
      name: "Rose Petal Gelato",
      subtitle: "ORGANIC DAMASK ROSE EXTRACTS",
      badge: "BOUTIQUE RESERVE",
      desc: "Infused with pure organic rose water and candied pink Damask rose petals for a delicate, aromatic floral experience.",
      kcal: "200 KCAL PER SCOOP",
      img: "/images/product_strawberry.png",
      isPopular: false
    },
    {
      name: "Salted Caramel Toffee",
      subtitle: "HANDMADE ENGLISH CRUNCH & SEA SALT",
      badge: "POPULAR DRIVER",
      desc: "Decadent brown butter gelato blended with crunchy handmade English toffee shards and rich pink Himalayan salted caramel.",
      kcal: "295 KCAL PER SCOOP",
      img: "/images/product_butterscotch.png",
      isPopular: true
    },
    {
      name: "Dark Belgian Truffle",
      subtitle: "72% SINGLE ORIGIN GHANAIAN COCOA",
      badge: "CORE BESTSELLER",
      desc: "An ultra-intense, velvety dark chocolate gelato churned with imported Belgian cocoa butter and premium chocolate flakes.",
      kcal: "285 KCAL PER SCOOP",
      img: "/images/product_chocolate.png",
      isPopular: true
    },
    {
      name: "Bourbon Vanilla Bean",
      subtitle: "HAND-SCRAPED MADAGASCAR ORCHID PODS",
      badge: "CLASSIC RESERVE",
      desc: "A timeless masterpiece infused with genuine Bourbon vanilla bean seeds, offering a rich, warm aroma and smooth creaminess.",
      kcal: "225 KCAL PER SCOOP",
      img: "/images/product_vanilla.png",
      isPopular: false
    },
    {
      name: "Ratnagiri Mango Crema",
      subtitle: "SWEET ALPHONSO NECTAR & FRESH CREAM",
      badge: "SEASONAL FAVORITE",
      desc: "Crafted exclusively from pure pulp of sun-ripened Ratnagiri Alphonso mangoes, blended with dense double cream.",
      kcal: "195 KCAL PER SCOOP",
      img: "/images/product_mango.png",
      isPopular: true
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-bold tracking-[0.2em] text-amber-600 uppercase">
              Signature Creations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            Our Premium <span className="text-amber-500">Selections</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full cursor-pointer">
              <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-100">
                <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                {product.isPopular && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 text-[10px] font-bold tracking-wider rounded-full flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3" /> POPULAR
                  </div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-bold tracking-widest text-amber-600 mb-2 uppercase">{product.subtitle}</span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{product.name}</h3>
                <div className="inline-block px-3 py-1 border border-slate-200 bg-slate-50 rounded-full text-[10px] font-bold tracking-wider text-slate-600 mb-4 w-fit">{product.badge}</div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{product.desc}</p>
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center">
                  <span className="text-xs font-bold text-slate-400 tracking-wider">{product.kcal}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhyChooseUsComponent = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Centralized Supply Sourcing",
      badge: "SOURCING INTEGRITY",
      desc: "Daily sourced from certified A2 organic estates to ensure consistent quality and stable costs."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Exclusive Global Importation",
      badge: "TRADE MOAT",
      desc: "Direct imports of rare botanicals like Madagascar Vanilla, securing our proprietary flavor profiles."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Proprietary Batch Churning",
      badge: "PROCESS PATENT",
      desc: "Advanced vertical batch-freezing with precise controls maintains our super-premium density."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Real-Time Cold-Chain Telemetry",
      badge: "ISO 22000 CERTIFIED",
      desc: "Continuous IoT monitoring at a stable -18°C ensures flawless quality from churn to parlor."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber-100/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            <span className="text-xs font-bold tracking-[0.25em] text-amber-600 uppercase">
              Corporate Value Pillars
            </span>
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight mb-6">
            The Standards We <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">Stand By</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-500 leading-relaxed max-w-2xl mx-auto">
            We operate at the intersection of traditional culinary heritage and high-fidelity food engineering to scale super-premium desserts.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-[2rem] p-8 border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.015)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.04)] hover:border-amber-200/40 flex flex-col items-center text-center cursor-default overflow-hidden h-full"
            >
              {/* Gold Top Border Reveal on Hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-amber-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Animated Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-amber-50/60 border border-amber-100/30 flex items-center justify-center mb-6 text-amber-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(245,158,11,0.4)]">
                {pillar.icon}
              </div>

              {/* Pillar Title */}
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-3 leading-snug group-hover:text-amber-600 transition-colors duration-300">
                {pillar.title}
              </h3>

              {/* Pillar Badge */}
              <span className="inline-block px-3 py-1 rounded-full border border-slate-100 bg-slate-50 text-[9px] font-bold tracking-widest text-slate-500 mb-4 group-hover:border-amber-100 group-hover:bg-amber-50/50 group-hover:text-amber-700 transition-all duration-300">
                {pillar.badge}
              </span>

              {/* Pillar Description */}
              <p className="text-slate-500 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const ContactComponent = () => {
  const [activeTab, setActiveTab] = React.useState<"franchise" | "catering">("franchise");
  const [selectedFormat, setSelectedFormat] = React.useState<"kiosk" | "cafe" | "salon" | null>(null);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  // Form Fields
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [territory, setTerritory] = React.useState("");
  const [overview, setOverview] = React.useState("");

  // Catering specific fields
  const [eventDate, setEventDate] = React.useState("");
  const [guestCount, setGuestCount] = React.useState("");

  // Validation errors
  const [errors, setErrors] = React.useState<{ [key: string]: string }>({});

  const handleFormatSelect = (format: "kiosk" | "cafe" | "salon") => {
    if (selectedFormat === format) {
      setSelectedFormat(null);
      setOverview("");
    } else {
      setSelectedFormat(format);
      // Auto pre-fill overview based on selected format
      if (format === "kiosk") {
        setOverview("Interested in the Express Kiosk Model. Planning to establish a premium kiosk in a high-footfall location.");
      } else if (format === "cafe") {
        setOverview("Interested in the Boutique Cafe Model. Looking to establish a premium sit-down experience with signature dessert pairings.");
      } else if (format === "salon") {
        setOverview("Interested in the Experience Salon Model. Seeking to build our flagship experience gallery with sensory tasting tables and premium layouts.");
      }
      // Clear overview error if present
      if (errors.overview) {
        setErrors(prev => {
          const next = { ...prev };
          delete next.overview;
          return next;
        });
      }
    }
  };

  const handleTabChange = (tab: "franchise" | "catering") => {
    setActiveTab(tab);
    setErrors({});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "Full name is required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email address is required";
    if (!phone.trim() || phone.length < 10) newErrors.phone = "Valid 10-digit phone number is required";

    if (activeTab === "franchise") {
      if (!territory.trim()) newErrors.territory = "Proposed territory/city is required";
    } else {
      if (!eventDate.trim()) newErrors.eventDate = "Event date & venue location is required";
      if (!guestCount.trim()) newErrors.guestCount = "Guest count & catering requirements are required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Success trigger
    try {
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.error("Confetti launch failed", err);
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setTerritory("");
    setOverview("");
    setEventDate("");
    setGuestCount("");
    setSelectedFormat(null);
    setErrors({});
  };

  return (
    <section className="py-12 sm:py-16 bg-white relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-1/4 -left-20 w-[350px] h-[350px] rounded-full bg-amber-100/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] h-[300px] rounded-full bg-slate-100/40 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[2px] bg-amber-500 rounded-full" />
            <span className="text-xs font-bold tracking-[0.25em] text-amber-600 uppercase">
              Franchise Opportunity
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 mb-4 leading-tight">
            Own A Piece Of <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">iCream</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl">
            Join India's fastest-growing super-premium dessert network. We are seeking visionaries to establish Flagship Salons and Experience Galleries in key tier-1 and tier-2 metros.
          </p>
        </div>

        {/* Investment Format Cards - Horizontal Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">

          {/* Card 1: Express Kiosk */}
          <div
            onClick={() => handleFormatSelect("kiosk")}
            className={`relative border rounded-2xl p-5 bg-white/50 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between min-h-[130px] cursor-pointer active:scale-[0.97] select-none ${selectedFormat === "kiosk"
                ? "border-amber-500 bg-amber-50/10 shadow-[0_15px_35px_-10px_rgba(212,175,55,0.08)] ring-2 ring-amber-500/20"
                : "border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:border-amber-200/40 hover:shadow-[0_10px_30px_rgba(212,175,55,0.02)]"
              }`}
          >
            {selectedFormat === "kiosk" && (
              <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-white text-[8px] font-bold shadow-md">
                ✓
              </div>
            )}
            <div>
              <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest block mb-0.5">Format</span>
              <h4 className="font-bold text-slate-900 text-sm">Express Kiosk Model</h4>
            </div>
            <div className="flex justify-between items-end border-t border-slate-100 pt-3 mt-4">
              <div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Investment</span>
                <span className="font-bold text-slate-800 text-xs">₹12 - 15 Lakhs</span>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border border-emerald-100/50 bg-emerald-50/40 text-emerald-700">
                42% ROI
              </span>
            </div>
          </div>

          {/* Card 2: Boutique Cafe */}
          <div
            onClick={() => handleFormatSelect("cafe")}
            className={`relative border rounded-2xl p-5 bg-white/50 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between min-h-[130px] cursor-pointer active:scale-[0.97] select-none ${selectedFormat === "cafe"
                ? "border-amber-500 bg-amber-50/10 shadow-[0_15px_35px_-10px_rgba(212,175,55,0.08)] ring-2 ring-amber-500/20"
                : "border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:border-amber-200/40 hover:shadow-[0_10px_30px_rgba(212,175,55,0.02)]"
              }`}
          >
            {selectedFormat === "cafe" && (
              <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-white text-[8px] font-bold shadow-md">
                ✓
              </div>
            )}
            <div>
              <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest block mb-0.5">Format</span>
              <h4 className="font-bold text-slate-900 text-sm">Boutique Cafe Model</h4>
            </div>
            <div className="flex justify-between items-end border-t border-slate-100 pt-3 mt-4">
              <div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Investment</span>
                <span className="font-bold text-slate-800 text-xs">₹25 - 30 Lakhs</span>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border border-emerald-100/50 bg-emerald-50/40 text-emerald-700">
                38% ROI
              </span>
            </div>
          </div>

          {/* Card 3: Experience Salon */}
          <div
            onClick={() => handleFormatSelect("salon")}
            className={`relative border rounded-2xl p-5 bg-white/50 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between min-h-[130px] cursor-pointer active:scale-[0.97] select-none ${selectedFormat === "salon"
                ? "border-amber-500 bg-amber-50/10 shadow-[0_15px_35px_-10px_rgba(212,175,55,0.08)] ring-2 ring-amber-500/20"
                : "border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:border-amber-200/40 hover:shadow-[0_10px_30px_rgba(212,175,55,0.02)]"
              }`}
          >
            {selectedFormat === "salon" && (
              <div className="absolute top-3 right-3 w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-white text-[8px] font-bold shadow-md">
                ✓
              </div>
            )}
            <div>
              <span className="text-[9px] font-bold text-amber-600 uppercase tracking-widest block mb-0.5">Format</span>
              <h4 className="font-bold text-slate-900 text-sm">Experience Salon Model</h4>
            </div>
            <div className="flex justify-between items-end border-t border-slate-100 pt-3 mt-4">
              <div>
                <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest block mb-0.5">Investment</span>
                <span className="font-bold text-slate-800 text-xs">₹45 - 50 Lakhs</span>
              </div>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-bold border border-emerald-100/50 bg-emerald-50/40 text-emerald-700">
                35% ROI
              </span>
            </div>
          </div>

        </div>

        {/* Info Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">

          {/* LEFT COLUMN: Features Info */}
          <div className="lg:col-span-6 flex flex-col lg:pr-4">
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100/30 flex items-center justify-center shrink-0 text-amber-600 transition-transform duration-300 group-hover:scale-110">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1 tracking-wide">Established Brand Equity</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Leverage a premium culinary name known for uncompromising quality, low overrun, and 100% natural, slow-churned formulations.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100/30 flex items-center justify-center shrink-0 text-amber-600 transition-transform duration-300 group-hover:scale-110">
                  <BookOpen className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1 tracking-wide">End-to-End Training</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Comprehensive onboarding covering inventory systems, hygiene guidelines, customer relations, and folding table techniques.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100/30 flex items-center justify-center shrink-0 text-amber-600 transition-transform duration-300 group-hover:scale-110">
                  <Sparkles className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1 tracking-wide">Marketing & Launch Support</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">National PR, targeted localized digital advertising, social campaigns, and influencer collaborations designed to drive footfall.</p>
                </div>
              </div>
              <div className="flex gap-4 group">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100/30 flex items-center justify-center shrink-0 text-amber-600 transition-transform duration-300 group-hover:scale-110">
                  <MapPin className="w-5.5 h-5.5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base mb-1 tracking-wide">Integrated Supply Chain</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Stable cold-chain logistics transporting A2 dairy bases directly from our central labs to your boutique, ensuring consistency.</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Footer */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-4 mt-8 select-none animate-scale-in">
              <div className="flex flex-col gap-1">
                <a href="tel:18002087780" className="flex items-center gap-2.5 text-slate-700 font-bold text-sm sm:text-base hover:text-amber-500 transition-colors w-fit">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0" /> 1800 208 7780 (Toll Free)
                </a>
                <span className="text-xs text-slate-400 font-medium pl-[30px] leading-normal">
                  * 24 Hrs Operational Corporate Helpline
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <a href="mailto:franchise@creammagic.in" className="flex items-center gap-2.5 text-slate-700 font-bold text-sm sm:text-base hover:text-amber-500 transition-colors w-fit">
                  <Mail className="w-5 h-5 text-amber-500 shrink-0" /> franchise@creammagic.in
                </a>
                <span className="text-xs text-slate-400 font-medium pl-[30px] leading-normal">
                  * Guaranteed response within 24 hours
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Form Card / Success Modal */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-white border border-slate-100/80 shadow-[0_20px_50px_rgba(0,0,0,0.025)] rounded-[2rem] p-5 md:p-6 min-h-[440px] flex flex-col justify-between">

              {isSubmitted ? (
                <div className="text-center flex flex-col items-center justify-center py-8 px-4 flex-grow animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-amber-50 border border-amber-100/40 flex items-center justify-center text-amber-600 mb-6 shadow-sm">
                    <Sparkles className="w-7 h-7 fill-amber-500 text-amber-500" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3">Proposal Received!</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-8 max-w-sm">
                    Thank you, <span className="font-bold text-slate-800">{name}</span>. Your request for {activeTab === "franchise" ? (selectedFormat ? `${selectedFormat === 'kiosk' ? 'Express Kiosk' : selectedFormat === 'cafe' ? 'Boutique Cafe' : 'Experience Salon'} Model` : "Franchise Partnership") : "Live Event Catering"} has been recorded. Our corporate desk will contact you at <span className="font-medium text-slate-800">{email}</span> within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="bg-slate-950 hover:bg-amber-500 active:scale-[0.98] text-white px-8 py-3 rounded-full text-xs font-bold tracking-wider transition-all duration-300 shadow-md flex items-center gap-2 hover:-translate-y-0.5"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div>
                    <div className="flex gap-6 border-b border-slate-100 mb-4 select-none">
                      <button
                        type="button"
                        onClick={() => handleTabChange("franchise")}
                        className={`pb-3 border-b-2 text-xs font-bold tracking-wider uppercase focus:outline-none transition-all duration-300 ${activeTab === "franchise"
                            ? "border-amber-500 text-slate-900"
                            : "border-transparent text-slate-400 hover:text-slate-600"
                          }`}
                      >
                        Franchise Application
                      </button>
                      <button
                        type="button"
                        onClick={() => handleTabChange("catering")}
                        className={`pb-3 border-b-2 text-xs font-bold tracking-wider uppercase focus:outline-none transition-all duration-300 ${activeTab === "catering"
                            ? "border-amber-500 text-slate-900"
                            : "border-transparent text-slate-400 hover:text-slate-600"
                          }`}
                      >
                        Catering & Events
                      </button>
                    </div>

                    <div className="bg-amber-50/40 border border-amber-100/40 rounded-xl p-3 mb-4 select-none">
                      <h5 className="text-[10px] font-bold text-amber-800 flex items-center gap-1.5 mb-1 uppercase tracking-wide">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500 shrink-0 animate-pulse" /> INDIA EXPANSION PHASE 2: REVIEWING PROPOSALS FOR MASTER FRANCHISE & CATERING EVENTS.
                      </h5>
                      <p className="text-[9px] text-slate-500 leading-relaxed">
                        *All financial estimates are audited under <span className="font-bold text-slate-700">corporate FSSAI & retail guidelines</span>. Average EBITDA ranges from <span className="font-bold text-slate-700">35% to 42%</span> based on standard format audits.
                      </p>
                    </div>
                  </div>

                  {/* Standard Form Inputs */}
                  <div className="flex flex-col gap-3">
                    <div>
                      <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1">Full Name</label>
                      <input
                        type="text"
                        placeholder="E.g. Rohan Mehta"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors(prev => { const next = { ...prev }; delete next.name; return next; });
                        }}
                        className={`w-full border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 transition-all text-xs placeholder:text-slate-300 font-medium ${errors.name
                            ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                            : "border-slate-200/80 focus:border-amber-500/80 focus:ring-amber-500/30"
                          }`}
                      />
                      {errors.name && <span className="text-[9px] text-red-500 mt-1 block font-medium">{errors.name}</span>}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1">Email Address</label>
                        <input
                          type="email"
                          placeholder="rohan@example.com"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors(prev => { const next = { ...prev }; delete next.email; return next; });
                          }}
                          className={`w-full border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 transition-all text-xs placeholder:text-slate-300 font-medium ${errors.email
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                              : "border-slate-200/80 focus:border-amber-500/80 focus:ring-amber-500/30"
                            }`}
                        />
                        {errors.email && <span className="text-[9px] text-red-500 mt-1 block font-medium">{errors.email}</span>}
                      </div>
                      <div>
                        <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+91 99999 99999"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors(prev => { const next = { ...prev }; delete next.phone; return next; });
                          }}
                          className={`w-full border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 transition-all text-xs placeholder:text-slate-300 font-medium ${errors.phone
                              ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                              : "border-slate-200/80 focus:border-amber-500/80 focus:ring-amber-500/30"
                            }`}
                        />
                        {errors.phone && <span className="text-[9px] text-red-500 mt-1 block font-medium">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Tab Specific Inputs */}
                    {activeTab === "franchise" ? (
                      <>
                        <div>
                          <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1">Proposed Territory / City</label>
                          <input
                            type="text"
                            placeholder="E.g. South Bengaluru, Indiranagar"
                            value={territory}
                            onChange={(e) => {
                              setTerritory(e.target.value);
                              if (errors.territory) setErrors(prev => { const next = { ...prev }; delete next.territory; return next; });
                            }}
                            className={`w-full border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 transition-all text-xs placeholder:text-slate-300 font-medium ${errors.territory
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                : "border-slate-200/80 focus:border-amber-500/80 focus:ring-amber-500/30"
                              }`}
                          />
                          {errors.territory && <span className="text-[9px] text-red-500 mt-1 block font-medium">{errors.territory}</span>}
                        </div>
                        <div>
                          <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1">Investment & Business Overview</label>
                          <textarea
                            rows={3}
                            placeholder="Briefly outline your previous retail/food service experience and your investment capacity."
                            value={overview}
                            onChange={(e) => setOverview(e.target.value)}
                            className="w-full border border-slate-200/80 rounded-lg px-3.5 py-2.5 focus:outline-none focus:border-amber-500/80 focus:ring-1 focus:ring-amber-500/30 transition-all text-xs resize-none placeholder:text-slate-300 font-medium"
                          ></textarea>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1">Event Date & Venue Location</label>
                          <input
                            type="text"
                            placeholder="E.g. October 12, Palace Grounds Bengaluru"
                            value={eventDate}
                            onChange={(e) => {
                              setEventDate(e.target.value);
                              if (errors.eventDate) setErrors(prev => { const next = { ...prev }; delete next.eventDate; return next; });
                            }}
                            className={`w-full border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 transition-all text-xs placeholder:text-slate-300 font-medium ${errors.eventDate
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                : "border-slate-200/80 focus:border-amber-500/80 focus:ring-amber-500/30"
                              }`}
                          />
                          {errors.eventDate && <span className="text-[9px] text-red-500 mt-1 block font-medium">{errors.eventDate}</span>}
                        </div>
                        <div>
                          <label className="text-[9px] font-bold text-slate-700 tracking-wider uppercase block mb-1">Expected Guest Count & Catering Requirements</label>
                          <textarea
                            rows={3}
                            placeholder="Please specify expected guest count, flavor preferences, and setup type (e.g., Live Counter, Dessert Table)."
                            value={guestCount}
                            onChange={(e) => {
                              setGuestCount(e.target.value);
                              if (errors.guestCount) setErrors(prev => { const next = { ...prev }; delete next.guestCount; return next; });
                            }}
                            className={`w-full border rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 transition-all text-xs resize-none placeholder:text-slate-300 font-medium ${errors.guestCount
                                ? "border-red-500 focus:border-red-500 focus:ring-red-500/20"
                                : "border-slate-200/80 focus:border-amber-500/80 focus:ring-amber-500/30"
                              }`}
                          ></textarea>
                          {errors.guestCount && <span className="text-[9px] text-red-500 mt-1 block font-medium">{errors.guestCount}</span>}
                        </div>
                      </>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-950 hover:bg-amber-500 active:scale-[0.98] text-white font-bold tracking-wider py-3 rounded-lg mt-1 flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.15)] hover:shadow-[0_10px_25px_-5px_rgba(245,158,11,0.25)] text-[11px] uppercase hover:-translate-y-0.5 focus:outline-none"
                  >
                    {activeTab === "franchise" ? "SUBMIT CORPORATE PROPOSAL" : "REQUEST CATERING QUOTE"}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// ==========================================
// 6. FOOTER COMPONENT (Click Disabled)
// ==========================================
const FooterComponent = () => {
  const brandDirectory = [
    { name: 'Home' },
    { name: 'About' },
    { name: 'Products' },
    { name: 'Flavours' },
    { name: 'Gallery' },
    { name: 'Locations' },
    { name: 'Contact' },
  ];

  const collections = ['Premium Cups', 'Waffle Cones', 'Ice Candy Bars', 'Shahi Kulfi', 'Family Packs'];

  return (
    <footer className="bg-[#0b1120] text-slate-300 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1 flex flex-col gap-6">
            <div
              onClick={(e) => handleSmoothScroll(e, '#home')}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-6 h-8 bg-amber-500 rounded-b-full rounded-t-sm flex items-center justify-center text-white font-serif font-bold text-xs">
                iC
              </div>
              <span className="font-serif font-bold text-2xl text-amber-500 tracking-tight">iCream</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              An elite national super-premium food brand, formulated with pure ingredients and distributed through luxury boutique networks.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="https://wa.me/9118002087780" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all" aria-label="WhatsApp"><MessageCircle className="w-4 h-4" /></a>
              <a href="mailto:franchise@creammagic.in" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all" aria-label="Email"><Mail className="w-4 h-4" /></a>
              <a href="https://facebook.com/icream" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="tel:18002087780" className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center hover:bg-amber-500 hover:border-amber-500 hover:text-white transition-all" aria-label="Phone"><Phone className="w-4 h-4" /></a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider text-sm mb-6 uppercase">Brand Directory</h4>
            <ul className="flex flex-col gap-4">
              {brandDirectory.map((link) => (
                <li key={link.name}>
                  <span
                    onClick={(e) => handleSmoothScroll(e, `#${link.name.toLowerCase()}`)}
                    className="text-sm text-slate-400 hover:text-amber-500 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider text-sm mb-6 uppercase">Collections</h4>
            <ul className="flex flex-col gap-4">
              {collections.map((item) => (
                <li key={item}>
                  <a href="#" onClick={(e) => e.preventDefault()} className="text-sm text-slate-400 hover:text-amber-500 transition-colors cursor-pointer">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold tracking-wider text-sm mb-6 uppercase">Corporate Headquarters</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=Prestige+Trade+Tower+Palace+Road+Bengaluru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-amber-500 transition-colors leading-relaxed"
                >
                  iCream Food Industries Pvt. Ltd.<br />5th Floor, Prestige Trade Tower,<br />Palace Road, High Grounds,<br />Bengaluru, Karnataka 560001
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="tel:18002087780" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  1800 208 7780 (Toll Free)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <a href="mailto:franchise@creammagic.in" className="text-sm text-slate-400 hover:text-amber-500 transition-colors">
                  franchise@creammagic.in
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">© 2026 iCream Food Industries Private Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="text-xs text-slate-500 hover:text-amber-500 transition-colors cursor-pointer">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-xs text-slate-500 hover:text-amber-500 transition-colors cursor-pointer">Franchise Terms</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-xs text-slate-500 hover:text-amber-500 transition-colors cursor-pointer">FSSAI Info</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


// ==========================================
// 7. MAIN PAGE COMPONENT
// ==========================================
export default function Home() {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Header Included Directly */}
      <HeaderComponent />

      <main>
        {/* Hero defines id="home" internally */}
        <Hero />

        <TrustBar />

        {/* ID for ABOUT */}
        <div id="about">
          <AboutComponent />
        </div>

        {/* ID for PRODUCTS */}
        <div id="products">
          <FeaturedProductsComponent />
        </div>

        {/* FlavourExperience defines id="flavours" internally */}
        <FlavourExperience />

        <WhyChooseUsComponent />

        {/* Gallery defines id="gallery" internally */}
        <Gallery />

        <Testimonials />

        {/* StoreLocator defines id="locations" internally */}
        <StoreLocator />

        {/* ID for CONTACT */}
        <div id="contact">
          <ContactComponent />
        </div>
      </main>

      {/* Footer Included Directly */}
      <FooterComponent />

      <MobileCTA />
    </div>
  );
}