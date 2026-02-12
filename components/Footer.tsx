"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (targetId: string) => {
    // If we are not on the home page, go home first with the hash
    if (pathname !== "/") {
      router.push(`/#${targetId}`);
      return;
    }

    // If we are already home, scroll smoothly
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // Offsets the fixed navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-[#1A1A1A] text-[#E5E1DE] py-24 px-6 overflow-hidden">
      {/* Background Logo Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 select-none overflow-hidden">
        <h1 className="font-cormorant text-[20vw] whitespace-nowrap leading-none tracking-tighter">
          DOLCE
        </h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div className="flex flex-col gap-6">
           <img 
             src="/img/Dolce_Logo_nobg.png" 
             alt="Dolce Logo" 
             className="h-28 w-auto object-contain brightness-0 invert opacity-80"
           />
           <address className="font-montserrat text-sm text-[#E5E1DE]/60 not-italic">
             123 Luxury Ave, Suite 400<br />
             New York, NY 10012
           </address>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="font-cormorant text-xl text-[#C5A27D]">Menu</h4>
            <nav className="flex flex-col gap-2 font-montserrat text-sm text-[#E5E1DE]/60">
              <button 
                onClick={() => router.push('/services')} 
                className="text-left hover:text-[#E5E1DE] transition-colors"
              >
                Treatments
              </button>
              <button 
                onClick={() => handleNavigation("about")} 
                className="text-left hover:text-[#E5E1DE] transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation("bestsellers")} 
                className="text-left hover:text-[#E5E1DE] transition-colors"
              >
                Shop
              </button>
              <button 
                onClick={() => handleNavigation("contact")} 
                className="text-left hover:text-[#E5E1DE] transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-cormorant text-xl text-[#C5A27D]">Social</h4>
            <nav className="flex flex-col gap-2 font-montserrat text-sm text-[#E5E1DE]/60">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5E1DE] transition-colors">Instagram</a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5E1DE] transition-colors">TikTok</a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#E5E1DE] transition-colors">Pinterest</a>
            </nav>
          </div>
        </div>

      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto mt-24 pt-8 border-t border-[#E5E1DE]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-montserrat text-[#E5E1DE]/30">
        <p>© 2026 Dolce far Niente Aesthetics. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="/privacy" className="hover:text-[#E5E1DE]">Privacy Policy</a>
          <a href="/terms" className="hover:text-[#E5E1DE]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};