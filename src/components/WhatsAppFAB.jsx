import React from 'react';

export default function WhatsAppFAB() {
  return (
    <a 
      href="https://wa.me/919876543210" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 w-14 h-14 bg-primary-container text-on-primary rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-50 group animate-bounce"
      aria-label="Chat with Sales"
    >
      <i className="ph-fill ph-chat-circle-text text-2xl"></i>
      <div className="absolute right-full mr-4 bg-inverse-surface text-surface px-3 py-1.5 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-label-md">
        Chat with Sales
      </div>
    </a>
  );
}
