import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Minus, Plus, ShoppingBag, Check } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const product = getProductById(id || "");

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="text-center">
            <h1 className="font-heading text-4xl text-primary mb-4">Product Not Found</h1>
            <button
              onClick={() => navigate("/")}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              ← Back to Shop
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    for (let i = 0; i < quantity; i++) {
      addItem({
        productId: product.id,
        name: product.name,
        price: product.price,
        size: selectedSize,
        image: product.images[0],
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[3/4] bg-secondary overflow-hidden mb-4">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>
            </div>
            <div className="flex gap-3">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`w-20 h-24 overflow-hidden border-2 transition-colors ${
                    selectedImage === i ? "border-accent" : "border-border hover:border-muted-foreground"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col"
          >
            <p className="text-xs tracking-[0.5em] uppercase text-accent mb-3">
              {product.category}
            </p>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-primary tracking-tight mb-2">
              {product.name}
            </h1>
            <p className="font-heading text-2xl text-foreground mb-8">
              {product.priceLabel}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size selector */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Size {selectedSize && <span className="text-primary ml-2">— {selectedSize}</span>}
              </p>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-12 px-4 border text-sm tracking-widest uppercase font-heading transition-all duration-300 ${
                      selectedSize === size
                        ? "border-accent bg-accent text-accent-foreground"
                        : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {!selectedSize && (
                <p className="text-xs text-accent mt-2 tracking-wide">Please select a size</p>
              )}
            </div>

            {/* Quantity */}
            <div className="mb-8">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Quantity
              </p>
              <div className="inline-flex items-center border border-border">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="w-12 h-12 flex items-center justify-center font-heading text-primary border-x border-border">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className={`w-full py-4 flex items-center justify-center gap-3 font-heading text-sm tracking-widest uppercase transition-all duration-300 ${
                !selectedSize
                  ? "bg-muted text-muted-foreground cursor-not-allowed"
                  : added
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              {added ? (
                <>
                  <Check size={18} />
                  Added to Cart
                </>
              ) : (
                <>
                  <ShoppingBag size={18} />
                  Add to Cart — {product.priceLabel}
                </>
              )}
            </button>

            {/* Details */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Details
              </p>
              <ul className="space-y-2">
                {product.details.map((detail) => (
                  <li
                    key={detail}
                    className="text-sm text-muted-foreground flex items-center gap-3"
                  >
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
