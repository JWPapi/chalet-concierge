'use client';

import {BenefitsPopup} from './BenefitsPopup';
import { Playfair_Display } from 'next/font/google';
import { useSearchParams } from 'next/navigation';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function CTASection({ location }) {
  const searchParams = useSearchParams();
  const kwParam = searchParams.get('kw');
  const whatsappMessage = kwParam 
    ? `Hello, I would like to inquire about your luxury chalets. (Search: ${kwParam})`
    : 'Hello, I would like to inquire about your luxury chalets.';
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-6`}>
            Instant Luxury Chalet&nbsp;Booking
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Send your dates via WhatsApp, receive tailored recommendations, and secure your perfect chalet in {location} with our concierge support.
          </p>
          <a
            href={`https://wa.me/4407849966208?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold
                       hover:bg-green-50 transition-colors duration-200 shadow-lg mb-8"
          >
            Book via WhatsApp
          </a>
          <BenefitsPopup />

          <p className="mt-6 text-lg opacity-90">
            From €20,000/week • Instant Response • No Booking Fees
          </p>
        </div>
      </div>
    </section>
  );
}
