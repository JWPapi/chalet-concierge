import Link from 'next/link'
import Image from 'next/image'

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
    },
    {
      href: "/chalets/courchevel-1650",
      name: "Courchevel 1650",
      description: "Authentic Alpine Charm",
      image: "https://www.skiinluxury.com/attachments/photos/courchevel-1650/hero-courchevel-1650.jpg"
    },
    {
      href: "/chalets/courchevel-1550",
      name: "Courchevel 1550",
      description: "Family-Friendly Luxury",
      image: "https://www.skiinluxury.com/attachments/photos/courchevel-1550/hero-courchevel-1550.jpg"
    },
    {
      href: "/chalets/courchevel-1300",
      name: "Courchevel 1300",
      description: "Traditional Mountain Living",
      image: "https://www.skiinluxury.com/attachments/photos/courchevel-1300/hero-courchevel-1300.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
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
    </main>
  );
}

export default Home;
