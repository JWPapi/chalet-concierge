import './globals.css';
import {Inter, Playfair_Display} from 'next/font/google';
import Script from 'next/script';
import {GoogleTagManager} from '@next/third-parties/google';

const inter = Inter({subsets: ['latin']});
const playfair = Playfair_Display({subsets: ['latin']});

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

export default function RootLayout({children}) {
  return (<html lang="en">
      <GoogleTagManager gtmId="AW-16774456845"/>
      <body className={inter.className}>
      {children}
      </body>
      </html>);
}
