import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import type { Metadata } from "next";
import { ServiceHero } from "../components/ServiceHero";
import { CardsDesenvolvimentoInfantil } from "../components/CardsDesenvolvimentoInfantil";
import { CardsBeneficiosDesenvolvimento } from "../CardsBeneficiosDesenvolvimento";
import { Faq } from "../components/Faq";
import { FaqItem } from "../data/FaqItem";

export const metadata: Metadata = {
  title: "Desenvolvimento Infantil em São Paulo | Psicóloga Especializada",
  description:
    "Acompanhamento especializado de desenvolvimento infantil. Avaliação profissional dos aspectos cognitivos, motores, sociais e de linguagem. Intervenção precoce com a Dra. Joana.",
  keywords:
    "desenvolvimento infantil, psicóloga infantil, avaliação desenvolvimento, intervenção precoce, psicóloga São Paulo",
};

export default function DesenvolvimentoInfantil() {
  const faqItems: FaqItem[] = [
    {
      id: "o-que-e-desenvolvimento-infantil",
      question: "O que é desenvolvimento infantil?",
      answer:
        "Desenvolvimento infantil refere-se ao crescimento físico, cognitivo, emocional e social da criança desde o nascimento até a adolescência. Envolve aquisição de habilidades motoras, linguagem, interação social e capacidade de aprendizagem.",
    },
    {
      id: "quando-procurar-especialista",
      question:
        "Quando devo procurar um especialista em desenvolvimento infantil?",
      answer:
        "Recomenda-se procurar um especialista se você notar atrasos na fala, dificuldades motoras, problemas de comportamento, dificuldades de aprendizagem ou qualquer preocupação com o desenvolvimento. A intervenção precoce é fundamental.",
    },
    {
      id: "como-funciona-acompanhamento",
      question: "Como funciona o acompanhamento de desenvolvimento infantil?",
      answer:
        "O acompanhamento envolve avaliação inicial completa, estabelecimento de objetivos personalizados, sessões terapêuticas regulares e orientação aos pais. O trabalho é integrado abordando aspectos cognitivos, motores, emocionais e sociais.",
    },
    {
      id: "importancia-intervencao-precoce",
      question: "Qual a importância da intervenção precoce?",
      answer:
        "A intervenção precoce aproveita a neuroplasticidade do cérebro infantil, reduzindo significativamente dificuldades futuras. Crianças que recebem intervenção precoce têm melhor desempenho escolar e maior independência.",
    },
    {
      id: "quanto-tempo-resultados",
      question: "Quanto tempo leva para ver resultados?",
      answer:
        "Os resultados variam conforme a criança e o tipo de atraso. Geralmente, observam-se primeiros progressos entre 4-8 semanas. Maior transformação ocorre em 3-6 meses de acompanhamento consistente.",
    },
    {
      id: "acompanhamento-online",
      question: "Posso fazer acompanhamento online?",
      answer:
        "Sim, oferecemos acompanhamento online para algumas modalidades. No entanto, avaliações iniciais e trabalho com coordenação motora grossa geralmente requerem presencialidade.",
    },
  ];
  return (
    <>
      <Header />
      <ServiceHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Serviços", href: "/servicos" },
          { label: "Desenvolvimento Infantil" },
        ]}
        badge="Acompanhamento Especializado - São Paulo"
        title="Desenvolvimento Infantil"
        description="Acompanhamento Especializado para o Desenvolvimento. Cada criança é única — com seu ritmo, potencial e forma de aprender. Nosso trabalho é identificar o que ela precisa e criar as condições para que se desenvolva com segurança, confiança e alegria."
        image="/imagens/desenvolvimento-infantil.webp"
        primaryAction={{
          label: "Agende sua Avaliação Gratuita",
          href: "/contato",
        }}
        secondaryAction={{ label: "Saiba Mais", href: "#mais-informacoes" }}
      />
      <section className="py-16 bg-[#faf7f2]">
        <div className="text-center flex flex-col items-center justify-center">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#8fa998]">
            Por que Importa
          </span>

          <h2 className="text-5xl leading-[48px] font-medium text-[#2d3142] font-[family-name:var(--font-cormorant)]">
            Por que o Desenvolvimento Infantil é Importante?
          </h2>
        </div>

        <div className="container mx-auto py-6">
          <p className="py-3">
            Os primeiros anos de vida representam a janela de maior
            neuroplasticidade do cérebro humano. É nesse período que se formam
            as conexões neurais responsáveis pela linguagem, cognição, regulação
            emocional e comportamento social. Intervenções realizadas nessa fase
            têm um impacto incomparavelmente maior do que as realizadas mais
            tarde — não porque a mudança seja impossível depois, mas porque o
            custo é menor e o potencial é muito maior.
          </p>
          <p className="py-3">
            Estudos longitudinais apontam que crianças que recebem
            acompanhamento especializado precocemente apresentam melhor
            desempenho acadêmico, maior repertório social, mais autonomia e
            menor incidência de transtornos associados na adolescência e vida
            adulta. Investir no desenvolvimento infantil não é apenas cuidar do
            presente da criança — é construir as bases de quem ela será.
          </p>
          <p className="py-3">
            Mas não é preciso esperar por um diagnóstico para buscar
            acompanhamento. Qualquer preocupação com o ritmo de desenvolvimento,
            comportamento, comunicação ou aprendizagem é um motivo legítimo para
            uma avaliação especializada. Quanto mais cedo o suporte chega, mais
            suave é o caminho.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#f9f9f7]">
        <div className="text-center flex flex-col items-center justify-center">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#8fa998]">
            Definição
          </span>

          <h2 className="text-5xl leading-[48px] font-medium text-[#2d3142] font-[family-name:var(--font-cormorant)]">
            O que é Desenvolvimento Infantil?
          </h2>

          <div className="container mx-auto py-6">
            <p className="py-3">
              Desenvolvimento infantil é o processo pelo qual a criança adquire
              habilidades físicas, cognitivas, emocionais, sociais e de
              linguagem ao longo dos primeiros anos de vida. Esse processo é
              simultâneo e interconectado: o desenvolvimento motor influencia a
              cognição, a linguagem impacta as relações sociais, e a regulação
              emocional afeta o aprendizado. Compreender esse todo é o ponto de
              partida do nosso trabalho.
            </p>
            <p>
              Cada criança segue um ritmo próprio dentro de faixas esperadas
              para a sua faixa etária. Quando há um desvio significativo nessas
              trajetórias — seja por atraso, ausência ou padrão atípico — o
              acompanhamento especializado se torna essencial para identificar a
              causa, criar suporte adequado e estimular o potencial de
              desenvolvimento de forma ética e baseada em evidências
              científicas.
            </p>

            <CardsDesenvolvimentoInfantil />
          </div>
        </div>
      </section>
      <section className="py-16 bg-[#2d3142]">
        <div className="text-center flex flex-col items-center justify-center">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#fff]">
            Definição
          </span>

          <h2 className="text-5xl leading-[48px] font-medium text-[#fff] font-[family-name:var(--font-cormorant)]">
            O que é Desenvolvimento Infantil?
          </h2>
        </div>
        <CardsBeneficiosDesenvolvimento />
      </section>

      <Faq
        heading="Dúvidas sobre Plano Empresarial"
        description="Tudo o que sua empresa precisa saber antes de contratar."
        items={faqItems}
      />

      <Footer />
    </>
  );
}
