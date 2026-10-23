import type { Block } from "@/app/components/BlockRenderer";

export interface BlogPost {
  /** kebab-case, único: vira /blog/<slug> */
  slug: string;
  /** h1 do artigo */
  titulo: string;
  /** texto dos cards (listagem, destaque, home) */
  resumo: string;
  /** <title>, ex.: "Tema | Dra. Joana D'Arc" (até ~60 caracteres) */
  metaTitle: string;
  /** ~150 caracteres */
  metaDescription: string;
  /** vai numa pill, ex.: "Terapia ABA" */
  categoria: string;
  /** texto livre no formato "10 de outubro de 2026" (veja isoFromDataPublicacao) */
  dataPublicacao: string;
  /** opcional, mesmo formato: vira dateModified nos dados estruturados */
  dataAtualizacao?: string;
  /** ex.: "5 min" (a interface acrescenta " de leitura") */
  tempoLeitura: string;
  /** "/blog/<arquivo>.webp" (dentro de public/) */
  imagemUrl: string;
  imagemAlt: string;
  blocos: Block[];
}

const MESES = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

/** "10 de outubro de 2026" -> "2026-10-10". Formato inválido devolve undefined. */
export function isoFromDataPublicacao(texto: string): string | undefined {
  const partes = texto
    .trim()
    .toLowerCase()
    .match(/^(\d{1,2}) de ([a-zç]+) de (\d{4})$/);
  if (!partes) return undefined;

  const mes = MESES.indexOf(partes[2]) + 1;
  if (mes === 0) return undefined;

  return `${partes[3]}-${String(mes).padStart(2, "0")}-${partes[1].padStart(2, "0")}`;
}

/** Quantidade de palavras do corpo (wordCount dos dados estruturados). */
export function contarPalavras(post: Pick<BlogPost, "blocos">): number {
  const textos = post.blocos.flatMap((bloco): string[] => {
    switch (bloco.type) {
      case "paragraph":
      case "heading":
        return [bloco.text];
      case "list":
        return bloco.items;
      case "callout":
        return [bloco.title ?? "", bloco.text];
      case "quote":
        return [bloco.text];
      case "image":
        return [bloco.caption ?? ""];
      case "cta":
        return [bloco.title, bloco.description, bloco.buttonText];
      case "table":
        return [...bloco.headers, ...bloco.rows.flat()];
    }
  });

  return textos.join(" ").match(/[\p{L}\p{N}]+/gu)?.length ?? 0;
}

export const blogListing = {
  featured: {
    id: "blog-destaque",
    title: "Artigo em destaque",
    description:
      "Leitura recomendada sobre Terapia ABA, autismo e desenvolvimento infantil.",
  },
  latest: {
    id: "blog-ultimos",
    eyebrow: "Publicações recentes",
    title: "Últimos artigos publicados",
    description:
      "Informações essenciais sobre análise do comportamento aplicada e desenvolvimento infantil.",
    listLabel: "Últimos artigos", // nome acessível da <ul>
  },
} as const;

export const blogHome = {
  /** quantos artigos aparecem na home */
  count: 3,
};

