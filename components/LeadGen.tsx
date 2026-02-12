"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const LeadGen = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-[#E5E1DE]">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#1A1A1A] mb-4">Join the Inner Circle</h2>
          <p className="font-montserrat text-[#1A1A1A]/60 text-sm mb-12">
            Receive exclusive access to flash sales, new treatments, and skincare wisdom.
          </p>

          <form className="relative max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your Email Address"
              className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 font-montserrat focus:outline-none focus:border-[#C5A27D] transition-colors pr-10"
            />
            <button 
              type="submit" 
              className="absolute right-0 top-3 text-[#1A1A1A] hover:text-[#C5A27D] transition-colors"
            >
              <ArrowRight size={20} strokeWidth={1.5} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
