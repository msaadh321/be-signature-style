import "@fontsource/aref-ruqaa/400.css";
import "@fontsource/aref-ruqaa/700.css";
import "@fontsource/amiri/400.css";
import "@fontsource/amiri/700.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShopSection from "@/components/ShopSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import LimitedDrops from "@/components/LimitedDrops";
import ContactSection from "@/components/ContactSection";
import IslamicDivider from "@/components/IslamicDivider";

const Index = () => {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <IslamicDivider />
      <ShopSection />
      <IslamicDivider />
      <GallerySection />
      <IslamicDivider />
      <AboutSection />
      <IslamicDivider />
      <LimitedDrops />
      <IslamicDivider />
      <ContactSection />
    </div>
  );
};

export default Index;
