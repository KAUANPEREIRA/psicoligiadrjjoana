import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LeadButtons } from "./service-template/LeadButtons";

export function WhatIsAba() {
  return (
    <section
      aria-labelledby="o-que-e-aba-title"
      className="bg-[#f9f9f7] px-4 py-14 md:py-20"
    >
      <div className="container mx-auto">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-2 block font-sans text-sm font-semibold uppercase tracking-[0.12em] text-[#5d7064]">
            Entenda o método
          </span>
          <h2
            id="o-que-e-aba-title"
            className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight text-[#2d3142] md:text-5xl"
          >
            O que é Terapia ABA e para quem é indicada
          </h2>
        </header>

        <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-neutral-700 md:text-lg">
          <p>
            A <strong>Terapia ABA</strong> (Análise do Comportamento Aplicada)
            é uma abordagem científica que estuda como o ambiente influencia o
            comportamento e usa esse conhecimento para ensinar novas habilidades
            e reduzir comportamentos que atrapalham o dia a dia da criança.
          </p>
          <p>
            É muito utilizada na intervenção para o{" "}
            <strong>autismo (TEA)</strong> e pode apoiar também crianças com
            outros transtornos do neurodesenvolvimento. O trabalho foca em
            comunicação, habilidades sociais, autonomia e regulação emocional.
          </p>
          <p>
            Cada plano é individualizado: começamos por uma avaliação, definimos
            objetivos mensuráveis e acompanhamos o progresso por meio de dados,
            sempre com orientação à família para que o aprendizado continue em
            casa e na escola.
          </p>

          <Link
            href="/intervencao-aba"
            className="inline-flex items-center gap-2 font-semibold text-[#2d3142] underline underline-offset-4 hover:text-[#5d7064]"
          >
            Saiba mais sobre a Terapia ABA para autismo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <LeadButtons
          serviceName="Terapia ABA"
          location="o-que-e-aba-home"
          className="mt-10 justify-center"
        />
      </div>
    </section>
  );
}
