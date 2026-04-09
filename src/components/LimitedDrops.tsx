import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import limitedDrop from "@/assets/limited-drop.jpg";

const getTimeLeft = () => {
  const target = new Date();
  target.setDate(target.getDate() + 3);
  target.setHours(0, 0, 0, 0);
  const diff = target.getTime() - Date.now();
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const LimitedDrops = () => {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="drops" className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={limitedDrop} alt="Limited Drop" loading="lazy" className="w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-[0.5em] uppercase text-accent mb-3">Exclusive</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary tracking-tight mb-4">
              Limited Drop
            </h2>
            <p className="text-muted-foreground max-w-lg mb-10">
              Our most exclusive collection yet. Only 100 pieces worldwide. Once they're gone, they're gone.
            </p>

            <div className="flex gap-6 mb-12">
              {Object.entries(time).map(([label, value]) => (
                <div key={label} className="text-center">
                  <div className="font-heading text-4xl md:text-5xl text-primary font-bold">
                    {String(value).padStart(2, "0")}
                  </div>
                  <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">{label}</p>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 bg-accent text-accent-foreground font-heading text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
              Get Notified
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LimitedDrops;
