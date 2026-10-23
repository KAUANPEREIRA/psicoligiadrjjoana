import { blogListing, blogPosts } from "@/app/data/blog";
import { BlogGrid } from "./BlogGrid";

export function UltimasPostagens() {
  if (blogPosts.length < 2) return null; // só 1 artigo: já está em destaque

  const { id, eyebrow, title, description, listLabel } = blogListing.latest;
  const titleId = `${id}-title`;

  return (
    <section aria-labelledby={titleId} className="bg-neutral-50 px-4">
      <div className="container mx-auto flex flex-col items-center gap-10 py-16 md:gap-14 md:py-24">
        <header className="flex max-w-2xl flex-col items-center gap-3 text-center">
          <span className="block font-sans text-sm font-medium uppercase tracking-[0.12em] leading-[1.4] text-[#5d7064]">
            {eyebrow}
          </span>
          <h2
            id={titleId}
            className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight text-[#2d3142] md:text-5xl"
          >
            {title}
          </h2>
          <p className="text-neutral-600">{description}</p>
        </header>

        <BlogGrid listLabel={listLabel} />
      </div>
    </section>
  );
}
