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
    name: "Europe",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    price: "Rs. 1,29,990/-",
    slug: "europe"
  },
  {
    name: "Vietnam",
    image: "https://images.pexels.com/photos/58597/pexels-photo-58597.jpeg?auhref=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "Rs. 57,999/-",
    slug: "vietnam"
  },
  {
    name: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    price: "Rs. 44,999/-",
    slug: "bali"
  },
  {
    name: "Bhutan",
    image: "https://images.pexels.com/photos/910368/pexels-photo-910368.jpeg?auhref=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    price: "Rs. 39,999/-",
    slug: "bhutan"
  },
  {
    name: "Baku",
    image: "https://images.unsplash.com/photo-1601062583813-c599ca473917",
    price: "Rs. 44,999/-",
    slug: "baku"
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

const InternationalTrips = () => {
  return (
    <section className="relative py-16 bg-white">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-20" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)' }}>
      </div>
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-travel-earth">International Trips</h2>
          <p className="text-lg text-gray-600">
            Discover the world, one destination at a time
          </p>
        </div>
        
        <Link href="/trips?category=international" className="btn-primary mb-8 inline-flex items-center">
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

export default InternationalTrips;