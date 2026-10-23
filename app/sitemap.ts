import type { MetadataRoute } from "next";
import { indexablePaths, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return indexablePaths.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/intervencao-aba" ? 0.9 : 0.7,
  }));
}
