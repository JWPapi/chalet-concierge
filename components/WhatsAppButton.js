'use client';

import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    <a
      href="https://wa.me/YOUR_WHATSAPP_NUMBER"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-20 right-4 z-40 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.83L2.29 22l4.17-1.59C7.96 21.32 9.91 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm.89 14.76v.01H12c-.47 0-.89-.19-1.2-.5l-1.15-1.34 1.21-1.23c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0L8.39 13.3c-.92.92-1.34 2.16-1.34 3.38 0 1.22.42 2.46 1.34 3.38.45.45.97.78 1.54.97L8.1 20.13l-3.85 1.47 1.47-3.85-1.89-1.89C2.9 14.52 2 13.27 2 12c0-5.52 4.48-10 10-10s10 4.48 10 10c0 5.52-4.48 10-10 10"></path>
      </svg>
    </a>
  );
}
