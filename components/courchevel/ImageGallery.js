import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    src: "https://www.skiinluxury.com/attachments/photos/gallery/63b833cf-4cd0-473f-90c8-73fa0a000f09.jpg",
    alt: "Luxury Chalet Interior"
  },
  {
    src: "https://www.skiinluxury.com/attachments/photos/gallery/63b833c8-e13c-454b-92d9-73fa0a000f09.jpg",
    alt: "Chalet Exterior at Night"
  },
  {
    src: "https://www.skiinluxury.com/attachments/photos/gallery/66829a1a-3cb0-4ab6-843e-47140a000004.jpg",
    alt: "Luxury Bedroom Suite"
  },
  {
    src: "https://www.skiinluxury.com/attachments/photos/gallery/63b41e8e-cf30-41d6-9001-36ef0a000f09.jpg",
    alt: "Elegant Dining Area"
  },
  {
    src: "https://www.skiinluxury.com/attachments/photos/gallery/66aa2648-47e0-43b6-a638-4b1e0a000004.jpg",
    alt: "Private Spa Area"
  }
];

export default function ImageGallery() {
  return (
    <section className="bg-black">
      <div className="text-center py-16 px-4">
        <h2 className="text-4xl font-bold mb-4 text-white">Extensive Property Portfolio</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We have unparalleled access to Courchevel 1850's complete property market. 
          Our extensive network allows us to find the perfect chalet that matches your 
          specific requirements and budget, from intimate family retreats to grand 
          luxury estates.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      <div className="text-center py-16 px-4">
        <p className="text-gray-300 max-w-2xl mx-auto">
          From cozy ski-in/ski-out chalets to ultra-luxury residences with private spas, 
          we'll help you discover the perfect property that aligns with your vision and budget.
        </p>
      </div>
    </section>
  );
}
