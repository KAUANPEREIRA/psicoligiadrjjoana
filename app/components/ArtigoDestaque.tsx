import { blogListing, blogPosts } from "@/app/data/blog";
import { FeaturedPostCard } from "./FeaturedPostCard";

// O <h1> da página vem do BreadcrumbComponent, então o título da seção é <h2>.
export function ArtigoDestaque() {
  const [featured] = blogPosts;
  if (!featured) return null;

  const { id, title, description } = blogListing.featured;
  const titleId = `${id}-title`;

  return (
    <section aria-labelledby={titleId} className="px-4">
      <div className="container mx-auto flex flex-col gap-8 py-12 md:py-16">
        <header className="flex max-w-2xl flex-col gap-3">
          <h2
            id={titleId}
            className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight text-[#2d3142] md:text-5xl"
          >
            {title}
          </h2>
          <p className="text-lg text-neutral-600">{description}</p>
        </header>

        <FeaturedPostCard
          href={`/blog/${featured.slug}`}
          title={featured.titulo}
          description={featured.resumo}
          category={featured.categoria}
          date={featured.dataPublicacao}
          readingTime={`${featured.tempoLeitura} de leitura`}
          image={featured.imagemUrl}
          imageAlt={featured.imagemAlt}
        />
      </div>
    </section>
  );
}
