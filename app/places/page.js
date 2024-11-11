import Link from 'next/link';
import { places } from '@/data/places';

export default function PlacesPage() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Explore Places</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {places.map((place) => (
          <Link 
            key={place.id}
            href={`/places/${place.id}`}
            className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold">{place.name}</h2>
            <p className="text-gray-600">{place.description}</p>
            <ul className="mt-4 text-sm text-gray-500">
              {place.highlights.slice(0, 3).map((highlight) => (
                <li key={highlight}>• {highlight}</li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </div>
  );
}
