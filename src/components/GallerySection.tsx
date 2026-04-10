import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const galleryItems = [
  { image: gallery1, caption: '"Move in silence."', tag: "Portrait", tall: true },
  { image: gallery2, caption: '"Dress how you think."', tag: "Lifestyle", tall: false },
  { image: gallery3, caption: '"Identity is style."', tag: "Fashion", tall: false },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4"
        >
          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-accent mb-3 font-medium">Visuals</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight">
              The Gallery
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Behind every piece is a story. Captured in moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                item.tall ? "md:row-span-2 aspect-[3/4] md:aspect-auto" : "aspect-square"
              }`}
            >
              <img
                src={item.image}
                alt={item.tag}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="inline-block px-2 py-0.5 text-[10px] tracking-[0.3em] uppercase bg-accent/20 text-accent rounded-sm mb-2">{item.tag}</span>
                <p className="font-heading text-primary text-sm italic">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
