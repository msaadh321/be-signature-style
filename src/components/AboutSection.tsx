import { motion } from "framer-motion";
import saadPortrait from "@/assets/saad-portrait.webp";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-2xl font-heading mb-2">✦</p>
            <p className="text-[10px] tracking-[0.6em] uppercase text-primary/50 mb-4 font-body">Our Story</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-primary tracking-tight mb-4">
              About the Brand
            </h2>
            <div className="ornament-line max-w-[200px] mx-auto" />
          </motion.div>
        </div>

        {/* Brand Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-heading text-2xl md:text-3xl text-primary mb-6">
              Jannat Hayat — جنّت حیات
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              Born from a desire to blur the lines between luxury and streetwear, Jannat Hayat is more than a label — it's a statement.
              Every piece is designed with intention: clean lines, premium materials, and a bold identity that doesn't shout but commands attention.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              The "JH" insignia represents authenticity, confidence, and the courage to define your own style.
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
            <div className="aspect-[3/4] overflow-hidden rounded-sm border border-primary/10">
              <img
                src={saadPortrait}
                alt="Muhammad Saad Khan"
                loading="lazy"
                className="w-full h-full object-cover"
                width={800}
                height={1024}
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border border-primary/20 rounded-sm" />
          </div>

          <div>
            <p className="text-[10px] tracking-[0.5em] uppercase text-primary/50 mb-4 font-body">Creative Force</p>
            <h3 className="font-heading text-2xl md:text-3xl text-primary mb-6">
              Muhammad Saad Khan
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body">
              BS Artificial Intelligence student, creative thinker, and digital builder. As the Director of SkillUp Path,
              Saad brings a unique blend of tech-driven strategy and artistic vision to every project he touches.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 font-body">
              Behind the Jannat Hayat brand, he leads brand execution, digital strategy, and creative direction —
              transforming ideas into visual experiences that resonate.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["Brand Execution", "Digital Strategy", "Creative Direction", "Tech & AI"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-secondary rounded-sm text-[10px] tracking-[0.3em] uppercase text-muted-foreground font-body"
                >
                  {tag}
                </span>
              ))}
            </div>

            <blockquote className="border-l-2 border-primary/40 pl-5">
              <p className="font-heading text-primary text-lg">
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
