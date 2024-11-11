import Hero from './(components)/Hero';
import ConciergeSection from './(components)/ConciergeSection';
import ImageGallery from './(components)/ImageGallery';
import CTASection from './(components)/CTASection';
import WhatsAppButton from '../../../components/WhatsAppButton';

export const metadata = {
  title: 'Luxury Chalets in Courchevel 1850 | Personal WhatsApp Concierge',
  description: 'Skip the endless searching. Message our WhatsApp concierge for instant, personalized luxury chalet recommendations in Courchevel 1850. Available 24/7.',
};

export default function Courchevel1850() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <ConciergeSection />
      <ImageGallery />
      <CTASection />
      <WhatsAppButton 
        message="Hello, I'm interested in a luxury chalet in Courchevel 1850. Please share availability and details." 
      />
    </main>
  );
}
