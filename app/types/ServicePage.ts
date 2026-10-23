import type { LucideIcon } from "lucide-react";
import type { FaqItem } from "../data/FaqItem";

export interface TextSection {
  kind: "text";
  id?: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface CardsSection {
  kind: "cards";
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  items: { title: string; description: string; icon?: LucideIcon }[];
}

export interface StepsSection {
  kind: "steps";
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  steps: { title: string; description: string }[];
}

export type ServiceSection = TextSection | CardsSection | StepsSection;

export interface ServicePageData {
  /** Caminho da página, ex.: "/desenvolvimento-infantil" */
  path: string;
  /** Nome do serviço (usado no schema, no WhatsApp e nos CTAs) */
  name: string;
  /** Descrição curta usada no schema Service */
  schemaDescription: string;
  hero: {
    badge: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    /** Bullets curtos de prova/benefício ao lado do CTA */
    highlights: string[];
  };
  /** Faixa de confiança logo abaixo do hero */
  trust: string[];
  sections: ServiceSection[];
  faq: { heading: string; description: string; items: FaqItem[] };
  related: { title: string; description: string; href: string }[];
  cta: { title: string; description: string };
}
