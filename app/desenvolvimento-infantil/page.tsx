import type { Metadata } from "next";
import { ServicePageTemplate } from "../components/service-template/ServicePageTemplate";
import { desenvolvimentoInfantil } from "../data/pages/desenvolvimento-infantil";

export const metadata: Metadata = {
  title: "Desenvolvimento Infantil em São Paulo | Psicóloga Infantil",
  description:
    "Avaliação e acompanhamento do desenvolvimento infantil (cognitivo, social, linguagem e motor) em São Paulo e online. Agende a avaliação inicial gratuita.",
  alternates: { canonical: "/desenvolvimento-infantil" },
};

export default function DesenvolvimentoInfantil() {
  return <ServicePageTemplate data={desenvolvimentoInfantil} />;
}
