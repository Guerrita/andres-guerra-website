"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { useI18n } from "@/app/lib/i18n-context";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import ShareButtons from "./ShareButtons";

interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  coverImage?: string;
  readingMinutes: number;
}

interface BlogPostClientProps {
  esMeta: PostMeta;
  enMeta: PostMeta;
  esContent: ReactNode;
  enContent: ReactNode;
}

export default function BlogPostClient({
  esMeta,
  enMeta,
  esContent,
  enContent,
}: BlogPostClientProps) {
  const { locale, t } = useI18n();
  const meta = locale === "es" ? esMeta : enMeta;
  const content = locale === "es" ? esContent : enContent;

  const formattedDate = new Date(meta.date).toLocaleDateString(
    locale === "es" ? "es-ES" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <Navbar />
      <main className="section-container pt-28 max-w-4xl mx-auto">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            {t.blog.backToBlog}
          </Link>
        </motion.div>

        {/* Post header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="tech-badge-accent">{meta.category}</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar size={12} />
              {formattedDate}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={12} />
              {meta.readingMinutes} {t.blog.minRead}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground leading-tight mb-4">
            {meta.title}
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed">
            {meta.description}
          </p>
        </motion.header>

        {/* Cover image */}
        {meta.coverImage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 rounded-2xl overflow-hidden border border-primary/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={meta.coverImage}
              alt={meta.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        )}

        {/* MDX content */}
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose-blog"
        >
          {content}
        </motion.article>

        {/* Tags */}
        <div className="mt-10 pt-6 border-t border-border/50">
          <div className="flex items-center gap-2 flex-wrap">
            <Tag size={14} className="text-muted-foreground" />
            {meta.tags.map((tag) => (
              <span key={tag} className="tech-badge text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Share */}
        <ShareButtons title={meta.title} slug={meta.slug} />
      </main>
      <Footer />
    </>
  );
}
