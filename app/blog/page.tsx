import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import { ArtigoDestaque } from "../components/ArtigoDestaque";
import { UltimasPostagens } from "../components/UltimasPostagens";
import { JsonLd } from "../components/JsonLd";
import Cta from "../components/Cta";
import { blogPosts, isoFromDataPublicacao } from "../data/blog";
import { baseOpenGraph, organizationSchema } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

const title = "Blog ABA e Autismo | Artigos sobre Terapia em SP";
const description =
  "Artigos sobre Terapia ABA, autismo infantil e desenvolvimento comportamental. Dicas práticas para pais e educadores sobre o tratamento do TEA em crianças.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/blog" },
  openGraph: { ...baseOpenGraph, title, description, url: "/blog" },
};

// CollectionPage + Blog (com os artigos de blogPosts). O BreadcrumbList já é
// emitido pelo BreadcrumbComponent, então não se repete aqui.
function blogStructuredData() {
  const pageUrl = absoluteUrl("/blog");

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#page`,
        url: pageUrl,
        name: title,
        description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": absoluteUrl("/#site") },
        mainEntity: { "@id": `${pageUrl}#blog` },
      },
      {
        "@type": "Blog",
        "@id": `${pageUrl}#blog`,
        url: pageUrl,
        name: "Blog da Dra. Joana D'Arc",
        description,
        inLanguage: "pt-BR",
        publisher: organizationSchema,
        blogPost: blogPosts.map((post) => ({
          "@type": "BlogPosting",
          headline: post.titulo,
          description: post.metaDescription,
          url: absoluteUrl(`/blog/${post.slug}`),
          image: absoluteUrl(post.imagemUrl),
          datePublished: isoFromDataPublicacao(post.dataPublicacao),
          author: organizationSchema,
        })),
      },
    ],
  };
}

export default function Blog() {
  return (
    <>
      <Header />

      <main>
        {/* O h1 "Blog" sai do BreadcrumbComponent */}
        <BreadcrumbComponent title="Blog" />

        <ArtigoDestaque />
        <UltimasPostagens />
        <Cta />

        <JsonLd data={blogStructuredData()} />
      </main>

      <Footer />
    </>
  );
}
