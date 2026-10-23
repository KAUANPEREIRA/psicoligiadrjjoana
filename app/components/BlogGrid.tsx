import { blogPosts, isoFromDataPublicacao } from "@/app/data/blog";
import { CardArticle } from "./CardArticle";

export function BlogGrid({ listLabel }: { listLabel: string }) {
  const posts = blogPosts.slice(1); // o primeiro já aparece em destaque

  return (
    <ul
      role="list"
      aria-label={listLabel}
      className="grid w-full gap-6 md:grid-cols-2 md:gap-8 xl:grid-cols-3"
    >
      {posts.map((post) => (
        <li key={post.slug}>
          <CardArticle
            href={`/blog/${post.slug}`}
            title={post.titulo}
            description={post.resumo}
            category={post.categoria}
            date={post.dataPublicacao}
            dateTime={isoFromDataPublicacao(post.dataPublicacao)}
            readingTime={`${post.tempoLeitura} de leitura`}
            image={post.imagemUrl}
            imageAlt={post.imagemAlt}
          />
        </li>
      ))}
    </ul>
  );
}
