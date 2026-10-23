import { Brain, Lightbulb, MessageCircle, Puzzle } from "lucide-react";
import type { ServicePageData } from "../../types/ServicePage";

export const estimulacaoCognitiva: ServicePageData = {
  path: "/estimulacao-cognitiva",
  name: "Estimulação Cognitiva Infantil",
  schemaDescription:
    "Estimulação cognitiva infantil com atividades lúdicas para atenção, memória, linguagem e aprendizagem, com plano individualizado, em São Paulo e online.",
  hero: {
    badge: "Estimulação cognitiva • São Paulo e online",
    title: "Estimulação cognitiva infantil",
    description:
      "Atividades planejadas e lúdicas para fortalecer atenção, memória, linguagem e raciocínio, respeitando o ritmo e os interesses do seu filho.",
    image: "/imagens/desenvolvimento-infantil.webp",
    imageAlt: "Criança em atividade lúdica de estimulação cognitiva",
    highlights: [
      "Atividades lúdicas e adequadas à idade",
      "Plano individualizado, a partir de avaliação",
      "Orientação para continuar estimulando em casa",
    ],
  },
  trust: [
    "Psicóloga CRP 06/145789",
    "Atendimento presencial e online",
    "Avaliação inicial gratuita",
    "Plano individualizado",
  ],
  sections: [
    {
      kind: "text",
      id: "mais-informacoes",
      eyebrow: "O que é",
      title: "O que é estimulação cognitiva infantil",
      paragraphs: [
        "A estimulação cognitiva reúne atividades e estratégias que trabalham as funções mentais ligadas ao aprendizado, como atenção, memória, linguagem, planejamento e resolução de problemas.",
        "Na infância, isso acontece principalmente por meio do brincar. Cada atividade é escolhida de acordo com a idade, os interesses e as necessidades da criança, e vai aumentando de dificuldade aos poucos.",
        "Ela pode ser indicada para crianças com dificuldades de aprendizagem, atenção ou linguagem, ou para famílias que querem apoiar o desenvolvimento de forma estruturada. A indicação é sempre definida após a avaliação.",
      ],
    },
    {
      kind: "cards",
      eyebrow: "Funções trabalhadas",
      title: "O que podemos estimular",
      items: [
        {
          icon: Brain,
          title: "Atenção e memória",
          description:
            "Manter o foco, lembrar instruções e organizar informações.",
        },
        {
          icon: MessageCircle,
          title: "Linguagem",
          description: "Vocabulário, compreensão e expressão de ideias.",
        },
        {
          icon: Puzzle,
          title: "Raciocínio",
          description:
            "Resolução de problemas, flexibilidade e planejamento de ações.",
        },
        {
          icon: Lightbulb,
          title: "Aprendizagem",
          description:
            "Estratégias para estudar, concentrar-se e aprender com mais confiança.",
        },
      ],
    },
    {
      kind: "steps",
      eyebrow: "Como funciona",
      title: "Como é o acompanhamento",
      steps: [
        {
          title: "Avaliação inicial",
          description:
            "Conhecemos a criança, suas dificuldades e seus pontos fortes, em conversa sem compromisso.",
        },
        {
          title: "Plano de estimulação",
          description:
            "Definimos objetivos e atividades personalizadas, em acordo com a família.",
        },
        {
          title: "Sessões e prática em casa",
          description:
            "Sessões lúdicas regulares e orientações simples para a família continuar em casa.",
        },
      ],
    },
  ],
  faq: {
    heading: "Perguntas frequentes sobre estimulação cognitiva",
    description: "Dúvidas comuns de famílias sobre o acompanhamento.",
    items: [
      {
        id: "o-que-e-estimulacao-cognitiva",
        question: "O que é estimulação cognitiva infantil?",
        answer:
          "São atividades planejadas, geralmente lúdicas, que trabalham atenção, memória, linguagem e raciocínio de acordo com as necessidades de cada criança.",
      },
      {
        id: "para-quem-e-indicada",
        question: "Para quem é indicada?",
        answer:
          "Para crianças com dificuldades de aprendizagem, atenção ou linguagem, e para famílias que desejam apoiar o desenvolvimento. A indicação é feita após avaliação.",
      },
      {
        id: "estimulacao-online",
        question: "Posso fazer online?",
        answer:
          "Sim, em muitos casos. Na avaliação inicial definimos se o formato online ou presencial é o mais adequado.",
      },
      {
        id: "como-agendar-estimulacao",
        question: "Como agendo a avaliação inicial?",
        answer:
          "Pelo WhatsApp ou pelo formulário desta página. A avaliação inicial é gratuita e sem compromisso.",
      },
    ],
  },
  related: [
    {
      title: "Reabilitação cognitiva",
      description:
        "Fortalecimento de habilidades cognitivas em crianças com dificuldades.",
      href: "/reabilitacao-cognitiva",
    },
    {
      title: "Desenvolvimento infantil",
      description: "Avaliação e acompanhamento das áreas do desenvolvimento.",
      href: "/desenvolvimento-infantil",
    },
  ],
  cta: {
    title: "Quer apoiar a aprendizagem do seu filho?",
    description:
      "Fale agora com a psicóloga e agende a avaliação inicial gratuita.",
  },
};
