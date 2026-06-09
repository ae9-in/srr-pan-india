import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-inverse-surface full-width border-t border-outline flat no shadows mt-section-padding-desktop">
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
            <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md" href="#home">Home</a>
            <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md" href="#products">Products</a>
            <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md" href="#supply-network">Supply Network</a>
            <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md" href="#become-dealer">Become a Dealer</a>
            <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md" href="#contact">Contact</a>
          </div>
          <div className="flex flex-col gap-3">
            <h4 className="font-title-lg text-title-lg text-primary-fixed mb-2">Legal</h4>
            <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md" href="#">Privacy Policy</a>
            <a className="text-surface-variant hover:text-primary-fixed-dim transition-colors font-body-md text-body-md" href="#">Terms of Service</a>
          </div>
        </div>
        <div className="col-span-1 md:col-span-1 flex flex-col gap-4">
          <h4 className="font-title-lg text-title-lg text-primary-fixed mb-2">Connect</h4>
          <div className="flex gap-4">
            <a href="mailto:info@srrpoojaworks.com" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary-fixed transition-colors" aria-label="Email Us">
              <i className="ph ph-envelope-simple text-lg"></i>
            </a>
            <a href="tel:+919876543210" className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface hover:bg-primary-fixed transition-colors" aria-label="Call Us">
              <i className="ph ph-phone text-lg"></i>
            </a>
          </div>
          <p className="font-caption text-caption text-surface-variant mt-auto pt-8">
            © 2026 SRR Pooja Works. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
