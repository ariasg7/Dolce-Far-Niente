"use client";

import { motion } from "framer-motion";

const services = [
  // --- FACIALS ---
  {
    title: "Stem Cell Facial",
    description: "The most important aspect of stem cell treatment applied to the skin is to repair the skin tissue and produce more collagen for a more youthful glowy skin.",
    price: "$200",
    duration: "90 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/7PHRYLAZPYI2IC6SVY6WCYNY"
  },
  {
    title: "Deep Cleanse Facial",
    description: "The deep cleansing facial is most effective for individuals with severe acne and excessive oil on the face. Includes double cleanse, exfoliation, extractions, custom mask, high frequency and...",
    price: "$170",
    duration: "90 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/GB65TZTWGW5RBJRLRAEZ2LVL"
  },
  {
    title: "Microdermabrasion Facial",
    description: "Minimal invasive procedure to help renew skin tone and texture, helps improve damage skin from the sun, acne and wrinkle lines.",
    price: "$150",
    duration: "90 MINS",
    bookingURL: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/OPSLPBBV67KHRXAI3L6KHABA"
  },
  {
    title: "Chemical Peel",
    description: "The acid solutions used in peel treatments can help unclog your pores, regulate sebum production, and kill acne-causing bacteria.",
    price: "$200",
    duration: "90 MINS"
  },
  {
    title: "Basic Facial",
    description: "Nourishes the skin, removes dead skin cells and cleans out pores. Includes double cleanse, exfoliation, extractions, massage and custom mask.",
    price: "$140",
    duration: "60 MINS",
    bookingURL: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/RFXHCMURMPLHC63J7QJJIHN2"
  },
  {
    title: "Gentleman Facial",
    description: "Tailored specifically for men's skin needs, focusing on deep pore cleansing and soothing razor irritation.",
    price: "$150",
    duration: "90 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/RMCNSFYSDNRRQJRLDRNUKQIU"
  },
  {
    title: "Acne Facial",
    description: "Acne facial concentrates on acne prone skin. Helps with inflammation, redness and bumpy skin. Using O'melon omega green plus (Chlorophyllin copper complex), both detoxifying and...",
    price: "$180",
    duration: "120 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/LHH3COUNHYTEO5OHYQYMOW4A"
  },
  {
    title: "Express Facial",
    description: "Quick clean up of the skin to help refresh and moisturize the skin texture.",
    price: "$80",
    duration: "30 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/FB43UM26SD3DP4F4Z3AZ3MLP"
  },
  {
    title: "Back Facial",
    description: "A specialized treatment for the often-neglected skin of the back, focusing on exfoliation and deep cleansing.",
    price: "$120",
    duration: "70 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/RFXHCMURMPLHC63J7QJJIHN2"
  },

  // --- LASHES ---
  {
    title: "Volume Lashes",
    description: "Fuller thicker look that adds length and volume.",
    price: "$130",
    duration: "120 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/G56BOQROUW4AGOS3SRH2CW7J"
  },
  {
    title: "Hybrid Lashes",
    description: "Is a combination of classic and volume set, gives a fuller look but still natural.",
    price: "$125",
    duration: "120 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/JJAFM454JZLDDUNOL5HEW35Z"
  },
  {
    title: "Classic Set",
    description: "Natural look with single extension application.",
    price: "$90",
    duration: "120 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/QVU3YRSFT3NJ3PQNUKSWSVUP"
  },
  {
    title: "Hybrid Fill In",
    description: "Maintenance appointment to refill hybrid lash sets.",
    price: "$85",
    duration: "90 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/KRAJHRAR5I42FJTUTY6QRHT2"
  },

  // --- WAXING ---
  {
    title: "Vajacial w/ Brazilian",
    description: "Includes waxing, deep cleanse, hydrating mask and high frequency that will kill bacteria to help treat ingrown hairs and even out appearance of the skin.",
    price: "$100",
    duration: "45 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/FIJOSXQTZEQFTQJCY7HR4ALN"
  },
  {
    title: "Brazilian Wax",
    description: "Complete hair removal for the bikini area.",
    price: "$85",
    duration: "30 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/OXMO6WFERK36KDZ7ZD6CL2P5"
  },
  {
    title: "Full Chest Wax",
    description: "Complete hair removal for the chest area.",
    price: "$80",
    duration: "30 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/O5YLMJWUX7DDOQNNAIQRBBMI"
  },
  {
    title: "Full Back Wax",
    description: "Complete hair removal for the back area.",
    price: "$75",
    duration: "30 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/6H5PUZC53XI3JZBYCVR5BC2Q"
  },
  {
    title: "Arm Wax / Full Arm Waxing",
    description: "Complete hair removal for the arms.",
    price: "$40",
    duration: "30 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/SIU4RVJZA37PYC2QH2RROC5H"
  },
  {
    title: "Lip Wax",
    description: "Quick and effective hair removal for the upper lip.",
    price: "$10",
    duration: "15 MINS",
    bookingUrl: "https://book.squareup.com/appointments/kar4h00rwdzzue/location/L0JE19X7ME268/services/GGBFLRMM3O2CTG4EJDRGF4TW"
  }
];

