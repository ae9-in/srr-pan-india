import React from 'react';
import { motion } from 'framer-motion';

const LogisticsTruck = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <rect x="12" y="20" width="30" height="24" rx="2" fill="url(#logGrad1)" stroke="#865300" strokeWidth="1.5" />
    <path d="M42 24H52L57 32V44H42V24Z" fill="#c9831a" stroke="#865300" strokeWidth="1.5" />
    <circle cx="22" cy="48" r="6" fill="#1e0e00" stroke="#865300" strokeWidth="1.5" />
    <circle cx="48" cy="48" r="6" fill="#1e0e00" stroke="#865300" strokeWidth="1.5" />
    <defs>
      <linearGradient id="logGrad1" x1="12" y1="20" x2="42" y2="44" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffb960" />
        <stop offset="100%" stopColor="#c9831a" />
      </linearGradient>
    </defs>
  </svg>
);

const LogisticsParcel = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <path d="M32 10L52 20L32 30L12 20L32 10Z" fill="#ffb960" stroke="#865300" strokeWidth="1.5" />
    <path d="M12 20V42L32 52V30L12 20Z" fill="#c9831a" stroke="#865300" strokeWidth="1.5" />
    <path d="M32 30V52L52 42V20L32 30Z" fill="#e59824" stroke="#865300" strokeWidth="1.5" />
    <path d="M32 20L42 15M22 25L32 20" stroke="#865300" strokeWidth="2" />
  </svg>
);

const LogisticsWarehouse = () => (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <path d="M8 28L32 12L56 28V52H8V28Z" fill="url(#logGrad3)" stroke="#865300" strokeWidth="1.5" />
    <rect x="16" y="36" width="10" height="16" fill="#865300" />
    <rect x="38" y="36" width="10" height="16" fill="#865300" />
    <path d="M32 20L20 28H44L32 20Z" fill="#fff" opacity="0.8" />
    <defs>
      <linearGradient id="logGrad3" x1="8" y1="12" x2="56" y2="52" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffb960" />
        <stop offset="100%" stopColor="#c9831a" />
      </linearGradient>
    </defs>
  </svg>
);

export default function Logistics() {
  const options = [
    {
      illustration: <LogisticsTruck />,
      title: 'Road Transport',
      description: 'Cost-effective LTL and FTL logistics for standard bulk orders via verified transport partners.'
    },
    {
      illustration: <LogisticsParcel />,
      title: 'Courier Dispatch',
      description: 'Fast tracking and delivery for smaller wholesale top-ups and urgent seasonal requirements.'
    },
    {
      illustration: <LogisticsWarehouse />,
      title: 'Warehouse Pickup',
      description: 'Direct collection available from our central warehouse for local distributors with their own fleet.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="w-full px-gutter py-section-padding-desktop max-w-max-width mx-auto border-b border-outline-variant overflow-hidden">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-headline-md text-headline-md text-on-surface">Seamless Logistics</h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-2">
          Multiple shipping options tailored to your order size and urgency.
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {options.map((option, index) => (
          <motion.div variants={itemVariants} key={index} className="text-center p-6 space-y-4">
            <div className="mb-4">
              {option.illustration}
            </div>
            <h3 className="font-title-lg text-title-lg text-on-surface">{option.title}</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{option.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
