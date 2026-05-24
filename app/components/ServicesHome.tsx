import { services } from "../data/services";
import { CardService } from "../components/CardService";

export function ServicesHome() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-14 text-center flex flex-col items-center justify-center column">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#8fa998]">
            Especialidades
          </span>

          <h2 className="text-[2rem] leading-[48px] font-medium text-[#2d3142] font-cormorant">
            Serviços de Terapia ABA
          </h2>
          <p>
            Intervenção comportamental especializada baseada em evidências
            científicas
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <CardService
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
