import Link from 'next/link'

function Home() {
  return (
    <main className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Places</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link 
          href="/places/paris"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold">Paris</h2>
          <p className="text-gray-600">The City of Light</p>
        </Link>
        <Link 
          href="/places/tokyo"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold">Tokyo</h2>
          <p className="text-gray-600">The Modern Metropolis</p>
        </Link>
        <Link 
          href="/places/new-york"
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold">New York</h2>
          <p className="text-gray-600">The Big Apple</p>
        </Link>
      </div>
    </main>
  );
}
