"use client";

import { motion } from "framer-motion";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import type { BlogPostMeta } from "@/app/lib/blog";
import { useI18n } from "@/app/lib/i18n-context";

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  const { locale, t } = useI18n();

  const formattedDate = new Date(post.date).toLocaleDateString(
    locale === "es" ? "es-ES" : "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  return (
    <motion.div variants={itemVariant}>
      <Link href={`/blog/${post.slug}`} className="block h-full">
        <article className="project-card group h-full flex flex-col">
          {/* Cover image or gradient fallback */}
          <div className="h-40 relative overflow-hidden rounded-t-2xl">
            {post.coverImage ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
              </>
            ) : (
              <div className="h-full bg-gradient-to-br from-primary/20 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern" />
              </div>
            )}
            {/* Category badge */}
            <span className="absolute bottom-3 left-3 text-xs font-code text-foreground bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/50 shadow-lg">
              {post.category}
            </span>
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col flex-1 relative z-[2]">
            {/* Meta row */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={12} />
                {post.readingMinutes} {t.blog.minRead}
              </span>
            </div>

            <h3 className="text-lg font-heading font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>

            <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3 flex-1">
              {post.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="tech-badge text-[10px] px-2 py-0.5">
                  {tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="tech-badge text-[10px] px-2 py-0.5">
                  +{post.tags.length - 3}
                </span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
