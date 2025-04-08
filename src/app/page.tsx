import BestMoments from "@/components/BestMoments";
import ExploreIndia from "@/components/ExploreIndia";
import FeaturedTours from "@/components/FeaturedTours";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import GuidedTravel from "@/components/GuidedTravel";
import Hero from "@/components/Hero";
import InternationalTrips from "@/components/InternationalTrips";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import UpcomingTrips from "@/components/UpcomingTrips";

export default function Home() {
  return (
    <div className="min-h-screen " >
      <Navbar />
      <Hero />
      <FeatureSection />
      <InternationalTrips />
      <ExploreIndia />
      {/* <UpcomingTrips /> */}
      <FeaturedTours />
      <GuidedTravel />
      <BestMoments />
      <Testimonials />
      <Footer />
      {/* <h1 className="text-3xl font-bold underline text-travel-earth ">Text</h1> */}
    </div>
  )
}
