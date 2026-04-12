import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/products";

const ShopSection = () => {
  return (
    <section id="shop" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-2xl font-heading mb-2">✦</p>
            <p className="text-[10px] tracking-[0.6em] uppercase text-primary/50 mb-4 font-body">Curated Pieces</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary tracking-tight mb-4">
              The Collection
            </h2>
            <div className="ornament-line max-w-[200px] mx-auto mb-4" />
            <p className="text-muted-foreground text-sm max-w-md mx-auto font-body">
              Each piece designed with intention — premium materials, clean lines, bold identity.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="relative overflow-hidden bg-card border border-border rounded-sm mb-4 aspect-[3/4]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={14} className="text-primary" />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[10px] tracking-[0.4em] uppercase text-primary/50 mb-1 font-body">
                      {product.category}
                    </p>
                    <p className="font-heading text-foreground text-base">
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
