import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappUrl } from "@/lib/site";

interface LeadButtonsProps {
  serviceName: string;
  /** Identifica a posição do CTA para rastreamento (GTM/GA4) */
  location: string;
  tone?: "light" | "dark";
  className?: string;
  /** Destino do botão de formulário (padrão: âncora #agendar da própria página) */
  formHref?: string;
}

/** Par de CTAs padrão: WhatsApp (principal) + formulário (secundário). */
export function LeadButtons({
  serviceName,
  location,
  tone = "light",
  className = "",
  formHref = "#agendar",
}: LeadButtonsProps) {
  const message = `Olá, vim pelo site e gostaria de agendar uma avaliação sobre ${serviceName}.`;

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={whatsappUrl(message)}
        target="_blank"
        rel="noopener noreferrer"
        data-cta={`${location}-whatsapp`}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1f9d55] px-8 py-4 text-base font-semibold text-white shadow-md transition-all hover:bg-[#178a49] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1f9d55]"
      >
        <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
        Falar no WhatsApp
      </a>
      <Link
        href={formHref}
        data-cta={`${location}-formulario`}
        className={`inline-flex items-center justify-center rounded-full border-2 px-8 py-4 text-base font-semibold transition-colors ${
          tone === "dark"
            ? "border-white/60 text-white hover:bg-white hover:text-[#2d3142]"
            : "border-[#2d3142] text-[#2d3142] hover:bg-[#2d3142] hover:text-white"
        }`}
      >
        Receber contato por formulário
      </Link>
    </div>
  );
}
