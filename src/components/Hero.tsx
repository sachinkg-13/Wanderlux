'use client'
import { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="https://video.wixstatic.com/video/11062b_20125b6ebe434abd96c4d7773634d1db/1080p/mp4/file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay */}
      <div className="hero-overlay"></div>
      
      {/* Content */}
      <div className="container-custom h-full flex flex-col justify-center items-center text-center">
        <div className="hero-content animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Discover the World's Hidden Wonders
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
            Extraordinary journeys curated by travel experts for the adventurous soul. 
            Experience authentic cultures, breathtaking landscapes, and unforgettable moments.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button className="bg-travel-teal hover:bg-travel-teal-light text-white font-medium py-3 px-8 rounded-md transition-all duration-300">
              Explore Trips
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-medium py-3 px-8 rounded-md transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;