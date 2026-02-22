"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useI18n } from "@/app/lib/i18n-context";
import type { BlogPostMeta } from "@/app/lib/blog";
import BlogCard from "./BlogCard";
import CategoryFilter from "./CategoryFilter";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

interface BlogListProps {
  postsEs: BlogPostMeta[];
  postsEn: BlogPostMeta[];
  categoriesEs: string[];
  categoriesEn: string[];
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function BlogList({
  postsEs,
  postsEn,
  categoriesEs,
  categoriesEn,
}: BlogListProps) {
  const { locale, t } = useI18n();
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const posts = locale === "es" ? postsEs : postsEn;
  const categories = locale === "es" ? categoriesEs : categoriesEn;

  const filtered = useMemo(() => {
    return posts.filter((post) => {
      const q = search.toLowerCase();
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      const matchesCategory =
        !activeCategory || post.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, search, activeCategory]);

  return (
    <>
      <Navbar />
      <main className="section-container pt-28">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="section-title">
            {t.blog.title}{" "}
            <span className="gradient-text">{t.blog.titleHighlight}</span>
          </h1>
          <p className="section-subtitle mx-auto">{t.blog.subtitle}</p>
        </motion.div>

        {/* Search + Filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-10 space-y-4"
        >
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.blog.searchPlaceholder}
              className="w-full bg-secondary/50 border border-primary/10 rounded-xl pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
            />
          </div>

          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onSelect={setActiveCategory}
          />
        </motion.div>

        {/* Post grid */}
        {filtered.length > 0 ? (
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-muted-foreground py-20">
            {posts.length === 0 ? t.blog.noPosts : t.blog.noResults}
          </p>
        )}
      </main>
      <Footer />
    </>
  );
}
