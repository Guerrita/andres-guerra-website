"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useI18n } from "@/app/lib/i18n-context";

const cardAnimations = [
  { hidden: { opacity: 0, x: -40, rotate: -2 }, show: { opacity: 1, x: 0, rotate: 0 } },
  { hidden: { opacity: 0, x: 40, scale: 0.95 }, show: { opacity: 1, x: 0, scale: 1 } },
  { hidden: { opacity: 0, y: 30, filter: "blur(4px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)" } },
];

const ExperienceSection = () => {
  const { t } = useI18n();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section id="experiencia" className="section-container relative" ref={containerRef}>
      <motion.div
        initial={{ opacity: 0, y: 20, clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          {t.experience.title} <span className="gradient-text">{t.experience.titleHighlight}</span>
        </h2>
        <p className="section-subtitle mx-auto">
          {t.experience.subtitle}
        </p>
      </motion.div>

      <div className="relative max-w-4xl mx-auto">
        {/* Animated timeline line */}
        <motion.div
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/30 to-transparent origin-top"
          style={{ scaleY: lineScaleY }}
        />

        {t.experience.entries.map((exp, index) => (
          <motion.div
            key={exp.company}
            initial={cardAnimations[index % cardAnimations.length].hidden}
            whileInView={cardAnimations[index % cardAnimations.length].show}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Animated timeline dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 15, delay: index * 0.15 }}
              className="absolute left-0 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50 z-10"
            />

            {/* Spacer */}
            <div className="hidden md:block md:w-1/2" />

            {/* Card */}
            <div className="ml-6 md:ml-0 md:w-1/2 glass-card-hover p-6">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground">{exp.company}</h3>
                  <p className="text-primary font-medium text-sm">{exp.role}</p>
                </div>
                <span className="text-xs font-code text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2 mb-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Staggered tech badges */}
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{ show: { transition: { staggerChildren: 0.05, delayChildren: 0.3 } } }}
                className="flex flex-wrap gap-2"
              >
                {exp.tech.map((techName) => (
                  <motion.span
                    key={techName}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1 },
                    }}
                    className="tech-badge"
                  >
                    {techName}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
