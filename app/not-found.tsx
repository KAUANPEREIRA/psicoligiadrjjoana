import Link from "next/link";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

// Renderizado pelo notFound() das rotas dinâmicas (ex.: /blog/slug-inexistente).
// O Next já devolve status 404 e injeta o noindex.
const atalhos = [
  { href: "/servicos", label: "Serviços" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function NotFound() {
  return (
    <>
      <Header />

      <main className="px-4">
        <div className="container mx-auto flex flex-col items-center py-24 text-center md:py-32">
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#5d7064]">
            Erro 404
          </p>
          <h1 className="mt-2 font-[family-name:var(--font-cormorant)] text-4xl font-medium leading-tight text-[#2d3142] md:text-5xl">
            Página não encontrada
          </h1>
          <p className="mt-5 max-w-xl text-neutral-600">
            O endereço que você acessou não existe ou foi alterado. Volte para o
            início ou escolha uma das opções abaixo.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center rounded-full bg-[#2d3142] px-8 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#1f2330] hover:shadow-xl"
          >
            Voltar para a página inicial
          </Link>

          <ul role="list" className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
            {atalhos.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-semibold text-[#5d7064] underline underline-offset-4 hover:text-[#2d3142]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  );
}
