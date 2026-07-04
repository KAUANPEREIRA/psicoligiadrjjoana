import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Formation } from "../components/Formation";
import Cta from "../components/Cta";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dra. Joana D'Arc | Psicóloga Especialista em ABA",
  description:
    "Conheça a Dra. Joana D'Arc, psicóloga CRP 06/145789 especializada em Análise do Comportamento Aplicada (ABA) e desenvolvimento infantil no TEA. Formação em Neuropsicologia.",
};

export default function Sobre() {
  return (
    <>
      <Header />

      <BreadcrumbComponent title="Sobre" />

      <section>
        <div className="container mx-auto px-4 py-16 ">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="relative rounded-lg overflow-hidden w-full h-[600px]">
              <Image
                src="/imagens/joana.webp"
                alt="Psicóloga especialista em Terapia ABA realizando atendimento clínico"
                width={600}
                height={800}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <div>
              <h1 className="mt-6 font-serif text-[2rem] text-[#2e3447]">
                Sobre
                <span className="block text-[#9aac9a]">Dra. Joana D'Arc</span>
              </h1>
              <p className="text-base text-muted-foreground mb-4">
                Sou psicóloga especializada em Análise do Comportamento Aplicada
                (ABA), com foco em intervenção comportamental no desenvolvimento
                infantil de crianças e adolescentes com Transtorno do Espectro
                Autista (TEA) e outros transtornos do neurodesenvolvimento.
              </p>

              <p className="text-base text-muted-foreground mb-4">
                Minha abordagem terapêutica é baseada em evidências científicas,
                utilizando técnicas da Terapia ABA para promover o
                desenvolvimento de habilidades sociais, comunicação, autonomia e
                regulação emocional. Cada plano de intervenção é
                individualizado, elaborado a partir de uma avaliação detalhada
                das necessidades de cada criança.
              </p>

              <p className="text-base text-muted-foreground mb-4">
                Atuo no acompanhamento de crianças com dificuldades de
                desenvolvimento, comportamento, atenção e aprendizagem,
                oferecendo atendimento presencial em São Paulo e suporte online
                para famílias de todo o Brasil, sempre com foco em evolução
                gradual e funcional.
              </p>
              <Button
                asChild
                className="bg-[#2D3142] hover:bg-[#1f2330] rounded-full px-6 py-6"
              >
                <Link href="/sobre">Agende sua consulta</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Formation />
      <Cta />

      <Footer />
    </>
  );
}
