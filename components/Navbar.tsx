"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (target: string, isAnchor = false) => {
    setIsMenuOpen(false);

    if (isAnchor) {
      if (pathname !== "/") {
        window.location.href = `/#${target}`;
        return;
      }
      const element = document.getElementById(target);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = target;
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        /* We use a fixed h-20 (80px) and items-center to keep the bar consistent */
        className="fixed top-0 left-0 right-0 z-50 px-6 h-20 bg-[#E5E1DE]/95 backdrop-blur-sm border-b border-[#1A1A1A]/5 flex items-center"
      >
        <div className="max-w-[1920px] mx-auto w-full flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-1">
            <Link href="/" onClick={() => window.scrollTo(0, 0)} className="inline-block">
              <img
                src="/img/Dolce_Logo_nobg.png"
                alt="Dolce Far Niente"
                /* Using scale-[1.5] allows the logo to appear 50% larger 
                   than its actual container height without pushing the navbar borders.
                   'origin-left' keeps it anchored to the left side.
                */
                className="h-10 md:h-12 w-auto object-contain scale-[1.4] md:scale-[1.6] origin-left transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            <button
              onClick={toggleMenu}
              className="text-[#1A1A1A] hover:text-[#C5A27D] transition-colors font-montserrat text-base tracking-[0.2em] uppercase font-medium"
            >
              Menu
            </button>

            <motion.a
                href="https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services?buttonTextColor=ffffff&color=06052c&locale=en&referrer=so"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1A1A1A] text-[#E5E1DE] px-6 py-2 rounded-full font-montserrat text-sm tracking-wide hover:bg-[#C5A27D] transition-colors duration-300 whitespace-nowrap hidden md:inline-block text-center"
              >
                Book Now
          </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1A1A1A] text-[#E5E1DE] px-4 py-2 rounded-full font-montserrat text-xs tracking-wide hover:bg-[#C5A27D] transition-colors duration-300 whitespace-nowrap md:hidden"
            >
              Book Now
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 z-[55] bg-black/50 backdrop-blur-sm"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-[60] w-[300px] bg-[#2D2D2D] p-8 flex flex-col shadow-2xl"
            >
              <button
                onClick={toggleMenu}
                className="self-end text-[#E5E1DE] hover:text-[#C5A27D] transition-colors mb-12"
              >
                <X size={24} strokeWidth={1} />
              </button>

              <nav className="flex flex-col gap-8">
                <button
                  onClick={() => handleNavigation("/services")}
                  className="text-left font-cormorant text-3xl text-[#E5E1DE] hover:text-[#C5A27D] hover:italic transition-all duration-300 border-b border-[#E5E1DE]/10 pb-4"
                >
                  Treatments
                </button>
                <button
                  onClick={() => handleNavigation("about", true)}
                  className="text-left font-cormorant text-3xl text-[#E5E1DE] hover:text-[#C5A27D] hover:italic transition-all duration-300 border-b border-[#E5E1DE]/10 pb-4"
                >
                  Our Story
                </button>
                <button
                  onClick={() => handleNavigation("bestsellers", true)}
                  className="text-left font-cormorant text-3xl text-[#E5E1DE] hover:text-[#C5A27D] hover:italic transition-all duration-300 border-b border-[#E5E1DE]/10 pb-4"
                >
                  Featured Products
                </button>
                <button
                  onClick={() => handleNavigation("contact", true)}
                  className="text-left font-cormorant text-3xl text-[#E5E1DE] hover:text-[#C5A27D] hover:italic transition-all duration-300 border-b border-[#E5E1DE]/10 pb-4"
                >
                  Contact
                </button>
              </nav>

              <div className="mt-auto">
                <img
                  src="/img/Dolce_Logo_nobg.png"
                  alt="Dolce Logo"
                  className="h-8 w-auto object-contain brightness-0 invert opacity-30"
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};