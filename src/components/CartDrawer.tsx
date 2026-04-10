import { AnimatePresence, motion } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartDrawer = () => {
  const { items, removeItem, totalItems, totalPrice, isOpen, setIsOpen } = useCart();

  return (
    <>
      {/* Cart trigger in navbar */}
      <button
        onClick={() => setIsOpen(true)}
        className="relative text-primary hover:text-accent transition-colors"
      >
        <ShoppingBag size={20} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-accent text-accent-foreground text-[10px] font-heading flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/60 backdrop-blur-sm z-[60]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-card border-l border-border z-[70] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="font-heading text-lg tracking-widest uppercase text-primary">
                  Cart ({totalItems})
                </h2>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-primary transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag size={40} className="text-muted-foreground mb-4" />
                    <p className="text-muted-foreground text-sm tracking-wide">Your cart is empty</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {items.map((item) => (
                      <div key={`${item.productId}-${item.size}`} className="flex gap-4">
                        <div className="w-20 h-24 bg-secondary overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-heading text-sm text-primary tracking-wide truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground mt-1">Size: {item.size} · Qty: {item.quantity}</p>
                          <p className="text-sm text-foreground mt-1">${item.price * item.quantity}</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.productId, item.size)}
                          className="text-muted-foreground hover:text-accent transition-colors self-start"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="p-6 border-t border-border">
                  <div className="flex justify-between mb-4">
                    <span className="text-sm tracking-widest uppercase text-muted-foreground">Total</span>
                    <span className="font-heading text-lg text-primary">${totalPrice}</span>
                  </div>
                  <a
                    href="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-4 bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase hover:opacity-90 transition-opacity block text-center"
                  >
                    Checkout
                  </a>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;
