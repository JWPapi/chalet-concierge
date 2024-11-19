'use client';

import {useEffect, useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {ChevronRight, MessageCircle} from 'lucide-react';
import {BenefitsPopup} from './BenefitsPopup';



export default function WhatsAppButton({message}) {
  const searchParams = useSearchParams();
  const kwParam = searchParams.get('kw');
  const whatsappMessage = kwParam 
    ? `${message || 'Hello, I would like to inquire about your luxury chalets.'} (Source: ${kwParam})`
    : message || 'Hello, I would like to inquire about your luxury chalets.';
  return (<div className="fixed bottom-8 right-4 z-40 flex flex-col items-end gap-2"
      >
        {/* Benefits popup */}


        {/* WhatsApp button */}
        <a
            href={`https://wa.me/4407849966208?text=${encodeURIComponent(whatsappMessage)}`}
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
      </div>);
}
