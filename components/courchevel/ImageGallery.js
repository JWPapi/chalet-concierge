import Image from 'next/image';

export default function ImageGallery() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative h-[400px]">
          <Image
            src="https://www.skiinluxury.com/attachments/photos/gallery/63b833cf-4cd0-473f-90c8-73fa0a000f09.jpg"
            alt="Luxury Chalet Interior"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-[400px]">
          <Image
            src="https://www.skiinluxury.com/attachments/photos/gallery/63b833c8-e13c-454b-92d9-73fa0a000f09.jpg"
            alt="Chalet Exterior at Night"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
