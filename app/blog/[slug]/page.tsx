import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import { getAllSlugs } from "@/app/lib/blog";
import { mdxComponents } from "@/app/components/blog/MDXComponents";
import BlogPostClient from "@/app/components/blog/BlogPostClient";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const filePath = path.join(
    process.cwd(),
    "content",
    "blog",
    slug,
    "es.mdx"
  );
  if (!fs.existsSync(filePath)) return {};
  const { data } = matter(fs.readFileSync(filePath, "utf-8"));
  return {
    title: `${data.title} | Andres Guerra Blog`,
    description: data.description,
  };
}

async function compilePost(blogDir: string, slug: string, locale: string) {
  const filePath = path.join(blogDir, `${locale}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data: frontmatter, content: rawContent } = matter(raw);
  const rt = readingTime(rawContent);

  const { content } = await compileMDX({
    source: rawContent,
    components: mdxComponents,
  });

  return {
    meta: {
      slug,
      title: frontmatter.title as string,
      description: frontmatter.description as string,
      date: frontmatter.date as string,
      category: frontmatter.category as string,
      tags: (frontmatter.tags || []) as string[],
      coverImage: frontmatter.coverImage as string | undefined,
      readingMinutes: Math.ceil(rt.minutes),
    },
    content,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogDir = path.join(process.cwd(), "content", "blog", slug);

  if (!fs.existsSync(blogDir)) notFound();

  const esPost = await compilePost(blogDir, slug, "es");
  const enPost = await compilePost(blogDir, slug, "en");

  if (!esPost || !enPost) notFound();

  return (
    <BlogPostClient
      esMeta={esPost.meta}
      enMeta={enPost.meta}
      esContent={esPost.content}
      enContent={enPost.content}
    />
  );
}
