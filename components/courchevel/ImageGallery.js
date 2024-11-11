import Image from 'next/image';

export default function ImageGallery() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Extensive Property Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We have unparalleled access to Courchevel 1850's complete property market. 
            Our extensive network allows us to find the perfect chalet that matches your 
            specific requirements and budget, from intimate family retreats to grand 
            luxury estates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="relative h-[300px] md:col-span-2 md:row-span-2">
            <Image
              src="https://www.skiinluxury.com/attachments/photos/gallery/63b833cf-4cd0-473f-90c8-73fa0a000f09.jpg"
              alt="Luxury Chalet Interior"
              fill
              className="object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
          <div className="relative h-[300px]">
            <Image
              src="https://www.skiinluxury.com/attachments/photos/gallery/63b833c8-e13c-454b-92d9-73fa0a000f09.jpg"
              alt="Chalet Exterior at Night"
              fill
              className="object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
          <div className="relative h-[300px]">
            <Image
              src="https://www.skiinluxury.com/attachments/photos/gallery/luxury-chalet-bedroom.jpg"
              alt="Luxury Bedroom Suite"
              fill
              className="object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
          <div className="relative h-[300px]">
            <Image
              src="https://www.skiinluxury.com/attachments/photos/gallery/chalet-dining.jpg"
              alt="Elegant Dining Area"
              fill
              className="object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
          <div className="relative h-[300px]">
            <Image
              src="https://www.skiinluxury.com/attachments/photos/gallery/chalet-spa.jpg"
              alt="Private Spa Area"
              fill
              className="object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 max-w-2xl mx-auto">
            From cozy ski-in/ski-out chalets to ultra-luxury residences with private spas, 
            we'll help you discover the perfect property that aligns with your vision and budget.
          </p>
        </div>
      </div>
    </section>
  );
}
