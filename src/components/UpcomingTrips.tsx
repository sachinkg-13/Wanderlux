import { Calendar, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';


const tripData = [
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

const TripCard = ({ trip }: { trip: typeof tripData[0] }) => {
  return (
    <div className="trip-card">
      <div className="relative h-64 overflow-hidden">
        <img
          src={trip.image}
          alt={trip.destination}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-travel-earth">
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

const UpcomingTrips = () => {
  return (
    <section className="section-padding bg-travel-sand-light/30">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">Upcoming Adventures</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Handcrafted itineraries designed to immerse you in extraordinary destinations.
            Book your next adventure today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tripData.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/trips" >
            <button className="btn-primary">View All Trips</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default UpcomingTrips;
