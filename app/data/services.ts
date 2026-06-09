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
    title: "Atendimento ao Desenvolvimento Infantil",
    description:
      "Acompanhamento psicológico voltado ao desenvolvimento infantil, considerando aspectos comportamentais, cognitivos e emocionais.",
    slug: "/desenvolvimento-infantil",
  },

  {
    id: 2,
    icon: ChartColumn,
    title: "Intervenção Baseada em Evidências (ABA)",
    description:
      "Intervenções fundamentadas na Análise do Comportamento Aplicada (ABA), com foco em desenvolvimento de habilidades e melhora comportamental.",
    slug: "/intervencao-aba",
  },

  {
    id: 3,
    icon: Users,
    title: "Trabalho Integrado com Família e Escola",
    description:
      "Atuação conjunta com familiares e ambiente escolar para garantir continuidade e eficácia no processo de desenvolvimento infantil.",
    slug: "/familia-e-escola",
  },

  {
    id: 4,
    icon: Sprout,
    title: "Estimulação Cognitiva Infantil",
    description:
      "Atividades e estratégias para desenvolvimento de funções cognitivas, atenção, aprendizagem e habilidades mentais.",
    slug: "/estimulacao-cognitiva",
  },

  {
    id: 5,
    icon: GraduationCap,
    title: "Reabilitação Cognitiva Infantil",
    description:
      "Intervenção focada na recuperação e fortalecimento de habilidades cognitivas em crianças com dificuldades no desenvolvimento.",
    slug: "/reabilitacao-cognitiva",
  },
];
