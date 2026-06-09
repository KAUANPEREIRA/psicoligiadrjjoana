import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Formation } from "../components/Formation";
import Cta from "../components/Cta";

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
