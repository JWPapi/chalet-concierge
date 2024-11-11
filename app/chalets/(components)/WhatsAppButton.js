'use client';

import {useEffect, useState} from 'react';
import {ChevronRight, MessageCircle} from 'lucide-react';
import {BenefitsPopup} from './BenefitsPopup';

const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

export default function WhatsAppButton({ message }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
        className={`fixed bottom-20 right-4 z-40 flex flex-col items-end gap-2 transition-all duration-300 ${isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-20 opacity-0'}`}
    >
      {/* Benefits popup */}
      <BenefitsPopup/>


      {/* WhatsApp button */}
      <a
          href={`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(
              message || 'Hello, I would like to inquire about your luxury chalets.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center gap-3 group scale-110"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6"/>
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-sm">Talk to us on WhatsApp</span>
          <span className="text-xs opacity-90">Online now</span>
        </div>
        <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"/>
      </a>
    </div>
  );
}
