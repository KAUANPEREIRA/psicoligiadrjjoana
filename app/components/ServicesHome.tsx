import { services } from "../data/services";
import { CardService } from "../components/CardService";

export function ServicesHome() {
  return (
    <section aria-labelledby="servicos-title" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center flex flex-col items-center justify-center">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#5d7064]">
            Especialidades
          </span>

          <h2 id="servicos-title" className="text-3xl md:text-5xl leading-tight font-medium text-[#2d3142] font-[family-name:var(--font-cormorant)]">
            Serviços para o desenvolvimento infantil
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-600">
            Intervenção comportamental especializada baseada em evidências
            científicas
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id}>
              <CardService
                icon={service.icon}
                title={service.title}
                description={service.description}
                slug={service.slug}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
