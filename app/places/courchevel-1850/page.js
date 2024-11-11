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

      {/* Luxury Experience Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            The Ultimate Courchevel 1850 Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">World-Class Location</h3>
              <p className="text-gray-600 mb-6">
                Nestled in the heart of Les Trois Vallées, Courchevel 1850 represents the pinnacle of luxury skiing. 
                Our handpicked chalets offer prime locations with direct access to 600km of pristine slopes.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Direct access to Les Trois Vallées ski area</li>
                <li>• Minutes from luxury boutiques and Michelin-starred restaurants</li>
                <li>• Helicopter transfer service available</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Exclusive Services</h3>
              <p className="text-gray-600 mb-6">
                Experience unparalleled luxury with our comprehensive service package, tailored to exceed 
                the expectations of our most discerning guests.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li>• Private chef and butler service</li>
                <li>• In-chalet ski fitting and equipment rental</li>
                <li>• Dedicated concierge team</li>
                <li>• Daily housekeeping and turndown service</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Premium Winter Escapes</h2>
          <p className="text-xl text-gray-600 mb-12">
            Our luxury chalets are available for weekly rentals during the winter season
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Peak Season</h3>
              <p className="text-gray-600 mb-4">December 20 - January 5</p>
              <p className="text-3xl font-bold mb-4">From €150,000/week</p>
              <p className="text-gray-600">Ultimate luxury during prime time</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">High Season</h3>
              <p className="text-gray-600 mb-4">February - March</p>
              <p className="text-3xl font-bold mb-4">From €120,000/week</p>
              <p className="text-gray-600">Perfect conditions, premium service</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Regular Season</h3>
              <p className="text-gray-600 mb-4">January & April</p>
              <p className="text-3xl font-bold mb-4">From €90,000/week</p>
              <p className="text-gray-600">Exceptional value, same luxury</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Secure Your Premium Winter Escape
          </h2>
          <p className="text-xl mb-8">
            Contact us now for exclusive access to Courchevel 1850's finest properties
          </p>
          <p className="text-lg mb-4">
            Limited availability for the 2024/25 season
          </p>
        </div>
      </section>

      <WhatsAppButton 
        message="Hello, I'm interested in booking a luxury chalet in Courchevel 1850. Please provide more information about availability and pricing." 
      />
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
