import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-travel-earth">About Us</h1>
          <p className="text-lg text-gray-600 mb-16">
            Learn about our story, mission, and the passionate team behind WANDERLUX.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-travel-earth">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010 by a group of passionate travelers who believed that travel should be more than just checking off bucket list items, WANDERLUX was born from a desire to create meaningful connections through immersive experiences.
              </p>
              <p className="text-gray-600 mb-4">
                After years of independent travel across all seven continents, our founders recognized that the most memorable moments came from authentic cultural exchanges and connections with like-minded adventurers.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped thousands of travelers discover the world's hidden wonders while forming lasting friendships and creating unforgettable memories.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a"
                alt="Team hiking in mountains"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-travel-earth">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create extraordinary journeys that inspire, connect, and transform through authentic experiences and responsible travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-travel-earth">Authentic Experiences</h3>
              <p className="text-gray-600">
                We design each itinerary to immerse you in local cultures, traditions, and natural wonders that go beyond typical tourist attractions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-travel-earth">Meaningful Connections</h3>
              <p className="text-gray-600">
                Our small group trips foster friendships among travelers while creating opportunities to connect with local communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-travel-earth">Responsible Travel</h3>
              <p className="text-gray-600">
                We're committed to sustainable practices that respect local environments, support local economies, and minimize our ecological footprint.
              </p>
            </div>
          </div>
        </div>
      </div>

    {/* TODO: Add Team section & Company Values */}

      <div className="pb-16 pt-4 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-8 text-travel-earth">Ready to Start Your Adventure?</h2>
          <button className="btn-primary">Explore Our Trips</button>
        </div>
      </div>

      <Footer />
    </div>
  )
}
