import Link from "next/link";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import Cta from "../components/Cta";
import { ServicesHome } from "../components/ServicesHome";
import { services } from "../data/services";
import { siteUrl } from "@/lib/site";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Terapia ABA e Desenvolvimento Infantil | São Paulo",
  description:
    "Conheça os serviços da Dra. Joana D'Arc: Terapia ABA, desenvolvimento infantil, estimulação e reabilitação cognitiva e orientação à família e escola. São Paulo e online.",
  alternates: { canonical: "/servicos" },
};

const listSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Serviços de Terapia ABA e Desenvolvimento Infantil",
  url: `${siteUrl}/servicos`,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: services
      .filter((s) => s.slug)
      .map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        url: `${siteUrl}${s.slug}`,
      })),
  },
};

export default function Servicos() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }}
      />
      <Header />

      <BreadcrumbComponent title="Serviços de Terapia ABA e Desenvolvimento Infantil" />

      <main>
        <section className="px-4 pt-14">
          <div className="mx-auto max-w-3xl space-y-4 text-center text-base leading-8 text-neutral-700 md:text-lg">
            <p>
              Atendimento psicológico infantil com foco em{" "}
              <Link
                href="/intervencao-aba"
                className="font-semibold text-[#2d3142] underline underline-offset-4 hover:text-[#5d7064]"
              >
                Terapia ABA
              </Link>{" "}
              e no{" "}
              <Link
                href="/desenvolvimento-infantil"
                className="font-semibold text-[#2d3142] underline underline-offset-4 hover:text-[#5d7064]"
              >
                desenvolvimento infantil
              </Link>
              , com planos individualizados, orientação à família e atendimento
              presencial em São Paulo ou online.
            </p>
            <p>
              Não sabe qual serviço é o ideal? Na avaliação inicial gratuita
              entendemos as necessidades da criança e indicamos o melhor
              caminho.
            </p>
          </div>
        </section>

        <ServicesHome />

        <Cta />
      </main>

      <Footer />
    </>
  );
}
