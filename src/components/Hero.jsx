import React from 'react';
import { motion } from 'framer-motion';

export default function Hero({ onOpenEnquiry }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="home" className="w-full px-gutter py-section-padding-desktop max-w-max-width mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center">
        <motion.div 
          className="col-span-1 md:col-span-6 space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="inline-block bg-surface-container text-on-surface px-4 py-1 rounded-full font-label-md text-label-md border border-outline-variant">
            Wholesale · Pan-India Supply
          </motion.div>
          <motion.h1 variants={itemVariants} className="font-display-lg text-display-lg md:text-[64px] leading-tight text-on-surface">
            Wholesale Supplier of Pooja Products Across India
          </motion.h1>
          <motion.p variants={itemVariants} className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
            Partner with the leading source for authentic, high-quality spiritual and pooja essentials. Built for retail growth and bulk reliability.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={onOpenEnquiry}
              className="bg-primary-container text-on-primary px-8 py-3 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity"
            >
              Become a Dealer
            </button>
            <button 
              onClick={onOpenEnquiry}
              className="bg-surface border border-outline-variant text-on-surface-variant px-8 py-3 rounded-full font-label-md text-label-md hover:bg-surface-container transition-colors"
            >
              Request Price List
            </button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="col-span-1 md:col-span-6 relative"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <img 
            alt="Premium wholesale pooja products" 
            className="w-full h-auto object-cover rounded-tr-[80px] rounded-bl-[80px] border border-outline-variant shadow-2xl" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3YWjJvC4k6EzHjfgDsSMUH3TiTd47hoPV4pkUSaza7iqkJbEDeQ7WFUl5lZVv5fbvswbudSZsGuP4dZSckbfkEtpwxnx2dbrKNWlyqsP4KXa1q0hv0ECUZQDHoxUUubEeUUeuviUlPYDYtNIiZRYOVC496fl0Jtj0-Q4XUFioaazw9lUNDsqMGGr5jlbADtjEX_ri1XbnLWAeOgWxv_M_xIfahqpnxdY1zgnhJA3aA3fk-_WiCr4m-xq88GExR9CkKbwHXYPkN6K0"
          />
          <motion.div 
            className="absolute bottom-8 left-[-20px] bg-surface p-4 rounded-xl border border-outline-variant shadow-lg flex items-center gap-4"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9, ease: "backOut" }}
          >
            <div className="w-12 h-12 bg-surface-container rounded-full flex items-center justify-center relative">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9831a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="absolute inset-0 rounded-full ripple"></div>
            </div>
            <div>
              <p className="font-label-md text-label-md text-on-surface font-semibold">Active Supply Network</p>
              <p className="font-caption text-caption text-on-surface-variant">Across 5 Southern States</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
