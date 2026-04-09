import { motion } from "framer-motion";
import { Instagram, Twitter, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm tracking-[0.5em] uppercase text-accent mb-3">Connect</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary tracking-tight mb-6">
            Stay in Touch
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-12">
            Follow the journey. Be the first to know about new drops, behind-the-scenes content, and exclusive offers.
          </p>

          <div className="flex justify-center gap-8 mb-16">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Mail, label: "Email" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="group flex flex-col items-center gap-2"
              >
                <div className="w-14 h-14 border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <Icon size={20} className="text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="text-xs tracking-widest uppercase text-muted-foreground">{label}</span>
              </a>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="font-heading text-sm tracking-[0.3em] text-muted-foreground">
              © 2026 BURAK EMRE — ALL RIGHTS RESERVED
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
