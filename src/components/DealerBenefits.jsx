import React from 'react';
import { motion } from 'framer-motion';

export default function DealerBenefits() {
  const benefits = [
    {
      title: 'Exclusive Tier Pricing',
      description: 'Access our most competitive rates based on your order volume.'
    },
    {
      title: 'Marketing Support',
      description: 'Free POP materials, banners, and digital assets to boost your local sales.'
    },
    {
      title: 'Priority Dispatch',
      description: 'Registered dealers jump the queue during high-demand festival seasons.'
    },
    {
      title: 'Flexible Credit Terms',
      description: 'Eligible long-term partners gain access to structured credit facilities.'
    },
    {
      title: 'New Product Previews',
      description: 'Be the first to stock and test new additions to our product catalog.'
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
    <section id="become-dealer" className="w-full bg-inverse-surface pt-4 md:pt-8 pb-section-padding-desktop overflow-hidden">
      <div className="max-w-max-width mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        <motion.div 
          className="order-2 md:order-1 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h2 
            className="font-headline-md text-headline-md text-surface"
            variants={itemVariants}
          >
            Why Become an SRR Dealer?
          </motion.h2>
          <motion.ul 
            className="space-y-4"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index} 
                variants={itemVariants}
                className="flex items-start gap-3"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffddb8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <strong className="text-surface font-label-md text-label-md block mb-1">
                    {benefit.title}
                  </strong>
                  <span className="text-surface-variant font-body-md text-body-md">
                    {benefit.description}
                  </span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div 
          className="order-1 md:order-2"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <img 
            alt="Business partnership handshake representing dealer agreement" 
            className="w-full h-auto rounded-xl object-cover shadow-2xl" 
            src="/hands_shaking.png"
          />
        </motion.div>
      </div>
    </section>
  );
}
