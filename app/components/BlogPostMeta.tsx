import { CalendarDays, Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";
import { isoFromDataPublicacao } from "@/app/data/blog";

type BlogPostMetaProps = {
  date: string;
  /** Já com o sufixo, ex.: "4 min de leitura". */
  readingTime: string;
  className?: string;
};

// Linha "data · tempo de leitura". Vira <time datetime> quando a data segue o
// formato de blog.ts; fora dele, mostra só o texto.
export function BlogPostMeta({ date, readingTime, className }: BlogPostMetaProps) {
  const isoDate = isoFromDataPublicacao(date);

  return (
    <p
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-neutral-500",
        className,
      )}
    >
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays aria-hidden="true" className="size-4 shrink-0" />
        {isoDate ? <time dateTime={isoDate}>{date}</time> : date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 aria-hidden="true" className="size-4 shrink-0" />
        {readingTime}
      </span>
    </p>
  );
}
