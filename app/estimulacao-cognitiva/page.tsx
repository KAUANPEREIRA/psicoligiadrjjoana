import type { Metadata } from "next";
import { ServicePageTemplate } from "../components/service-template/ServicePageTemplate";
import { estimulacaoCognitiva } from "../data/pages/estimulacao-cognitiva";

export const metadata: Metadata = {
  title: "Estimulação Cognitiva Infantil em São Paulo | Psicóloga",
  description:
    "Estimulação cognitiva infantil para atenção, memória, linguagem e aprendizagem, com atividades lúdicas e plano individualizado. Atendimento em São Paulo e online.",
  alternates: { canonical: "/estimulacao-cognitiva" },
};

export default function Page() {
  return <ServicePageTemplate data={estimulacaoCognitiva} />;
}
