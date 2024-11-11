import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Luxury Chalets in Courchevel 1850 | Exclusive Alpine Retreats',
  description: 'Discover ultra-luxury chalets in Courchevel 1850. Private pools, ski-in/ski-out access, and personal concierge. Book your premium winter escape today.',
};

export default function Courchevel1850() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh]">
        <Image
          src="https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?auto=format&fit=crop&q=80"
          alt="Luxury Chalet in Courchevel 1850"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Luxury Chalets in Courchevel 1850
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Experience the pinnacle of alpine luxury in the world's most prestigious ski resort
            </p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1613991917190-e68d404b2f7c?auto=format&fit=crop&q=80"
              alt="Luxury Chalet Interior"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&q=80"
              alt="Chalet Exterior at Night"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Luxury Experience */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Ultimate Alpine Experience
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Discover the epitome of luxury in Courchevel 1850. Our exclusive chalets offer direct ski access, 
            private wellness facilities, and world-class service.
          </p>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1595274459742-4a41d35784ee?auto=format&fit=crop&q=80"
              alt="Luxury Pool"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Your Luxury Escape Awaits
          </h2>
          <p className="text-xl mb-12">
            Contact our concierge team now for exclusive access and special rates
          </p>
          <div className="text-2xl font-light">
            Starting from €90,000/week
          </div>
        </div>
      </section>

      <WhatsAppButton 
        message="Hello, I'm interested in a luxury chalet in Courchevel 1850. Please share availability and details." 
      />
    </main>
  );
}
