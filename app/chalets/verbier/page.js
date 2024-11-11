import WhatsAppButton from '../(components)/WhatsAppButton';
import Hero from '../(components)/Hero';
import ConciergeSection from '../(components)/ConciergeSection';
import CTASection from '../(components)/CTASection';
import ImageGallery from '../(components)/ImageGallery';

export const metadata = {
  title: 'Luxury Chalets in Verbier | Personal WhatsApp Concierge',
  description: 'Skip the endless searching. Message our WhatsApp concierge for instant, personalized luxury chalet recommendations in Verbier. Available 24/7.',
};

export default function Verbier() {
  return (
    <main className="relative min-h-screen">
      <Hero 
        title="Verbier"
        backgroundImage="https://www.skiinluxury.com/attachments/photos/verbier/hero-verbier.jpg"
      />
      <ConciergeSection location="Verbier" />
      <ImageGallery 
        location="Verbier"
        images={[
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/verbier-1.jpg",
            alt: "Luxury Verbier Chalet Interior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/verbier-2.jpg",
            alt: "Verbier Chalet Exterior"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/verbier-3.jpg",
            alt: "Verbier Suite"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/verbier-4.jpg",
            alt: "Verbier Dining Area"
          },
          {
            src: "https://www.skiinluxury.com/attachments/photos/gallery/verbier-5.jpg",
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
