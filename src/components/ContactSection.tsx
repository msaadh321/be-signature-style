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
          <p className="text-xs tracking-[0.5em] uppercase text-accent mb-3 font-medium">Connect</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary tracking-tight mb-4">
            Stay in Touch
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-12">
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
                className="group w-12 h-12 rounded-lg glass flex items-center justify-center hover:bg-accent/10 hover:border-accent/50 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={18} className="text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            ))}
          </div>

          <div className="border-t border-border pt-8">
            <p className="font-heading text-xs tracking-[0.4em] text-muted-foreground">
              © 2026 JANNAT HAYAT — ALL RIGHTS RESERVED
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
