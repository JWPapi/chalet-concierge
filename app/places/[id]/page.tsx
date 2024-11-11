import { notFound } from 'next/navigation';

import { places } from '@/data/places';

export default function PlacePage({ params }) {
  const place = places.find(p => p.id === params.id);
  
  if (!place) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-5xl font-bold mb-4">{place.name}</h1>
      <p className="text-xl text-gray-600 mb-8">{place.description}</p>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Highlights</h2>
        <ul className="space-y-2">
          {place.highlights.map((highlight) => (
            <li key={highlight} className="flex items-center">
              <span className="mr-2">•</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Location</h2>
        <div className="text-gray-600">
          <p>{place.location.country}</p>
          <p>{place.location.continent}</p>
          <p>
            Coordinates: {place.location.coordinates.latitude}°, 
            {place.location.coordinates.longitude}°
          </p>
        </div>
      </div>
    </div>
  );
}
