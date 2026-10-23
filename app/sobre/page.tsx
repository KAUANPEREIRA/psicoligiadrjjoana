import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import Image from "next/image";
import Link from "next/link";
import { Formation } from "../components/Formation";
import Cta from "../components/Cta";
import { LeadButtons } from "../components/service-template/LeadButtons";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. Joana D'Arc | Psicóloga Especialista em Terapia ABA em SP",
  description:
    "Conheça a Dra. Joana D'Arc, psicóloga CRP 06/145789 especializada em Terapia ABA e desenvolvimento infantil no TEA, com atendimento em São Paulo e online.",
  alternates: { canonical: "/sobre" },
};

export default function Sobre() {
  return (
    <>
      <Header />

      <BreadcrumbComponent title="Sobre" heading={false} />

      <main>
        <section aria-labelledby="sobre-title">
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-12">
              <div className="relative h-[480px] w-full overflow-hidden rounded-lg bg-[#faf7f2] shadow-lg md:h-[600px]">
                <Image
                  src="/imagens/dr-joana.webp"
                  alt="Dra. Joana D'Arc, psicóloga especialista em Terapia ABA em São Paulo"
                  width={600}
                  height={800}
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="h-full w-full rounded-lg object-cover object-top"
                />
              </div>

              <div>
                <span className="mb-2 block text-sm font-semibold uppercase tracking-[0.12em] text-[#5d7064]">
                  Psicóloga CRP 06/145789
                </span>
                <h1
                  id="sobre-title"
                  className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight text-[#2e3447] md:text-5xl"
                >
                  Dra. Joana D&apos;Arc
                  <span className="block text-[#5d7064]">
                    Psicóloga especialista em Terapia ABA
                  </span>
                </h1>

                <div className="mt-6 space-y-4 text-base leading-8 text-neutral-700">
                  <p>
                    Sou psicóloga especializada em Análise do Comportamento
                    Aplicada (ABA), com foco em intervenção comportamental no
                    desenvolvimento infantil de crianças e adolescentes com
                    Transtorno do Espectro Autista (TEA) e outros transtornos do
                    neurodesenvolvimento.
                  </p>
                  <p>
                    Minha abordagem é baseada em evidências científicas e usa
                    técnicas da{" "}
                    <Link
                      href="/intervencao-aba"
                      className="font-semibold text-[#2d3142] underline underline-offset-4 hover:text-[#5d7064]"
                    >
                      Terapia ABA
                    </Link>{" "}
                    para promover habilidades sociais, comunicação, autonomia e
                    regulação emocional. Cada plano é individualizado e nasce de
                    uma avaliação detalhada das necessidades da criança.
                  </p>
                  <p>
                    Acompanho crianças com dificuldades de desenvolvimento,
                    comportamento, atenção e aprendizagem, com atendimento
                    presencial em São Paulo e suporte online para famílias de
                    todo o Brasil, sempre com foco em evolução gradual e
                    funcional. Conheça também o trabalho de{" "}
                    <Link
                      href="/desenvolvimento-infantil"
                      className="font-semibold text-[#2d3142] underline underline-offset-4 hover:text-[#5d7064]"
                    >
                      desenvolvimento infantil
                    </Link>{" "}
                    e de{" "}
                    <Link
                      href="/familia-e-escola"
                      className="font-semibold text-[#2d3142] underline underline-offset-4 hover:text-[#5d7064]"
                    >
                      orientação à família e escola
                    </Link>
                    .
                  </p>
                </div>

                <LeadButtons
                  serviceName="Terapia ABA"
                  location="sobre"
                  formHref="/contato"
                  className="mt-8"
                />
              </div>
            </div>
          </div>
        </section>

        <Formation />
        <Cta />
      </main>

      <Footer />
    </>
  );
}
