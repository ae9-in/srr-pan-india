import React from 'react';
import { motion } from 'framer-motion';

const MapIllustration = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <circle cx="24" cy="24" r="22" fill="url(#mapGrad)" stroke="#E2D0B8" strokeWidth="1.5" />
    <path d="M18 14C22 14 24 16 26 18C28 20 31 21 33 23C35 25 34 28 32 30C30 32 29 34 26 36C23 38 20 38 18 36C16 34 15 31 16 28C17 25 14 23 15 20C16 17 14 14 18 14Z" fill="url(#goldGrad)" opacity="0.85" />
    <circle cx="26" cy="18" r="2" fill="#865300" />
    <circle cx="32" cy="30" r="2" fill="#865300" />
    <circle cx="18" cy="36" r="2" fill="#865300" />
    <defs>
      <linearGradient id="mapGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff8f4" />
        <stop offset="100%" stopColor="#ffead9" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="15" y1="14" x2="33" y2="38" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffb960" />
        <stop offset="100%" stopColor="#c9831a" />
      </linearGradient>
    </defs>
  </svg>
);

const PartnersIllustration = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <circle cx="24" cy="24" r="22" fill="url(#partnersGrad)" stroke="#E2D0B8" strokeWidth="1.5" />
    <circle cx="24" cy="18" r="5" fill="#c9831a" />
    <path d="M14 34C14 28.5 18.5 25 24 25C29.5 25 34 28.5 34 34" stroke="#865300" strokeWidth="2" strokeLinecap="round" />
    <circle cx="15" cy="22" r="4" fill="#ffb960" />
    <circle cx="33" cy="22" r="4" fill="#ffb960" />
    <defs>
      <linearGradient id="partnersGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff8f4" />
        <stop offset="100%" stopColor="#ffead9" />
      </linearGradient>
    </defs>
  </svg>
);

const PackageIllustration = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
    <circle cx="24" cy="24" r="22" fill="url(#packageGrad)" stroke="#E2D0B8" strokeWidth="1.5" />
    <path d="M24 12L36 18L24 24L12 18L24 12Z" fill="#ffb960" stroke="#865300" strokeWidth="1.5" />
    <path d="M12 18V30L24 36V24L12 18Z" fill="#c9831a" stroke="#865300" strokeWidth="1.5" />
    <path d="M24 24V36L36 30V18L24 24Z" fill="#e59824" stroke="#865300" strokeWidth="1.5" />
    <defs>
      <linearGradient id="packageGrad" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#fff8f4" />
        <stop offset="100%" stopColor="#ffead9" />
      </linearGradient>
    </defs>
  </svg>
);

export default function TrustBar() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full bg-surface-container-low border-y border-outline-variant py-8 overflow-hidden">
      <motion.div
        className="max-w-max-width mx-auto px-gutter flex flex-wrap justify-center md:justify-between items-center gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <MapIllustration />
          <div>
            <p className="font-title-lg text-title-lg text-on-surface">5 South Indian States</p>
            <p className="font-caption text-caption text-on-surface-variant">Active distribution network</p>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="hidden md:block w-px h-12 bg-outline-variant"></motion.div>
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <PartnersIllustration />
          <div>
            <p className="font-title-lg text-title-lg text-on-surface">100+ Wholesale Partners</p>
            <p className="font-caption text-caption text-on-surface-variant">Trusted by retailers</p>
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="hidden md:block w-px h-12 bg-outline-variant"></motion.div>
        <motion.div variants={itemVariants} className="flex items-center gap-3">
          <PackageIllustration />
          <div>
            <p className="font-title-lg text-title-lg text-on-surface">Bulk Order Ready</p>
            <p className="font-caption text-caption text-on-surface-variant">Scalable supply chain</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
