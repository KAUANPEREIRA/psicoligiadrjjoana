import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CardServiceProps {
  icon: React.ElementType;
  title: string;
  description: string;
  slug?: string;
}

export function CardService({
  icon: Icon,
  title,
  description,
  slug,
}: CardServiceProps) {
  return (
    <article className="group relative flex h-full flex-col rounded-[1rem] bg-[#FAF7F2] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-[#8fa998]">
      <div className="mb-6">
        <Icon
          className="h-10 w-10 text-[#5d7064] transition-colors duration-300 group-hover:text-[#2d3142]"
          strokeWidth={1.8}
          aria-hidden="true"
        />
      </div>

      <h3 className="mb-4 text-lg leading-tight font-medium text-[#2D3142]">
        {slug ? (
          // Link esticado: o card inteiro é clicável, com texto âncora descritivo
          <Link
            href={slug}
            className="outline-none after:absolute after:inset-0 after:content-['']"
          >
            {title}
          </Link>
        ) : (
          title
        )}
      </h3>

      <p className="text-base leading-7 text-[#2D3142]/70">{description}</p>

      {slug && (
        <span
          aria-hidden="true"
          className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-[#5d7064] transition-all group-hover:gap-3"
        >
          Saiba mais
          <ArrowRight className="h-4 w-4" />
        </span>
      )}
    </article>
  );
}
