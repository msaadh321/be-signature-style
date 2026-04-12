import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-32">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Jannat Hayat Collection" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Decorative geometric lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 ornament-line" />
        <div className="absolute bottom-1/4 left-0 right-0 ornament-line" />
        <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
      </div>

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Logo */}
          <motion.img
            src={logo}
            alt="Jannat Hayat"
            className="h-32 md:h-48 lg:h-56 w-auto mx-auto mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />

          <p className="text-[10px] tracking-[0.8em] uppercase text-primary/60 mb-6 font-body">
            Est. 2026 — Premium Streetwear
          </p>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-primary leading-[0.85] mb-4">
            Jannat Hayat
          </h1>

          <div className="ornament-line max-w-xs mx-auto mb-8" />

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-md mx-auto mb-12 font-body">
            Curated essentials for those who move with intention.
            Minimal design, maximum presence.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#shop"
              className="px-10 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wider hover:opacity-90 transition-opacity gold-glow"
            >
              Explore Collection
            </a>
            <a
              href="#about"
              className="px-10 py-4 border border-primary/30 text-primary font-heading text-sm tracking-wider hover:bg-primary/5 transition-colors"
            >
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#shop"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary/40 hover:text-primary transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.5 }}
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
