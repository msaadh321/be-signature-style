import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";

const galleryItems = [
  { image: gallery1, caption: '"Silence speaks volumes."', tag: "Portrait", span: "row-span-2" },
  { image: gallery2, caption: '"Walk your own path."', tag: "Lifestyle", span: "" },
  { image: gallery3, caption: '"Style is identity."', tag: "Fashion", span: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.5em] uppercase text-accent mb-3">Visuals</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary tracking-tight">
            Gallery
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`group relative overflow-hidden cursor-pointer ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.tag}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="text-xs tracking-widest uppercase text-accent">{item.tag}</span>
                <p className="font-heading text-primary text-sm mt-2 italic">{item.caption}</p>
                <button className="mt-3 text-xs tracking-widest uppercase text-primary underline underline-offset-4">
                  Shop the Look →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
