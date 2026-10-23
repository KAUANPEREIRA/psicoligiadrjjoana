import { LeadButtons } from "./service-template/LeadButtons";

interface HomeCtaProps {
  title: string;
  location: string;
}

/** Faixa de conversão reutilizável entre as seções da home. */
export function HomeCta({ title, location }: HomeCtaProps) {
  return (
    <section
      aria-label="Agende sua avaliação"
      className="bg-[#2d3142] px-4 py-12 text-center"
    >
      <div className="container mx-auto flex flex-col items-center gap-6">
        <p className="max-w-2xl font-[family-name:var(--font-cormorant)] text-2xl font-medium text-white md:text-3xl">
          {title}
        </p>
        <LeadButtons serviceName="Terapia ABA" location={location} tone="dark" />
      </div>
    </section>
  );
}
