import WhatsAppButton from '../(components)/WhatsAppButton';
import Hero from '../(components)/Hero';
import ConciergeSection from '../(components)/ConciergeSection';
import CTASection from '../(components)/CTASection';
import ImageGallery from '../(components)/ImageGallery';

export const metadata = {
  title: 'Luxury Chalets in Zermatt | Personal WhatsApp Concierge',
  description: 'Skip the endless searching. Message our WhatsApp concierge for instant, personalized luxury chalet recommendations in Zermatt. Available 24/7.',
};

import { metadata } from './metadata';

export { metadata };

export default function Zermatt() {
  return (
    <main className="relative min-h-screen">
      <Hero 
        title="Zermatt"
        backgroundImage="https://www.skiinluxury.com/attachments/photos/1170440/5ddd34d2-36cc-4a2a-b7b3-3e6c1fc10e14.jpg"
      />
      <ConciergeSection location="Zermatt" />
      <ImageGallery 
        location="Zermatt"
        images={[
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/5e3c0eb5-f308-4da4-a754-4cc71fc10e14.jpg",
            alt: "Luxury Zermatt Chalet Interior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/66b2354b-ef8c-46d9-b0bd-43110a000004.jpg",
            alt: "Zermatt Chalet Exterior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/5de6484a-069c-4931-b5fc-77961fc10e14.jpg",
            alt: "Zermatt Suite"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/62d69156-1d74-4bba-b7df-6b770a000f09.jpg",
            alt: "Zermatt Dining Area"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/5f86f8a0-e950-413a-934c-0c9c0a000f09.jpg",
            alt: "Zermatt Spa"
          }
        ]}
      />
      <CTASection location="Zermatt" />
      <WhatsAppButton 
        message="Hello, I'm interested in a luxury chalet in Zermatt. Please share availability and details." 
      />
    </main>
  );
}
