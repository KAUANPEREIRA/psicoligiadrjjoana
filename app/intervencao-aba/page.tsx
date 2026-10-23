import type { Metadata } from "next";
import { ServicePageTemplate } from "../components/service-template/ServicePageTemplate";
import { intervencaoAba } from "../data/pages/intervencao-aba";

export const metadata: Metadata = {
  title: "Terapia ABA para Autismo em São Paulo | Psicóloga ABA",
  description:
    "Terapia ABA (Análise do Comportamento Aplicada) para crianças com autismo em São Paulo e online. Plano individualizado. Agende a avaliação inicial gratuita.",
  alternates: { canonical: "/intervencao-aba" },
};

export default function IntervencaoAba() {
  return <ServicePageTemplate data={intervencaoAba} />;
}
