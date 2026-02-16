"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const LeadGen = () => {
  const [status, setStatus] = useState("idle"); // idle, loading, success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
    };

    try {
      // REPLACE THIS URL WITH YOUR DEPLOYED SCRIPT URL
      await fetch("https://script.google.com/macros/s/AKfycbyLl01Td8lWdvwQW9jjcuGGjxuusJkFzfrBIofhmxECrenTqvBr3Tl_8pOYw8oy_lJW/exec", {
        method: "POST",
        mode: "no-cors", // Required for Google Scripts
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("idle");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#E5E1DE]">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-montserrat text-[10px] tracking-[0.3em] text-[#C5A27D] uppercase block mb-4">
                Exclusive Invitation
              </span>
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl text-[#1A1A1A] mb-6">
                Enjoy <span className="italic text-[#C5A27D]">20% off</span> your next ritual.
              </h2>
              <p className="font-montserrat text-[#1A1A1A]/60 text-sm mb-12 max-w-md mx-auto leading-relaxed">
                Join our Inner Circle to receive your gift code, plus exclusive access to flash sales.
              </p>

              <form className="max-w-lg mx-auto space-y-10" onSubmit={handleSubmit}>
                <div className="space-y-6 text-left">
                  <input 
                    name="name"
                    type="text" 
                    placeholder="Full Name"
                    required
                    disabled={status === "loading"}
                    className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 font-montserrat focus:outline-none focus:border-[#C5A27D] transition-colors"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <input 
                      name="phone"
                      type="tel" 
                      placeholder="Phone Number"
                      required
                      disabled={status === "loading"}
                      className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 font-montserrat focus:outline-none focus:border-[#C5A27D] transition-colors"
                    />
                    <div className="relative">
                      <input 
                        name="email"
                        type="email" 
                        placeholder="Email Address"
                        required
                        disabled={status === "loading"}
                        className="w-full bg-transparent border-b border-[#1A1A1A]/20 py-3 text-[#1A1A1A] placeholder:text-[#1A1A1A]/30 font-montserrat focus:outline-none focus:border-[#C5A27D] transition-colors pr-10"
                      />
                      <button 
                        type="submit" 
                        disabled={status === "loading"}
                        className="absolute right-0 top-3 text-[#1A1A1A] hover:text-[#C5A27D] disabled:opacity-30 transition-all hover:translate-x-1"
                      >
                        {status === "loading" ? "..." : <ArrowRight size={24} strokeWidth={1} />}
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12"
            >
              <CheckCircle2 size={48} className="text-[#C5A27D] mx-auto mb-6" strokeWidth={1} />
              <h2 className="font-cormorant text-4xl text-[#1A1A1A] mb-4">Welcome to the Circle.</h2>
              <p className="font-montserrat text-[#1A1A1A]/60 text-sm">
                Check your messages shortly for your 20% off code.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};