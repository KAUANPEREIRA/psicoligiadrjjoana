import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { About } from "./components/About";
import { WhatIsAba } from "./components/WhatIsAba";
import { ServicesHome } from "./components/ServicesHome";
import ModalidadesSection from "@/app/components/ModalidadesSection";
import { Diferentials } from "./components/Diferentials";
import { LocationSection } from "./components/LocationSection";
import { Faq } from "./components/Faq";
import { HomeCta } from "./components/HomeCta";
import { BlogHome } from "./components/BlogHome";
import { TestimonialHome } from "./components/TestimonialHome";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { homeFaq } from "./data/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terapia ABA em São Paulo | Psicóloga Especializada",
  description:
    "Psicóloga especializada em Terapia ABA para crianças com autismo em São Paulo. Atendimento presencial e online com abordagem baseada em evidências científicas.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <WhatIsAba />
        <ServicesHome />
        <HomeCta
          title="Qual serviço faz sentido para o seu filho? Converse com a psicóloga."
          location="apos-servicos-home"
        />
        <ModalidadesSection />
        <Diferentials />
        <LocationSection />
        <Faq
          heading="Perguntas frequentes sobre Terapia ABA"
          description="Respostas às dúvidas mais comuns de famílias que estão conhecendo a Terapia ABA."
          items={homeFaq}
        />
        <HomeCta
          title="Dê o primeiro passo: agende a avaliação inicial gratuita."
          location="apos-faq-home"
        />
        <BlogHome />
        <TestimonialHome />
        <div id="agendar" className="scroll-mt-20">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
