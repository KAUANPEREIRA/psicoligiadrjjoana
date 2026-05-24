import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Brain } from "lucide-react";

export const About = () => {
  return (
    <section className="bg-[#faf7f2]">
      <div className="container mx-auto px-4 py-16 ">
        <div className="grid grid-cols-2">
          <div>
            <Image
              src="/imagens/sobre.webp"
              alt="DRA. JOANA Darc - Psicóloga Clínica"
              title="DRA. JOANA Darc - Psicóloga Clínica"
              width={584}
              height={640}
              priority
            />
          </div>
          <div>
            <h2 className="text-[2rem] leading-[48px] font-medium text-[#2d3142] font-cormorant mb-4">
              <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#8fa998]">
                Sobre a Especialista
              </span>{" "}
              Especialista em Terapia ABA e Autismo
            </h2>
            <p className="text-base text-muted-foreground mb-4">
              Sou psicóloga especializada em Análise do Comportamento Aplicada
              (ABA), com foco em intervenção comportamental para crianças e
              adolescentes com Transtorno do Espectro Autista (TEA) e outros
              transtornos do neurodesenvolvimento.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Minha abordagem terapêutica é baseada em evidências científicas
              sólidas, utilizando técnicas da ABA para promover desenvolvimento
              de habilidades sociais, comunicação, autonomia e redução de
              comportamentos desafiadores. Cada plano de intervenção é
              individualizado e elaborado com base em avaliação funcional
              detalhada.
            </p>
            <p className="text-base text-muted-foreground mb-4">
              Com mais de 10 anos de experiência em Terapia ABA, atuo em
              parceria com famílias, escolas e equipes multidisciplinares,
              oferecendo atendimento presencial em São Paulo e supervisão
              online, garantindo resultados mensuráveis e transformadores para
              cada criança.
            </p>
            <Button asChild className="btn btn--hero">
              <Link href="/sobre">Saiba mais</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
