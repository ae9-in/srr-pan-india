import React, { useState } from 'react';

const policies = {
  privacy: {
    title: 'Privacy Policy',
    text: 'At SRR Pooja Works, we take your privacy seriously. We collect only the necessary information required to process your B2B wholesale orders, such as contact details and GST information. Your data is securely stored and never shared with third-party marketers.'
  },
  terms: {
    title: 'Terms of Service',
    text: 'By using the SRR Pooja Works B2B portal, you agree to our terms of service. All wholesale orders are subject to stock availability and our standard return/refund policies. Wholesale trade prices and margins are subject to change based on market conditions.'
  }
};

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  const openModal = (type, e) => {
    e.preventDefault();
    setModalContent(policies[type]);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <>
      <footer id="contact" className="bg-inverse-surface full-width border-t border-outline flat no shadows mt-section-padding-desktop relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg w-full px-gutter py-section-padding-desktop max-w-max-width mx-auto">
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <span className="font-headline-md text-headline-md text-surface">SRR Pooja Works</span>
            <p className="font-body-md text-body-md text-surface-variant mt-2">
              Your trusted partner for wholesale pooja supplies across South India.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-title-lg text-title-lg text-primary-fixed mb-2">Navigation</h4>
              <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md w-fit" href="#home">Home</a>
              <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md w-fit" href="#products">Products</a>
              <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md w-fit" href="#supply-network">Supply Network</a>
              <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md w-fit" href="#become-dealer">Become a Dealer</a>
              <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md w-fit" href="#enquiry-form">Contact</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-title-lg text-title-lg text-primary-fixed mb-2">Legal</h4>
              <button onClick={(e) => openModal('privacy', e)} className="text-left text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md w-fit">Privacy Policy</button>
              <button onClick={(e) => openModal('terms', e)} className="text-left text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md w-fit">Terms of Service</button>
            </div>
          </div>
          <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
            <h4 className="font-title-lg text-title-lg text-primary-fixed mb-2">Connect</h4>
            <div className="flex gap-4">
              <a href="tel:+918431119696" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary-fixed transition-colors" aria-label="Call Us">
                <i className="ph ph-phone text-lg"></i>
              </a>
            </div>
            <p className="font-caption text-caption text-surface-variant mt-auto pt-8">
              © 2026 SRR Pooja Works. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-surface rounded-2xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative animate-fade-in border border-outline-variant">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high transition-colors text-on-surface"
              aria-label="Close modal"
            >
              <i className="ph ph-x text-lg"></i>
            </button>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-4 pr-8">{modalContent.title}</h3>
            <div className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {modalContent.text}
            </div>
            <div className="mt-8 flex justify-end">
              <button 
                onClick={closeModal}
                className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-md hover:bg-primary-container transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
