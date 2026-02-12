"use client";

import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-[#E5E1DE]">
      {/* Background - using the steam/smoke image to simulate atmosphere */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1655178094055-6df93f2ab554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHN0ZWFtJTIwc21va2UlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcwMzQ5MzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Atmospheric steam"
          className="w-full h-full object-cover opacity-60 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#E5E1DE]/30 via-transparent to-[#E5E1DE]/80" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.h1 
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-cormorant text-5xl md:text-7xl lg:text-8xl text-[#1A1A1A] leading-[1.1] mb-6"
        >
          The Art of Indulgence.<br />
          <span className="italic text-[#C5A27D]">The Science of Glow.</span>
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-montserrat text-[#1A1A1A]/80 text-sm md:text-base tracking-[0.2em] uppercase max-w-lg"
        >
          NYS Licensed Esthetician specializing in the Korean Glass Skin Method
        </motion.p>
      </div>
    </section>
  );
};
