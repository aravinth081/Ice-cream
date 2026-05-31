"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0B0F19] text-slate-400 py-12 md:py-16 border-t border-white/10 relative z-10">
      <div className="max-w-[90%] 2xl:max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          
          {/* Brand Intro Column (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              <svg 
                className="w-7 h-7 md:w-8 md:h-8 text-accent-gold" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="footer-logo-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#DFBA5A" />
                    <stop offset="50%" stopColor="#C9A227" />
                    <stop offset="100%" stopColor="#A27D12" />
                  </linearGradient>
                </defs>
                <path d="M12 2C12.5 2 13 2.5 13 3C13 3.5 12.5 4 12 4C11.5 4 11 3.5 11 3C11 2.5 11.5 2 12 2Z" fill="url(#footer-logo-gold)" />
                <path d="M12 4C8.68629 4 6 6.68629 6 10C6 10.5 6.2 11 6.5 11.5C7.2 12.5 8.5 13 10 13H14C15.5 13 16.8 12.5 17.5 11.5C17.8 11 18 10.5 18 10C18 6.68629 15.3137 4 12 4Z" fill="url(#footer-logo-gold)" opacity="0.85" />
                <path d="M9 8C10.5 7 13.5 7 15 8" stroke="white" strokeWidth="1" strokeLinecap="round" />
                <path d="M6.5 12L12 22L17.5 12H6.5Z" fill="url(#footer-logo-gold)" />
                <path d="M9.5 12L12 17M14.5 12L12 17" stroke="white" strokeWidth="0.8" opacity="0.6" />
              </svg>
              <span className="font-serif text-xl md:text-2xl font-extrabold tracking-tight text-white">
                i<span className="text-accent-gold">Cream</span>
              </span>
            </div>
            <p className="font-sans text-xs md:text-sm text-slate-400 hover:text-blue-400 transition-colors duration-300 leading-relaxed mb-8 max-w-sm cursor-default">
              An elite national super-premium food brand, formulated with pure ingredients and distributed through luxury boutique networks.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-3.5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-gold/45 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-accent-gold transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-gold/45 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-accent-gold transition-all duration-300 shadow-sm"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://wa.me/9118002087780"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-gold/45 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-accent-gold transition-all duration-300 shadow-sm"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.702-3.898l.41.243c1.455.863 3.064 1.319 4.894 1.32h.005c5.544 0 10.057-4.512 10.06-10.058.002-2.686-1.042-5.212-2.945-7.118C17.275 2.583 14.75 1.538 12.01 1.536 6.47 1.536 1.96 6.048 1.957 11.597c-.001 1.93.502 3.81 1.458 5.484l.263.456-1.034 3.771 3.874-.985zm11.305-7.83c-.305-.153-1.805-.89-2.083-.99-.278-.102-.48-.153-.68.153-.2.304-.778.99-.954 1.193-.176.202-.352.228-.657.076-.305-.152-1.286-.475-2.45-1.514-.906-.809-1.517-1.809-1.695-2.114-.177-.305-.019-.47.133-.621.137-.136.305-.355.457-.533.151-.177.202-.304.303-.507.102-.203.05-.381-.025-.533-.076-.152-.68-1.642-.932-2.25-.246-.59-.497-.51-.68-.52-.176-.01-.378-.01-.58-.01-.202 0-.53.076-.807.38-.278.305-1.062 1.04-1.062 2.538s1.087 2.943 1.238 3.146c.152.203 2.138 3.262 5.177 4.57.722.311 1.286.497 1.726.637.725.23 1.385.197 1.906.12.58-.087 1.805-.737 2.058-1.45.253-.711.253-1.32.176-1.45-.076-.13-.277-.206-.583-.357z" />
                </svg>
              </a>
              <a
                href="mailto:franchise@creammagic.in"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-accent-gold/45 hover:bg-white/10 flex items-center justify-center text-slate-300 hover:text-accent-gold transition-all duration-300 shadow-sm"
                aria-label="Email"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.83l10 8.104 10-8.104v11.83h-20z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Directory Links (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-6">
              Brand Directory
            </h4>
            <nav className="flex flex-col gap-3">
              {["Home", "About", "Products", "Flavours", "Gallery", "Locations", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-sans text-xs text-slate-400 hover:text-blue-400 transition-colors duration-300 py-1"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Product Collections (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-6">
              Collections
            </h4>
            <nav className="flex flex-col gap-3">
              {["Premium Cups", "Waffle Cones", "Ice Candy Bars", "Shahi Kulfi", "Family Packs"].map((col) => (
                <a
                  key={col}
                  href="#products"
                  className="font-sans text-xs text-slate-400 hover:text-blue-400 transition-colors duration-300 py-1"
                >
                  {col}
                </a>
              ))}
            </nav>
          </div>

          {/* Corporate Headquarters Column (4 Columns) */}
          <div className="lg:col-span-4">
            <h4 className="font-sans text-xs font-bold text-white uppercase tracking-widest mb-6">
              Corporate Headquarters
            </h4>
            <div className="flex flex-col gap-4.5 text-xs font-sans text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-gold mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=Prestige+Trade+Tower+Palace+Road+High+Grounds+Bengaluru"
                  target="_blank"
                  rel="noreferrer"
                  className="leading-relaxed hover:text-blue-400 transition-colors duration-300"
                >
                  iCream Food Industries Pvt. Ltd.<br />
                  5th Floor, Prestige Trade Tower,<br />
                  Palace Road, High Grounds,<br />
                  Bengaluru, Karnataka 560001
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <a
                  href="tel:18002087780"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  1800 208 7780 (Toll Free)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-gold flex-shrink-0" />
                <a
                  href="mailto:franchise@creammagic.in"
                  className="hover:text-blue-400 transition-colors duration-300"
                >
                  franchise@creammagic.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Sub-bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-[11px] text-slate-500 hover:text-blue-400 transition-colors duration-300 cursor-default">
            © {new Date().getFullYear()} iCream Food Industries Private Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="font-sans text-[11px] text-slate-500 hover:text-blue-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#contact" className="font-sans text-[11px] text-slate-500 hover:text-blue-400 transition-colors duration-300">
              Franchise Terms
            </a>
            <a href="#contact" className="font-sans text-[11px] text-slate-500 hover:text-blue-400 transition-colors duration-300">
              FSSAI Info
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
