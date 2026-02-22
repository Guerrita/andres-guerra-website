"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/app/lib/i18n-context";

const attributes = [
  "Serverless",
  "Backend",
  "Python",
  "AWS",
  "Scalable",
  "High-Performance",
  "Reliable",
  "Cloud-Native",
  "API Design",
  "DynamoDB",
  "Microservices",
  "Step Functions",
];

const HeroSection = () => {
  const { t } = useI18n();
  const [currentSubtitle, setCurrentSubtitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = t.hero.subtitles[currentSubtitle];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 60);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 30);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentSubtitle((prev) => (prev + 1) % t.hero.subtitles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentSubtitle, t.hero.subtitles]);

  // Duplicate for seamless loop
  const marqueeItems = [...attributes, ...attributes];

  return (
    <section id="inicio" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Main content */}
      <div className="flex-1 container mx-auto px-6 pt-28 pb-0 relative z-10 flex items-stretch">
        <div className="max-w-6xl mx-auto w-full grid grid-cols-1 xl:grid-cols-2 gap-20 items-end 2xl:items-center">

          {/* Left column: text content */}
          <div className="self-center">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <span className="inline-flex items-center gap-2 text-xs font-code text-muted-foreground border border-border rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.hero.availableForOpportunities}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight mb-3"
            >
              <span className="text-foreground">Andres </span>
              <span className="gradient-text">Guerra</span>
            </motion.h1>

            {/* Typewriter subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 mb-7 flex items-center"
            >
              <span className="text-lg md:text-xl font-heading text-muted-foreground">
                {displayText}
                <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-muted-foreground text-base md:text-lg max-w-xl mb-6 leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 mb-6"
            >
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 hover:gap-3"
              >
                {t.hero.viewProjects}
                <ArrowRight size={15} />
              </a>
              <a
                href="mailto:andresguerra0625@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <Mail size={15} />
                {t.hero.contact}
              </a>
              <a
                href="/cv-andres-guerra.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-muted-foreground text-sm font-medium hover:border-accent/40 hover:text-foreground hover:bg-accent/5 transition-all duration-200"
              >
                <Download size={15} />
                {t.hero.downloadCV}
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-5"
            >
              <a
                href="https://github.com/guerrita"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/andres-guerra-montoya/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <div className="w-px h-4 bg-border" />
              <span className="text-xs font-code text-muted-foreground">Medellín, Colombia</span>
            </motion.div>
          </div>

          {/* Right column: illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="hidden xl:flex justify-center items-end 2xl:items-center"
          >
            <div className="relative w-80 xl:w-96 2xl:w-[26rem]">
              {/* Glow behind illustration */}
              <div
                className="absolute inset-0 -z-10 blur-3xl rounded-full scale-90 translate-y-4"
                style={{
                  background: "radial-gradient(ellipse, var(--primary) 0%, var(--accent-color) 60%, transparent 80%)",
                  opacity: 0.22,
                }}
              />
              <Image
                src="/agm_image.png"
                alt="Andres Guerra"
                width={400}
                height={500}
                className="w-full h-auto object-contain relative z-10"
                style={{
                  maskImage: "radial-gradient(ellipse 88% 96% at 50% 44%, black 52%, transparent 82%)",
                  WebkitMaskImage: "radial-gradient(ellipse 88% 96% at 50% 44%, black 52%, transparent 82%)",
                }}
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scrolling attributes strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative z-10 border-y border-border/60 py-4 overflow-hidden"
      >
        <div className="marquee-track">
          {marqueeItems.map((attr, i) => (
            <span key={i} className="marquee-item">
              <span className="w-1 h-1 rounded-full bg-primary/40 mr-3" />
              {attr}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
