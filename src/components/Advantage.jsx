import React from 'react';
import { motion } from 'framer-motion';

const QualitySeal = () => (
  <svg width="32" height="32" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="24" r="18" fill="url(#goldGradAdv1)" stroke="#ffddb8" strokeWidth="1.5" />
    <path d="M28 15L31 21L37.5 22L32.8 26.5L34 33L28 30L22 33L23.2 26.5L18.5 22L25 21L28 15Z" fill="#fff" />
    <path d="M20 38L24 48L28 44L32 48L36 38L28 40L20 38Z" fill="#ffddb8" stroke="#865300" strokeWidth="1" />
    <defs>
      <linearGradient id="goldGradAdv1" x1="10" y1="6" x2="46" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffb960" />
        <stop offset="100%" stopColor="#c9831a" />
      </linearGradient>
    </defs>
  </svg>
);

const TradePricing = () => (
  <svg width="32" height="32" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="28" cy="38" rx="16" ry="6" fill="#865300" />
    <path d="M12 38V44C12 47.3 19.2 49 28 49C36.8 49 44 47.3 44 44V38" fill="url(#goldGradDarkAdv)" stroke="#ffddb8" strokeWidth="1" />
    <ellipse cx="28" cy="38" rx="16" ry="6" fill="url(#goldGradAdv2)" stroke="#ffddb8" strokeWidth="1" />
    
    <ellipse cx="28" cy="28" rx="16" ry="6" fill="#865300" />
    <path d="M12 28V34C12 37.3 19.2 39 28 39C36.8 39 44 37.3 44 34V28" fill="url(#goldGradDarkAdv)" stroke="#ffddb8" strokeWidth="1" />
    <ellipse cx="28" cy="28" rx="16" ry="6" fill="url(#goldGradAdv2)" stroke="#ffddb8" strokeWidth="1" />
    <text x="28" y="31" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">₹</text>

    <ellipse cx="28" cy="18" rx="16" ry="6" fill="#865300" />
    <path d="M12 18V24C12 27.3 19.2 29 28 29C36.8 29 44 27.3 44 24V18" fill="url(#goldGradDarkAdv)" stroke="#ffddb8" strokeWidth="1" />
    <ellipse cx="28" cy="18" rx="16" ry="6" fill="url(#goldGradAdv2)" stroke="#ffddb8" strokeWidth="1" />
    <text x="28" y="21" fill="#fff" fontSize="9" fontWeight="bold" textAnchor="middle">₹</text>
    
    <defs>
      <linearGradient id="goldGradAdv2" x1="12" y1="12" x2="44" y2="24" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffb960" />
        <stop offset="100%" stopColor="#c9831a" />
      </linearGradient>
      <linearGradient id="goldGradDarkAdv" x1="12" y1="18" x2="44" y2="30" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#c9831a" />
        <stop offset="100%" stopColor="#865300" />
      </linearGradient>
    </defs>
  </svg>
);

const ReliableSupply = () => (
  <svg width="32" height="32" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="4" y1="20" x2="14" y2="20" stroke="#ffb960" strokeWidth="2" strokeLinecap="round" />
    <line x1="2" y1="28" x2="10" y2="28" stroke="#ffddb8" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="16" y="16" width="22" height="18" rx="2" fill="url(#goldGradAdv3)" stroke="#ffddb8" strokeWidth="1" />
    <path d="M38 20H46L50 26V34H38V20Z" fill="#c9831a" stroke="#ffddb8" strokeWidth="1" />
    <path d="M41 23H45L47.5 27H41V23Z" fill="#fff" />
    <circle cx="23" cy="38" r="4.5" fill="#fff" stroke="#865300" strokeWidth="1" />
    <circle cx="41" cy="38" r="4.5" fill="#fff" stroke="#865300" strokeWidth="1" />
    <defs>
      <linearGradient id="goldGradAdv3" x1="16" y1="16" x2="38" y2="34" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffb960" />
        <stop offset="100%" stopColor="#c9831a" />
      </linearGradient>
    </defs>
  </svg>
);

const DedicatedSupport = () => (
  <svg width="32" height="32" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="28" cy="28" r="22" fill="url(#goldGradAdv4)" stroke="#ffddb8" strokeWidth="1.5" />
    <path d="M18 30C19.5 28.5 22 26 24 28L28 32C30 34 32.5 31.5 34 30L38 26" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M22 26C23 25 25 23 27 25L31 29" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M30 34C32 36 34 38 35 37" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    <defs>
      <linearGradient id="goldGradAdv4" x1="6" y1="6" x2="50" y2="50" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffb960" />
        <stop offset="100%" stopColor="#c9831a" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Advantage() {
  const advantages = [
    {
      illustration: <QualitySeal />,
      image: '/quality_bg.png',
      title: 'Consistent Quality',
      description: 'Stringent quality checks ensure every batch meets the same high standard your customers expect.'
    },
    {
      illustration: <TradePricing />,
      image: '/pricing_bg.png',
      title: 'Trade Pricing',
      description: 'Highly competitive wholesale margins designed specifically to maximize retailer profitability.'
    },
    {
      illustration: <ReliableSupply />,
      image: '/supply_bg.png',
      title: 'Reliable Supply',
      description: 'Robust inventory management ensures you never face stockouts during peak festival seasons.'
    },
    {
      illustration: <DedicatedSupport />,
      image: '/support_bg.png',
      title: 'Dedicated Support',
      description: 'A dedicated account manager for your bulk orders, logistics tracking, and post-sales queries.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="w-full bg-surface-container-low py-section-padding-desktop border-y border-outline-variant overflow-hidden">
      <div className="max-w-max-width mx-auto px-gutter">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline-md text-headline-md text-on-surface">The SRR Wholesale Advantage</h2>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {advantages.map((item, index) => (
            <motion.div 
              variants={itemVariants}
              key={index}
              className="relative overflow-hidden h-[380px] rounded-2xl group border border-outline-variant flex flex-col justify-end"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
              
              {/* Card Content Overlayed on Top of the Image */}
              <div className="relative z-10 p-6 space-y-2 text-white">
                <h3 className="font-title-lg text-title-lg text-white font-bold leading-tight">
                  {item.title}
                </h3>
                <p className="font-body-md text-white/85 text-[14px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
