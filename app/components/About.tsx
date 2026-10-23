import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Brain } from "lucide-react";

export const About = () => {
  return (
    <section className="bg-[#faf7f2]">
      <div className="container mx-auto px-4 py-16 ">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12">
          <div className="relative rounded-lg overflow-hidden w-full h-[600px] bg-[#faf7f2] shadow-lg">
            <Image
              src="/imagens/dr-joana.webp"
              alt="Psicóloga especialista em Terapia ABA realizando atendimento clínico"
              width={600}
              height={800}
              className="object-cover object-top w-full h-full rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl leading-tight font-medium text-[#2d3142] font-cormorant mb-4">
              <span className="mb-2 block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#5d7064]">
                Sobre a Especialista
              </span>{" "}
              Especialista em Terapia ABA e Autismo
            </h2>

            <p className="text-base text-muted-foreground mb-4">
              Sou psicóloga especializada em Análise do Comportamento Aplicada
              (ABA), com foco em intervenção comportamental no desenvolvimento
              infantil de crianças e adolescentes com Transtorno do Espectro
              Autista (TEA) e outros transtornos do neurodesenvolvimento.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              Minha abordagem terapêutica é baseada em evidências científicas,
              utilizando técnicas da Terapia ABA para promover o desenvolvimento
              de habilidades sociais, comunicação, autonomia e regulação
              emocional. Cada plano de intervenção é individualizado, elaborado
              a partir de uma avaliação detalhada das necessidades de cada
              criança.
            </p>

            <p className="text-base text-muted-foreground mb-4">
              Atuo no acompanhamento de crianças com dificuldades de
              desenvolvimento, comportamento, atenção e aprendizagem, oferecendo
              atendimento presencial em São Paulo e suporte online para famílias
              de todo o Brasil, sempre com foco em evolução gradual e funcional.
            </p>

            <Button asChild className="bg-[#2D3142] hover:bg-[#1f2330] rounded-full px-8 py-6">
              <Link href="/sobre">Conheça a Dra. Joana</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
