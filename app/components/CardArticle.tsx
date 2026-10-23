import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

export interface CardArticleProps {
  image: string;
  imageAlt: string;
  /** Data ISO (YYYY-MM-DD) usada no atributo datetime */
  dateTime: string;
  date: string;
  category: string;
  readingTime: string;
  title: string;
  description: string;
  href: string;
}

export const CardArticle = ({
  image,
  imageAlt,
  dateTime,
  date,
  category,
  readingTime,
  title,
  description,
  href,
}: CardArticleProps) => {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-neutral-200 bg-[#f8f6f3] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-[#8fa998]">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#2d3142]">
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-neutral-500">
          <time dateTime={dateTime}>{date}</time>
          <span aria-hidden="true">•</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {readingTime}
          </span>
        </div>

        <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-2xl font-semibold leading-tight text-[#2d3142]">
          {/* Link esticado: o card inteiro é clicável, com texto âncora descritivo */}
          <Link
            href={href}
            className="outline-none after:absolute after:inset-0 after:content-['']"
          >
            {title}
          </Link>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          {description}
        </p>

        <span
          aria-hidden="true"
          className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#5d7064] transition-all group-hover:gap-3"
        >
          Ler artigo
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
};
