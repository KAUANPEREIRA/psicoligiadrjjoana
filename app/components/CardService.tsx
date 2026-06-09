import Link from "next/link";

interface CardServiceProps {
  icon: React.ElementType;
  title: string;
  description: string;
  slug: string;
}

export function CardService({
  icon: Icon,
  title,
  description,
  slug,
}: CardServiceProps) {
  return (
    <article
      aria-label={`Saiba mais sobre ${title}`}
      className="bg-[#FAF7F2] rounded-[1rem] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <Link href={slug} className="group block">
        <div className="mb-6">
          <Icon
            className="h-10 w-10 text-[#8FA998] transition-colors duration-300 group-hover:text-[#6F8577]"
            strokeWidth={1.8}
          />
        </div>

        <h3 className="mb-4 text-lg leading-tight font-medium text-[#2D3142] transition-colors duration-300 group-hover:text-[#5D7064]">
          {title}
        </h3>

        <p className="text-base leading-7 text-[#2D3142]/70">{description}</p>
      </Link>
    </article>
  );
}
