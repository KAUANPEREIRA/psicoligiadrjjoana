import Link from "next/link";
import { blogHome, blogPosts, isoFromDataPublicacao } from "@/app/data/blog";
import { CardArticle } from "./CardArticle";

export const BlogHome = () => {
  // Os artigos vêm de app/data/blog.ts: os mais recentes ficam no início do array
  const posts = blogPosts.slice(0, blogHome.count);
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="blog-title" className="px-4">
      <div className="container mx-auto py-16 md:py-24">
        <div className="mb-10 flex flex-col items-center justify-center text-center md:mb-14">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#5d7064]">
            Blog
          </span>

          <h2
            id="blog-title"
            className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight text-[#2d3142] md:text-5xl"
          >
            Artigos sobre Terapia ABA e Autismo
          </h2>
          <p className="mt-5 max-w-2xl text-neutral-600">
            Informações essenciais sobre análise do comportamento aplicada e
            desenvolvimento infantil
          </p>
        </div>

        <ul className="grid grid-cols-12 gap-6 md:gap-8">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <CardArticle
                href={`/blog/${post.slug}`}
                title={post.titulo}
                description={post.resumo}
                category={post.categoria}
                date={post.dataPublicacao}
                dateTime={isoFromDataPublicacao(post.dataPublicacao)}
                readingTime={`${post.tempoLeitura} de leitura`}
                image={post.imagemUrl}
                imageAlt={post.imagemAlt}
              />
            </li>
          ))}
        </ul>

        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-[#2d3142] px-8 py-3 text-sm font-semibold text-[#2d3142] transition-colors hover:bg-[#2d3142] hover:text-white"
          >
            Ver todos os artigos
          </Link>
        </div>
      </div>
    </section>
  );
};
