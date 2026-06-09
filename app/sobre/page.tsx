import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { BreadcrumbComponent } from "../components/BreadcrumbComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Formation } from "../components/Formation";
import Cta from "../components/Cta";

export default function Sobre() {
  return (
    <>
      <Header />

      <BreadcrumbComponent title="Sobre" />

      <section>
        <div className="container mx-auto px-4 py-16 ">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <Image
                src="/imagens/sobre.webp"
                alt="Psicóloga especialista em Terapia ABA realizando atendimento clínico"
                title="Psicóloga especialista em Terapia ABA realizando atendimento clínico"
                width={584}
                height={640}
              />
            </div>
            <div>
              <h1 className="mt-6 font-serif text-[2rem] text-[#2e3447]">
                Sobre
                <span className="block text-[#9aac9a]">Dra. Joana D'Arc</span>
              </h1>
              <p className="text-base text-muted-foreground mb-4">
                Sou psicóloga especializada em Análise do Comportamento Aplicada
                (ABA), com foco em intervenção comportamental para crianças e
                adolescentes com Transtorno do Espectro Autista (TEA) e outros
                transtornos do neurodesenvolvimento.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Minha abordagem terapêutica é baseada em evidências científicas
                sólidas, utilizando técnicas da ABA para promover
                desenvolvimento de habilidades sociais, comunicação, autonomia e
                redução de comportamentos desafiadores. Cada plano de
                intervenção é individualizado e elaborado com base em avaliação
                funcional detalhada.
              </p>
              <p className="text-base text-muted-foreground mb-4">
                Com mais de 10 anos de experiência em Terapia ABA, atuo em
                parceria com famílias, escolas e equipes multidisciplinares,
                oferecendo atendimento presencial em São Paulo e supervisão
                online, garantindo resultados mensuráveis e transformadores para
                cada criança.
              </p>
              <Button
                asChild
                className="btn  bg-[#2D3142] inline-flex items-center justify-center rounded-[2.5rem] px-6 py-4 font-semibold text-white transition-all duration-300"
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
