import { contactInfo } from "@/app/data/geral";

// Defina NEXT_PUBLIC_SITE_URL em produção (ex.: https://www.seudominio.com.br)
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.drajoanadarc.com.br"
).replace(/\/$/, "");

export const siteName = "Dra. Joana D'Arc | Psicóloga ABA";

export const whatsappDigits = `55${contactInfo.whatsapp.replace(/\D/g, "")}`;

export const whatsappUrl = (text?: string) =>
  `https://wa.me/${whatsappDigits}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Só rotas que realmente existem
export const indexablePaths = [
  "/",
  "/sobre",
  "/servicos",
  "/desenvolvimento-infantil",
  "/intervencao-aba",
  "/familia-e-escola",
  "/estimulacao-cognitiva",
  "/reabilitacao-cognitiva",
  "/contato",
];
