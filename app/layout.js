import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import CookieConsent from '@/components/CookieConsent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Luxury Alpine Chalets | Premium Ski Destinations in Switzerland & France',
  description: 'Discover exclusive luxury chalets in Verbier, Zermatt, Gstaad, and Courchevel 1850. Experience ultimate alpine luxury with our hand-picked premium properties.',
  keywords: 'luxury chalets, Swiss Alps, French Alps, Verbier, Zermatt, Gstaad, Courchevel 1850, ski resort, luxury accommodation',
  openGraph: {
    title: 'Luxury Alpine Chalets | Premium Ski Destinations',
    description: 'Experience ultimate alpine luxury in Verbier, Zermatt, Gstaad, and Courchevel 1850',
    images: ['https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&q=80'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata = {
  title: 'Luxury Ski Chalets',
  description: 'Premium ski chalets with personal WhatsApp concierge service',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playfair.className}>{children}</body>
    </html>
  )
}
