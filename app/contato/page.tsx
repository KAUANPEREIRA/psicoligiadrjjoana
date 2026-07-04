import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import { Button } from "@/components/ui/button";

import Cta from "../components/Cta";
import { ContactForm } from "../components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entre em Contato | Agende Consulta - Dra. Joana ABA",
  description:
    "Agende sua avaliação inicial gratuita! Contato direto com a psicóloga especialista em Terapia ABA. Respondemos em até 24h. Atendimento em São Paulo e online.",
};

export default function Contato() {
  return (
    <>
      <Header />

      <BreadcrumbComponent title="Contato" />
      <ContactForm />
      <Cta />

      <Footer />
    </>
  );
}
