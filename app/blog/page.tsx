import type { Metadata } from "next";
import { getAllPosts, getAllCategories } from "@/app/lib/blog";
import BlogList from "@/app/components/blog/BlogList";

export const metadata: Metadata = {
  title: "Blog | Andres Guerra",
  description:
    "Articulos sobre desarrollo backend, AWS, Python y arquitectura cloud.",
};

export default function BlogPage() {
  const postsEs = getAllPosts("es");
  const postsEn = getAllPosts("en");
  const categoriesEs = getAllCategories("es");
  const categoriesEn = getAllCategories("en");

  return (
    <BlogList
      postsEs={postsEs}
      postsEn={postsEn}
      categoriesEs={categoriesEs}
      categoriesEn={categoriesEn}
    />
  );
}
