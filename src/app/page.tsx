import ExploreIndia from "@/components/ExploreIndia";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
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
      <UpcomingTrips />
      <Testimonials />
      <Footer />
      {/* <h1 className="text-3xl font-bold underline text-travel-earth ">Text</h1> */}
    </div>
  )
}
