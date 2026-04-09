import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const ShopSection = () => {
  return (
    <section id="shop" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-sm tracking-[0.5em] uppercase text-accent mb-3">Collection</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary tracking-tight">
            The Essentials
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="group block cursor-pointer">
                <div className="relative overflow-hidden bg-secondary mb-4 aspect-[3/4]">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="block w-full py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase font-heading text-center">
                      View Details
                    </span>
                  </div>
                </div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-1">
                  {product.category}
                </p>
                <p className="font-heading text-foreground text-sm tracking-wide">
                  {product.name}
                </p>
                <p className="text-primary text-sm mt-1">{product.priceLabel}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
