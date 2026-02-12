"use client";

import { motion } from "framer-motion";

export const FinalInvitation = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-[#2D2D2D]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1765745518739-bd8225374713?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJlbmUlMjBzcGElMjB0cmVhdG1lbnQlMjByb29tJTIwZGFyayUyMG1vb2R5JTIwbHV4dXJ5fGVufDF8fHx8MTc3MDM1MDIyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
          alt="Serene Treatment Room" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D] via-[#2D2D2D]/80 to-[#2D2D2D]/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-[#E5E1DE] mb-12 leading-tight"
        >
          Your Journey to <span className="text-[#C5A27D] italic">Glass Skin</span> Begins Here.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a 
            href="https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services?buttonTextColor=ffffff&color=06052c&locale=en&referrer=so"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block" // Ensures the link wrapper fits the button perfectly
          >
            <button className="bg-[#E5E1DE] text-[#1A1A1A] px-10 py-4 rounded-full font-montserrat text-sm tracking-[0.2em] uppercase hover:bg-[#C5A27D] transition-colors duration-300 shadow-lg shadow-[#1A1A1A]/20">
              Book Your First Session
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
