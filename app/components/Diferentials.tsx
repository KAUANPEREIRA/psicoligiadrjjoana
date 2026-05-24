import { LineChart, Target, Microscope, Users } from "lucide-react";
const items = [
  {
    icon: LineChart,
    title: "Resultados Mensuráveis",
    description:
      "Coleta de dados sistemática e análise contínua para acompanhar a evolução da criança.",
  },
  {
    icon: Target,
    title: "Plano Individualizado",
    description:
      "Intervenção personalizada baseada nas necessidades específicas de cada criança.",
  },
  {
    icon: Microscope,
    title: "Baseado em Evidências",
    description:
      "Técnicas cientificamente comprovadas e reconhecidas internacionalmente.",
  },
  {
    icon: Users,
    title: "Envolvimento Familiar",
    description:
      "Treinamento e orientação para pais participarem ativamente do desenvolvimento.",
  },
];

export const Diferentials = () => {
  return (
    <section className="bg-[#faf7f2] py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs tracking-[0.25em] uppercase text-[#8f9b8f]">
            Diferenciais
          </span>

          <h2 className="mt-4 text-4xl text-[#2e2e2e] font-[var(--font-cormorant)]">
            Por que escolher a Terapia ABA com Joana D’Arc?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
