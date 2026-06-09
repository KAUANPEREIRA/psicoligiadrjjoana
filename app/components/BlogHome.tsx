import { CardArticle } from "./CardArticle";

export const BlogHome = () => {
  return (
    <section aria-labelledby="blog-title">
      <div className="container mx-auto py-24">
        <div className="mb-14 text-center flex flex-col items-center justify-center column">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#8fa998]">
            Blog
          </span>

          <h2
            className="text-5xl leading-[48px] font-medium text-[#2d3142] font-[family-name:var(--font-cormorant)]"
            id="blog-title"
          >
            Artigos sobre Terapia ABA e Autismo
          </h2>
          <p className="mt-5">
            Informações essenciais sobre análise do comportamento aplicada e
            desenvolvimento infantil
          </p>
        </div>

        <ul className="flex gap-10 justify-center">
          <li>
            <CardArticle
              image="/blog/blog-01.webp"
              date="12 de abril, 2025"
              title="O que é Terapia ABA e como funciona no tratamento do autismo"
              description="Entenda os princípios da Análise do Comportamento Aplicada e seus benefícios comprovados para crianças com TEA."
            />
          </li>

          <li>
            <CardArticle
              image="/blog/blog-02.webp"
              date="10 de abril, 2025"
              title="Sinais precoces do autismo em crianças"
              description="Como identificar sinais iniciais e quando buscar avaliação especializada."
            />
          </li>

          <li>
            <CardArticle
              image="/blog/blog-03.webp"
              date="08 de abril, 2025"
              title="Como a família pode ajudar no tratamento ABA"
              description="Estratégias práticas para pais e cuidadores no dia a dia."
            />
          </li>
        </ul>
      </div>
    </section>
  );
};
