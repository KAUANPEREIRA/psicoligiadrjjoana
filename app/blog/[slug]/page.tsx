import { Fragment } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { BlockRenderer } from "@/app/components/BlockRenderer";
import { BlogPostMeta } from "@/app/components/BlogPostMeta";
import { JsonLd } from "@/app/components/JsonLd";
import { Tag } from "@/app/components/Tag";
import {
  blogPosts,
  contarPalavras,
  isoFromDataPublicacao,
} from "@/app/data/blog";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { baseOpenGraph, organizationSchema } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

// Imagem decorativa do topo (a mesma em todos os artigos)
const HERO_IMAGE = "/imagens/bread.webp";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d7064]";

// Todos os slugs são conhecidos no build (vêm de app/data/blog.ts): o que não
// estiver na lista responde 404 direto, sem renderizar.
export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      ...baseOpenGraph, // merge SUPERFICIAL: sem o spread, o openGraph do layout se perde
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `/blog/${slug}`,
      publishedTime: isoFromDataPublicacao(post.dataPublicacao),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  // Alimenta o breadcrumb visual e o JSON-LD BreadcrumbList (uma fonte, dois usos)
  const breadcrumbs = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: `/blog/${post.slug}`, label: post.titulo },
  ];

  // "Relacionados" = os outros artigos mais recentes (não filtra por categoria)
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);
  const relatedPosts = otherPosts.slice(0, 3);
  const sidebarPosts = otherPosts.slice(0, 4);

  // O autor é o próprio consultório porque os artigos não têm autor individual
  const postUrl = absoluteUrl(`/blog/${post.slug}`);
  const blogPosting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titulo,
    description: post.metaDescription,
    inLanguage: "pt-BR",
    image: absoluteUrl(post.imagemUrl),
    datePublished: isoFromDataPublicacao(post.dataPublicacao),
    dateModified: post.dataAtualizacao
      ? isoFromDataPublicacao(post.dataAtualizacao)
      : undefined,
    wordCount: contarPalavras(post),
    mainEntityOfPage: postUrl,
    author: organizationSchema,
    publisher: organizationSchema,
  };
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map(({ href, label }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      item: absoluteUrl(href),
    })),
  };

  return (
    <>
      <Header />

      <main>
        {/* HERO: imagem + véu escuro (70% mantém o contraste do texto branco) */}
        <section className="relative isolate flex min-h-[280px] items-center overflow-hidden md:min-h-[380px]">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-black/70" />

          <div className="container relative z-10 mx-auto px-4 py-12 md:py-16">
            <Breadcrumb>
              <BreadcrumbList className="gap-2 text-sm text-white sm:gap-2">
                {breadcrumbs.map((item, index) => {
                  const isLast = index === breadcrumbs.length - 1;

                  return (
                    <Fragment key={item.href}>
                      <BreadcrumbItem className="gap-0">
                        {isLast ? (
                          <BreadcrumbPage className="font-semibold text-white">
                            {item.label}
                          </BreadcrumbPage>
                        ) : (
                          <BreadcrumbLink
                            href={item.href}
                            className={`text-white/80 hover:text-white hover:underline ${focusRing} focus-visible:outline-white`}
                          >
                            {item.label}
                          </BreadcrumbLink>
                        )}
                      </BreadcrumbItem>

                      {!isLast && (
                        <BreadcrumbSeparator className="text-white/60" />
                      )}
                    </Fragment>
                  );
                })}
              </BreadcrumbList>
            </Breadcrumb>

            {/* <p> e não <h1>: o h1 da página é o do artigo, logo abaixo */}
            <p
              aria-hidden="true"
              className="mt-4 max-w-4xl font-[family-name:var(--font-cormorant)] text-3xl font-semibold leading-tight text-white md:text-4xl"
            >
              {post.titulo}
            </p>
          </div>
        </section>

        {/* CONTEÚDO: coluna principal + sidebar */}
        <div className="px-4">
          <div className="container mx-auto grid grid-cols-1 items-start gap-12 py-10 md:py-14 lg:grid-cols-[minmax(0,56rem)_20rem] lg:justify-center">
            <div className="min-w-0">
              <article>
                <header className="mb-8 flex flex-col items-start gap-4">
                  <Tag>{post.categoria}</Tag>

                  <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-medium leading-tight text-[#2d3142] md:text-5xl">
                    {post.titulo}
                  </h1>

                  <BlogPostMeta
                    date={post.dataPublicacao}
                    readingTime={`${post.tempoLeitura} de leitura`}
                  />

                  <div className="relative mt-2 h-60 w-full overflow-hidden rounded-2xl sm:h-80 lg:h-96">
                    <Image
                      src={post.imagemUrl}
                      alt={post.imagemAlt}
                      fill
                      sizes="(min-width: 1024px) 896px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </header>

                <div>
                  {post.blocos.map((block, i) => (
                    <BlockRenderer key={i} block={block} />
                  ))}
                </div>
              </article>

              {relatedPosts.length > 0 && (
                <section aria-labelledby="leia-tambem-title" className="mt-12">
                  <h2
                    id="leia-tambem-title"
                    className="mb-4 font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#2d3142]"
                  >
                    Leia também
                  </h2>

                  <ul role="list" className="grid gap-3">
                    {relatedPosts.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className={`flex flex-col items-start gap-2 rounded-2xl border border-neutral-200 p-4 transition hover:border-[#8fa998] hover:bg-neutral-50 ${focusRing}`}
                        >
                          <Tag>{p.categoria}</Tag>
                          <span className="text-base font-semibold text-[#2d3142]">
                            {p.titulo}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Sidebar. top-28 = altura do header sticky (h-20) + folga */}
            <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
              <div className="flex flex-col items-center gap-3 rounded-3xl bg-[#2d3142] p-6 text-center text-white">
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold leading-tight">
                  Atendimento infantil individualizado
                </h2>
                <p className="mb-2 text-base text-slate-200">
                  Agende uma consulta e saiba como podemos apoiar o
                  desenvolvimento da sua criança.
                </p>
                <Link
                  href="/contato"
                  className={`inline-flex items-center rounded-full bg-white px-8 py-3 font-semibold text-[#2d3142] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl ${focusRing} focus-visible:outline-white`}
                >
                  Agendar consulta
                </Link>
              </div>

              {sidebarPosts.length > 0 && (
                <nav
                  aria-labelledby="outros-artigos-title"
                  className="rounded-3xl border border-neutral-200 p-5"
                >
                  <h2
                    id="outros-artigos-title"
                    className="mb-4 font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#2d3142]"
                  >
                    Outros artigos
                  </h2>

                  <ul role="list" className="flex flex-col gap-3">
                    {sidebarPosts.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className={`flex items-start gap-2 text-sm font-semibold text-neutral-700 hover:text-[#2d3142] hover:underline ${focusRing}`}
                        >
                          <ArrowRight
                            aria-hidden="true"
                            className="mt-0.5 size-4 shrink-0"
                          />
                          {p.titulo}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </aside>
          </div>
        </div>

        <JsonLd data={blogPosting} />
        <JsonLd data={breadcrumbList} />
      </main>

      <Footer />
    </>
  );
}
