"use client";

import { motion } from "framer-motion";
import Link from 'next/link';

const ServiceItem = ({ title, duration, price }: { title: string, duration: string, price: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex items-center justify-between py-8 border-b border-[#1A1A1A]/10 hover:border-[#C5A27D] transition-colors group cursor-pointer"
  >
    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
      <h3 className="font-cormorant text-2xl text-[#1A1A1A] group-hover:text-[#C5A27D] transition-colors">{title}</h3>
      <span className="font-montserrat text-xs text-[#1A1A1A]/50 uppercase tracking-wider">{duration}</span>
    </div>
    <div className="font-montserrat text-[#1A1A1A] font-medium">
      <span className="text-xs text-[#1A1A1A]/40 mr-2 font-normal">Starting at</span>
      {price}
    </div>
  </motion.div>
);

export const ServicesList = () => {
  return (
    <section className="py-24 px-6 bg-[#E5E1DE]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="font-montserrat text-xs tracking-[0.3em] text-[#C5A27D] uppercase block mb-4">Menu</span>
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#1A1A1A]">Treatments</h2>
        </motion.div>

        <div className="flex flex-col">
          <ServiceItem 
            title="Volume Lashes" 
            duration="120 MINS" 
            price="$130" 
          />
          <ServiceItem 
            title="Vajacial w/ Brazilian" 
            duration="45 MINS" 
            price="$100" 
          />
          <ServiceItem 
            title="Express Facial" 
            duration="30 MINS" 
            price="$80" 
          />
          <ServiceItem 
            title="Hybrid Fill In" 
            duration="120 MINS" 
            price="$85" 
          />
        </div>

        <div className="mt-12 text-center">
          <Link href="/services">
            <button className="text-[#1A1A1A] border-b border-[#1A1A1A] pb-1 hover:text-[#C5A27D] hover:border-[#C5A27D] transition-colors font-montserrat text-sm tracking-widest uppercase">
              View Full Menu
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
