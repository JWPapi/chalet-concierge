import WhatsAppButton from '../(components)/WhatsAppButton';
import Hero from '../(components)/Hero';
import ConciergeSection from '../(components)/ConciergeSection';
import CTASection from '../(components)/CTASection';
import ImageGallery from '../(components)/ImageGallery';

import { metadata } from './metadata';

export { metadata };

export default function Gstaad() {
  return (
    <main className="relative min-h-screen">
      <Hero 
        title="Gstaad"
        backgroundImage="https://www.skiinluxury.com/attachments/photos/1170440/66eae7ce-ff90-4135-8bba-45770a000004.jpg"
      />
      <ConciergeSection location="Gstaad" />
      <ImageGallery 
        location="Gstaad"
        images={[
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/62e0f2e3-b198-45dc-814e-10280a000f09.jpg",
            alt: "Luxury Gstaad Chalet Interior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/5e6a75da-a720-4f76-8050-306b0a000f09.jpg",
            alt: "Gstaad Chalet Exterior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/62e0f38c-8d94-45ec-9502-12330a000f09.jpg",
            alt: "Gstaad Suite"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/656f0a27-2f14-4148-bd65-6cc20a000f09.jpg",
            alt: "Gstaad Dining Area"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/chaletFeatureRD/66eae160-f188-4d44-8b9d-49fb0a000004.jpg",
            alt: "Gstaad Spa"
          }
        ]}
      />
      <CTASection location="Gstaad" />
      <WhatsAppButton 
        message="Hello, I'm interested in a luxury chalet in Gstaad. Please share availability and details." 
      />
    </main>
  );
}
