import WhatsAppButton from '../(components)/WhatsAppButton';
import Hero from '../(components)/Hero';
import ConciergeSection from '../(components)/ConciergeSection';
import CTASection from '../(components)/CTASection';
import ImageGallery from '../(components)/ImageGallery';

export const metadata = {
  title: 'Luxury Chalets in Verbier | Personal WhatsApp Concierge',
  description: 'Skip the endless searching. Message our WhatsApp concierge for instant, personalized luxury chalet recommendations in Verbier. Available 24/7.',
};

import { metadata } from './metadata';

export { metadata };

export default function Verbier() {
  return (
    <main className="relative min-h-screen">
      <Hero 
        title="Verbier"
        backgroundImage="https://www.skiinluxury.com/attachments/photos/1170440/5ddd1e74-5490-48a7-8222-70931fc10e14.jpg"
      />
      <ConciergeSection location="Verbier" />
      <ImageGallery 
        location="Verbier"
        images={[
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/5df9f462-3058-4b61-b74c-14751fc10e14.jpg",
            alt: "Luxury Verbier Chalet Interior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/5e380811-2988-462d-a2bf-377d1fc10e14.jpg",
            alt: "Verbier Chalet Exterior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/607ed037-5bd0-44b5-b383-5ab60a000f09.jpg",
            alt: "Verbier Suite"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/5fdb914e-da70-46ce-92ea-6c970a000f09.jpg",
            alt: "Verbier Dining Area"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/1170440/5ddd1e74-5490-48a7-8222-70931fc10e14.jpg",
            alt: "Verbier Spa"
          }
        ]}
      />
      <CTASection location="Verbier" />
      <WhatsAppButton 
        message="Hello, I'm interested in a luxury chalet in Verbier. Please share availability and details." 
      />
    </main>
  );
}
