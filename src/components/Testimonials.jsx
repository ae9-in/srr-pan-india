import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      stars: 5,
      quote: '"Since switching to SRR for our camphor and agarbatti supply, customer complaints about quality have vanished. Their bulk packaging is robust and delivery to Hyderabad is always on time."',
      name: 'Ramesh Kumar',
      role: 'Wholesale Distributor, Andhra Pradesh',
      highlighted: false,
      staggerClass: 'md:mt-8'
    },
    {
      stars: 5,
      quote: '"During Diwali, inventory management is chaos. SRR\'s priority dispatch for regular dealers saved us last year. Their margins allow us to be very competitive in the local market."',
      name: 'Venkatesh S.',
      role: 'Retail Chain Owner, Karnataka',
      highlighted: true,
      staggerClass: ''
    },
    {
      stars: 5,
      quote: '"We supply to several large temples in TN. The purity of SRR\'s Dhoop and Sambrani is unmatched. It\'s a relationship built on trust and consistent quality."',
      name: 'Karthikeyan M.',
      role: 'Temple Supplier, Tamil Nadu',
      highlighted: false,
      staggerClass: 'md:mt-16'
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
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="w-full px-gutter py-section-padding-desktop max-w-max-width mx-auto overflow-hidden">
      <motion.h2 
        className="font-headline-md text-headline-md text-on-surface text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Trusted by the Trade
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {testimonials.map((test, index) => (
          <motion.div 
            variants={itemVariants}
            key={index}
            className={`p-8 rounded-2xl hover-lift ${
              test.highlighted 
                ? 'bg-primary-container text-on-primary shadow-xl' 
                : 'bg-surface-container-low border border-outline-variant'
            } ${test.staggerClass}`}
          >
            <div className={`flex items-center gap-2 mb-6 ${test.highlighted ? 'text-primary-fixed' : 'text-primary-container'}`}>
              {[...Array(test.stars)].map((_, i) => (
                <i key={i} className="ph-fill ph-star"></i>
              ))}
            </div>
            <p className={`font-body-lg text-body-lg italic mb-8 ${test.highlighted ? 'text-on-primary' : 'text-on-surface'}`}>
              {test.quote}
            </p>
            <div>
              <p className={`font-label-md text-label-md font-bold ${test.highlighted ? 'text-on-primary' : 'text-on-surface'}`}>
                {test.name}
              </p>
              <p className={`font-caption text-caption ${test.highlighted ? 'text-on-primary/80' : 'text-on-surface-variant'}`}>
                {test.role}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
