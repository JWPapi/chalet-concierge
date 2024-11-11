import { Clock, Shield, Trophy, Star } from 'lucide-react';

export default function ConciergeSection() {
  return (
    <section className="py-6 md:py-12 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">
          Our Commitments
        </h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Trusted Excellence</h3>
              <p className="text-sm text-gray-600">
                15+ years of curating the finest properties in Courchevel 1850
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Trophy className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Best Value Promise</h3>
              <p className="text-sm text-gray-600">
                Guaranteed competitive rates and exclusive perks for our clients
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Star className="w-8 h-8 text-green-600 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold">Personal Touch</h3>
              <p className="text-sm text-gray-600">
                Dedicated team ensuring your perfect stay, from booking to checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
