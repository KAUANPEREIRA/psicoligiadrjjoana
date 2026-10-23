import { Activity, Brain, MessageCircle, Users } from "lucide-react";
import type { ServicePageData } from "../../types/ServicePage";

export const desenvolvimentoInfantil: ServicePageData = {
  path: "/desenvolvimento-infantil",
  name: "Acompanhamento do Desenvolvimento Infantil",
  schemaDescription:
    "Avaliação e acompanhamento psicológico do desenvolvimento infantil (cognitivo, social, linguagem e motor), com orientação aos pais, em São Paulo e online.",
  hero: {
    badge: "Psicóloga infantil • São Paulo e online",
    title: "Desenvolvimento Infantil: avaliação e acompanhamento especializado",
    description:
      "Cada criança tem seu ritmo. Identificamos o que o seu filho precisa e criamos as condições para que ele se desenvolva com segurança, confiança e alegria, com orientação próxima para a família.",
    image: "/imagens/desenvolvimento-infantil.webp",
    imageAlt:
      "Criança em atendimento de desenvolvimento infantil com a psicóloga",
    highlights: [
      "Avaliação inicial individualizada",
      "Plano de intervenção baseado em evidências",
      "Orientação e acompanhamento da família",
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
      eyebrow: "Por que importa",
      title: "Por que o desenvolvimento infantil merece atenção desde cedo",
      paragraphs: [
        "Os primeiros anos de vida são o período de maior neuroplasticidade do cérebro. É nessa fase que se formam as bases da linguagem, da cognição, da regulação emocional e do comportamento social.",
        "Intervenções nesse período tendem a ser mais eficazes, porque a criança está em plena construção dessas habilidades. Isso não significa que mudar depois seja impossível, mas quanto antes o suporte chega, mais leve costuma ser o caminho.",
        "Você não precisa esperar um diagnóstico para buscar ajuda. Qualquer preocupação com o ritmo de desenvolvimento, o comportamento, a comunicação ou a aprendizagem já é motivo legítimo para uma avaliação especializada.",
      ],
    },
    {
      kind: "cards",
      eyebrow: "Áreas avaliadas",
      title: "O que é desenvolvimento infantil e o que observamos",
      intro:
        "O desenvolvimento acontece em várias áreas ao mesmo tempo, e todas se influenciam. Por isso o nosso olhar é integrado.",
      items: [
        {
          icon: Brain,
          title: "Cognitivo",
          description:
            "Memória, atenção, raciocínio e forma de aprender: a base do desenvolvimento escolar.",
        },
        {
          icon: Users,
          title: "Social e emocional",
          description:
            "Interação com outras crianças e adultos, empatia e manejo das emoções.",
        },
        {
          icon: MessageCircle,
          title: "Linguagem",
          description:
            "Comunicação verbal e não verbal, expressão e compreensão.",
        },
        {
          icon: Activity,
          title: "Motor",
          description:
            "Coordenação fina e grossa e equilíbrio, importantes para a autonomia no dia a dia.",
        },
      ],
    },
    {
      kind: "steps",
      eyebrow: "Como funciona",
      title: "Do primeiro contato ao acompanhamento",
      intro: "Um processo simples e transparente, em três passos.",
      steps: [
        {
          title: "Conversa inicial",
          description:
            "Você conta suas dúvidas pelo WhatsApp ou formulário e agendamos a avaliação inicial, sem compromisso.",
        },
        {
          title: "Avaliação e plano",
          description:
            "Observamos o desenvolvimento da criança e definimos objetivos personalizados junto com a família.",
        },
        {
          title: "Sessões e orientação",
          description:
            "Sessões regulares com orientação aos pais para que o progresso continue em casa e na escola.",
        },
      ],
    },
    {
      kind: "cards",
      eyebrow: "Benefícios",
      title: "Benefícios do acompanhamento especializado",
      items: [
        {
          title: "Desenvolvimento integrado",
          description:
            "Todas as áreas são trabalhadas em conjunto, favorecendo aprendizados mais consistentes.",
        },
        {
          title: "Mais autonomia",
          description:
            "Rotinas funcionais ajudam a criança a ganhar independência no cotidiano.",
        },
        {
          title: "Apoio na vida escolar",
          description:
            "Trabalho com atenção, linguagem e regulação emocional, que sustentam a aprendizagem.",
        },
        {
          title: "Família mais confiante",
          description:
            "Orientação prática para lidar com comportamentos desafiadores no dia a dia.",
        },
      ],
    },
  ],
  faq: {
    heading: "Perguntas frequentes sobre desenvolvimento infantil",
    description:
      "Respostas às dúvidas mais comuns de pais e responsáveis sobre avaliação e acompanhamento.",
    items: [
      {
        id: "o-que-e-desenvolvimento-infantil",
        question: "O que é desenvolvimento infantil?",
        answer:
          "É o processo de crescimento físico, cognitivo, emocional e social da criança, que envolve motricidade, linguagem, interação social e capacidade de aprendizagem.",
      },
      {
        id: "quando-procurar-especialista",
        question: "Quando devo procurar uma psicóloga infantil?",
        answer:
          "Quando notar atrasos na fala, dificuldades motoras, comportamentos que preocupam, dificuldades de aprendizagem ou qualquer dúvida sobre o desenvolvimento. Buscar ajuda cedo costuma facilitar o processo.",
      },
      {
        id: "como-funciona-acompanhamento",
        question: "Como funciona o acompanhamento?",
        answer:
          "Começa com uma avaliação inicial, seguida da definição de objetivos personalizados, sessões regulares e orientação aos pais.",
      },
      {
        id: "importancia-intervencao-precoce",
        question: "Qual a importância da intervenção precoce?",
        answer:
          "A primeira infância é um período de grande plasticidade cerebral. Apoiar a criança nessa fase tende a favorecer sua autonomia e seu desempenho escolar.",
      },
      {
        id: "quanto-tempo-resultados",
        question: "Quanto tempo leva para ver resultados?",
        answer:
          "Varia conforme a criança e as necessidades de cada caso. Na avaliação inicial conversamos sobre expectativas realistas para o seu filho.",
      },
      {
        id: "acompanhamento-online",
        question: "Posso fazer o acompanhamento online?",
        answer:
          "Sim, para algumas modalidades. A avaliação inicial e o trabalho de coordenação motora costumam ser presenciais, em São Paulo.",
      },
    ],
  },
  related: [
    {
      title: "Terapia ABA para autismo",
      description:
        "Intervenção baseada em Análise do Comportamento Aplicada, com plano individualizado.",
      href: "/intervencao-aba",
    },
    {
      title: "Sobre a Dra. Joana D'Arc",
      description: "Conheça a formação e a abordagem da psicóloga.",
      href: "/sobre",
    },
  ],
  cta: {
    title: "Tem dúvidas sobre o desenvolvimento do seu filho?",
    description:
      "Converse agora com a psicóloga e agende a avaliação inicial gratuita.",
  },
};
