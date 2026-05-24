import { CardArticle } from "./CardArticle";

export const BlogHome = () => {
  return (
    <section>
      <div className="container mx-auto py-24">
        <div className="mb-14 text-center flex flex-col items-center justify-center column">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#8fa998]">
            Blog
          </span>

          <h2 className="text-[2rem] leading-[48px] font-medium text-[#2d3142] font-cormorant">
            Artigos sobre Terapia ABA e Autismo
          </h2>
          <p>
            Informações essenciais sobre análise do comportamento aplicada e
            desenvolvimento infantil
          </p>
        </div>

        <div className="flex gap-10 justify-center">
          <CardArticle
            image="/blog/blog-01.webp"
            date="12 de abril, 2025"
            title="O que é Terapia ABA e como funciona no tratamento do autismo"
            description="Entenda os princípios da Análise do Comportamento Aplicada e seus benefícios comprovados para crianças com TEA."
          />
          <CardArticle
            image="/blog/blog-01.webp"
            date="12 de abril, 2025"
            title="O que é Terapia ABA e como funciona no tratamento do autismo"
            description="Entenda os princípios da Análise do Comportamento Aplicada e seus benefícios comprovados para crianças com TEA."
          />
          <CardArticle
            image="/blog/blog-01.webp"
            date="12 de abril, 2025"
            title="O que é Terapia ABA e como funciona no tratamento do autismo"
            description="Entenda os princípios da Análise do Comportamento Aplicada e seus benefícios comprovados para crianças com TEA."
          />
        </div>
      </div>
    </section>
  );
};
