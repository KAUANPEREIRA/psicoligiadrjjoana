import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";

import Cta from "../components/Cta";
import { ContactForm } from "../components/ContactForm";
import type { Metadata } from "next";
import { contactInfo } from "../data/geral";

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
      <section className="contato__mapa">
        <iframe
          src={contactInfo.mapa}
          width="100%"
          height="350"
          title="Mapa de localização da clínica de Psicologia Dr. Joana"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <Footer />
    </>
  );
}
