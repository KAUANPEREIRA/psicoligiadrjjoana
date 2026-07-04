import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import type { Metadata } from "next";
import { ServiceHero } from "../components/ServiceHero";

export const metadata: Metadata = {
  title: "Dra. Joana D'Arc | Psicóloga Especialista em ABA",
  description:
    "Conheça a Dra. Joana D'Arc, psicóloga CRP 06/145789 especializada em Análise do Comportamento Aplicada (ABA) e desenvolvimento infantil no TEA. Formação em Neuropsicologia.",
};

export default function IntervecaoAba() {
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
        title="Intervenção ABA"
        description="Terapia ABA especializada para autismo infantil em São Paulo. Intervenção baseada em evidências científicas com foco em desenvolvimento comportamental e habilidades sociais.
"
        image="/imagens/intervencao-aba.webp"
        primaryAction={{
          label: "Agende sua Avaliação Gratuita",
          href: "/contato",
        }}
        secondaryAction={{ label: "Saiba Mais", href: "#mais-informacoes" }}
      />

      <section className="py-6 bg-[#f9f9f7]">
        <div className="text-center flex flex-col items-center justify-center">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#8fa998]">
            Método Baseado em Evidências
          </span>

          <h2 className="text-5xl leading-[48px] font-medium text-[#2d3142] font-[family-name:var(--font-cormorant)]">
            O que é Intervenção ABA?
          </h2>
        </div>

        <div className="container mx-auto py-6 space-y-2">
          <p>
            <strong>Análise do Comportamento Aplicada (ABA)</strong> é uma
            abordagem terapêutica baseada em ciência que modifica comportamentos
            compreendendo suas causas e consequências. É o método mais
            comprovado para <strong>intervenção infantil</strong>, especialmente
            para crianças com <strong>autismo (TEA)</strong>.
          </p>

          <p>
            A <strong>terapia ABA</strong> funciona em três passos: identificar
            o comportamento, analisar seu contexto e criar um plano de{" "}
            <strong>intervenção comportamental</strong>
            personalizado. Cada sessão é guiada por dados e ajustes contínuos
            baseados em progresso mensurável.
          </p>

          <p>
            Profissionais certificados como <strong>BCBA</strong> (Board
            Certified Behavior Analyst) utilizam protocolos rigorosos que
            funcionam em qualquer contexto — seja em
            <strong>terapia presencial intensiva</strong> ou adaptada para casa.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#faf7f2]">
        <div className="text-center flex flex-col items-center justify-center">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#8fa998]">
            Comprovado Cientificamente
          </span>

          <h2 className="text-5xl leading-[48px] font-medium text-[#2d3142] font-[family-name:var(--font-cormorant)]">
            Por que ABA Funciona para Desenvolvimento Infantil?
          </h2>
        </div>

        <div className="container mx-auto py-6 space-y-3">
          <p>
            Mais de 20 mil estudos comprovam que{" "}
            <strong>ABA produz resultados reais</strong>
            em desenvolvimento infantil, habilidades sociais e comunicação. Para{" "}
            <strong>autismo</strong>, é considerada o tratamento com maior nível
            de evidência pela{" "}
            <strong>American Psychological Association</strong>.
          </p>

          <p>
            Diferente de outras terapias que focam sintomas gerais,{" "}
            <strong>intervenção ABA</strong>
            decompõe cada comportamento e trabalha sistematicamente na
            construção de habilidades. O aprendizado é{" "}
            <strong>generalizado</strong> — funciona em sessões, em casa e na
            comunidade.
          </p>

          <p>
            <strong>Começar cedo é essencial.</strong> A neuroplasticidade
            infantil é extraordinária nos primeiros anos. Cada reforço contribui
            para reorganização neural, transformando a trajetória inteira da
            criança. Os dados guiam cada decisão — ajustes contínuos garantem
            máximo potencial.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
