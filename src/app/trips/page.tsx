import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { Calendar, Clock, Filter, MapPin } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function Page() {

  const trips = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      destination: "Swiss Alps Adventure",
      breakdown: "Zurich • Lucerne • Interlaken • Zermatt",
      duration: "9 Days",
      dates: "June 15 - June 23, 2024",
      price: "$2,899",
      category: "Adventure",
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
      category: "Cultural",
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
      category: "Nature",
      slug: "costa-rican-paradise"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
      destination: "Peruvian Expedition",
      breakdown: "Lima • Sacred Valley • Machu Picchu • Cusco",
      duration: "10 Days",
      dates: "September 5 - September 14, 2024",
      price: "$2,699",
      category: "Cultural",
      slug: "peruvian-expedition"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      destination: "New Zealand Explorer",
      breakdown: "Auckland • Rotorua • Queenstown • Milford Sound",
      duration: "14 Days",
      dates: "October 8 - October 21, 2024",
      price: "$3,899",
      category: "Adventure",
      slug: "new-zealand-explorer"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1523592121529-f6dde35f079e",
      destination: "Thai Island Hopping",
      breakdown: "Bangkok • Phuket • Phi Phi • Krabi",
      duration: "11 Days",
      dates: "November 12 - November 22, 2024",
      price: "$2,399",
      category: "Beach",
      slug: "thai-island-hopping"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1562883676-8c7feb83f09b",
      destination: "Spain & Portugal Adventure",
      breakdown: "Barcelona • Ibiza • Madrid • Lisbon",
      duration: "11 Days",
      dates: "June 7 - June 28, 2024",
      price: "$2,599",
      category: "Backpacking",
      slug: "spain-portugal-adventure"
    }
  ];
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-travel-earth">Our Adventures</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our carefully crafted journeys designed to immerse you in extraordinary destinations
              and connect you with like-minded travelers.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-semibold text-travel-earth">All Trips</h2>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="relative">
                <button className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                  <Filter size={16} className="mr-2" />
                  <span>Filter</span>
                </button>
              </div>

              <select className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Duration: Shortest First</option>
                <option>Duration: Longest First</option>
                <option>Upcoming Dates</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trips.map((trip) => (
              <div key={trip.id} className="trip-card">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trip.image}
                    alt={trip.destination}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-travel-earth">
                    {trip.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-travel-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                    {trip.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-travel-earth">{trip.destination}</h3>
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
            ))}
          </div>
        </div>
      </div>
      {/* TODO: Add Trip Search & Trip Categories */}
      <Footer />
    </div>
  );
}
