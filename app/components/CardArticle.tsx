import Image from "next/image";

interface CardArticleProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

export const CardArticle = ({
  image,
  date,
  title,
  description,
}: CardArticleProps) => {
  return (
    <article
      className="
        max-w-[280px]
        bg-[#f8f6f3]
        rounded-[24px]
        overflow-hidden
        shadow-sm
        border
        border-neutral-200
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        flex-1
        h-[100%]
      "
    >
      <div className="relative w-full h-[180px]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-6">
        <span className="text-[12px] text-neutral-400">{date}</span>

        <h3
          className="
            mt-3
            text-[20px]
            leading-[1.1]
            text-[#2f2f2f]
            font-[var(--font-cormorant)]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-4
            text-[14px]
            leading-relaxed
            text-neutral-500
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
};
