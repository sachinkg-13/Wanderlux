import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import UpcomingTrips from "@/components/UpcomingTrips";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeatureSection />
      <UpcomingTrips />
      <Testimonials />
      <Footer />
    </div>
  )
}
