import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ServicesHome } from "./components/ServicesHome";
import { Footer } from "./components/Footer";
import ModalidadesSection from "@/app/components/ModalidadesSection";
import { Diferentials } from "./components/Diferentials";
import { BlogHome } from "./components/BlogHome";
import { TestimonialHome } from "./components/TestimonialHome";
import { ContactForm } from "./components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agência XYZ | Criação de Sites e SEO",
  description:
    "Desenvolvimento de sites profissionais, SEO e otimização para empresas que desejam gerar mais clientes.",
};

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <ServicesHome />
        <ModalidadesSection />
        <Diferentials />
        <BlogHome />
        <TestimonialHome />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
