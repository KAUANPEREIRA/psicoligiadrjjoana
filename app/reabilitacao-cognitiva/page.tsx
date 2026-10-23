import type { Metadata } from "next";
import { ServicePageTemplate } from "../components/service-template/ServicePageTemplate";
import { reabilitacaoCognitiva } from "../data/pages/reabilitacao-cognitiva";

export const metadata: Metadata = {
  title: "Reabilitação Cognitiva Infantil em São Paulo | Psicóloga",
  description:
    "Reabilitação cognitiva infantil para fortalecer atenção, memória e funções executivas em crianças com dificuldades no desenvolvimento. Avaliação inicial gratuita em SP.",
  alternates: { canonical: "/reabilitacao-cognitiva" },
};

export default function Page() {
  return <ServicePageTemplate data={reabilitacaoCognitiva} />;
}
