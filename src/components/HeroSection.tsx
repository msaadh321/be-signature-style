import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-end overflow-hidden pb-20 md:pb-32">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Jannat Hayat Collection" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-xs tracking-[0.6em] uppercase text-accent mb-4 font-medium">
              Est. 2026 — Premium Streetwear
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[0.9] mb-6">
              Jannat
              <br />
              Hayat
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-sm mb-8">
              Curated essentials for those who move with intention. 
              Minimal design, maximum presence.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#shop"
                className="px-8 py-3.5 bg-accent text-accent-foreground font-heading text-xs tracking-[0.3em] uppercase hover:opacity-90 transition-opacity rounded-sm"
              >
                Explore Collection
              </a>
              <a
                href="#about"
                className="px-8 py-3.5 border border-border text-primary font-heading text-xs tracking-[0.3em] uppercase hover:bg-card transition-colors rounded-sm"
              >
                Our Story
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden md:flex justify-end"
          >
            <div className="glass rounded-lg p-6 max-w-xs">
              <p className="font-heading text-xs tracking-[0.4em] uppercase text-accent mb-2">New Drop</p>
              <p className="font-heading text-lg text-primary">The Essentials Vol. II</p>
              <p className="text-muted-foreground text-xs mt-1">Limited to 100 pieces worldwide</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#shop"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
