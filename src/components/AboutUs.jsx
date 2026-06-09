import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="w-full px-gutter py-section-padding-desktop max-w-max-width mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <motion.div 
          className="order-2 md:order-1 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img 
            alt="Modern warehouse facility" 
            className="w-full h-auto object-cover rounded-xl border border-outline-variant shadow-xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1SL5ifhkTkgGDD1bL-iuH_iPm9QJ_d7vpzFXUGEWKbiE7pENImY633qMRqLSKSXPrn3piBSX8T3hYG2ZSWJ2yjfMV6HVR2wotFfXn6Em3K2yp_VjnRMtPP0oscynDaIwOukhd7C230Hh-FZQWeoFCzq85NQZL3Zfof_gia7MbPnIEz_Mkhh5bWJWWByFZJ_pnHYFQUbJnip8Zs2t6Ujiqmp1Ydr6-Q3gnjwra6oL34cZy2_ZMwSTvTaIrcOez-x-YX5jN8iGvKJek"
          />
        </motion.div>
        <motion.div 
          className="order-1 md:order-2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <h2 className="font-headline-md text-headline-md text-on-surface">Rooted in Tradition, Built for Trade</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            SRR Pooja Works began with a simple mission: to provide the highest quality spiritual items to households across South India. Today, we are the backbone of countless retail businesses, supplying authentic, pure, and consistently high-grade pooja essentials.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We bridge the gap between traditional craftsmanship and modern wholesale logistics, ensuring that your shelves are always stocked with products your customers trust.
          </p>
          <button className="flex items-center gap-2 text-primary font-label-md text-label-md hover:text-primary-container transition-colors group">
            Read our full story
            <i className="ph ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
