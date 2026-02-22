"use client";

import { motion } from "framer-motion";
import { MapPin, Briefcase, Zap, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/app/lib/i18n-context";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const BentoSection = () => {
  const { t } = useI18n();
  const experiences = t.experience.entries;

  return (
    <section id="bento" className="section-container">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs font-code text-primary tracking-widest uppercase mb-3">{t.bento.about}</p>
        <h2 className="section-title">
          {t.bento.quickOverview.split(" ")[0]} <span className="gradient-text">{t.bento.quickOverview.split(" ").slice(1).join(" ")}</span>
        </h2>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto"
      >
        {/* About card — spans 2 cols */}
        <motion.div
          variants={cardVariants}
          className="bento-card lg:col-span-2 p-6 group"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
              <span className="text-lg font-heading font-bold text-primary">AG</span>
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-lg mb-1">
                Andres Guerra
              </h3>
              <p className="text-xs font-code text-primary mb-3">Backend Developer</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.hero.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Currently at */}
        <motion.div variants={cardVariants} className="bento-card p-6 group">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase size={14} className="text-primary" />
            <span className="text-xs font-code text-muted-foreground uppercase tracking-wider">{t.bento.currentlyAt}</span>
          </div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-sm font-bold font-heading text-foreground border border-border">
              N
            </div>
            <div>
              <p className="text-sm font-semibold font-heading text-foreground">Neostella</p>
              <p className="text-xs text-muted-foreground">{experiences[0]?.role}</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-code text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            {experiences[0]?.period}
          </span>
        </motion.div>

        {/* Location */}
        <motion.div variants={cardVariants} className="bento-card lg:col-span-2 p-6 group">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={14} className="text-primary" />
            <span className="text-xs font-code text-muted-foreground uppercase tracking-wider">{t.bento.location}</span>
          </div>
          <p className="text-foreground font-heading font-semibold text-lg mb-1">Medellín</p>
          <p className="text-muted-foreground text-sm">Colombia 🇨🇴</p>
          <div className="mt-4 pt-4 border-t border-border/60">
            <p className="text-xs text-muted-foreground font-code">{t.bento.timezone}</p>
          </div>
        </motion.div>

        {/* Availability */}
        <motion.div variants={cardVariants} className="bento-card p-6 group">
          <div className="flex items-center gap-2 mb-4">
            <Zap size={14} className="text-primary" />
            <span className="text-xs font-code text-muted-foreground uppercase tracking-wider">{t.bento.status}</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span className="text-sm text-muted-foreground">{t.bento.fullTimeRoles}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span className="text-sm text-muted-foreground">{t.bento.selectiveFreelance}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span className="text-sm text-muted-foreground">{t.bento.remoteHybrid}</span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default BentoSection;
