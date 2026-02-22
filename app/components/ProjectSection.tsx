"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useI18n } from "@/app/lib/i18n-context";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import type { Translations } from "@/app/lib/translations";

const gradients = [
  "from-primary/20 to-accent/10",
  "from-accent/20 to-primary/10",
  "from-primary/15 to-accent/15",
  "from-accent/15 to-primary/15",
  "from-primary/20 to-accent/5",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function TiltCard({
  children,
  className,
  onClick
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
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
      onClick={onClick}
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
  const [selectedProject, setSelectedProject] = useState<Translations["projects"]["entries"][0] | null>(null);

  return (
    <>
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
            <motion.div key={project.id} variants={itemVariant}>
              <TiltCard
                className="project-card group h-full cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image header */}
                <div className="h-40 relative overflow-hidden">
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
                    </>
                  ) : (
                    <div className={`h-full bg-gradient-to-br ${gradients[index % gradients.length]} relative overflow-hidden`}>
                      <div className="absolute inset-0 dot-pattern" />
                    </div>
                  )}
                  {/* Category badge */}
                  <span className="absolute bottom-3 left-3 text-xs font-code text-foreground bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50 shadow-lg">
                    {project.category}
                  </span>
                </div>

                <div className="p-6 relative z-[2]">
                  <h3 className="text-lg font-heading font-bold text-foreground mb-1 flex items-center gap-2 group-hover:text-primary transition-colors">
                    {project.title}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  <p className="text-sm text-primary/80 mb-3 font-medium">
                    {project.subtitle}
                  </p>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <ul className="space-y-1 mb-4">
                    {project.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="text-xs text-accent flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((techName) => (
                      <span key={techName} className="tech-badge text-[10px] px-2 py-0.5">{techName}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-badge text-[10px] px-2 py-0.5">+{project.tech.length - 4}</span>
                    )}
                  </div>

                  {/* Click to view details hint */}
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <p className="text-xs text-muted-foreground text-center group-hover:text-primary transition-colors">
                      {t.common.clickToViewDetails}
                    </p>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={selectedProject || t.projects.entries[0]}
      />
    </>
  );
};

export default ProjectsSection;
