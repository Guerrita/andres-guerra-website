"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/app/lib/i18n-context";

const gradients = [
  "from-primary/20 to-accent/10",
  "from-accent/20 to-primary/10",
  "from-primary/15 to-accent/15",
  "from-accent/15 to-primary/15",
  "from-primary/20 to-accent/5",
  "from-accent/20 to-primary/5",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(rawRotateX, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(rawRotateY, { stiffness: 150, damping: 20 });

  const glowBackground = useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, var(--primary, #6366f1), transparent 80%)`;

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normalizedX = (event.clientX - centerX) / (rect.width / 2);
    const normalizedY = (event.clientY - centerY) / (rect.height / 2);

    rawRotateX.set(normalizedY * -8);
    rawRotateY.set(normalizedX * 8);
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  }

  function handleMouseLeave() {
    rawRotateX.set(0);
    rawRotateY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {/* Cursor glow overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-[1] opacity-0 group-hover:opacity-[0.06] transition-opacity duration-300"
        style={{ background: glowBackground }}
      />
      {children}
    </motion.div>
  );
}

const ProjectsSection = () => {
  const { t } = useI18n();

  return (
    <section id="proyectos" className="section-container">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          {t.projects.title} <span className="gradient-text">{t.projects.titleHighlight}</span>
        </h2>
        <p className="section-subtitle mx-auto">
          {t.projects.subtitle}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        style={{ perspective: 1200 }}
      >
        {t.projects.entries.map((project, index) => (
          <motion.div key={project.title} variants={itemVariant}>
            <TiltCard className="project-card group h-full">
              {/* Gradient header */}
              <div className={`h-32 bg-gradient-to-br ${gradients[index % gradients.length]} relative overflow-hidden flex items-end p-5`}>
                <div className="absolute inset-0 dot-pattern" />
                <span className="relative text-xs font-code text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                  {project.status}
                </span>
              </div>

              <div className="p-6 relative z-[2]">
                <h3 className="text-lg font-heading font-bold text-foreground mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                  {project.title}
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-1 mb-4">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-xs text-accent flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((techName) => (
                    <span key={techName} className="tech-badge text-[10px] px-2 py-0.5">{techName}</span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
