'use client';
import {  ChevronLeft, ChevronRight, Users, CreditCard, Clipboard, User } from 'lucide-react';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const FeatureSection = () => {
  const [slidePosition, setSlidePosition] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [maxSlide, setMaxSlide] = useState(0);
  const sliderRef = useRef(null);



  const featureCards = [
    {
      type: "main",
      icon: <Users size={48} className="text-travel-teal" />,
      title: "Experiential travel made easy",
      content: "You dream it. We’ll take care of every last detail.",
      link: "/trips",
      linkText: "Find out how"
    },
    {
      type: "feature",
      icon: <Users size={48} className="text-travel-teal" />,
      title: "Like Minded Travellers",
      content: "Joining solo or in a group, you're never alone. Come meet your new squad of best friends you never knew you had.",
      link: "/trips",
      linkText: "200+ immersive, guided tours"
    },
    {
      type: "feature",
      icon: <CreditCard size={48} className="text-travel-teal" />,
      title: "All Inclusive & Hassle Free",
      content: "No more worrying about the transportation, hotels & itineraries. One booking and we've got you all covered.",
    },
    {
      type: "feature",
      icon: <Clipboard size={48} className="text-travel-teal" />,
      title: "Bucket list experiences",
      content: " Curated by experts who've been there done that. Local food, travel icons, unique experiences, everything is hand picked.",
      link: "/about",
      linkText: "what going guided is all about"
    },
    {
      type: "feature",
      icon: <User size={48} className="text-travel-teal" />,
      title: "Led by Experts",
      content: " Trip leaders & local guides who are smart, fun & experienced. Top suggestions and support you need along the way.",
      link: "/guides",
      linkText: "Meet our guides"
    }
  ];

  // Update visible cards and max slide position based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleCards(4); // xl screens - show 4 cards
      } else if (window.innerWidth >= 1024) {
        setVisibleCards(3); // lg screens - show 3 cards
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // md screens - show 2 cards
      } else {
        setVisibleCards(1); // sm screens - show 1 card
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Update max slide position whenever visible cards changes
  useEffect(() => {
    setMaxSlide(Math.max(0, featureCards.length - visibleCards));
  }, [visibleCards]);

  const slideRight = () => {
    setSlidePosition(Math.min(slidePosition + 1, maxSlide));
  };

  const slideLeft = () => {
    setSlidePosition(Math.max(slidePosition - 1, 0));
  };

  // Touch support for mobile
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      slideRight(); // Swipe left
    } else if (touchEndX.current - touchStartX.current > 50) {
      slideLeft(); // Swipe right
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-travel-earth">Immersive guided tours, all around the globe</h2>
          <p className="text-lg text-gray-700">
            Explore with a friend, the whole family, or solo. However—and wherever—you want to go, our expert-planned group travel experiences make it easy to see the world.
          </p>
        </div>

        <div className="relative mt-12 tracking-wider">
          <div
            className="overflow-hidden"
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${slidePosition * (100 / visibleCards)}%)` }}
            >
              {featureCards.map((card, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / visibleCards}%` }}
                >
                  {card.type === "main" ? (
                    // Main card with green background
                    <div className="bg-travel-earth p-8 rounded-2xl flex flex-col text-white h-full ">
                      <div className='flex-grow'>
                        <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                        <p className="mb-8">{card.content}</p>
                      </div>
                      <div>
                        <Link href={card.link} className="inline-flex items-center px-6 py-3 bg-white text-travel-earth rounded-full font-medium hover:bg-gray-100 transition-colors">
                          {card.linkText}
                        </Link>
                      </div>
                    </div>
                  ) : (
                    // Regular feature cards
                    <div className="bg-white p-8 rounded-2xl border border-gray-200 h-full">
                      <div className="flex justify-center mb-6">
                        {card.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-center text-travel-earth">{card.title}</h3>
                      <p className="text-gray-700">
                        {card.link && card.linkText && card.content.includes(card.linkText) ? (
                          <>
                            {card.content.split(card.linkText)[0]}
                            <Link href={card.link} className="text-travel-teal font-semibold hover:underline">
                              {card.linkText}
                            </Link>
                            {card.content.split(card.linkText)[1]}
                          </>
                        ) : (
                          card.content
                        )}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Conditional navigation buttons */}
          {slidePosition > 0 && (
            <button
              onClick={slideLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} className="text-travel-earth" />
            </button>
          )}

          {slidePosition < maxSlide && (
            <button
              onClick={slideRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 focus:outline-none z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={24} className="text-travel-earth" />
            </button>
          )}

          {/* Indicator dots for mobile/smaller screens */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: maxSlide + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setSlidePosition(index)}
                className={`h-2 w-2 mx-1 rounded-full ${slidePosition === index ? 'bg-travel-earth' : 'bg-gray-300'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;

