import type { FaqItem } from "./FaqItem";

// Faixa de credenciais logo abaixo do hero.
// TODO(briefing): acrescentar dados reais, ex.: "X anos de experiência", "+N famílias atendidas".
export const trustItems = [
  "Psicóloga CRP 06/145789",
  "Especialista em Análise do Comportamento Aplicada",
  "Atendimento presencial e online",
  "Avaliação inicial gratuita",
];

// TODO(briefing): preencher com bairros/zonas realmente atendidos (atendimento domiciliar).
// Enquanto estiver vazio, a lista de áreas atendidas não é exibida.
export const areasAtendidas: string[] = [];

export const homeFaq: FaqItem[] = [
  {
    id: "o-que-e-terapia-aba",
    question: "O que é Terapia ABA?",
    answer:
      "É uma abordagem baseada na Análise do Comportamento Aplicada que ensina habilidades e reduz comportamentos que prejudicam o dia a dia, com plano individualizado e acompanhamento por dados.",
  },
  {
    id: "terapia-aba-so-autismo",
    question: "A Terapia ABA é só para crianças com autismo?",
    answer:
      "É muito usada no autismo (TEA), mas também pode apoiar crianças com outros transtornos do neurodesenvolvimento. Na avaliação inicial verificamos o que faz sentido para cada caso.",
  },
  {
    id: "onde-sao-as-sessoes",
    question: "Onde acontecem as sessões?",
    answer:
      "Em clínica, em São Paulo, na casa da família ou online, conforme a necessidade e a rotina da criança.",
  },
  {
    id: "quando-comecar",
    question: "Quando devo procurar a Terapia ABA?",
    answer:
      "Quando notar atrasos na comunicação, dificuldades de interação ou comportamentos que preocupam. Não é preciso esperar um laudo fechado para buscar orientação.",
  },
  {
    id: "como-agendar",
    question: "Como agendo a avaliação inicial?",
    answer:
      "Pelo WhatsApp ou pelo formulário desta página. A avaliação inicial é gratuita e sem compromisso.",
  },
  {
    id: "valores",
    question: "Quanto custa a Terapia ABA?",
    // TODO(briefing): informar faixa de valores ou política de preços, se desejado.
    answer:
      "O valor depende da frequência das sessões e da modalidade escolhida. Fale com a psicóloga pelo WhatsApp para receber as informações atualizadas.",
  },
];
