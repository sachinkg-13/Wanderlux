import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, MapPin } from 'lucide-react';

const pastTrips = [
  {
    id: 1,
    title: "Swiss Alps Adventure - Summer 2023",
    description: "An unforgettable journey through Switzerland's breathtaking mountain landscapes and charming villages.",
    image: "https://images.unsplash.com/photo-1527668752968-14dc70a27c95",
    date: "June 15 - June 23, 2023",
    location: "Switzerland"
  },
  {
    id: 2,
    title: "Japanese Cherry Blossom Tour",
    description: "Experiencing the magical sakura season across Japan's most beautiful cities and cultural sites.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    date: "March 25 - April 5, 2023",
    location: "Japan"
  },
  {
    id: 3,
    title: "Costa Rican Rainforest Expedition",
    description: "Exploring the rich biodiversity and natural wonders of Costa Rica's pristine rainforests.",
    image: "https://images.unsplash.com/photo-1518182170546-07661fd94144",
    date: "February 10 - February 17, 2023",
    location: "Costa Rica"
  },
  {
    id: 4,
    title: "Peruvian Andes & Machu Picchu",
    description: "Discovering the ancient wonders and breathtaking landscapes of Peru's Sacred Valley and Inca Trail.",
    image: "https://images.unsplash.com/photo-1526392060635-9d6019884377",
    date: "October 5 - October 15, 2022",
    location: "Peru"
  },
  {
    id: 5,
    title: "Iceland Northern Lights Adventure",
    description: "Chasing the aurora borealis while exploring Iceland's otherworldly landscapes and natural hot springs.",
    image: "https://images.unsplash.com/photo-1520769490916-6d389070b6c7",
    date: "September 12 - September 20, 2022",
    location: "Iceland"
  },
  {
    id: 6,
    title: "Moroccan Desert & Cities Tour",
    description: "From the vibrant medinas of Marrakech to the serene Sahara Desert, a journey through Morocco's diverse wonders.",
    image: "https://images.unsplash.com/photo-1489493585363-d69421e0edd3",
    date: "May 1 - May 10, 2022",
    location: "Morocco"
  }
];

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-travel-earth">Past Adventures</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take a look at our previous journeys filled with incredible memories, breathtaking locations,
              and new friendships formed along the way.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastTrips.map((trip) => (
              <div key={trip.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row">
                <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img 
                    src={trip.image} 
                    alt={trip.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="md:w-3/5 p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-travel-earth">{trip.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{trip.description}</p>
                  <div className="flex flex-col text-sm text-gray-500">
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="mr-2 text-travel-teal" />
                      <span>{trip.date}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-travel-teal" />
                      <span>{trip.location}</span>
                    </div>
                  </div>
                  <button className="mt-4 py-2 text-travel-teal border border-travel-teal rounded-md hover:bg-travel-teal hover:text-white transition-colors">
                    View Gallery
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Don't miss out on our upcoming adventures. Join us for your next unforgettable journey!
            </p>
            <button className="btn-primary">View Upcoming Trips</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
