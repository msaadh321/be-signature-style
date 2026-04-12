import { motion } from "framer-motion";
import { Instagram, Twitter, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-lg mx-auto"
        >
          <p className="text-primary text-2xl font-heading mb-2">✦</p>
          <p className="text-[10px] tracking-[0.6em] uppercase text-primary/50 mb-4 font-body">Connect</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary tracking-tight mb-4">
            Stay in Touch
          </h2>
          <div className="ornament-line max-w-[200px] mx-auto mb-6" />
          <p className="text-muted-foreground text-sm leading-relaxed mb-12 font-body">
            Follow the journey. Be first to know about new drops, behind-the-scenes content, and exclusive offers.
          </p>

          <div className="flex justify-center gap-4 mb-16">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Mail, label: "Email" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="group w-12 h-12 border border-primary/20 bg-card/60 backdrop-blur-sm flex items-center justify-center hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>

          <div className="ornament-line mb-8" />
          <p className="font-heading text-sm text-muted-foreground">
            © 2026 جنّت حیات — JANNAT HAYAT — ALL RIGHTS RESERVED
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
