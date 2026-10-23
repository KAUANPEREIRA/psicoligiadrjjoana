import type { MetadataRoute } from "next";
import { blogPosts, isoFromDataPublicacao } from "@/app/data/blog";
import { indexablePaths, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = indexablePaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority:
      path === "/"
        ? 1
        : path === "/intervencao-aba"
          ? 0.9
          : path === "/blog"
            ? 0.8
            : 0.7,
  }));

  // Uma URL por slug de blogPosts: artigo novo entra sozinho no sitemap
  const posts = blogPosts.map((post) => {
    const iso = isoFromDataPublicacao(
      post.dataAtualizacao ?? post.dataPublicacao,
    );

    return {
      url: `${siteUrl}/blog/${post.slug}`, // sem barra final (igual ao canonical)
      lastModified: iso ? new Date(iso) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    };
  });

  return [...pages, ...posts];
}
