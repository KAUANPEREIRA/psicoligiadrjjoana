import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

// O Next faz merge SUPERFICIAL do metadata: a página que define `openGraph`
// substitui o do layout inteiro. Por isso toda página faz
// `{ ...baseOpenGraph, title, ... }` para não perder siteName, locale e imagem.
export const baseOpenGraph: NonNullable<Metadata["openGraph"]> = {
  type: "website",
  locale: "pt_BR",
  siteName: "Dra. Joana D'Arc | Terapia ABA",
  images: [
    {
      url: "/imagens/banner-dr-joana.webp",
      alt: "Dra. Joana D'Arc, psicóloga especialista em Terapia ABA em São Paulo",
    },
  ],
};

// Mesma entidade (@id) declarada em LocalBusinessSchema: autor e publisher dos
// artigos apontam para o consultório, pois os posts não têm autor individual.
export const organizationSchema = {
  "@type": "Organization",
  "@id": absoluteUrl("/#negocio"),
  name: "Dra. Joana D'Arc - Psicóloga ABA",
  url: absoluteUrl("/"),
  logo: absoluteUrl("/imagens/logo-dra-joana-darc-psicologa-clinica.webp"),
};
