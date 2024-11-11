import { Clock, CheckCircle2, Headphones, MessageCircle } from 'lucide-react';

export default function ConciergeSection() {
  return (
    <section className="py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          WhatsApp Concierge Service
        </h2>
        <div className="flex justify-center gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-green-600" />
            <span>24/7 Available</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span>Instant Matches</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-5 h-5 text-green-600" />
            <span>Best Rates</span>
          </div>
        </div>
        <p className="text-xl text-gray-600 mb-8">
          Skip the endless searching. Message our WhatsApp concierge your requirements and get instant, personalized matches.
        </p>
        <a
          href={`https://wa.me/YOUR_WHATSAPP_NUMBER?text=${encodeURIComponent('Hello, I would like to inquire about luxury chalets in Courchevel 1850.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Message Concierge Now</span>
        </a>
      </div>
    </section>
  );
}
