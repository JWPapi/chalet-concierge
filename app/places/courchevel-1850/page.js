import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Luxury Chalets in Courchevel 1850 | Exclusive Alpine Retreats',
  description: 'Discover ultra-luxury chalets in Courchevel 1850. Private pools, ski-in/ski-out access, and personal concierge. Book your premium winter escape today.',
  keywords: 'Courchevel 1850 chalets, luxury ski chalets, ski-in ski-out Courchevel, premium alpine accommodation',
};

export default function Courchevel1850() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh]">
        <Image
          src="/images/courchevel-hero.jpg"
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

      {/* Key Features */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Premium Winter Escape
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us now for exclusive access to Courchevel 1850's finest properties
          </p>
        </div>
      </section>

      <WhatsAppButton message="I'm interested in luxury chalets in Courchevel 1850" />
    </main>
  );
}

const features = [
  {
    title: "Ski-in/Ski-out Access",
    description: "Direct access to Courchevel 1850's world-class slopes and the Three Valleys ski area"
  },
  {
    title: "Premium Services",
    description: "24/7 concierge, private chef, and dedicated butler service"
  },
  {
    title: "Luxury Amenities",
    description: "Indoor pools, spa facilities, cinema rooms, and wine cellars"
  }
];
