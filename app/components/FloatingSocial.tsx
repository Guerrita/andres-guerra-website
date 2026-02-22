"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useI18n } from "@/app/lib/i18n-context";

const FloatingSocial = () => {
  const { t } = useI18n();

  const socialLinks = [
    { icon: Github, href: "https://github.com/guerrita", labelKey: "github" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/andres-guerra-montoya/", labelKey: "linkedin" },
    { icon: Mail, href: "mailto:andresguerra0625@gmail.com", labelKey: "email" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
      className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 z-40"
    >
      {socialLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.common[link.labelKey as keyof typeof t.common]}
          className="p-2.5 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
        >
          <link.icon size={20} />
        </a>
      ))}
      <div className="w-px h-20 bg-gradient-to-b from-primary/50 to-transparent mt-2" />
    </motion.div>
  );
};

export default FloatingSocial;
