import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import Cta from "../components/Cta";
import { ServicesHome } from "../components/ServicesHome";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços de Terapia ABA | São Paulo | Dra. Joana",
  description:
    "Conheça os serviços de Terapia ABA: desenvolvimento infantil, intervenção ABA, estimulação cognitiva e reabilitação. Atendimento domiciliar e em clínica em SP.",
};

export default function Servicos() {
  return (
    <>
      <Header />

      <BreadcrumbComponent title="Serviços" />

      <ServicesHome />

      <Cta />

      <Footer />
    </>
  );
}
