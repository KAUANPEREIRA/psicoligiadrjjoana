import {
  TestimonialCarousel,
  type Testimonial,
} from "./TestimonialCarousel";

// Substituir por depoimentos reais (com autorização) antes de publicar
const testimonials: Testimonial[] = [
  {
    description:
      "A Joana transformou a vida do nosso filho! Com a Terapia ABA, ele começou a se comunicar, desenvolveu habilidades sociais e hoje frequenta a escola com muito mais autonomia. Somos eternamente gratos.",
    name: "Mariana e Paulo R.",
    role: "Pais de criança com TEA",
  },
  {
    description:
      "A Joana transformou a vida do nosso filho! Com a Terapia ABA, ele começou a se comunicar, desenvolveu habilidades sociais e hoje frequenta a escola com muito mais autonomia. Somos eternamente gratos.",
    name: "Mariana e Paulo R.",
    role: "Pais de criança com TEA",
  },
  {
    description:
      "A Joana transformou a vida do nosso filho! Com a Terapia ABA, ele começou a se comunicar, desenvolveu habilidades sociais e hoje frequenta a escola com muito mais autonomia. Somos eternamente gratos.",
    name: "Mariana e Paulo R.",
    role: "Pais de criança com TEA",
  },
];

export const TestimonialHome = () => {
  return (
    <section
      aria-labelledby="depoimentos-title"
      className="bg-[#f3f3ee] px-4 py-16 md:py-24"
    >
      <div className="container mx-auto">
        <div className="mb-10 flex flex-col items-center justify-center text-center md:mb-14">
          <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#5d7064]">
            Depoimentos
          </span>

          <h2
            id="depoimentos-title"
            className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight text-[#2d3142] md:text-5xl"
          >
            O que dizem as famílias
          </h2>
        </div>

        <TestimonialCarousel items={testimonials} />
      </div>
    </section>
  );
};