// A ORDEM importa: blogPosts[0] é o destaque do /blog; slice(1) vai para o grid.
// Artigo novo entra NO INÍCIO do array.
export const blogPosts: BlogPost[] = [
  {
    slug: "o-que-e-terapia-aba",
    titulo: "O que é Terapia ABA e como funciona no tratamento do autismo",
    resumo:
      "Entenda os princípios da Análise do Comportamento Aplicada e como a terapia apoia o desenvolvimento de crianças com TEA.",
    metaTitle: "O que é Terapia ABA e como funciona | Dra. Joana D'Arc",
    metaDescription:
      "Entenda o que é a Terapia ABA, como as sessões funcionam e quais habilidades ela trabalha no apoio a crianças com autismo (TEA). Guia para pais.",
    categoria: "Terapia ABA",
    dataPublicacao: "12 de abril de 2025",
    tempoLeitura: "4 min",
    imagemUrl: "/blog/blog-01.webp",
    imagemAlt: "Criança em sessão de Terapia ABA com a psicóloga",
    blocos: [
      {
        type: "paragraph",
        text: "A Terapia ABA (em inglês, Applied Behavior Analysis, ou Análise do Comportamento Aplicada) é uma abordagem baseada na ciência do comportamento. Ela é muito citada quando o assunto é autismo, mas ainda gera dúvidas: o que ela faz, como são as sessões e para quem é indicada?",
      },
      {
        type: "heading",
        level: 2,
        text: "O que é a Análise do Comportamento Aplicada",
      },
      {
        type: "paragraph",
        text: "A ABA estuda como o ambiente influencia o comportamento e usa esse conhecimento para ensinar habilidades novas e reduzir comportamentos que atrapalham a aprendizagem e a convivência. Um dos princípios centrais é o reforço: quando uma ação é seguida de uma consequência positiva para a criança, ela tende a se repetir.",
      },
      {
        type: "paragraph",
        text: "No tratamento do autismo, a ABA não busca “normalizar” a criança. O foco é ampliar a comunicação, a autonomia e a participação nas rotinas da família e da escola, respeitando as características e o ritmo de cada uma.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Autismo não é uma doença a ser curada",
        text: "O Transtorno do Espectro Autista (TEA) faz parte da diversidade humana. O objetivo da intervenção é apoiar o desenvolvimento e a qualidade de vida da criança, e não eliminar o que a torna única.",
      },
      {
        type: "heading",
        level: 2,
        text: "Como a Terapia ABA funciona na prática",
      },
      {
        type: "paragraph",
        text: "Cada plano é individual, mas o caminho costuma seguir etapas parecidas:",
      },
      {
        type: "list",
        style: "number",
        items: [
          "Avaliação inicial: conversa com a família e observação da criança para mapear o que ela já faz, as dificuldades e os interesses.",
          "Definição de objetivos: metas claras e realistas, combinadas com os responsáveis, como pedir o que deseja, esperar a vez ou ganhar independência na higiene.",
          "Ensino em pequenos passos: as habilidades são divididas em etapas, com um apoio que diminui aos poucos conforme a criança avança.",
          "Registro de dados: as respostas da criança são anotadas a cada sessão para mostrar o que está funcionando.",
          "Revisão do plano: com os dados em mãos, a equipe ajusta estratégias e metas sempre que necessário.",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Como são as sessões",
      },
      {
        type: "paragraph",
        text: "As sessões costumam combinar momentos mais estruturados com atividades naturais, como brincadeiras e situações do dia a dia, nas quais a criança tem motivação para aprender. O brincar é um dos principais recursos: é nele que muitas habilidades de comunicação e interação social são treinadas.",
      },
      {
        type: "paragraph",
        text: "A duração e a frequência variam conforme a necessidade da criança e a indicação profissional, por isso não existe uma carga de horas igual para todos.",
      },
      {
        type: "heading",
        level: 2,
        text: "Quais habilidades podem ser trabalhadas",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Comunicação, seja por fala, gestos, figuras ou outros recursos",
          "Atenção compartilhada e interação com outras pessoas",
          "Brincadeiras e habilidades sociais",
          "Autonomia nas atividades diárias, como alimentação, vestir-se e higiene",
          "Flexibilidade diante de mudanças de rotina",
          "Regulação emocional e manejo de comportamentos desafiadores",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "O papel da família",
      },
      {
        type: "paragraph",
        text: "Os resultados são mais consistentes quando o que é ensinado na sessão também acontece em casa e na escola. Por isso, a orientação aos responsáveis faz parte do trabalho. Conheça a nossa Intervenção ABA e veja como funciona o trabalho de família e escola.",
        links: [
          { match: "Intervenção ABA", href: "/intervencao-aba" },
          { match: "família e escola", href: "/familia-e-escola" },
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Perguntas frequentes",
      },
      {
        type: "heading",
        level: 3,
        text: "A Terapia ABA serve para todas as crianças com autismo?",
      },
      {
        type: "paragraph",
        text: "A ABA é adaptada a cada criança, mas a indicação, a intensidade e as metas dependem de uma avaliação individual. Ela costuma funcionar melhor quando integrada a outras áreas, como fonoaudiologia e terapia ocupacional, de acordo com as necessidades de cada caso.",
      },
      {
        type: "heading",
        level: 3,
        text: "A criança precisa de diagnóstico para começar?",
      },
      {
        type: "paragraph",
        text: "O diagnóstico de autismo é feito por profissionais de saúde habilitados, como médicos e equipe multiprofissional. A avaliação comportamental da ABA ajuda a entender as necessidades da criança, mas não substitui o diagnóstico.",
      },
      {
        type: "heading",
        level: 3,
        text: "A criança sofre ou se cansa demais nas sessões?",
      },
      {
        type: "paragraph",
        text: "Uma boa intervenção respeita os limites da criança, usa reforço positivo e valoriza o vínculo com o terapeuta. Se algo parecer desconfortável, converse com o profissional para ajustar o plano.",
      },
      {
        type: "callout",
        variant: "warning",
        title: "Conteúdo informativo",
        text: "Este artigo não substitui a avaliação de um profissional de saúde. Cada criança é única e precisa de um plano individualizado.",
      },
      {
        type: "cta",
        title: "Quer entender se a Terapia ABA é indicada para o seu filho?",
        description:
          "Converse com a nossa equipe e agende uma consulta para conhecer o plano mais adequado para a sua criança.",
        buttonText: "Agendar consulta",
        href: "/contato",
      },
    ],
  },
  {
    slug: "sinais-precoces-do-autismo-em-criancas",
    titulo: "Sinais precoces do autismo em crianças",
    resumo:
      "Como identificar sinais iniciais e quando buscar avaliação especializada.",
    metaTitle: "Sinais precoces do autismo em crianças | Dra. Joana D'Arc",
    metaDescription:
      "Conheça os sinais precoces do autismo na primeira infância, como eles aparecem em bebês e crianças pequenas e quando procurar uma avaliação especializada.",
    categoria: "Autismo",
    dataPublicacao: "10 de abril de 2025",
    tempoLeitura: "3 min",
    imagemUrl: "/blog/blog-02.webp",
    imagemAlt: "Criança brincando, ilustrando sinais precoces do autismo",
    blocos: [
      {
        type: "paragraph",
        text: "Quanto antes a família e os profissionais de saúde percebem que o desenvolvimento da criança segue um caminho diferente, mais cedo ela pode receber apoio. Os sinais do autismo costumam aparecer nos primeiros anos de vida, mas variam muito de uma criança para outra.",
      },
      {
        type: "callout",
        variant: "info",
        title: "Um sinal isolado não é um diagnóstico",
        text: "Observar um ou outro comportamento da lista abaixo não significa que a criança tem autismo. O que importa é o conjunto de sinais, a frequência e o quanto eles afetam a comunicação e a convivência. Só uma avaliação profissional pode confirmar.",
      },
      {
        type: "heading",
        level: 2,
        text: "Sinais na comunicação e na interação social",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Pouco contato visual ou dificuldade em manter o olhar durante a interação",
          "Não responder quando é chamada pelo nome com frequência, mesmo quando a audição está adequada",
          "Pouco interesse em apontar, mostrar objetos ou compartilhar descobertas com os adultos",
          "Poucos sorrisos e expressões de afeto em resposta aos outros",
          "Dificuldade em brincar com outras crianças ou pouca imitação de gestos e sons",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Sinais na linguagem",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Poucos gestos, como acenar e apontar, e balbucio reduzido no primeiro ano de vida",
          "Atraso no início da fala ou perda de palavras que a criança já usava",
          "Repetição de palavras ou frases ouvidas, sem função comunicativa (ecolalia)",
          "Uso da mão do adulto como ferramenta, em vez de pedir o que deseja",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Sinais no comportamento e nos interesses",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Movimentos repetitivos com o corpo ou com objetos, como balançar as mãos ou girar as rodas de um carrinho",
          "Interesses muito intensos e específicos por um tema ou objeto",
          "Dificuldade com mudanças de rotina, com choro ou irritação intensos",
          "Reações incomuns a sons, luzes, texturas e sabores, mais fortes ou mais fracas do que o esperado",
          "Pouca brincadeira de faz de conta ou brincadeiras sempre iguais",
        ],
      },
      {
        type: "paragraph",
        text: "Esses sinais aparecem em intensidades diferentes. Algumas crianças têm muita dificuldade com a linguagem; outras falam bem, mas encontram barreiras na interação. Por isso se fala em espectro.",
      },
      {
        type: "heading",
        level: 2,
        text: "Quando procurar avaliação",
      },
      {
        type: "paragraph",
        text: "Procure o pediatra se você perceber um ou mais desses sinais, se a criança perdeu habilidades que já tinha ou se algo no desenvolvimento deixa você preocupado. Nas consultas de rotina, o pediatra acompanha os marcos do desenvolvimento, pode aplicar instrumentos de triagem e encaminhar a criança para avaliação com especialistas, como neuropediatra, psiquiatra infantil, psicólogo e fonoaudiólogo.",
      },
      {
        type: "callout",
        variant: "tip",
        title: "Confie no que você observa",
        text: "Pais e cuidadores convivem todos os dias com a criança e costumam ser os primeiros a notar mudanças. Anotar exemplos concretos (o que aconteceu, quando e com que frequência) ajuda muito na consulta.",
      },
      {
        type: "heading",
        level: 2,
        text: "E depois da avaliação?",
      },
      {
        type: "paragraph",
        text: "Se houver indicação, o acompanhamento pode envolver diferentes profissionais e intervenções voltadas ao desenvolvimento da criança. A Terapia ABA é uma das possibilidades, sempre a partir de um plano individualizado. Conheça o nosso trabalho de desenvolvimento infantil e de Intervenção ABA.",
        links: [
          {
            match: "desenvolvimento infantil",
            href: "/desenvolvimento-infantil",
          },
          { match: "Intervenção ABA", href: "/intervencao-aba" },
        ],
      },
      {
        type: "cta",
        title: "Notou algum desses sinais no seu filho?",
        description:
          "Fale com a nossa equipe e tire as suas dúvidas sobre o desenvolvimento da sua criança.",
        buttonText: "Agendar consulta",
        href: "/contato",
      },
    ],
  },
  {
    slug: "como-a-familia-pode-ajudar-no-tratamento-aba",
    titulo: "Como a família pode ajudar no tratamento ABA",
    resumo: "Estratégias práticas para pais e cuidadores no dia a dia.",
    metaTitle: "Como a família ajuda no tratamento ABA | Dra. Joana D'Arc",
    metaDescription:
      "Estratégias práticas para pais e cuidadores apoiarem a Terapia ABA em casa: rotina, comunicação, reforço positivo e parceria com a escola e a equipe.",
    categoria: "Orientação a pais",
    dataPublicacao: "8 de abril de 2025",
    tempoLeitura: "3 min",
    imagemUrl: "/blog/blog-03.webp",
    imagemAlt: "Família participando do acompanhamento terapêutico da criança",
    blocos: [
      {
        type: "paragraph",
        text: "Na Terapia ABA, a criança passa algumas horas por semana com o terapeuta, mas vive a maior parte do tempo em casa e na escola. É nesses ambientes que as habilidades aprendidas ganham sentido. Por isso a participação da família faz diferença, e não precisa ser complicada: pequenas atitudes repetidas no dia a dia já ajudam.",
      },
      {
        type: "heading",
        level: 2,
        text: "Mantenha uma rotina previsível",
      },
      {
        type: "paragraph",
        text: "Crianças com autismo costumam se sentir mais seguras quando sabem o que vai acontecer. Horários regulares para acordar, comer, brincar e dormir reduzem a ansiedade. Quando a mudança for inevitável, avise com antecedência e, se ajudar, use apoios visuais, como quadros com figuras que mostram a sequência do dia.",
      },
      {
        type: "heading",
        level: 2,
        text: "Reforce o que a criança faz de bom",
      },
      {
        type: "paragraph",
        text: "O reforço positivo é um dos pilares da ABA. Elogie de forma específica (“gostei de como você esperou a sua vez”), ofereça algo de que a criança goste logo depois do comportamento desejado e comemore até os pequenos avanços. Isso aumenta a chance de a habilidade se repetir.",
      },
      {
        type: "heading",
        level: 2,
        text: "Comunique-se de forma clara",
      },
      {
        type: "list",
        style: "bullet",
        items: [
          "Use frases curtas e diretas, dando uma instrução de cada vez",
          "Fale na altura da criança e espere o tempo dela para responder",
          "Valorize qualquer forma de comunicação: fala, gestos, figuras ou outros recursos indicados pela equipe",
          "Evite antecipar todos os pedidos e abra espaço para a criança pedir",
        ],
      },
      {
        type: "heading",
        level: 2,
        text: "Pratique em casa o que é trabalhado na terapia",
      },
      {
        type: "paragraph",
        text: "Peça orientações ao terapeuta sobre quais habilidades podem ser treinadas em casa e como fazer isso nas situações do cotidiano: na hora do banho, das refeições ou das brincadeiras. A orientação aos responsáveis faz parte da nossa Intervenção ABA.",
        links: [{ match: "Intervenção ABA", href: "/intervencao-aba" }],
      },
      {
        type: "heading",
        level: 2,
        text: "Alinhe casa, escola e terapia",
      },
      {
        type: "paragraph",
        text: "Quando todos usam estratégias parecidas, a criança entende melhor o que se espera dela. Compartilhe com a escola as orientações da equipe e converse com os professores sobre o que funciona. Veja como é o nosso trabalho com família e escola.",
        links: [{ match: "família e escola", href: "/familia-e-escola" }],
      },
      {
        type: "callout",
        variant: "warning",
        title: "Evite punições e comparações",
        text: "Broncas, castigos e comparações com outras crianças não ensinam a habilidade que falta e podem aumentar o estresse. Em vez disso, ensine o comportamento esperado e reforce quando ele acontecer.",
      },
      {
        type: "heading",
        level: 2,
        text: "Cuide também de você",
      },
      {
        type: "paragraph",
        text: "Cuidar de uma criança com necessidades específicas pode ser cansativo. Dividir tarefas com outros familiares, buscar grupos de apoio e reservar momentos de descanso não é egoísmo: é o que sustenta o cuidado a longo prazo. Se você sente que está sobrecarregado, converse com um profissional de saúde mental.",
      },
      {
        type: "cta",
        title: "Quer orientação para apoiar o seu filho em casa?",
        description:
          "Agende uma consulta e descubra como a sua família pode fazer parte do processo.",
        buttonText: "Agendar consulta",
        href: "/contato",
      },
    ],
  },
];
