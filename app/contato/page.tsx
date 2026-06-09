import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Formation } from "../components/Formation";
import Cta from "../components/Cta";
import { ContactForm } from "../components/ContactForm";

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
