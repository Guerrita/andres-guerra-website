"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/app/lib/i18n-context";

const socialLinks = [
  { icon: Github, href: "https://github.com/guerrita", label: "GitHub" },
  { icon: Linkedin, href: "https://https://www.linkedin.com/in/andres-guerra-montoya/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:andresguerra0625@gmail.com", label: "Email" },
];

const Footer = () => {
  const { t } = useI18n();

  const navLinks = [
    { label: t.nav.home, href: "/#inicio" },
    { label: t.nav.experience, href: "/#experiencia" },
    { label: t.nav.stack, href: "/#stack" },
    { label: t.nav.projects, href: "/#proyectos" },
    { label: t.nav.blog, href: "/blog" },
    { label: t.nav.contact, href: "/#contacto" },
  ];

  return (
    <footer className="border-t border-primary/10 bg-background/80">
      <div className="container mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary/5 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Andres Guerra Montoya. {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
