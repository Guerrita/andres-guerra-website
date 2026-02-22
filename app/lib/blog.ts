import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
  readingMinutes: number;
}

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export function getAllPosts(locale: "es" | "en"): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  const slugs = fs.readdirSync(BLOG_DIR).filter((name) =>
    fs.statSync(path.join(BLOG_DIR, name)).isDirectory()
  );

  const posts = slugs
    .map((slug) => {
      const filePath = path.join(BLOG_DIR, slug, `${locale}.mdx`);
      if (!fs.existsSync(filePath)) return null;

      const raw = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(raw);
      const rt = readingTime(content);

      return {
        slug,
        title: data.title,
        description: data.description,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
        coverImage: data.coverImage,
        published: data.published !== false,
        readingMinutes: Math.ceil(rt.minutes),
      } as BlogPostMeta;
    })
    .filter((p): p is BlogPostMeta => p !== null && p.published);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllCategories(locale: "es" | "en"): string[] {
  const posts = getAllPosts(locale);
  return [...new Set(posts.map((p) => p.category))];
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((name) =>
    fs.statSync(path.join(BLOG_DIR, name)).isDirectory()
  );
}
