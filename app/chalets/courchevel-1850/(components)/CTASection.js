export default function CTASection() {
  const benefits = [
    "24/7 Concierge Service",
    "Exclusive Property Access",
    "Personalized Experience",
    "Best Price Guarantee",
    "Instant Booking Confirmation"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Instant Luxury Chalet Booking
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Send your dates via WhatsApp, receive tailored recommendations, and secure your perfect chalet with our concierge support.
          </p>
          <button
            className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold
                       hover:bg-green-50 transition-colors duration-200 shadow-lg"
          >
            Book via WhatsApp
          </button>
          <p className="mt-6 text-lg opacity-90">
            From €90,000/week • Instant Response • No Booking Fees
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {benefits.slice(0, 3).map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
              <svg 
                className="w-6 h-6 flex-shrink-0" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M5 13l4 4L19 7" 
                />
              </svg>
              <span className="text-lg font-medium">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
