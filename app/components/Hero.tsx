import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cormorant } from "next/font/google";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative w-full aspect-[1920/800] overflow-hidden flex items-center">
      <Image
        src="/imagens/banner-dr-joana.webp"
        alt="Psicóloga especialista em Terapia ABA em São Paulo"
        fill
        priority
        quality={100}
        className="object-cover object-top"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#2D3142]/90 via-[#2D3142]/50 to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,185,170,0.25),transparent_60%)]" />
      <div className="container relative z-10 mx-auto flex flex-col items-center justify-center gap-6 px-4 text-center md:items-start md:text-left">
        <span className="flex items-center justify-center rounded-2xl bg-white/80 p-2 text-sm tracking-widest text-[#2d3142]">
          Psicóloga Especialista em ABA • CRP 06/145789
        </span>

        <h1 className="font-[family-name:var(--font-cormorant)] text-5xl  font-medium leading-tight text-[#F8F6F2] md:text-5xl ">
          Terapia ABA em São Paulo
          <span className="block text-[#F8F6F2]">
            Análise do Comportamento Aplicada
          </span>
        </h1>

        <p className="max-w-xl text-base text-[rgba(255,255,255,0.9)]">
          Terapia ABA com foco no desenvolvimento infantil comportamental,
          emocional e social. Atendimento em São Paulo e online.
        </p>

        <div className="flex flex-col justify-center gap-4 md:flex-row md:justify-start">
          <Button
            className="bg-[#2D3142] hover:bg-[#1f2330] rounded-full px-8 py-6"
            asChild
          >
            <Link href="/contato">Agendar consulta</Link>
          </Button>

          <Button
            variant="outline"
            className="border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 rounded-full px-8 py-6"
            asChild
          >
            <Link href="/servicos">Conheça nossos serviços</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
