import type { Metadata } from "next";
import { ServicePageTemplate } from "../components/service-template/ServicePageTemplate";
import { familiaEscola } from "../data/pages/familia-e-escola";

export const metadata: Metadata = {
  title: "Orientação à Família e Escola | Psicóloga Infantil em SP",
  description:
    "Trabalho integrado com família e escola para apoiar o desenvolvimento da criança: orientação aos pais, parceria com professores e estratégias consistentes. São Paulo e online.",
  alternates: { canonical: "/familia-e-escola" },
};

export default function Page() {
  return <ServicePageTemplate data={familiaEscola} />;
}
