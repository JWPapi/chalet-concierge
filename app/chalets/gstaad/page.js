import WhatsAppButton from '../(components)/WhatsAppButton';
import Hero from '../(components)/Hero';
import ConciergeSection from '../(components)/ConciergeSection';
import CTASection from '../(components)/CTASection';
import ImageGallery from '../(components)/ImageGallery';

export const metadata = {
  title: 'Luxury Chalets in Gstaad | Personal WhatsApp Concierge',
  description: 'Skip the endless searching. Message our WhatsApp concierge for instant, personalized luxury chalet recommendations in Gstaad. Available 24/7.',
};

export default function Gstaad() {
  return (
    <main className="relative min-h-screen">
      <Hero 
        title="Gstaad"
        backgroundImage="https://www.skiinluxury.com/attachments/photos/gstaad/hero-gstaad.jpg"
      />
      <ConciergeSection location="Gstaad" />
      <ImageGallery 
        location="Gstaad"
        images={[
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/gstaad-1.jpg",
            alt: "Luxury Gstaad Chalet Interior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/gstaad-2.jpg",
            alt: "Gstaad Chalet Exterior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/gstaad-3.jpg",
            alt: "Gstaad Suite"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/gstaad-4.jpg",
            alt: "Gstaad Dining Area"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/gstaad-5.jpg",
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
