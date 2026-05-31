import React from 'react';
import { Sparkles } from 'lucide-react';

export default function FeaturedProducts() {
  const products = [
    {
      name: "Pistachio Royale",
      subtitle: "SLOW-ROASTED IRANIAN GREEN NUTS",
      badge: "SUPER-PREMIUM YIELD",
      desc: "A nutty masterpiece blending roasted Iranian pistachio paste with whole chunks for a deeply satisfying, savory crunch.",
      kcal: "260 KCAL PER SCOOP",
      // Working Pexels Image for Pistachio
      img: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=800",
      isPopular: false
    },
    {
      name: "Strawberry Bliss",
      subtitle: "SUN-RIPENED SUMMER BERRIES",
      badge: "CLASSIC SKU",
      desc: "Refreshingly light and tangy, packed with real organic strawberries and raw wild honey for a vibrant, summery burst.",
      kcal: "210 KCAL PER SCOOP",
      // Working Pexels Image for Strawberry
      img: "https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg?auto=compress&cs=tinysrgb&w=800",
      isPopular: false
    },
    {
      name: "Butterscotch Crunch",
      subtitle: "HANDMADE ENGLISH TOFFEE",
      badge: "TOP RATED DRIVER",
      desc: "A harmonious blend of brown butter gelato, handmade toffee shards, and a decadent swirl of warm sea salt caramel.",
      kcal: "290 KCAL PER SCOOP",
      // Working Pexels Image for Caramel/Butterscotch
      img: "/images/product_butterscotch.png",
      isPopular: true
    },
    {
      name: "Belgian Chocolate",
      subtitle: "72% SINGLE ORIGIN COCOA",
      badge: "CORE BESTSELLER",
      desc: "An intense, velvety experience crafted from imported Belgian cocoa, slow-churned for a profoundly rich flavor profile.",
      kcal: "280 KCAL PER SCOOP",
      // Working Pexels Image for Chocolate
      img: "https://images.pexels.com/photos/2846337/pexels-photo-2846337.jpeg?auto=compress&cs=tinysrgb&w=800",
      isPopular: true
    },
    {
      name: "Madagascar Vanilla",
      subtitle: "GENUINE BOURBON ORCHID PODS",
      badge: "STAPLE SKU",
      desc: "Classic refinement infused with hand-scraped Madagascar vanilla beans, delivering a warm aroma and rich creaminess.",
      kcal: "220 KCAL PER SCOOP",
      // Working Pexels Image for Vanilla
      img: "https://images.pexels.com/photos/1332267/pexels-photo-1332267.jpeg?auto=compress&cs=tinysrgb&w=800",
      isPopular: false
    },
    {
      name: "Alphonso Mango",
      subtitle: "RATNAGIRI ALPHONSO PULP",
      badge: "HIGH VELOCITY SKU",
      desc: "A tropical celebration made exclusively from sweet Ratnagiri Alphonso mangoes, offering a pure, vibrant fruitiness.",
      kcal: "190 KCAL PER SCOOP",
      // Working Pexels Image for Mango/Yellow
      img: "/images/product_mango.png",
      isPopular: true
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
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

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl flex flex-col h-full cursor-pointer"
            >
              {/* Image Section */}
              <div className="relative h-64 w-full shrink-0 overflow-hidden bg-slate-100">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Popular Badge */}
                {product.isPopular && (
                  <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 text-[10px] font-bold tracking-wider rounded-full flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3 h-3" />
                    POPULAR
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-[10px] font-bold tracking-widest text-amber-600 mb-2 uppercase">
                  {product.subtitle}
                </span>

                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {product.name}
                </h3>

                <div className="inline-block px-3 py-1 border border-slate-200 bg-slate-50 rounded-full text-[10px] font-bold tracking-wider text-slate-600 mb-4 w-fit">
                  {product.badge}
                </div>

                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {product.desc}
                </p>

                {/* Card Footer - Only KCAL, View Ingredients Removed */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center">
                  <span className="text-xs font-bold text-slate-400 tracking-wider">
                    {product.kcal}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}