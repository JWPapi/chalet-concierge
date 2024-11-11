'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import useEmblaCarousel from 'embla-carousel-react';

export default function ImageGallery({ images, location }) {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <section className="bg-black">
      <div className="text-center py-16 px-4">
        <h2 className={`${playfair.className} text-4xl font-bold mb-4 text-white`}>Extensive Property Portfolio</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          We have unparalleled access to {location}'s complete property market. 
          Our extensive network allows us to find the perfect chalet that matches your 
          specific requirements and budget, from intimate family retreats to grand 
          luxury estates.
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
          dragFree: true
        }}
        className="w-full relative"
        ref={emblaRef}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
              <div className="relative aspect-[4/5] after:absolute after:inset-0 after:bg-black/10">
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
        
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex 
                    ? 'bg-white w-4' 
                    : 'bg-white/50'
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
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
