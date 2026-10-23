import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPostMeta } from "./BlogPostMeta";
import { Tag } from "./Tag";
import type { CardArticleProps } from "./CardArticle";

type FeaturedPostCardProps = Omit<CardArticleProps, "dateTime">;

// Imagem à esquerda, texto à direita no desktop. A imagem é a candidata a LCP
// da /blog: `preload` (substitui o `priority`, deprecado no Next 16).
// O título é <h3> porque o <h2> da seção (ArtigoDestaque) vem logo acima.
export function FeaturedPostCard({
  href,
  title,
  description,
  category,
  date,
  readingTime,
  image,
  imageAlt,
}: FeaturedPostCardProps) {
  return (
    <article className="group relative grid overflow-hidden rounded-3xl border border-neutral-200 bg-[#f8f6f3] shadow-sm transition-shadow duration-300 hover:shadow-xl focus-within:ring-2 focus-within:ring-[#8fa998] motion-reduce:transition-none lg:grid-cols-[2fr_3fr] xl:grid-cols-[520px_1fr]">
      <div className="relative min-h-64 overflow-hidden sm:min-h-80">
        <Image
          src={image}
          alt={imageAlt}
          fill
          preload
          sizes="(min-width: 1280px) 520px, (min-width: 1024px) 40vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-col items-start justify-center gap-4 p-6 md:p-8 lg:p-10">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Tag>{category}</Tag>
          <BlogPostMeta date={date} readingTime={readingTime} />
        </div>

        <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold leading-tight text-[#2d3142] md:text-4xl">
          <Link href={href} className="outline-none after:absolute after:inset-0 after:content-['']">
            {title}
          </Link>
        </h3>

        <p className="text-base leading-relaxed text-neutral-600">{description}</p>

        <span
          aria-hidden="true"
          className="inline-flex items-center gap-2 pt-1 text-sm font-semibold text-[#5d7064] transition-all group-hover:gap-3"
        >
          Ler artigo completo
          <ArrowRight className="size-4" />
        </span>
      </div>
    </article>
  );
}
