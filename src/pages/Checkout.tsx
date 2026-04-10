import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Lock, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Checkout = () => {
  const navigate = useNavigate();
  const { items, totalPrice, totalItems } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const shipping = totalPrice >= 100 ? 0 : 12;
  const tax = +(totalPrice * 0.08).toFixed(2);
  const grandTotal = +(totalPrice + shipping + tax).toFixed(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="text-center">
            <h1 className="font-heading text-3xl text-primary mb-4">Cart is Empty</h1>
            <button
              onClick={() => navigate("/")}
              className="text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              ← Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center min-h-screen pt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center max-w-md mx-auto px-6"
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Check className="text-accent" size={28} />
            </div>
            <h1 className="font-heading text-3xl text-primary mb-3">Order Confirmed</h1>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Thank you for your order. You'll receive a confirmation email shortly.
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-8 py-3 bg-primary text-primary-foreground font-heading text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Back to Shop
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back
          </button>

          <h1 className="font-heading text-3xl md:text-4xl text-primary tracking-tight mb-12">
            Checkout
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form Section */}
              <div className="lg:col-span-3 space-y-10">
                {/* Shipping */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="font-heading text-lg tracking-widest uppercase text-primary mb-6">
                    Shipping Address
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">First Name</Label>
                      <Input
                        required
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">Last Name</Label>
                      <Input
                        required
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">Email</Label>
                      <Input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update("email", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">Phone</Label>
                      <Input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => update("phone", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">Street Address</Label>
                      <Input
                        required
                        value={form.address}
                        onChange={(e) => update("address", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">City</Label>
                      <Input
                        required
                        value={form.city}
                        onChange={(e) => update("city", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">State</Label>
                      <Input
                        required
                        value={form.state}
                        onChange={(e) => update("state", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">ZIP Code</Label>
                      <Input
                        required
                        value={form.zip}
                        onChange={(e) => update("zip", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">Country</Label>
                      <Input
                        required
                        value={form.country}
                        onChange={(e) => update("country", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                  </div>
                </motion.div>

                <Separator className="bg-border" />

                {/* Payment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                >
                  <h2 className="font-heading text-lg tracking-widest uppercase text-primary mb-6 flex items-center gap-3">
                    <CreditCard size={18} />
                    Payment
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2 space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">Name on Card</Label>
                      <Input
                        required
                        value={form.cardName}
                        onChange={(e) => update("cardName", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">Card Number</Label>
                      <Input
                        required
                        placeholder="•••• •••• •••• ••••"
                        maxLength={19}
                        value={form.cardNumber}
                        onChange={(e) => update("cardNumber", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">Expiry</Label>
                      <Input
                        required
                        placeholder="MM/YY"
                        maxLength={5}
                        value={form.expiry}
                        onChange={(e) => update("expiry", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label className="text-xs tracking-widest uppercase text-muted-foreground">CVV</Label>
                      <Input
                        required
                        type="password"
                        maxLength={4}
                        value={form.cvv}
                        onChange={(e) => update("cvv", e.target.value)}
                        className="bg-card border-border focus:border-accent h-12"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Order Summary */}
              <motion.div
                className="lg:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="bg-card border border-border p-6 sticky top-28">
                  <h2 className="font-heading text-lg tracking-widest uppercase text-primary mb-6">
                    Order Summary
                  </h2>

                  <div className="space-y-4 mb-6">
                    {items.map((item) => (
                      <div key={`${item.productId}-${item.size}`} className="flex gap-4">
                        <div className="w-16 h-20 bg-secondary overflow-hidden flex-shrink-0">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-heading text-sm text-primary truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Size: {item.size} · Qty: {item.quantity}
                          </p>
                          <p className="text-sm text-foreground mt-1">${item.price * item.quantity}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Separator className="bg-border mb-4" />

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal ({totalItems} items)</span>
                      <span>${totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping}`}</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Tax</span>
                      <span>${tax}</span>
                    </div>
                    <Separator className="bg-border" />
                    <div className="flex justify-between text-primary font-heading text-lg pt-1">
                      <span>Total</span>
                      <span>${grandTotal}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 py-4 bg-accent text-accent-foreground font-heading text-sm tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                  >
                    <Lock size={14} />
                    Place Order — ${grandTotal}
                  </button>

                  <p className="text-[10px] text-muted-foreground text-center mt-4 tracking-wide">
                    Secure checkout · Free returns within 30 days
                  </p>
                </div>
              </motion.div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
