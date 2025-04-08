import React, { useState } from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// Trip data for different tabs
const upcomingTrips = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    destination: "Swiss Alps Adventure",
    breakdown: "Zurich • Lucerne • Interlaken • Zermatt",
    duration: "9 Days",
    dates: "June 15 - June 23, 2024",
    price: "$2,899",
    slug: "swiss-alps-adventure"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb",
    destination: "Japanese Wonders",
    breakdown: "Tokyo • Kyoto • Osaka • Hakone",
    duration: "12 Days",
    dates: "July 3 - July 14, 2024",
    price: "$3,499",
    slug: "japanese-wonders"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    destination: "Costa Rican Paradise",
    breakdown: "San José • Arenal • Monteverde • Manuel Antonio",
    duration: "8 Days",
    dates: "August 10 - August 17, 2024",
    price: "$2,199",
    slug: "costa-rican-paradise"
  }
];

const popularTrips = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1673195394963-466a894b6bca?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    destination: "Santorini Escape",
    breakdown: "Athens • Mykonos • Santorini",
    duration: "7 Days",
    dates: "May 10 - May 16, 2024",
    price: "$2,499",
    slug: "santorini-escape"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1543158181-e6f9f6712055",
    destination: "Bali Bliss",
    breakdown: "Ubud • Seminyak • Nusa Dua",
    duration: "10 Days",
    dates: "June 20 - June 29, 2024",
    price: "$1,899",
    slug: "bali-bliss"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1535189043414-47a3c49a0bed",
    destination: "Tuscan Adventure",
    breakdown: "Florence • Siena • Pisa • Lucca",
    duration: "8 Days",
    dates: "September 5 - September 12, 2024",
    price: "$2,699",
    slug: "tuscan-adventure"
  }
];

const internationalTrips = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
    destination: "Europe",
    breakdown: "France • Italy • Spain • Switzerland",
    duration: "14 Days",
    dates: "July 15 - July 28, 2024",
    price: "Rs. 1,29,990/-",
    slug: "europe"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1649686887571-afa47f5428e4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    destination: "Vietnam",
    breakdown: "Hanoi • Ha Long Bay • Hoi An • Ho Chi Minh",
    duration: "9 Days",
    dates: "August 10 - August 18, 2024",
    price: "Rs. 57,999/-",
    slug: "vietnam"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    destination: "Bali",
    breakdown: "Ubud • Seminyak • Nusa Dua • Kuta",
    duration: "7 Days",
    dates: "September 5 - September 11, 2024",
    price: "Rs. 44,999/-",
    slug: "bali"
  }
];

const indiaTrips = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621",
    destination: "Ladakh",
    breakdown: "Leh • Nubra Valley • Pangong Lake • Tso Moriri",
    duration: "7 Days",
    dates: "July 10 - July 16, 2024",
    price: "Rs. 24,999/-",
    slug: "ladakh"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    destination: "Kerala",
    breakdown: "Kochi • Munnar • Thekkady • Alleppey",
    duration: "6 Days",
    dates: "August 15 - August 20, 2024",
    price: "Rs. 12,999/-",
    slug: "kerala"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    destination: "Rajasthan",
    breakdown: "Jaipur • Jodhpur • Udaipur • Jaisalmer",
    duration: "8 Days",
    dates: "October 5 - October 12, 2024",
    price: "Rs. 14,999/-",
    slug: "rajasthan"
  }
];

const TripCard = ({ trip }: { trip: typeof upcomingTrips[0] }) => {
  return (
    <div className="trip-card">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={trip.image} 
          alt={trip.destination} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-travel-cloud-white px-3 py-1 rounded-full text-sm font-semibold text-travel-earth">
          {trip.price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-travel-earth">{trip.destination}</h3>
        <p className="text-sm text-gray-500 flex items-center mb-4">
          <MapPin size={16} className="mr-1" />
          {trip.breakdown}
        </p>
        
        <div className="flex justify-between mb-4">
          <div className="flex items-center text-gray-700">
            <Clock size={18} className="mr-2 text-travel-teal" />
            <span>{trip.duration}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <Calendar size={18} className="mr-2 text-travel-teal" />
            <span>{trip.dates}</span>
          </div>
        </div>
        
        <Link href={`/trip/${trip.slug}`} className="w-full btn-outline mt-2 block text-center">View Trip</Link>
      </div>
    </div>
  );
};

const FeaturedTours = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  return (
    <section className="py-16 bg-travel-cloud-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-travel-earth">Featured Tours</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            WANDERLUX travelers choose from 160 tours across all 7 continents, as well as 5 travel styles including small group touring and destination spotlights.
            Check out some trending tours for inspiration on your next adventure.
          </p>
        </div>
        
        <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Updated TabsList for better responsiveness */}
          <div className="flex justify-center mb-10 overflow-x-auto scrollbar-hide">
            <TabsList className="bg-transparent border-b border-gray-200 w-full flex flex-nowrap justify-start sm:justify-center space-x-2 sm:space-x-4 md:space-x-8 px-4">
              <TabsTrigger 
                value="upcoming" 
                className="text-sm sm:text-base md:text-lg font-medium py-2 px-2 sm:px-4 travel-cloud-whitespace-nowrap border-b-2 border-transparent data-[state=active]:border-travel-teal data-[state=active]:text-travel-teal"
              >
                Upcoming Adventures
              </TabsTrigger>
              <TabsTrigger 
                value="popular" 
                className="text-sm sm:text-base md:text-lg font-medium py-2 px-2 sm:px-4 travel-cloud-whitespace-nowrap border-b-2 border-transparent data-[state=active]:border-travel-teal data-[state=active]:text-travel-teal"
              >
                Popular
              </TabsTrigger>
              <TabsTrigger 
                value="international" 
                className="text-sm sm:text-base md:text-lg font-medium py-2 px-2 sm:px-4 travel-cloud-whitespace-nowrap border-b-2 border-transparent data-[state=active]:border-travel-teal data-[state=active]:text-travel-teal"
              >
                International
              </TabsTrigger>
              <TabsTrigger 
                value="india" 
                className="text-sm sm:text-base md:text-lg font-medium py-2 px-2 sm:px-4 travel-cloud-whitespace-nowrap border-b-2 border-transparent data-[state=active]:border-travel-teal data-[state=active]:text-travel-teal"
              >
                India
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="upcoming" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="popular" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popularTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="international" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {internationalTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="india" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {indiaTrips.map((trip) => (
                <TripCard key={trip.id} trip={trip} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="text-center mt-12 w-1/3 mx-auto">
          <Link href="/trips" className="btn-primary flex items-center justify-center ">
            Browse All Trips
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;