import Link from 'next/link';
import Image from 'next/image';
import { Shield, Star, Clock } from 'lucide-react';
import Footer from './chalets/(components)/Footer';
import WhatsAppButton from './chalets/(components)/WhatsAppButton';

export const metadata = {
  title: 'Luxury Ski Chalets | Personal WhatsApp Concierge',
  description: 'Skip the endless searching. Message our WhatsApp concierge for instant, personalized luxury chalet recommendations in top ski resorts. Available 24/7.',
};

function Home() {
  const locations = [
    {
      href: "/chalets/courchevel-1850",
      name: "Courchevel 1850",
      description: "The Ultimate Luxury Ski Resort",
      image: "https://www.skiinluxury.com/attachments/photos/1170440/5df8d3c4-1f38-4002-97b7-60921fc10e14.jpg"
    },
    {
      href: "/chalets/verbier",
      name: "Verbier",
      description: "Swiss Alpine Excellence",
      image: "https://www.skiinluxury.com/attachments/photos/1170440/5ddd1e74-5490-48a7-8222-70931fc10e14.jpg"
    },
    {
      href: "/chalets/zermatt",
      name: "Zermatt",
      description: "Matterhorn's Majestic Beauty",
      image: "https://www.skiinluxury.com/attachments/photos/1170440/5ddd34d2-36cc-4a2a-b7b3-3e6c1fc10e14.jpg"
    },
    {
      href: "/chalets/gstaad",
      name: "Gstaad",
      description: "Timeless Swiss Elegance",
      image: "https://www.skiinluxury.com/attachments/photos/1170440/66eae7ce-ff90-4135-8bba-45770a000004.jpg"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Verified Properties",
      description: "Every chalet in our collection is personally inspected and verified for quality"
    },
    {
      icon: Star,
      title: "Concierge Service",
      description: "24/7 dedicated concierge to handle all your requests and requirements"
    },
    {
      icon: Clock,
      title: "Instant Booking",
      description: "Quick response and seamless booking process via WhatsApp"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <WhatsAppButton message="Hello, I'm interested in booking a luxury chalet" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Luxury Ski Chalets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked collection of luxury chalets in the world's most prestigious ski resorts.
            Our WhatsApp concierge is available 24/7 to help you find your perfect mountain retreat.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Link 
              key={location.href}
              href={location.href}
              className="group block overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={location.image}
                  alt={`Luxury chalets in ${location.name}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  {location.name}
                </h2>
                <p className="text-gray-600">
                  {location.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6">
                <feature.icon className="w-12 h-12 mx-auto text-green-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="bg-green-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Chalet?
          </h2>
          <p className="text-xl mb-8">
            Message our WhatsApp concierge now for instant, personalized recommendations
            tailored to your preferences.
          </p>
          <div className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg 
                          text-lg font-semibold hover:bg-green-50 transition-colors duration-200">
            <span>Chat with Us</span>
            <span className="text-sm">(Response in &lt; 5 min)</span>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Home;
