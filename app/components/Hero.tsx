import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/site";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex aspect-[393/600] w-full items-center overflow-hidden md:aspect-[1920/800]"
    >
      {/* Apenas uma das imagens é exibida; a outra fica display:none e não é baixada */}
      <Image
        src="/imagens/banner-dr-joana.webp"
        alt="Psicóloga especialista em Terapia ABA em São Paulo"
        fill
        priority
        sizes="100vw"
        quality={80}
        className="hidden object-cover object-top md:block"
      />
      <Image
        src="/imagens/drjoanamobile.webp"
        alt="Psicóloga especialista em Terapia ABA em São Paulo"
        fill
        priority
        sizes="100vw"
        quality={80}
        className="object-cover object-center md:hidden"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#2D3142]/85 via-[#2D3142]/60 to-[#2D3142]/80 md:bg-gradient-to-r md:from-[#2D3142]/90 md:via-[#2D3142]/50 md:to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(168,185,170,0.25),transparent_60%)]" />

      <div className="container relative z-10 mx-auto flex flex-col items-start gap-4 px-4 text-start md:gap-6">
        <span className="rounded-xl bg-white/85 px-3 py-1.5 text-xs font-semibold tracking-wider text-[#2d3142] md:rounded-2xl md:p-2 md:text-sm md:font-medium md:tracking-widest">
          Psicóloga Especialista em ABA • CRP 06/145789
        </span>

        <h1
          id="hero-title"
          className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight text-[#F8F6F2] md:text-5xl"
        >
          Terapia ABA em São Paulo
          <span className="block">Análise do Comportamento Aplicada</span>
        </h1>

        <p className="max-w-xs text-sm leading-relaxed text-white/95 md:max-w-xl md:text-base">
          Terapia ABA com foco no desenvolvimento infantil comportamental,
          emocional e social. Atendimento presencial em São Paulo e online.
        </p>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row md:gap-4">
          <a
            href={whatsappUrl(
              "Olá, vim pelo site e gostaria de agendar uma avaliação de Terapia ABA.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            data-cta="hero-home-whatsapp"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f9d55] px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#178a49] md:px-8 md:py-4 md:text-base"
          >
            <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
            Agendar avaliação no WhatsApp
          </a>

          <Link
            href="/intervencao-aba"
            data-cta="hero-home-saiba-mais"
            className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 md:px-8 md:py-4 md:text-base"
          >
            Entenda a Terapia ABA
          </Link>
        </div>
      </div>
    </section>
  );
}
