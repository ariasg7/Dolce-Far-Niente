"use client";

import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-[#E5E1DE] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        
        {/* Image - Left */}
        <motion.div 
          initial={{ x: -50, opacity: 0, filter: "blur(10px)" }}
          whileInView={{ x: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full md:w-1/2"
        >
          <div className="aspect-[3/4] md:aspect-[4/5] w-full rounded-t-full overflow-hidden border border-[#1A1A1A]/5 shadow-2xl shadow-[#1A1A1A]/5">
            <img 
              src="img/Jo.jpeg"
              alt="Esthetician Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text - Right */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full md:w-1/2"
        >
          <span className="font-montserrat text-xs tracking-[0.3em] text-[#C5A27D] uppercase block mb-6">The Founder</span>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-8 leading-tight">
            Curating confidence through <span className="italic">conscious</span> care.
          </h2>
          <div className="space-y-6 font-montserrat text-[#1A1A1A]/70 leading-relaxed font-light">
            <p>
              My journey began with a simple belief: that skincare is not just a routine, but a ritual of self-respect. As a licensed esthetician, I've dedicated my craft to mastering the delicate balance between clinical results and spa-like serenity.
            </p>
            <p>
              Specializing in the Korean Glass Skin method, I focus on barrier repair and deep hydration, creating that signature "lit-from-within" glow that doesn't just look healthy—it is healthy.
            </p>
          </div>
          
          <div className="-mt-20">
             <img 
               src="img/Jo Signature.png" 
               alt="Signature" 
               className="h-100 w-auto opacity-50"
             />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
