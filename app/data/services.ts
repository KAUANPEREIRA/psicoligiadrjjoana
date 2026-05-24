import {
  Brain,
  Users,
  Sprout,
  HandHelping,
  ChartColumn,
  GraduationCap,
} from "lucide-react";
import { ServiceProps } from "../types/ServicesProps";

export const services: ServiceProps[] = [
  {
    id: 1,
    icon: Brain,
    title: "Terapia ABA para Autismo",
    description:
      "Intervenção comportamental intensiva para crianças com TEA, focada no desenvolvimento de habilidades essenciais e redução de comportamentos desafiadores.",
    slug: "/terapia-aba-para-autismo",
  },

  {
    id: 2,
    icon: Users,
    title: "Desenvolvimento de Habilidades Sociais",
    description:
      "Ensino estruturado de competências sociais, interação com pares, comunicação funcional e comportamento adequado em contextos sociais.",
    slug: "/habilidades-sociais",
  },

  {
    id: 3,
    icon: Sprout,
    title: "Intervenção Precoce",
    description:
      "Terapia ABA para crianças pequenas (2–5 anos) com diagnóstico ou suspeita de autismo, maximizando o potencial de desenvolvimento.",
    slug: "/intervencao-precoce",
  },

  {
    id: 4,
    icon: HandHelping,
    title: "Treinamento de Pais",
    description:
      "Capacitação de familiares em técnicas ABA para aplicação no cotidiano, promovendo consistência e generalização de habilidades.",
    slug: "/treinamento-de-pais",
  },

  {
    id: 5,
    icon: ChartColumn,
    title: "Análise Funcional do Comportamento",
    description:
      "Avaliação detalhada para identificar funções de comportamentos desafiadores e desenvolver planos de intervenção eficazes.",
    slug: "/analise-funcional-do-comportamento",
  },

  {
    id: 6,
    icon: GraduationCap,
    title: "Consultoria Escolar ABA",
    description:
      "Orientação e supervisão para escolas implementarem estratégias ABA, garantindo inclusão e aprendizado efetivo.",
    slug: "/consultoria-escolar-aba",
  },
];
