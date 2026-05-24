import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cormorant } from "next/font/google";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <Image
        src="/imagens/banner.webp"
        alt="Psicóloga especialista em Terapia ABA em São Paulo"
        fill
        priority
        quality={100}
        className="object-cover"
      />

      <div className="absolute inset-0 " />

      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center gap-6 px-4 text-center md:items-start md:text-left">
        <span className="flex items-center justify-center rounded-2xl bg-white/80 p-2 text-sm tracking-widest text-[#2d3142]">
          Psicóloga Especialista em ABA • CRP 06/145789
        </span>

        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl  font-medium leading-tight text-[#2D3142] md:text-5xl ">
          Terapia ABA em São Paulo
          <span className="block text-[#8FA998]">
            Análise do Comportamento Aplicada
          </span>
        </h1>

        <p className="max-w-xl text-base text-[#2D3142]">
          Especialista em Terapia ABA, oferecendo suporte para desenvolvimento
          comportamental, emocional e social, com atendimento presencial em São
          Paulo e consultas online para todo o Brasil.
        </p>

        <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
          <Button asChild className="btn btn--hero">
            <Link href="/contato">Agendar consulta</Link>
          </Button>

          <Button variant="outline" className="btn btn--hero-outline" asChild>
            <Link href="/servicos">Conheça nossos serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
