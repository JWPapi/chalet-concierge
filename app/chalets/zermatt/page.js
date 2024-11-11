import WhatsAppButton from '../(components)/WhatsAppButton';
import Hero from '../(components)/Hero';
import ConciergeSection from '../(components)/ConciergeSection';
import CTASection from '../(components)/CTASection';
import ImageGallery from '../(components)/ImageGallery';

export const metadata = {
  title: 'Luxury Chalets in Zermatt | Personal WhatsApp Concierge',
  description: 'Skip the endless searching. Message our WhatsApp concierge for instant, personalized luxury chalet recommendations in Zermatt. Available 24/7.',
};

export default function Zermatt() {
  return (
    <main className="relative min-h-screen">
      <Hero 
        title="Zermatt"
        backgroundImage="https://www.skiinluxury.com/attachments/photos/zermatt/hero-zermatt.jpg"
      />
      <ConciergeSection location="Zermatt" />
      <ImageGallery 
        location="Zermatt"
        images={[
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/zermatt-1.jpg",
            alt: "Luxury Zermatt Chalet Interior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/zermatt-2.jpg",
            alt: "Zermatt Chalet Exterior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/zermatt-3.jpg",
            alt: "Zermatt Suite"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/zermatt-4.jpg",
            alt: "Zermatt Dining Area"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/zermatt-5.jpg",
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