export const ServicesPage = () => {
  return (
    <div className="pt-24 min-h-screen bg-[#E5E1DE]">
      
      {/* Header Section */}
      <section className="px-6 py-12 md:py-20 max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
         <div className="w-full md:w-1/2">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
           >
             <span className="font-montserrat text-xs tracking-[0.3em] text-[#C5A27D] uppercase block mb-6">Treatment Menu</span>
             <h1 className="font-cormorant text-5xl md:text-6xl text-[#1A1A1A] mb-8 leading-tight">
               Curated Rituals for <span className="italic">Lasting Glow</span>.
             </h1>
             <p className="font-montserrat text-[#1A1A1A]/70 leading-relaxed font-light max-w-md">
               Each treatment is customized to your skin's unique needs on the day of your visit, grounded in the Korean philosophy of hydration and barrier respect.
             </p>
           </motion.div>
         </div>

         <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end"
         >
            <div className="w-full max-w-md aspect-[3/4] rounded-t-full overflow-hidden border border-[#1A1A1A]/5 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1593260853607-d0e0f639bdab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBnbGFzcyUyMHNraW4lMjBtb2RlbCUyMGZhY2UlMjBjbG9zZSUyMHVwfGVufDF8fHx8MTc3MDM0OTM3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Glass Skin Treatment" 
                className="w-full h-full object-cover"
              />
            </div>
         </motion.div>
      </section>

      {/* Services List */}
      <section className="px-6 pb-32 max-w-5xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-16">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group border-b border-[#1A1A1A]/10 pb-12 last:border-0"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-4">
                <h2 className="font-cormorant text-3xl md:text-4xl text-[#1A1A1A] group-hover:text-[#C5A27D] transition-colors duration-300">
                  {service.title}
                </h2>
                <div className="flex items-center gap-6 font-montserrat text-sm">
                   <span className="text-[#1A1A1A]/50 tracking-wider">{service.duration}</span>
                   <span className="text-[#1A1A1A] font-medium text-lg">{service.price}</span>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
                <p className="font-montserrat text-[#1A1A1A]/60 font-light leading-relaxed max-w-2xl">
                  {service.description}
                </p>
                {/*
                <button className="bg-[#1A1A1A] text-[#E5E1DE] px-8 py-3 rounded-full font-montserrat text-xs tracking-widest uppercase hover:bg-[#C5A27D] transition-colors duration-300 whitespace-nowrap shrink-0">
                  Book This
                </button> */}

                <a 
                  href={service.bookingUrl || "https://dolce-far-niente-beauty.square.site"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#1A1A1A] text-[#E5E1DE] px-8 py-3 rounded-full font-montserrat text-xs tracking-widest uppercase hover:bg-[#C5A27D] transition-colors duration-300 whitespace-nowrap shrink-0 text-center"
                >
                  Book This
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};
