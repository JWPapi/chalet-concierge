import { Clock, Shield, Trophy, Star } from 'lucide-react';

export default function ConciergeSection({ location }) {
  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-gray-900">
          Our Commitments
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-start gap-8 p-6 bg-white rounded-xl shadow-sm md:hover:shadow-none hover:shadow-md transition-shadow">
            <Shield className="w-10 h-10 text-gray-900 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Trusted Excellence</h3>
              <p className="text-base text-gray-600">
                15+ years of curating the finest properties in {location}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-8 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Trophy className="w-10 h-10 text-gray-900 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Best Value Promise</h3>
              <p className="text-base text-gray-600">
                Guaranteed competitive rates and exclusive perks for our clients
              </p>
            </div>
          </div>
          <div className="flex items-start gap-8 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Star className="w-10 h-10 text-gray-900 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Personal Touch</h3>
              <p className="text-base text-gray-600">
                Dedicated team ensuring your perfect stay, from booking to checkout
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
