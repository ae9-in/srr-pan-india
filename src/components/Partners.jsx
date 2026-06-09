import React from 'react';
import { motion } from 'framer-motion';

export default function Partners() {
  const partners = [
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#gold-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(201,131,26,0.4)]">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9 22 9 12 15 12 15 22"></polyline>
        </svg>
      ),
      label: 'Retail Pooja Stores', 
      desc: 'Consistent supply of daily spiritual essentials for local communities.' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#gold-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(201,131,26,0.4)]">
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      ),
      label: 'Supermarkets', 
      desc: 'Retail-ready, shelf-optimized premium packaging.' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#gold-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(201,131,26,0.4)]">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
          <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c-2.28 0-3-4.5-3-4.5s2 1.5 3 2.5c1-1 2-2 2-2s1 1.5 1 2.5c0 1.5-1.5 2-2.5 2.5-1 1-1.5 2-1.5 3"></path>
        </svg>
      ),
      label: 'Temple Trusts', 
      desc: 'Bulk quantities with guaranteed absolute purity.' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#gold-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(201,131,26,0.4)]">
          <rect x="1" y="3" width="15" height="13"></rect>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
          <circle cx="5.5" cy="18.5" r="2.5"></circle>
          <circle cx="18.5" cy="18.5" r="2.5"></circle>
        </svg>
      ),
      label: 'FMCG Distributors', 
      desc: 'High-margin, fast-moving pooja commodities.' 
    },
    { 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="url(#gold-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_8px_rgba(201,131,26,0.4)]">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      label: 'Exporters', 
      desc: 'Export-grade quality meeting strict international standards.' 
    }
  ];

  return (
    <section className="w-full bg-inverse-surface pt-24 md:pt-32 pb-8 md:pb-12 relative overflow-hidden">
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop stopColor="#fff2e0" offset="0%" />
            <stop stopColor="#c9831a" offset="100%" />
          </linearGradient>
        </defs>
      </svg>
      {/* Premium ambient glows */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-max-width mx-auto px-gutter relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-flex items-center justify-center py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary font-label-md uppercase tracking-[0.25em] mb-6 text-xs md:text-sm backdrop-blur-md">
            Our Network
          </span>
          <h2 className="font-headline-md text-4xl md:text-5xl lg:text-6xl text-inverse-on-surface mb-6 leading-tight">
            Trusted by the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffddb8] to-[#c9831a]">Best</span>
          </h2>
          <p className="text-inverse-on-surface/70 max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed">
            We partner with diverse businesses across the globe, ensuring the highest quality spiritual essentials reach every doorstep.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full rounded-[2rem] p-[1px] overflow-hidden cursor-default shadow-2xl shadow-black/30"
            >
              {/* Default Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-100 transition-opacity duration-500 group-hover:opacity-0"></div>
              
              {/* Hover Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#c9831a] via-[#c9831a]/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

              {/* Inner Card content */}
              <div className="relative h-full bg-[#110b07]/80 backdrop-blur-xl rounded-[calc(2rem-1px)] p-6 flex flex-col items-center text-center overflow-hidden transition-all duration-500 group-hover:bg-[#1a110a]/90">
                
                {/* Glow behind the numeral */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-primary/20 blur-[30px] rounded-full group-hover:bg-primary/40 transition-colors duration-500"></div>

                <div className="relative z-10 flex flex-col h-full items-center w-full">
                  <div className="relative mb-5 flex items-center justify-center h-12 group-hover:scale-110 transition-transform duration-500">
                    {partner.icon}
                  </div>
                  
                  <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-5 group-hover:via-primary group-hover:w-12 transition-all duration-500"></div>

                  <h3 className="font-headline-md text-lg text-inverse-on-surface mb-3 group-hover:text-[#ffddb8] transition-colors duration-500">
                    {partner.label}
                  </h3>
                  
                  <p className="text-inverse-on-surface/70 text-sm leading-relaxed mt-auto font-light">
                    {partner.desc}
                  </p>
                </div>
                
                {/* Subtle bottom shine on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
