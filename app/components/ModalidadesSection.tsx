import { Check } from "lucide-react";
import { modalidades } from "../data/modalidades";

export default function ModalidadesSection() {
  return (
    <section aria-labelledby="modalidades-aba" className="bg-[#f5f5f2] py-20">
      <div className="container mx-auto px-4">
        <header className="mx-auto mb-14 max-w-2xl text-center">
          <span className="mb-3 block text-xs font-medium uppercase tracking-[0.25em] text-[#8b8b7a]">
            Modalidades de Atendimento
          </span>

          <h2
            id="modalidades-aba"
            className="text-3xl font-light tracking-tight text-[#1f1f1f] md:text-4xl"
          >
            Como Funciona a Terapia ABA
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#6b6b6b] md:text-base">
            Intervenção individualizada e baseada em dados, com abordagem
            intensiva e resultados mensuráveis.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {modalidades.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                className="
                  group rounded-3xl border border-[#ecece7]
                  bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]
                "
              >
                {/* ICON */}
                <div
                  className="
                    mb-6 flex h-12 w-12 items-center justify-center
                    rounded-xl bg-[#f3f4ef]
                    transition-colors duration-300
                    group-hover:bg-[#e8ebe2]
                  "
                >
                  <Icon className="h-5 w-5 text-[#7f8c72]" />
                </div>

                <h3 className="text-2xl font-light text-[#2a2a2a]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6f6f6f]">
                  {item.description}
                </p>

                <ul className="mt-8 space-y-4">
                  {item.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className="mt-0.5 flex-shrink-0">
                        <Check className="h-4 w-4 text-[#8a9a7b]" />
                      </div>

                      <span className="text-sm text-[#5f5f5f]">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
