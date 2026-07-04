import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import Cta from "../components/Cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog ABA e Autismo | Artigos sobre Terapia em SP",
  description:
    "Artigos sobre Terapia ABA, autismo infantil e desenvolvimento comportamental. Dicas práticas para pais e educadores sobre o tratamento do TEA em crianças.",
};

export default function Blog() {
  return (
    <>
      <Header />

      <BreadcrumbComponent title="Blog" />

      <Cta />

      <Footer />
    </>
  );
}
