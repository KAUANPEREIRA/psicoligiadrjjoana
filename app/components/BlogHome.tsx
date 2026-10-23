import Link from "next/link";
import { CardArticle, type CardArticleProps } from "./CardArticle";

// href aponta para /blog até existirem as páginas individuais dos artigos
const articles: CardArticleProps[] = [
  {
    image: "/blog/blog-01.webp",
    imageAlt: "Criança em sessão de Terapia ABA com a psicóloga",
    dateTime: "2025-04-12",
    date: "12 de abril, 2025",
    category: "Terapia ABA",
    readingTime: "6 min de leitura",
    title: "O que é Terapia ABA e como funciona no tratamento do autismo",
    description:
      "Entenda os princípios da Análise do Comportamento Aplicada e seus benefícios comprovados para crianças com TEA.",
    href: "/blog",
  },
  {
    image: "/blog/blog-02.webp",
    imageAlt: "Criança brincando, ilustrando sinais precoces do autismo",
    dateTime: "2025-04-10",
    date: "10 de abril, 2025",
    category: "Autismo",
    readingTime: "5 min de leitura",
    title: "Sinais precoces do autismo em crianças",
    description:
      "Como identificar sinais iniciais e quando buscar avaliação especializada.",
    href: "/blog",
  },
  {
    image: "/blog/blog-03.webp",
    imageAlt: "Família participando do acompanhamento terapêutico da criança",
    dateTime: "2025-04-08",
    date: "08 de abril, 2025",
    category: "Orientação a pais",
    readingTime: "4 min de leitura",
    title: "Como a família pode ajudar no tratamento ABA",
    description:
      "Estratégias práticas para pais e cuidadores no dia a dia.",
    href: "/blog",
  },
];

export const BlogHome = () => {
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
          {articles.map((article) => (
            <li
              key={article.title}
              className="col-span-12 md:col-span-6 lg:col-span-4"
            >
              <CardArticle {...article} />
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
