"use client";

import { motion } from "framer-motion";
import { Cloud, Code2, Server, Workflow } from "lucide-react";
import { useI18n } from "@/app/lib/i18n-context";

const serviceIcons = [
  <Cloud key="cloud" size={24} />,
  <Code2 key="code" size={24} />,
  <Server key="server" size={24} />,
  <Workflow key="workflow" size={24} />,
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ServicesSection = () => {
  const { t } = useI18n();

  return (
    <section id="servicios" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="section-title">
          {t.services.title}{" "}
          <span className="gradient-text">{t.services.titleHighlight}</span>
        </h2>
        <p className="section-subtitle mx-auto">{t.services.subtitle}</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
      >
        {t.services.entries.map((service, index) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            className="bento-card p-6 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 text-primary group-hover:bg-primary/20 transition-colors">
                {serviceIcons[index]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.highlights.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
