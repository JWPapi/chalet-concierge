'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppButton({ message }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBenefits, setShowBenefits] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <div 
      className={`fixed bottom-20 right-4 z-40 flex flex-col items-end gap-2 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      onMouseEnter={() => setShowBenefits(true)}
      onMouseLeave={() => setShowBenefits(false)}
    >
      {/* Benefits popup */}
      <div className={`bg-white rounded-lg shadow-xl p-4 mb-2 transition-all duration-300 ${
        showBenefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <div className="flex items-center gap-2 mb-2">
          <div className="relative">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <div className="w-2 h-2 bg-green-500 rounded-full absolute top-0 animate-ping"></div>
          </div>
          <span className="text-sm font-semibold text-green-600">Online Now</span>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Instant Response</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>24/7 Availability</span>
          </li>
          <li className="flex items-center gap-2">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            <span>Direct Concierge Access</span>
          </li>
        </ul>
      </div>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(message || 'Hello, I would like to inquire about your luxury chalets.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center gap-3 group"
      >
        <div className="relative">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.83L2.29 22l4.17-1.59C7.96 21.32 9.91 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.89 14.76v.01H12c-.47 0-.89-.19-1.2-.5l-1.15-1.34 1.21-1.23c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.39 13.3c-.92.92-1.34 2.16-1.34 3.38 0 1.22.42 2.46 1.34 3.38.45.45.97.78 1.54.97L8.1 20.13l-3.85 1.47 1.47-3.85-1.89-1.89C2.9 14.52 2 13.27 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10c0 5.52-4.48 10-10 10"></path>
          </svg>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
        <span className="font-semibold">Contact Concierge</span>
        <svg 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
