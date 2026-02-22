"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useActiveSection } from "@/app/hooks/use-active-section";
import { useI18n } from "@/app/lib/i18n-context";
import { cn } from "@/app/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  const activeSection = useActiveSection();
  const pathname = usePathname();
  const { locale, t, toggleLocale } = useI18n();

  const navItems = [
    { label: t.nav.home, href: "/#inicio", id: "inicio" },
    { label: t.nav.experience, href: "/#bento", id: "bento" },
    { label: t.nav.stack, href: "/#bento", id: "bento-stack" },
    { label: t.nav.projects, href: "/#proyectos", id: "proyectos" },
    { label: t.nav.blog, href: "/blog", id: "blog" },
    { label: t.nav.contact, href: "/#contacto", id: "contacto" },
  ];

  const isItemActive = (item: { href: string; id: string }) => {
    if (item.href === "/blog") return pathname.startsWith("/blog");
    if (pathname !== "/") return false;
    return activeSection === item.id;
  };

  return (
    <>
      {/* Floating pill navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-max">
        <div className="flex items-center gap-1 bg-background/80 backdrop-blur-xl border border-primary/10 rounded-full px-3 py-2 shadow-lg shadow-black/10">
          {/* Logo */}
          <Link
            href="/"
            className="text-sm font-heading font-bold text-foreground hover:text-primary transition-colors px-3 py-1 rounded-full"
          >
            AG
          </Link>

          {/* Divider */}
          <div className="w-px h-4 bg-border mx-1" />

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link
                key={item.href + item.label}
                href={item.href}
                className={cn(
                  "relative text-xs font-medium transition-colors duration-200 px-3 py-1.5 rounded-full",
                  isItemActive(item)
                    ? "text-foreground bg-secondary/60"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Divider (desktop only) */}
          <div className="hidden md:block w-px h-4 bg-border mx-1" />

          {/* Right controls */}
          <div className="flex items-center gap-0.5">
            {/* Language toggle */}
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-code text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
              aria-label="Toggle language"
            >
              <Globe size={14} />
              <span>{locale.toUpperCase()}</span>
            </button>

            {/* Theme toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
              aria-label="Toggle theme"
            >
              {mounted && (theme === "dark" ? <Sun size={14} /> : <Moon size={14} />)}
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/40 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.15 }}
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 bg-background/95 backdrop-blur-xl border border-primary/10 rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="p-2 flex flex-col gap-0.5">
                {navItems.map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    className={cn(
                      "text-sm px-3 py-2 rounded-xl transition-colors",
                      isItemActive(item)
                        ? "text-foreground bg-secondary/60 font-medium"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/40"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
