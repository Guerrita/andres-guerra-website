"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { useEffect } from "react";
import type { Translations } from "@/app/lib/translations";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Translations["projects"]["entries"][0];
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-4 md:inset-8 lg:inset-12 xl:inset-20 z-50 overflow-hidden"
          >
            <div className="w-full max-w-6xl mx-auto bg-background/95 backdrop-blur-md border border-border/50 rounded-2xl shadow-2xl flex flex-col max-h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
                    {project.category}
                  </span>
                  <h2 className="text-2xl font-bold text-foreground">
                    {project.title}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-accent/10 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-muted-foreground" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <div className="grid lg:grid-cols-2 gap-6 p-6">
                  {/* LEFT COLUMN - Website Preview */}
                  <div className="space-y-3">
                    <div className="relative group">
                      {/* Browser Frame */}
                      <div className="rounded-xl bg-card border border-border/50 shadow-xl overflow-hidden">
                        {/* Browser Header */}
                        <div className="bg-card/80 border-b border-border/50 px-3 py-2 flex items-center gap-2">
                          <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                          </div>
                          <div className="flex-1 ml-3">
                            <div className="bg-background/50 rounded-md px-3 py-1 text-xs text-foreground/40 truncate">
                              {project.websiteUrl || `https://${project.title.toLowerCase().replace(/\s+/g, "")}.com`}
                            </div>
                          </div>
                        </div>

                        {/* Website Preview */}
                        <div className="relative h-[350px] overflow-hidden bg-background/20">
                          {project.image ? (
                            <div className="h-full overflow-hidden">
                              <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto object-top"
                                initial={{ y: 0 }}
                                whileHover={{ y: "-35%" }}
                                transition={{
                                  duration: 2.5,
                                  ease: "easeInOut",
                                }}
                              />
                            </div>
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                              <p className="text-muted-foreground text-sm">
                                Preview not available
                              </p>
                            </div>
                          )}

                          {/* Gradient Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/80 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-300" />
                        </div>
                      </div>

                      <p className="text-center mt-2 text-xs text-muted-foreground">
                        Hover to scroll preview
                      </p>
                    </div>
                  </div>

                  {/* RIGHT COLUMN - Project Details */}
                  <div className="space-y-4">
                    {/* Subtitle */}
                    <div>
                      <p className="text-primary text-base font-semibold mb-1.5">
                        {project.subtitle}
                      </p>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h3 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((techName) => (
                          <span
                            key={techName}
                            className="tech-badge text-xs px-2.5 py-1"
                          >
                            {techName}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features Grid */}
                    <div>
                      <h3 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                        Key Features
                      </h3>
                      <div className="grid grid-cols-2 gap-2.5">
                        {project.features.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className="bg-card/50 border border-border/50 rounded-lg p-3 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                          >
                            <div className="text-xl mb-1.5">{feature.icon}</div>
                            <h4 className="font-semibold text-foreground mb-0.5 text-xs">
                              {feature.title}
                            </h4>
                            <p className="text-[10px] text-foreground/60 leading-snug">
                              {feature.description}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h3 className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-2">
                        Highlights
                      </h3>
                      <ul className="space-y-1.5">
                        {project.highlights.map((highlight, index) => (
                          <li
                            key={index}
                            className="text-xs text-foreground/70 flex items-center gap-2"
                          >
                            <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    {project.websiteUrl && (
                      <motion.a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-primary/25 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
