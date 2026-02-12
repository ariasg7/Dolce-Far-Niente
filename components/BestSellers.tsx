"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

const ProductCard = ({ title, price, msrp, img, link, delay }: { title: string, price: string, msrp: string, img: string, link: string , delay: number }) => (
  <motion.div 
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="group flex flex-col"
  >
    <div className="relative aspect-[3/4] bg-[#1A1A1A] overflow-hidden mb-6 rounded-sm">
      <div className="absolute top-4 left-4 bg-[#C5A27D] text-[#1A1A1A] text-xs font-bold px-3 py-1 uppercase tracking-widest z-10">
        Dolce Exclusive
      </div>
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105 transform"
      />
      {/* Overlay Button */}
      <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent">
  <a 
    href="https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services"
    target="_blank"
    rel="noopener noreferrer"
  >
    <button className="bg-[#E5E1DE] text-[#1A1A1A] px-6 py-2 rounded-full font-montserrat text-xs tracking-widest uppercase hover:bg-[#C5A27D] transition-colors">
      Book Now
    </button>
  </a>
</div>
    </div>
    
    <div className="text-center">
      <h3 className="font-cormorant text-2xl text-[#E5E1DE] mb-3">{title}</h3>
      <div className="flex flex-col items-center gap-1 font-montserrat text-sm">
        <div className="flex items-center gap-2 text-[#E5E1DE]/40 text-xs tracking-wider">
           <span>A LA CARTE</span>
           <span className="line-through decoration-1">{msrp}</span>
        </div>
        <div className="flex items-center gap-2 text-[#C5A27D] font-bold text-base tracking-wide">
           <span>The Dolce Rate</span>
           <span>{price}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export const BestSellers = () => {
  return (
    <section id="bestsellers" className="py-24 px-6 bg-[#2D2D2D] text-[#E5E1DE]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div>
            <span className="font-montserrat text-xs tracking-[0.3em] text-[#C5A27D] uppercase block mb-4">The Collection</span>
            <h2 className="font-cormorant text-4xl md:text-5xl text-[#E5E1DE]">Best Sellers</h2>
          </div>
          <p className="font-montserrat text-[#E5E1DE]/60 text-sm max-w-sm text-right md:text-right">
            Curated essentials for your daily ritual. Unlock exclusive pricing with membership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProductCard 
            title="Brazilian" 
            msrp="$150" 
            price="$100" 
            img="img/brazilian.png"
            link="https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/FIJOSXQTZEQFTQJCY7HR4ALN"
            delay={0}
          />
          <ProductCard 
            title="Stem Cell Facial" 
            msrp="$275" 
            price="$200" 
            img="img/stem_cell_facial.png"
            link="https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/7PHRYLAZPYI2IC6SVY6WCYNY"
            delay={0.2}
          />
          <ProductCard 
            title="Chemical Peel" 
            msrp="$250" 
            price="$200" 
            img="img/chemical_peel.png"
            link="https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/BEK4FKDVIQ3ODPBVHRDB3W3A"
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};
