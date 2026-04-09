import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopSection from "@/components/ShopSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import LimitedDrops from "@/components/LimitedDrops";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <ShopSection />
      <GallerySection />
      <AboutSection />
      <LimitedDrops />
      <ContactSection />
    </div>
  );
};

export default Index;
