import type { ServicePageData } from "../../types/ServicePage";

export const intervencaoAba: ServicePageData = {
  path: "/intervencao-aba",
  name: "Terapia ABA",
  schemaDescription:
    "Terapia ABA (Análise do Comportamento Aplicada) para crianças com autismo (TEA) e outros transtornos do neurodesenvolvimento, com plano individualizado, em São Paulo e online.",
  hero: {
    badge: "Terapia ABA • São Paulo e online",
    title: "Terapia ABA para autismo em São Paulo",
    description:
      "Intervenção baseada na Análise do Comportamento Aplicada, com foco em comunicação, habilidades sociais e autonomia. Cada plano é montado a partir da avaliação da sua criança.",
    image: "/imagens/intervencao-aba.webp",
    imageAlt: "Criança em sessão de Terapia ABA com a psicóloga",
    highlights: [
      "Plano individualizado, guiado por dados",
      "Atendimento em clínica, domiciliar ou online",
      "Orientação e treino para os pais",
    ],
  },
  trust: [
    "Psicóloga CRP 06/145789",
    "Especialista em ABA",
    "Avaliação inicial gratuita",
    "Presencial e online",
  ],
  sections: [
    {
      kind: "text",
      id: "mais-informacoes",
      eyebrow: "Método baseado em evidências",
      title: "O que é a Terapia ABA?",
      paragraphs: [
        "A Análise do Comportamento Aplicada (ABA) é uma abordagem científica que estuda como o ambiente influencia o comportamento e usa esse conhecimento para ensinar novas habilidades e reduzir comportamentos que atrapalham o dia a dia.",
        "Na prática, a terapia ABA funciona em três passos: identificar o comportamento, analisar o contexto em que ele acontece e construir um plano de intervenção personalizado. As sessões são guiadas por dados, com ajustes contínuos conforme o progresso da criança.",
        "É uma das abordagens mais utilizadas e estudadas na intervenção para o autismo (TEA), e também pode apoiar crianças com outros transtornos do neurodesenvolvimento.",
      ],
    },
    {
      kind: "cards",
      eyebrow: "Para quem é",
      title: "Em que a terapia ABA pode ajudar",
      items: [
        {
          title: "Comunicação",
          description:
            "Desenvolvimento da fala funcional e de formas alternativas de comunicação.",
        },
        {
          title: "Habilidades sociais",
          description:
            "Brincar, compartilhar, esperar a vez e interagir com outras crianças.",
        },
        {
          title: "Autonomia",
          description:
            "Rotinas de higiene, alimentação e organização, com mais independência.",
        },
        {
          title: "Comportamento",
          description:
            "Compreensão das causas dos comportamentos desafiadores e estratégias para manejá-los.",
        },
      ],
    },
    {
      kind: "steps",
      eyebrow: "Como funciona",
      title: "Como começa o acompanhamento",
      intro: "Um caminho claro, do primeiro contato às sessões.",
      steps: [
        {
          title: "Avaliação inicial",
          description:
            "Conhecemos a criança, a família e suas prioridades em uma conversa sem compromisso.",
        },
        {
          title: "Plano individualizado",
          description:
            "Definimos objetivos mensuráveis e a modalidade ideal: clínica, domiciliar ou online.",
        },
        {
          title: "Sessões e acompanhamento",
          description:
            "Sessões guiadas por dados, com orientação aos pais para o aprendizado se manter no dia a dia.",
        },
      ],
    },
    {
      kind: "text",
      eyebrow: "Começar cedo",
      title: "Por que iniciar a intervenção o quanto antes",
      paragraphs: [
        "Na primeira infância o cérebro é especialmente receptivo a novos aprendizados. Por isso, iniciar a intervenção cedo costuma favorecer a evolução da criança, ainda que haja ganhos em qualquer idade.",
        "Não é preciso esperar um laudo fechado para buscar orientação. Se você notou sinais que preocupam, uma avaliação pode esclarecer os próximos passos.",
      ],
    },
  ],
  faq: {
    heading: "Perguntas frequentes sobre Terapia ABA",
    description:
      "Respostas às dúvidas mais comuns de famílias que estão conhecendo a Terapia ABA.",
    items: [
      {
        id: "o-que-e-terapia-aba",
        question: "O que é Terapia ABA?",
        answer:
          "É uma abordagem baseada na Análise do Comportamento Aplicada que ensina habilidades e reduz comportamentos que prejudicam o dia a dia, com plano individualizado e acompanhamento por dados.",
      },
      {
        id: "aba-serve-so-para-autismo",
        question: "A Terapia ABA serve só para autismo?",
        answer:
          "É muito usada no autismo (TEA), mas também pode apoiar crianças com outros transtornos do neurodesenvolvimento. Na avaliação inicial verificamos o que faz sentido para cada caso.",
      },
      {
        id: "modalidades-aba",
        question: "Onde acontecem as sessões?",
        answer:
          "Em clínica, em São Paulo, na casa da família ou online, conforme a necessidade e a rotina da criança.",
      },
      {
        id: "participacao-dos-pais",
        question: "Os pais participam?",
        answer:
          "Sim. A orientação aos pais é parte importante do processo, para que as habilidades sejam praticadas também em casa.",
      },
      {
        id: "como-agendar-aba",
        question: "Como agendo a avaliação inicial?",
        answer:
          "Pelo WhatsApp ou pelo formulário desta página. A avaliação inicial é gratuita e sem compromisso.",
      },
    ],
  },
  related: [
    {
      title: "Desenvolvimento infantil",
      description:
        "Avaliação e acompanhamento das áreas cognitiva, social, de linguagem e motora.",
      href: "/desenvolvimento-infantil",
    },
    {
      title: "Sobre a Dra. Joana D'Arc",
      description: "Conheça a formação e a abordagem da psicóloga.",
      href: "/sobre",
    },
  ],
  cta: {
    title: "Quer entender se a Terapia ABA é indicada para o seu filho?",
    description:
      "Fale agora com a psicóloga e agende a avaliação inicial gratuita.",
  },
};
