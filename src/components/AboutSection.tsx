import { motion } from "framer-motion";
import saadPortrait from "@/assets/saad-portrait.webp";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-sm tracking-[0.5em] uppercase text-accent mb-3">The Vision</p>
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary tracking-tight">
            About
          </h2>
        </motion.div>

        {/* Burak Emre Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-3xl">
            <h3 className="font-heading text-2xl md:text-3xl text-primary mb-6 tracking-wide">
              Burak Emre — The Brand
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Born from a desire to blur the lines between luxury and streetwear, Burak Emre is more than a label — it's a statement. 
              Every piece is designed with intention: clean lines, premium materials, and a bold identity that doesn't shout but commands attention.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The "BE" insignia represents authenticity, confidence, and the courage to define your own style. 
              From oversized essentials to limited edition drops, each collection is a chapter in a story that's still being written.
            </p>
          </div>
        </motion.div>

        {/* Muhammad Saad Khan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={saadPortrait}
                alt="Muhammad Saad Khan"
                loading="lazy"
                className="w-full h-full object-cover"
                width={800}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent/30" />
          </div>

          <div>
            <p className="text-xs tracking-[0.5em] uppercase text-accent mb-4">Creative Force</p>
            <h3 className="font-heading text-2xl md:text-3xl text-primary mb-6 tracking-wide">
              Muhammad Saad Khan
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              BS Artificial Intelligence student, creative thinker, and digital builder. As the Director of SkillUp Path, 
              Saad brings a unique blend of tech-driven strategy and artistic vision to every project he touches.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Behind the Burak Emre brand, he leads brand execution, digital strategy, and creative direction — 
              transforming ideas into visual experiences that resonate.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {["Brand Execution", "Digital Strategy", "Creative Direction", "Tech & AI"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 border border-border text-xs tracking-widest uppercase text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <blockquote className="border-l-2 border-accent pl-6">
              <p className="font-heading text-primary italic text-lg tracking-wide">
                "Building brands that speak without words."
              </p>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
