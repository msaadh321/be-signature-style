import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";
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
    <section id="drops" className="relative min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={limitedDrop} alt="Limited Drop" loading="lazy" className="w-full h-full object-cover" width={1200} height={800} />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto"
          >
            <p className="text-primary text-2xl font-heading mb-2">✦</p>
            <p className="text-[10px] tracking-[0.6em] uppercase text-primary/50 mb-4 font-body">Exclusive Release</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary tracking-tight mb-4">
              Limited Drop
            </h2>
            <div className="ornament-line max-w-[200px] mx-auto mb-6" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-10 font-body">
              Our most exclusive collection yet. Only 100 pieces worldwide. Once they're gone, they're gone forever.
            </p>

            <div className="flex justify-center gap-5 mb-10">
              {Object.entries(time).map(([label, value]) => (
                <div key={label} className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 border border-primary/20 bg-card/60 backdrop-blur-sm rounded-sm flex items-center justify-center mb-2">
                    <span className="font-heading text-2xl md:text-3xl text-primary font-bold">
                      {String(value).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body">{label}</p>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 bg-primary text-primary-foreground font-heading text-sm tracking-wider hover:opacity-90 transition-opacity gold-glow inline-flex items-center gap-2.5">
              <Bell size={14} />
              Get Notified
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LimitedDrops;
