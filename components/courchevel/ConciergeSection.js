import { Clock, Shield, Trophy, Star } from 'lucide-react';

export default function ConciergeSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Our Commitments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <Shield className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusted Excellence</h3>
            <p className="text-gray-600">
              15+ years of curating the finest properties in Courchevel 1850
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Trophy className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Best Value Promise</h3>
            <p className="text-gray-600">
              Guaranteed competitive rates and exclusive perks for our clients
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Personal Touch</h3>
            <p className="text-gray-600">
              Dedicated team ensuring your perfect stay, from booking to checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
