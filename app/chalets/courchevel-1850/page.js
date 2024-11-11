
import WhatsAppButton from '../(components)/WhatsAppButton';
import Hero from '../(components)/Hero';
import ConciergeSection from '../(components)/ConciergeSection';
import CTASection from '../(components)/CTASection';
import ImageGallery from '../(components)/ImageGallery';

import { metadata } from './metadata';

export { metadata };

export default function Courchevel1850() {
  return (
    <main className="relative min-h-screen">
      <Hero 
        title="Courchevel 1850"
        backgroundImage="https://www.skiinluxury.com/attachments/photos/1170440/5df8d3c4-1f38-4002-97b7-60921fc10e14.jpg"
      />
      <ConciergeSection location="Courchevel 1850" />
      <ImageGallery 
        location="Courchevel 1850"
        images={[
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/63b833cf-4cd0-473f-90c8-73fa0a000f09.jpg",
            alt: "Luxury Chalet Interior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/63b833c8-e13c-454b-92d9-73fa0a000f09.jpg",
            alt: "Chalet Exterior at Night"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/66829a1a-3cb0-4ab6-843e-47140a000004.jpg",
            alt: "Luxury Bedroom Suite"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/63b41e8e-cf30-41d6-9001-36ef0a000f09.jpg",
            alt: "Elegant Dining Area"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/66aa2648-47e0-43b6-a638-4b1e0a000004.jpg",
            alt: "Private Spa Area"
          }
        ]}
      />
      <CTASection location="Courchevel 1850" />
      <WhatsAppButton 
        message="Hello, I'm interested in a luxury chalet in Courchevel 1850. Please share availability and details." 
      />
    </main>
  );
}
