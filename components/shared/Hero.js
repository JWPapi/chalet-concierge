import Image from 'next/image';
import { Clock } from 'lucide-react';

export default function Hero({ title, backgroundImage }) {
  return (
    <div className="relative h-[90vh]">
      <Image
        src={backgroundImage}
        alt={`Luxury Chalets in ${title}`}
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
            Chalets in {title}
          </h1>
          <div className="text-xl md:text-2xl max-w-2xl mx-auto font-light bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <p className="mb-4">Skip the search. Message our concierge for your perfect chalet.</p>
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-2 bg-green-500/40 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium">
                <Clock className="w-4 h-4"/>
                Available 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
