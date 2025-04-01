'use client'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The Swiss Alps trip exceeded all my expectations. The guides were knowledgeable and passionate, and the itinerary perfectly balanced adventure and relaxation. I made friends for life!",
    rating: 5,
    trip: "Swiss Alps Adventure"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Japan was always on my bucket list, and this trip made it an unforgettable experience. Every detail was taken care of, allowing me to fully immerse myself in the culture. Highly recommend!",
    rating: 5,
    trip: "Japanese Wonders"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    location: "London, UK",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    text: "Costa Rica was magical! From zip-lining through rainforests to relaxing on pristine beaches, every day was an adventure. The local guides shared insights I never would have discovered on my own.",
    rating: 5,
    trip: "Costa Rican Paradise"
  },
  {
    id: 4,
    name: "David Patel",
    location: "Sydney, Australia",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    text: "I've traveled with many companies, but this experience stands out. The attention to detail, the authentic experiences, and the like-minded travelers made this trip truly special.",
    rating: 5,
    trip: "Swiss Alps Adventure"
  },
  {
    id: 5,
    name: "Olivia Kim",
    location: "Seoul, South Korea",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
    text: "As a solo traveler, I was nervous about joining a group trip. Those fears disappeared immediately! The guides made everyone feel welcome, and I've made connections that will last a lifetime.",
    rating: 5,
    trip: "Japanese Wonders"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const itemsPerView = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
  const maxIndex = testimonials.length - itemsPerView;
  
  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">What Our Travelers Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from fellow adventurers who have experienced our exceptional journeys firsthand.
          </p>
        </div>
        
        <div className="relative">
          {/* Desktop and Tablet Navigation */}
          <div className="hidden sm:flex justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 px-4">
            <button 
              onClick={prevSlide} 
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-travel-earth hover:bg-travel-teal hover:text-white transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-travel-earth hover:bg-travel-teal hover:text-white transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
          
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / itemsPerView)}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4"
                >
                  <div className="testimonial-card h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div className="ml-4">
                        <h4 className="font-bold text-travel-earth">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex mb-3">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={18} className="fill-travel-sand text-travel-sand" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 italic flex-grow">{testimonial.text}</p>
                    
                    <p className="mt-4 pt-4 border-t text-sm font-medium text-travel-teal">
                      {testimonial.trip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex justify-center mt-6 space-x-2 sm:hidden">
            {Array.from({ length: testimonials.length }).map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-travel-teal w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;