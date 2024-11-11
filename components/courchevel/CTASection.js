export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Instant Luxury Chalet Booking
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Send your dates via WhatsApp, receive tailored recommendations, and secure your perfect chalet with our concierge support.
        </p>
        <button
          onClick={() => {/* TODO: Add benefits popup trigger */}}
          className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold 
                     hover:bg-green-50 transition-colors duration-200 shadow-lg"
        >
          Book via WhatsApp
        </button>
        <p className="mt-6 text-lg opacity-90">
          From €90,000/week • Instant Response • No Booking Fees
        </p>
      </div>
    </section>
  );
}
