import Image from 'next/image';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata = {
  title: 'Luxury Chalets in Courchevel 1850 | Personal WhatsApp Concierge',
  description: 'Skip the endless searching. Message our WhatsApp concierge for instant, personalized luxury chalet recommendations in Courchevel 1850. Available 24/7.',
};

export default function Courchevel1850() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[90vh]">
        <Image
          src="https://www.skiinluxury.com/attachments/photos/1170440/5df8d3c4-1f38-4002-97b7-60921fc10e14.jpg"
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
              Skip the search. Message our concierge for your perfect luxury chalet match.
            </p>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[400px]">
            <Image
              src="https://www.skiinluxury.com/attachments/photos/gallery/63b833cf-4cd0-473f-90c8-73fa0a000f09.jpg"
              alt="Luxury Chalet Interior"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="relative h-[400px]">
            <Image
              src="https://www.skiinluxury.com/attachments/photos/gallery/63b833c8-e13c-454b-92d9-73fa0a000f09.jpg"
              alt="Chalet Exterior at Night"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* WhatsApp Concierge Service */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Your Personal Luxury Concierge
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">24/7 Availability</h3>
              <p className="text-gray-600">Direct access to our concierge team anytime, anywhere via WhatsApp</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Tailored Search</h3>
              <p className="text-gray-600">Tell us your preferences, we'll find your perfect chalet match</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold mb-4">Best Rates</h3>
              <p className="text-gray-600">Access to exclusive deals and special offers through our concierge</p>
            </div>
          </div>
          <p className="text-xl text-gray-600 mb-8">
            Skip the endless searching. Simply message us your requirements and let our expert concierge team handle everything.
          </p>
        </div>
      </section>

      {/* WhatsApp CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Book Effortlessly via WhatsApp
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 mb-8">
            <p className="text-xl">
              1. Message us your dates and preferences
            </p>
            <p className="text-xl">
              2. Receive personalized chalet recommendations
            </p>
            <p className="text-xl">
              3. Secure your booking with our concierge's help
            </p>
          </div>
          <p className="text-lg opacity-90">
            Luxury chalets from €90,000/week • Instant responses • No booking fees
          </p>
        </div>
      </section>

      <WhatsAppButton 
        message="Hello, I'm interested in a luxury chalet in Courchevel 1850. Please share availability and details." 
      />
    </main>
  );
}
