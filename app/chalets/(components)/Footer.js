import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Luxury Ski Chalets specializes in premium alpine accommodations across the most prestigious ski resorts in Europe. With over 15 years of experience, we ensure an unmatched luxury experience.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/chalets/courchevel-1850" className="hover:text-white">Courchevel 1850</Link></li>
              <li><Link href="/chalets/verbier" className="hover:text-white">Verbier</Link></li>
              <li><Link href="/chalets/zermatt" className="hover:text-white">Zermatt</Link></li>
              <li><Link href="/chalets/gstaad" className="hover:text-white">Gstaad</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>WhatsApp: +41 XX XXX XX XX</li>
              <li>Email: concierge@luxuryskichalets.com</li>
              <li>Available 24/7</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="hover:text-white"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Luxury Ski Chalets. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
