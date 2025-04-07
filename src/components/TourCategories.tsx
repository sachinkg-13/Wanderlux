import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = [
  {
    title: "Woman Only Tours",
    description: "Go private and enjoy our immersive trips exclusively with your group →",
    image: "https://a-us.storyblok.com/f/1018766/1800x1260/d8850dbab7/spain_seville_plaza_espana_women_guided_tour_gatspain2019.jpg/m/1232x862",
    link: "/trips/private"
  },
  {
    title: "Expert Travel Advise",
    description: "Work with our travel experts to craft a personalized itinerary →",
    image: "https://a-us.storyblok.com/f/1018766/3097x3097/1fcb976c68/africa-safari.png/m/821x821",
    link: "/trips/custom"
  },
  {
    title: "Explore all tours",
    description: "Choose from more than 200 tours spanning the globe →",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
    link: "/trips"
  }
];

const TourCategories = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link 
              href={category.link} 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-md h-[450px] transition-transform duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 z-10"></div>
              <img 
                src={category.image} 
                alt={category.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-20">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">{category.title}</h3>
                <p className="text-white/90 flex items-center">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourCategories;