import {
  GraduationCap,
  BadgeCheck,
  BookOpen,
  Users,
  Brain,
} from "lucide-react";

const formations = [
  {
    icon: GraduationCap,
    title: "Especialização em Neuropsicologia",
    institution: "Formação com foco em Reabilitação Cognitiva Infantil",
  },
  {
    icon: Brain,
    title: "Neurodesenvolvimento Infantil",
    institution:
      "Atuação voltada ao desenvolvimento cognitivo e comportamental",
  },
  {
    icon: BookOpen,
    title: "Intervenção Baseada em Evidências",
    institution:
      "Estratégias fundamentadas em práticas cientificamente validadas",
  },
  {
    icon: Users,
    title: "Orientação Familiar e Escolar",
    institution: "Trabalho integrado entre criança, família e escola",
  },
];
export const Formation = () => {
  return (
    <>
      <section className="py-16 bg-[#F9FAFB]">
        <div className="container mx-auto px-4 py-16">
          <h2 className="font-[family-name:var(--font-cormorant)] text-center text-4xl md:text-5xl font-medium text-[#2d3142]">
            Formação e Qualificações
          </h2>

          <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">
            Educação continuada e especialização para oferecer o melhor
            atendimento.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {formations.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-semibold text-[#2d3142]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    {item.institution}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="max-w-lg rounded-3xl border border-gray-200 bg-white px-8 py-12 text-center mx-auto mt-12">
            <h3 className="text-xl font-semibold text-[#2d3142]">
              Registro Profissional
            </h3>

            <p className="mt-4 text-lg text-gray-500">
              Conselho Regional de Psicologia de São Paulo
            </p>

            <p className="mt-4 text-xl font-bold text-[#2d3142]">
              CRP 06/123456
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
