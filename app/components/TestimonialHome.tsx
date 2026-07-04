import { CardTestimonial } from "./CardTestimonial";

export const TestimonialHome = () => {
  return (
    <section className="bg-[#f3f3ee] py-24">
      <div className="mb-14 text-center flex flex-col items-center justify-center column">
        <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#8fa998]">
          Depoimentos
        </span>

        <h2 className="text-[2rem] leading-[48px] font-medium text-[#2d3142] font-cormorant">
          O que dizem as famílias
        </h2>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 place-items-center md:place-items-start">
          <CardTestimonial
            description="
    A Joana transformou a vida do nosso filho! Com a Terapia ABA,
    ele começou a se comunicar, desenvolveu habilidades sociais
    e hoje frequenta a escola com muito mais autonomia.
    Somos eternamente gratos.
  "
            name="Mariana e Paulo R."
            role="Pais de criança com TEA"
          />
          <CardTestimonial
            description="
    A Joana transformou a vida do nosso filho! Com a Terapia ABA,
    ele começou a se comunicar, desenvolveu habilidades sociais
    e hoje frequenta a escola com muito mais autonomia.
    Somos eternamente gratos.
  "
            name="Mariana e Paulo R."
            role="Pais de criança com TEA"
          />
          <CardTestimonial
            description="
    A Joana transformou a vida do nosso filho! Com a Terapia ABA,
    ele começou a se comunicar, desenvolveu habilidades sociais
    e hoje frequenta a escola com muito mais autonomia.
    Somos eternamente gratos.
  "
            name="Mariana e Paulo R."
            role="Pais de criança com TEA"
          />
        </div>
      </div>
    </section>
  );
};
