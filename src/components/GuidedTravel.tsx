import React from 'react';
import { Users, MapPin, Clock, Star } from 'lucide-react';

const GuidedTravel = () => {
  return (
    <section className="py-16 bg-sky-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-travel-earth">Why Guided Travel by WANDER TRIBE</h2>
            <p className="text-lg mb-8 text-gray-700">
              You're a traveler with places to go. We'll take care of the details. You
              embrace the journey.
            </p>

            <div className="relative">
              <div className="rounded-full overflow-hidden border-8 border-white md:w-64 md:h-64 w-32 h-32 z-20 relative">
                <img
                  src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4"
                  alt="Traveler with bird"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-4 right-12 rounded-full overflow-hidden border-8 border-white md:w-40 md:h-40 w-20 h-20 z-10">
                <img
                  src="https://images.unsplash.com/photo-1534008897995-27a23e859048"
                  alt="Group travel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute md:-left-6 md:top-24 top-3 left-1 z-30">
                <div className="w-3 h-3 bg-travel-earth rounded-full"></div>
              </div>
              {/* <div className="absolute right-20 top-0 z-30">
                <div className="w-3 h-3 bg-travel-earth rounded-full"></div>
              </div> */}
              <div className="absolute md:right-8 md:bottom-24 z-30 bottom-7 right-10">
                <div className="w-3 h-3 bg-travel-earth rounded-full"></div>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full z-0" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M50,100 Q100,50 150,100 T250,100 T350,100"
                  fill="none"
                  stroke="#ccc"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-center md:pl-0 pl-5">
            <div className="relative mb-16">
              <div className="absolute sm:-left-8 sm:top-0 -left-5 top-2">
                <div className="sm:w-6 sm:h-6 w-4 h-4 bg-travel-teal rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-travel-earth">Social Connections</h3>
              <p className="text-gray-700 pl-4 border-l-2 border-gray-200">
                Meet a group of people who share your love of travel. Learn from
                locals. Forge friendships in the coolest places.
              </p>
            </div>

            <div className="relative mb-16 ml-20">
              <div className="absolute sm:-left-8 sm:top-0 -left-5 top-2">
                <div className="sm:w-6 sm:h-6 w-4 h-4 bg-travel-teal rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-travel-earth">Independence</h3>
              <p className="text-gray-700 pl-4 border-l-2 border-gray-200">
                There's plenty of time built into our itineraries, plus optional tours, Choice on
                Tour excursions, and more. It's your trip, your way.
              </p>
            </div>

            <div className="relative mb-16">
              <div className="absolute sm:-left-8 sm:top-0 -left-5 top-2">
                <div className="sm:w-6 sm:h-6 w-4 h-4 bg-travel-teal rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-travel-earth">Expertly Planned</h3>
              <p className="text-gray-700 pl-4 border-l-2 border-gray-200">
                You know what you want to see and do - let a team of experts handle
                all the details from the must-sees to centrally-located
                accommodations and local lessons.
              </p>
            </div>

            <div className="relative ml-20">
              <div className="absolute sm:-left-8 sm:top-0 -left-5 top-2">
                <div className="sm:w-6 sm:h-6 w-4 h-4 bg-travel-teal rounded-full"></div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-travel-earth">The Best Pacing</h3>
              <p className="text-gray-700 pl-4 border-l-2 border-gray-200">
                Don't rush – this is your time to see the world. Get more time in the destination,
                and enjoy an ideal balance of included excursions and free time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidedTravel;