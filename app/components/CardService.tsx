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
    <Link
      href={slug}
      className="group block rounded-[2rem] bg-[#F4F1EC] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="mb-6">
        <Icon
          className="h-10 w-10 text-[#8FA998] transition-colors duration-300 group-hover:text-[#6F8577]"
          strokeWidth={1.8}
        />
      </div>

      <h3 className="mb-4 font-[family-name:var(--font-cormorant)] text-[1.5rem] leading-tight font-medium text-[#2D3142] transition-colors duration-300 group-hover:text-[#5D7064]">
        {title}
      </h3>

      <p className="text-base leading-7 text-[#2D3142]/70">{description}</p>
    </Link>
  );
}
