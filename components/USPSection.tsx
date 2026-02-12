"use client";

import { motion } from "framer-motion";

const Feature = ({ title, img, delay }: { title: string, img: string, delay: number }) => (
  <motion.div 
    initial={{ y: 50, opacity: 0, filter: "blur(5px)" }}
    whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
    className="flex flex-col items-center"
  >
    <div className="w-full aspect-[3/4] rounded-t-full overflow-hidden mb-8 border border-[#1A1A1A]/10 relative group">
      <div className="absolute inset-0 bg-[#C5A27D]/0 group-hover:bg-[#C5A27D]/10 transition-colors duration-500 z-10" />
      <img 
        src={img} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
    </div>
    <h3 className="font-cormorant text-2xl md:text-3xl text-[#1A1A1A] mb-2">{title}</h3>
    <div className="h-px w-12 bg-[#C5A27D]" />
  </motion.div>
);

export const USPSection = () => {
  return (
    <section className="py-24 px-6 bg-[#E5E1DE]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <span className="font-montserrat text-xs tracking-[0.3em] text-[#C5A27D] uppercase block mb-4">Our Philosophy</span>
          <h2 className="font-cormorant text-4xl md:text-5xl text-[#1A1A1A]">The Glass Skin Standard</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <Feature 
            title="Hydration-First" 
            img="https://images.unsplash.com/photo-1758532843609-43d98fa8c23f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlciUyMHJpcHBsZXMlMjB0ZXh0dXJlJTIwY2xlYW58ZW58MXx8fHwxNzcwMzQ5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            delay={0.2} 
          />
          <Feature 
            title="Korean Techniques" 
            img="https://images.unsplash.com/photo-1593260853607-d0e0f639bdab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBnbGFzcyUyMHNraW4lMjBtb2RlbCUyMGZhY2UlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MDM0OTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            delay={0.4} 
          />
          <Feature 
            title="Pure Formulas" 
            img="https://images.unsplash.com/photo-1638609927040-8a7e97cd9d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhbSUyMHRleHR1cmUlMjBzbWVhciUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzcwMzQ5MzcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
            delay={0.6} 
          />
        </div>
      </div>
    </section>
  );
};
