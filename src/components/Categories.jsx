import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    name: 'Pure Camphor (Kapur)',
    image: '/srr-camphor.png',
    alt: 'SRR pure camphor with lit diya'
  },
  {
    name: 'Premium Agarbatti',
    image: '/srr_agarbatti_new.png',
    alt: 'Premium agarbatti incense sticks'
  },
  {
    name: 'Sambrani & Dhoop',
    image: '/srr_dhoop.png',
    alt: 'Sambrani and dhoop cone product'
  },
  {
    name: 'Pooja Oil & Diyas',
    image: '/srr_pooja_oil.png',
    alt: 'Brass diya and pooja oil lamp'
  },
  {
    name: 'Kumkum & Haldi',
    image: '/srr_kumkum_haldi.png',
    alt: 'Traditional pooja essentials'
  },
  {
    name: 'Cotton Wicks',
    image: '/srr_cotton_wicks.png',
    alt: 'Pooja lamp and cotton wick setup'
  },
  {
    name: 'Wholesale Packs',
    image: '/supply_bg.png',
    alt: 'Wholesale pooja product packs in warehouse'
  }
];

export default function Categories({ onOpenEnquiry }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="products" className="w-full px-gutter py-section-padding-desktop max-w-max-width mx-auto">
      <motion.div 
        className="text-center mb-12 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="font-headline-md text-headline-md text-on-surface">Premium Wholesale Categories</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Discover our range of meticulously crafted pooja essentials, available in bulk quantities with consistent quality guaranteed.
        </p>
      </motion.div>
      <motion.div 
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {products.map((product) => (
          <motion.button
            variants={itemVariants}
            key={product.name}
            onClick={() => onOpenEnquiry(product.name)}
            className="group flex flex-col items-center focus:outline-none w-full relative mb-4"
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-500 bg-surface-container-low border border-outline-variant/20">
              <img
                alt={product.alt}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src={product.image}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
            </div>
            
            {/* Overlapping Floating Text Card */}
            <div className="relative -mt-8 md:-mt-10 w-11/12 md:w-10/12 bg-surface rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] group-hover:shadow-[0_12px_40px_rgba(134,83,0,0.15)] transition-all duration-500 p-4 md:p-5 border border-outline-variant/30 flex flex-col items-center text-center group-hover:-translate-y-2">
              <h3 className="font-headline-md text-[16px] md:text-[20px] text-on-surface group-hover:text-primary transition-colors duration-300 leading-snug">
                {product.name}
              </h3>
              
              <div className="w-8 h-[1px] bg-outline-variant/50 my-3 group-hover:w-16 group-hover:bg-primary transition-all duration-500 ease-out"></div>
              
              <span className="flex items-center gap-1.5 text-on-surface-variant font-label-md text-[10px] md:text-xs uppercase tracking-[0.2em] group-hover:text-primary transition-colors duration-300">
                Enquire <i className="ph ph-arrow-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"></i>
              </span>
            </div>
          </motion.button>
        ))}
      </motion.div>
    </section>
  );
}
