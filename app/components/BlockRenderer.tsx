import type { ReactNode } from "react";
import Link from "next/link";
import { Info, Lightbulb, TriangleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

export interface InlineLink {
  match: string; // substring EXATA de `text`
  href: string; // "http..." abre em nova aba
}

export type Block =
  | { type: "paragraph"; text: string; links?: InlineLink[] }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "list"; style: "bullet" | "number"; items: string[] }
  | {
      type: "callout";
      variant: "tip" | "warning" | "info";
      title?: string;
      text: string;
    }
  | { type: "quote"; text: string; author?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | {
      type: "cta";
      title: string;
      description: string;
      buttonText: string;
      href: string;
    }
  | { type: "table"; headers: string[]; rows: string[][] };

const calloutStyles = {
  tip: {
    box: "border-[#8fa998] bg-[#8fa998]/15",
    icon: Lightbulb,
    iconColor: "text-[#5d7064]",
  },
  warning: {
    box: "border-amber-200 bg-amber-50",
    icon: TriangleAlert,
    iconColor: "text-amber-700",
  },
  info: {
    box: "border-neutral-200 bg-neutral-50",
    icon: Info,
    iconColor: "text-[#2d3142]",
  },
} as const;

const bodyText = "text-base leading-7 text-neutral-700";

const linkClass =
  "font-semibold text-[#5d7064] underline underline-offset-4 hover:text-[#2d3142] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5d7064]";

// Transforma cada `match` em <Link>/<a>, em ordem de posição no texto.
function renderTextWithLinks(text: string, links?: InlineLink[]) {
  if (!links || links.length === 0) return text;

  const matches = links
    .map((link) => ({ ...link, index: text.indexOf(link.match) }))
    .filter((link) => link.index !== -1)
    .sort((a, b) => a.index - b.index);

  if (matches.length === 0) return text;

  const parts: ReactNode[] = [];
  let cursor = 0;

  matches.forEach((link, i) => {
    // Ignora um match que começa dentro de outro já consumido (evita texto duplicado)
    if (link.index < cursor) return;
    if (link.index > cursor) parts.push(text.slice(cursor, link.index));
    parts.push(
      /^https?:\/\//.test(link.href) ? (
        <a
          key={`${link.href}-${i}`}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {link.match}
          <span className="sr-only"> (abre em uma nova aba)</span>
        </a>
      ) : (
        <Link key={`${link.href}-${i}`} href={link.href} className={linkClass}>
          {link.match}
        </Link>
      ),
    );
    cursor = link.index + link.match.length;
  });

  if (cursor < text.length) parts.push(text.slice(cursor));
  return parts;
}

export function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className={cn(bodyText, "mb-4")}>
          {renderTextWithLinks(block.text, block.links)}
        </p>
      );

    // O h1 é do cabeçalho da página; o corpo do artigo começa no h2
    case "heading":
      return block.level === 2 ? (
        <h2 className="mt-10 mb-4 font-[family-name:var(--font-cormorant)] text-3xl font-semibold leading-tight text-[#2d3142]">
          {block.text}
        </h2>
      ) : (
        <h3 className="mt-8 mb-3 font-[family-name:var(--font-cormorant)] text-2xl font-semibold leading-tight text-[#2d3142]">
          {block.text}
        </h3>
      );

    case "list":
      return block.style === "number" ? (
        <ol className="mb-6 ml-5 list-decimal space-y-2 pl-1 marker:font-semibold marker:text-[#5d7064]">
          {block.items.map((item) => (
            <li key={item} className={bodyText}>
              {item}
            </li>
          ))}
        </ol>
      ) : (
        // role="list": mantém a semântica no Safari/VoiceOver mesmo com list-none
        <ul role="list" className="mb-6 list-none space-y-2 pl-1">
          {block.items.map((item) => (
            <li key={item} className={cn("flex items-start gap-2", bodyText)}>
              <span aria-hidden="true" className="mt-0.5 text-[#5d7064]">
                •
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "callout": {
      const { box, icon: Icon, iconColor } = calloutStyles[block.variant];
      return (
        <div className={cn("mb-6 flex gap-3 rounded-2xl border p-5", box)}>
          <Icon
            aria-hidden="true"
            className={cn("mt-0.5 size-5 shrink-0", iconColor)}
          />
          <div>
            {block.title && (
              <p className="mb-1 font-semibold text-[#2d3142]">{block.title}</p>
            )}
            <p className="text-base leading-relaxed text-neutral-700">
              {block.text}
            </p>
          </div>
        </div>
      );
    }

    case "quote":
      return (
        <blockquote className="mb-6 border-l-4 border-[#8fa998] py-2 pl-5 text-[#2d3142] italic">
          <p className="text-lg leading-relaxed">“{block.text}”</p>
          {block.author && (
            <cite className="mt-2 block text-sm text-neutral-500 not-italic">
              — {block.author}
            </cite>
          )}
        </blockquote>
      );

    case "image":
      return (
        <figure className="mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            className="max-h-96 w-full rounded-2xl object-cover"
          />
          {block.caption && (
            <figcaption className="mt-2 text-center text-sm text-neutral-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "table":
      return (
        <div className="mb-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-neutral-50">
                {block.headers.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="border border-neutral-200 px-4 py-2 text-left font-semibold text-[#2d3142]"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell, i) => (
                    <td
                      key={`${i}-${cell}`}
                      className="border border-neutral-200 px-4 py-2 text-neutral-700"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "cta":
      return (
        <div className="mb-6 flex flex-col items-center gap-2 rounded-3xl bg-[#2d3142] p-6 text-center text-white md:p-8">
          <p className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold leading-tight">
            {block.title}
          </p>
          <p className="mb-3 max-w-xl text-base text-slate-200">
            {block.description}
          </p>
          <Link
            href={block.href}
            className="inline-flex items-center rounded-full bg-white px-8 py-3 font-semibold text-[#2d3142] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {block.buttonText}
          </Link>
        </div>
      );

    default:
      return null;
  }
}
