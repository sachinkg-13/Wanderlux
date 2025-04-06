import React from 'react';
import { Instagram } from 'lucide-react';

const images = [
  {
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1",
    alt: "Beach resort with palm trees"
  },
  {
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    alt: "Grand hotel with gardens"
  },
  {
    url: "https://images.unsplash.com/photo-1519046904884-53103b34b206",
    alt: "Coastal cliff beach view"
  },
  {
    url: "https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5",
    alt: "Historic church building"
  },
  {
    url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd",
    alt: "Person with huskies in snow"
  },
  {
    url: "https://images.unsplash.com/photo-1559640410-f443c04ac6e6?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Desert traveler"
  },
  {
    url: "https://images.unsplash.com/photo-1662217134917-264a5e248581?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Safari vehicle expedition"
  },
  {
    url: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    alt: "Tour boat with passengers"
  },
  {
    url: "https://images.unsplash.com/photo-1710787825754-c0d7b4492e6a?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Rainbow street in town"
  }
];

const BestMoments = () => {
  return (
    <section id="best-moments" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">Our Best Moments</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            When you go, capture all those incredible moments, and use the hashtag
            #WANDERTRIBETravel so that we can share your joy!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 sm:hidden">
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <a href="#" className="text-white">
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 sm:mt-0 mt-4">
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <a href="#" className="text-white">
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-4 mt-4">
          {images.slice(4).map((image, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <a href="#" className="text-white">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4">
          {images.slice(0, 4).map((image, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <a href="#" className="text-white">
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4 sm:hidden">
          {images.slice(0, 2).map((image, index) => (
            <div key={index} className="relative group overflow-hidden">
              <img
                src={image.url}
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <a href="#" className="text-white">
                  <Instagram size={28} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestMoments;