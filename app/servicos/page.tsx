import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Formation } from "../components/Formation";
import Cta from "../components/Cta";
import { ServicesHome } from "../components/ServicesHome";

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
