'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, CheckCircle2, Clock, Headphones, ChevronRight } from 'lucide-react';

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
          <span className="text-sm font-semibold text-green-600">Concierge Available</span>
        </div>
        <ul className="space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-green-500" />
            <span>Skip the endless searching</span>
          </li>
          <li className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-green-500" />
            <span>Instant personalized matches</span>
          </li>
          <li className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-green-500" />
            <span>Best rates guaranteed</span>
          </li>
        </ul>
      </div>

      {/* WhatsApp button */}
      <a
        href={`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent(message || 'Hello, I would like to inquire about your luxury chalets.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-6 py-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 flex items-center gap-3 group scale-110"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6" />
          <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full">
            <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <span className="font-semibold text-sm">Talk to us now</span>
          <span className="text-xs opacity-90">Online now</span>
        </div>
        <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
