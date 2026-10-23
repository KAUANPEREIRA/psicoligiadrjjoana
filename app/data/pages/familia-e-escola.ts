import type { ServicePageData } from "../../types/ServicePage";

export const familiaEscola: ServicePageData = {
  path: "/familia-e-escola",
  name: "Orientação à Família e Escola",
  schemaDescription:
    "Trabalho integrado com família e escola para apoiar o desenvolvimento infantil: orientação aos pais, parceria com professores e estratégias consistentes entre casa e escola.",
  hero: {
    badge: "Família e escola • São Paulo e online",
    title: "Trabalho integrado com família e escola",
    description:
      "O desenvolvimento da criança acontece em casa, na escola e na terapia. Quando esses ambientes trabalham juntos, com as mesmas estratégias, o progresso fica mais consistente.",
    image: "/imagens/desenvolvimento-infantil.webp",
    imageAlt: "Família em orientação com a psicóloga infantil",
    highlights: [
      "Orientação prática aos pais e cuidadores",
      "Parceria com professores e equipe escolar",
      "Estratégias alinhadas entre casa e escola",
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
      eyebrow: "Por que integrar",
      title: "Por que família e escola precisam caminhar juntas",
      paragraphs: [
        "A criança aprende e se comporta de formas diferentes em cada ambiente. Se em casa, na escola e na terapia as regras e as respostas dos adultos são diferentes, o aprendizado tende a ficar restrito a um só lugar.",
        "Com orientação e comunicação entre todos, as estratégias se repetem de maneira coerente. Isso ajuda a criança a generalizar o que aprende e dá mais segurança aos adultos para lidar com situações difíceis.",
      ],
    },
    {
      kind: "cards",
      eyebrow: "O que fazemos",
      title: "Como é o trabalho com família e escola",
      items: [
        {
          title: "Orientação aos pais",
          description:
            "Encontros para tirar dúvidas e treinar estratégias aplicáveis na rotina da casa.",
        },
        {
          title: "Conversa com a escola",
          description:
            "Alinhamento com professores e coordenação sobre as necessidades e as adaptações úteis.",
        },
        {
          title: "Rotinas e combinados",
          description:
            "Construção de rotinas previsíveis e regras claras, iguais nos diferentes ambientes.",
        },
        {
          title: "Acompanhamento do progresso",
          description:
            "Revisão periódica dos objetivos com a família e ajustes no plano quando preciso.",
        },
      ],
    },
    {
      kind: "steps",
      eyebrow: "Como funciona",
      title: "Como começamos",
      steps: [
        {
          title: "Conversa com a família",
          description:
            "Entendemos a rotina, as dúvidas e as prioridades de vocês, em uma conversa sem compromisso.",
        },
        {
          title: "Alinhamento com a escola",
          description:
            "Com a autorização da família, conversamos com a escola para alinhar objetivos e estratégias.",
        },
        {
          title: "Prática e acompanhamento",
          description:
            "Aplicamos as estratégias combinadas e revisamos os resultados com todos os envolvidos.",
        },
      ],
    },
  ],
  faq: {
    heading: "Perguntas frequentes sobre orientação à família e escola",
    description:
      "Dúvidas comuns de pais e responsáveis sobre a atuação integrada.",
    items: [
      {
        id: "preciso-fazer-terapia",
        question: "Preciso ter a criança em terapia para receber orientação?",
        answer:
          "Em geral a orientação faz parte de um acompanhamento. Na conversa inicial avaliamos a melhor forma de apoiar a sua família.",
      },
      {
        id: "escola-participa",
        question: "A escola participa do processo?",
        answer:
          "Sim, com a autorização da família. Conversamos com professores e coordenação para alinhar estratégias.",
      },
      {
        id: "orientacao-online",
        question: "A orientação pode ser online?",
        answer:
          "Sim. Os encontros de orientação com os pais podem ser feitos por vídeo, o que facilita a rotina da família.",
      },
      {
        id: "como-agendar-familia",
        question: "Como agendo uma conversa?",
        answer:
          "Pelo WhatsApp ou pelo formulário desta página. A avaliação inicial é gratuita e sem compromisso.",
      },
    ],
  },
  related: [
    {
      title: "Terapia ABA",
      description: "Intervenção individualizada baseada em evidências.",
      href: "/intervencao-aba",
    },
    {
      title: "Desenvolvimento infantil",
      description: "Avaliação e acompanhamento das áreas do desenvolvimento.",
      href: "/desenvolvimento-infantil",
    },
  ],
  cta: {
    title: "Quer alinhar casa e escola em favor do seu filho?",
    description:
      "Fale agora com a psicóloga e agende uma conversa inicial gratuita.",
  },
};
