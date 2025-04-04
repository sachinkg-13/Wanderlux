import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const destinations = [
  {
    name: "Ladakh",
    image: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621",
    price: "Rs. 24,999/-",
    slug: "ladakh"
  },
  {
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    price: "Rs. 12,999/-",
    slug: "kerala"
  },
  {
    name: "Rajasthan",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    price: "Rs. 14,999/-",
    slug: "rajasthan"
  },
  {
    name: "Kashmir",
    image: "https://images.unsplash.com/photo-1566837497312-7be7830ae9b1",
    price: "Rs. 24,499/-",
    slug: "kashmir"
  },
  {
    name: "Andaman",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
    price: "Rs. 29,999/-",
    slug: "andaman"
  }
];

const DestinationCard = ({ destination }: { destination: typeof destinations[0] }) => {
  return (
    <div className="relative overflow-hidden rounded-lg group">
      <img 
        src={destination.image} 
        alt={destination.name} 
        className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
          <p className="font-medium text-white/90">Starting Price {destination.price}</p>
        </div>
      </div>
    </div>
  );
};

const ExploreIndia = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: 'url(https://images.pexels.com/photos/574313/pexels-photo-574313.jpeg?auhref=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4  text-travel-earth">Explore India</h2>
          <p className="text-lg text-gray-600">
            Discover the diverse landscapes and rich cultural heritage of Incredible India
          </p>
        </div>
        
        <Link href="/trips?category=india" className="btn-primary  mb-8 inline-flex items-center ">
          Explore <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
        
        <Carousel className="mt-8">
          <CarouselContent>
            {destinations.map((destination, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                <Link href={`/trip/${destination.slug}`}>
                  <DestinationCard destination={destination} />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 bg-white/70 hover:bg-white" />
          <CarouselNext className="-right-4 bg-white/70 hover:bg-white" />
        </Carousel>
      </div>
    </section>
  );
};

export default ExploreIndia;