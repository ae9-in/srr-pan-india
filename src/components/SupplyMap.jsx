import React from 'react';
import { WorldMap } from './ui/map';
import { motion } from 'framer-motion';

export default function SupplyMap() {
  const dots = [
    {
      start: { lat: 17.3850, lng: 78.4867, label: "Hyderabad" },
      end: { lat: 12.9716, lng: 77.5946, label: "Bangalore Hub" }
    },
    {
      start: { lat: 13.0827, lng: 79.9, label: "Chennai" },
      end: { lat: 12.9716, lng: 77.5946, label: "Bangalore Hub" }
    },
    {
      start: { lat: 9.9312, lng: 76.5, label: "Kochi" },
      end: { lat: 12.9716, lng: 77.5946, label: "Bangalore Hub" }
    },
    {
      start: { lat: 12.9141, lng: 74.8560, label: "Mangalore" },
      end: { lat: 12.9716, lng: 77.5946, label: "Bangalore Hub" }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="supply-network" className="w-full bg-inverse-surface py-section-padding-desktop overflow-hidden relative">
      <div className="max-w-max-width mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <motion.div 
          className="space-y-6 z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 variants={itemVariants} className="font-headline-md text-headline-md text-surface">Pan-India Wholesale Supply</motion.h2>
          <motion.p variants={itemVariants} className="font-body-lg text-body-lg text-surface-variant">
            While our roots are deeply planted in South India, our logistics network extends far beyond. We ensure safe, timely, and bulk deliveries to distributors and major retailers across the country.
          </motion.p>
          <motion.ul variants={containerVariants} className="space-y-3">
            <motion.li variants={itemVariants} className="flex items-center gap-3 text-surface-variant">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffddb8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Dedicated transport partners</span>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-center gap-3 text-surface-variant">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffddb8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Secure bulk packaging</span>
            </motion.li>
            <motion.li variants={itemVariants} className="flex items-center gap-3 text-surface-variant">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffddb8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>Real-time dispatch tracking</span>
            </motion.li>
          </motion.ul>
        </motion.div>
        <motion.div 
          className="relative z-10 w-full flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-full max-w-[650px] md:max-w-[700px] lg:max-w-none">
            <WorldMap dots={dots} lineColor="#ffb960" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
