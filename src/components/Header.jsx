import React, { useState } from 'react';

export default function Header({ onOpenEnquiry }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface docked full-width top-0 sticky border-b border-outline-variant flat no shadows z-50">
      <div className="flex justify-between items-center w-full px-gutter max-w-max-width mx-auto h-16">
        <div className="font-headline-md text-headline-md font-semibold text-primary">
          SRR Pooja Works
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a className="text-primary font-bold border-b-2 border-primary hover:text-primary-container transition-colors opacity-80" href="#home">Home</a>
          <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary-container transition-colors" href="#products">Products</a>
          <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary-container transition-colors" href="#supply-network">Supply Network</a>
          <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary-container transition-colors" href="#become-dealer">Become a Dealer</a>
          <button onClick={onOpenEnquiry} className="text-on-surface-variant font-body-md text-body-md hover:text-primary-container transition-colors">Contact</button>
        </nav>

        <div className="flex items-center gap-4">

          
          <button 
            onClick={onOpenEnquiry}
            className="bg-primary-container text-on-primary px-6 py-2 rounded-full font-label-md text-label-md hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Get Price List
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex md:hidden items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            aria-label="Toggle Menu"
          >
            <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'} text-2xl`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-outline-variant px-gutter py-4 space-y-3 absolute top-16 left-0 w-full shadow-lg z-40">
          <a 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-primary font-bold hover:text-primary-container py-2" 
            href="#home"
          >
            Home
          </a>
          <a 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-on-surface-variant font-body-md hover:text-primary py-2" 
            href="#products"
          >
            Products
          </a>
          <a 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-on-surface-variant font-body-md hover:text-primary py-2" 
            href="#supply-network"
          >
            Supply Network
          </a>
          <a 
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-on-surface-variant font-body-md hover:text-primary py-2" 
            href="#become-dealer"
          >
            Become a Dealer
          </a>
          <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenEnquiry();
            }}
            className="block w-full text-left text-on-surface-variant font-body-md hover:text-primary py-2" 
          >
            Contact
          </button>
        </div>
      )}
    </header>
  );
}
