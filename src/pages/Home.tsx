import HeroSection from "@/components/home/HeroSection";
import TrackShipmentSection from "@/components/home/TrackShipmentSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import TestimonialsSection from "@/components/home/TestimonialsSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TrackShipmentSection />
      <ServicesOverview />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
