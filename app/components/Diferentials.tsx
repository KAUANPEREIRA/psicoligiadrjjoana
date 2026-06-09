import { LineChart, Target, Microscope, Users } from "lucide-react";

const items = [
  {
    icon: LineChart,
    id: 1,
    title: "Atendimento Humanizado e Individualizado",
    description:
      "Cada criança é avaliada de forma única, respeitando suas necessidades, ritmo de desenvolvimento e características individuais.",
  },

  {
    icon: LineChart,
    id: 2,
    title: "Intervenção Baseada em Evidências Científicas",
    description:
      "Atuação fundamentada na Análise do Comportamento Aplicada (ABA), utilizando estratégias validadas para o desenvolvimento infantil.",
  },

  {
    icon: LineChart,
    id: 3,
    title: "Foco no Desenvolvimento Infantil",
    description:
      "Atendimento direcionado ao desenvolvimento de habilidades cognitivas, comportamentais e emocionais de crianças.",
  },

  {
    icon: LineChart,
    id: 4,
    title: "Trabalho Integrado com Família e Escola",
    description:
      "Envolvimento ativo da família e da escola para garantir continuidade e melhores resultados no desenvolvimento da criança.",
  },

  {
    icon: LineChart,
    id: 5,
    title: "Estratégias Lúdicas no Processo Terapêutico",
    description:
      "Uso de atividades lúdicas para facilitar o aprendizado, engajamento e desenvolvimento de habilidades infantis.",
  },

  {
    icon: LineChart,
    id: 6,
    title: "Formação em Neuropsicologia (Em andamento)",
    description:
      "A profissional está em especialização em Neuropsicologia com Reabilitação Cognitiva, ampliando sua atuação no desenvolvimento infantil.",
  },
];

export const Diferentials = () => {
  return (
    <section
      className="bg-[#faf7f2] py-24"
      aria-labelledby="diferenciais-title"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-[#8f9b8f]">
            Diferenciais
          </span>

          <h2
            className="mt-4 text-5xl text-[#2e2e2e] font-[family-name:var(--font-cormorant)]"
            id="diferenciais-title"
          >
            Por que escolher a Terapia ABA com Joana DArc?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  border
                  border-neutral-200
                  p-8
                  text-center
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    mx-auto
                    mb-6
                    rounded-full
                    bg-[#f5f7f8]
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    size={28}
                    strokeWidth={1.7}
                    className="text-[#6f8f88]"
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg font-medium text-[#2e2e2e] mb-3">
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed text-neutral-500">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
