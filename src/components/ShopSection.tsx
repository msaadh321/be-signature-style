import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

const ShopSection = () => {
  return (
    <section id="shop" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs tracking-[0.5em] uppercase text-accent mb-3 font-medium">Curated</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight">
              The Collection
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-sm max-w-xs"
          >
            Each piece designed with intention — premium materials, clean lines, bold identity.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="relative overflow-hidden bg-card rounded-lg mb-4 aspect-[3/4]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={14} className="text-primary" />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[10px] tracking-[0.4em] uppercase text-accent mb-1">
                      {product.category}
                    </p>
                    <p className="font-heading text-foreground text-sm tracking-wide">
                      {product.name}
                    </p>
                  </div>
                  <p className="text-primary text-sm font-heading whitespace-nowrap">{product.priceLabel}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
