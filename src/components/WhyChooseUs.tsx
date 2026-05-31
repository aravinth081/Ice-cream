import React from 'react';
import { ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-600" />,
      title: "Centralized Supply Sourcing",
      badge: "SOURCING INTEGRITY",
      desc: "Daily sourced from certified A2 organic estates to ensure consistent quality and stable costs."
    },
    {
      icon: <Heart className="w-6 h-6 text-amber-600" />,
      title: "Exclusive Global Importation",
      badge: "TRADE MOAT",
      desc: "Direct imports of rare botanicals like Madagascar Vanilla, securing our proprietary flavor profiles."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-amber-600" />,
      title: "Proprietary Batch Churning",
      badge: "PROCESS PATENT",
      desc: "Advanced vertical batch-freezing with precise controls maintains our super-premium density."
    },
    {
      icon: <Award className="w-6 h-6 text-amber-600" />,
      title: "Real-Time Cold-Chain Telemetry",
      badge: "ISO 22000 CERTIFIED",
      desc: "Continuous IoT monitoring at a stable -18°C ensures flawless quality from churn to parlor."
    }
  ];

  return (
    // Changed to pb-0 to completely remove bottom padding
    <section className="pt-24 pb-0 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-sm font-bold tracking-[0.2em] text-amber-600 uppercase">
              Corporate Value Pillars
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6">
            The Standards We <span className="text-amber-500">Stand By</span>
          </h2>
          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We operate at the intersection of traditional culinary heritage and high-fidelity food engineering to scale super-premium desserts.
          </p>
        </div>

        {/* Cards Grid - Changed p-4 to px-4 pt-4 pb-0 to remove bottom space */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 pt-4 pb-0">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl hover:border-amber-200 hover:z-10 flex flex-col items-center text-center cursor-default"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:bg-amber-50 group-hover:border-amber-100">
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-serif font-bold text-slate-900 mb-4 h-14 flex items-center justify-center leading-snug">
                {pillar.title}
              </h3>

              {/* Badge */}
              <div className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-[10px] font-bold tracking-widest text-slate-700 mb-5 group-hover:border-amber-200 group-hover:bg-amber-50/50 transition-colors">
                {pillar.badge}
              </div>

              {/* Shortened Description */}
              <p className="text-slate-600 text-sm leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}