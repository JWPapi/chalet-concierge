import Image from 'next/image';
import { Clock } from 'lucide-react';

export default function Hero() {
  return (
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
          <h1 className="text-5xl md:text-7xl font-bold mb-8 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
            Chalets in Courchevel 1850
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            Message our concierge for your perfect chalet match
            <span className="inline-flex items-center gap-2 mt-4 bg-green-500/20 text-green-400 px-3 py-1.5 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              Available 24/7
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
