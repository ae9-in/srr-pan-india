import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import AboutUs from '../components/AboutUs';
import SupplyMap from '../components/SupplyMap';
import Categories from '../components/Categories';
import Advantage from '../components/Advantage';
import Partners from '../components/Partners';
import DealerBenefits from '../components/DealerBenefits';
import EnquiryForm from '../components/EnquiryForm';
import Logistics from '../components/Logistics';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import WhatsAppFAB from '../components/WhatsAppFAB';

export default function LandingPage() {
  const [prefilledProduct, setPrefilledProduct] = useState('');

  const handleEnquiry = (productName = 'General Wholesale Inquiry') => {
    setPrefilledProduct(productName);
    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="bg-surface text-on-surface font-body-md antialiased min-h-screen">
      <Header onOpenEnquiry={() => handleEnquiry('Price List & Brochure Request')} />
      <Hero onOpenEnquiry={() => handleEnquiry('Dealer Program Enrollment')} />
      <TrustBar />
      <AboutUs />
      <SupplyMap />
      <Categories onOpenEnquiry={handleEnquiry} />
      <Advantage />
      <Partners />
      <DealerBenefits />
      <EnquiryForm prefilledProduct={prefilledProduct} />
      <Logistics />
      <Testimonials />
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
