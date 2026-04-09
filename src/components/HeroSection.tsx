import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Burak Emre Collection" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-sm tracking-[0.5em] uppercase text-muted-foreground mb-6">
            Luxury Streetwear
          </p>
          <h1 className="font-heading text-7xl md:text-9xl font-bold tracking-[0.2em] text-primary mb-4">
            BE
          </h1>
          <p className="font-heading text-xl md:text-3xl tracking-[0.15em] text-foreground mb-2">
            BURAK EMRE
          </p>
          <p className="text-muted-foreground text-sm tracking-widest max-w-md mx-auto mt-6 mb-10">
            Where minimal luxury meets bold streetwear. Every piece tells a story.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#shop"
              className="px-8 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Shop Now
            </a>
            <a
              href="#drops"
              className="px-8 py-3 border border-primary text-primary font-heading text-sm tracking-widest uppercase hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Limited Drops
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary/0 via-primary to-primary/0" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
