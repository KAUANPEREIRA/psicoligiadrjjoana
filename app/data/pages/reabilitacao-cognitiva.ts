import type { ServicePageData } from "../../types/ServicePage";

export const reabilitacaoCognitiva: ServicePageData = {
  path: "/reabilitacao-cognitiva",
  name: "Reabilitação Cognitiva Infantil",
  schemaDescription:
    "Reabilitação cognitiva infantil para fortalecer atenção, memória e funções executivas em crianças com dificuldades no desenvolvimento, em São Paulo e online.",
  hero: {
    badge: "Reabilitação cognitiva • São Paulo e online",
    title: "Reabilitação cognitiva infantil",
    description:
      "Intervenção focada em fortalecer habilidades cognitivas em crianças que apresentam dificuldades no desenvolvimento, com objetivos claros e acompanhamento próximo da família.",
    image: "/imagens/desenvolvimento-infantil.webp",
    imageAlt: "Criança em sessão de reabilitação cognitiva com a psicóloga",
    highlights: [
      "Objetivos definidos a partir de avaliação",
      "Foco em atenção, memória e funções executivas",
      "Acompanhamento e orientação da família",
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
      title: "O que é reabilitação cognitiva infantil",
      paragraphs: [
        "A reabilitação cognitiva é um trabalho estruturado para fortalecer ou compensar habilidades como atenção, memória, planejamento e controle de impulsos, quando elas estão abaixo do esperado ou afetam o dia a dia da criança.",
        "Diferente da estimulação, que é mais preventiva e ampla, a reabilitação parte de dificuldades específicas identificadas na avaliação e trabalha metas precisas, acompanhadas ao longo do tempo.",
        "Ela pode fazer parte do cuidado de crianças com dificuldades de aprendizagem, de atenção ou outras condições do neurodesenvolvimento. Cada caso é analisado individualmente, e quando necessário orientamos a busca de outros profissionais.",
      ],
    },
    {
      kind: "cards",
      eyebrow: "Em que ajudamos",
      title: "Habilidades trabalhadas",
      items: [
        {
          title: "Atenção",
          description: "Sustentar o foco e alternar entre tarefas com mais facilidade.",
        },
        {
          title: "Memória de trabalho",
          description: "Guardar e usar informações em tarefas do dia a dia e da escola.",
        },
        {
          title: "Funções executivas",
          description: "Planejar, organizar e controlar impulsos.",
        },
        {
          title: "Estratégias compensatórias",
          description:
            "Recursos práticos para lidar com dificuldades que persistem.",
        },
      ],
    },
    {
      kind: "steps",
      eyebrow: "Como funciona",
      title: "Como é o processo",
      steps: [
        {
          title: "Avaliação inicial",
          description:
            "Entendemos o histórico e as queixas da criança em conversa sem compromisso.",
        },
        {
          title: "Metas e plano",
          description:
            "Definimos metas específicas e a frequência das sessões com a família.",
        },
        {
          title: "Sessões e reavaliação",
          description:
            "Sessões regulares com revisão periódica dos resultados e dos objetivos.",
        },
      ],
    },
  ],
  faq: {
    heading: "Perguntas frequentes sobre reabilitação cognitiva",
    description: "Dúvidas comuns de famílias sobre o acompanhamento.",
    items: [
      {
        id: "o-que-e-reabilitacao-cognitiva",
        question: "O que é reabilitação cognitiva infantil?",
        answer:
          "É um acompanhamento com metas específicas para fortalecer habilidades como atenção, memória e funções executivas em crianças com dificuldades.",
      },
      {
        id: "diferenca-estimulacao",
        question: "Qual a diferença entre estimulação e reabilitação?",
        answer:
          "A estimulação trabalha o desenvolvimento de forma mais ampla. A reabilitação parte de dificuldades específicas identificadas na avaliação, com metas acompanhadas ao longo do tempo.",
      },
      {
        id: "precisa-de-laudo",
        question: "Preciso de laudo para começar?",
        answer:
          "Não é preciso um laudo para a avaliação inicial. Se for necessário, orientamos a busca por outros profissionais.",
      },
      {
        id: "como-agendar-reabilitacao",
        question: "Como agendo a avaliação inicial?",
        answer:
          "Pelo WhatsApp ou pelo formulário desta página. A avaliação inicial é gratuita e sem compromisso.",
      },
    ],
  },
  related: [
    {
      title: "Estimulação cognitiva",
      description: "Atividades lúdicas para atenção, memória e linguagem.",
      href: "/estimulacao-cognitiva",
    },
    {
      title: "Terapia ABA",
      description: "Intervenção individualizada baseada em evidências.",
      href: "/intervencao-aba",
    },
  ],
  cta: {
    title: "Quer entender como apoiar as dificuldades do seu filho?",
    description:
      "Fale agora com a psicóloga e agende a avaliação inicial gratuita.",
  },
};
