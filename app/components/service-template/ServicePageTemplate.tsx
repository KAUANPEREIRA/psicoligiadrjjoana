import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Check } from "lucide-react";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Faq } from "../Faq";
import { ContactForm } from "../ContactForm";
import { LeadButtons } from "./LeadButtons";
import { siteUrl } from "@/lib/site";
import type { ServicePageData, ServiceSection } from "../../types/ServicePage";

const eyebrow =
  "mb-2 block font-sans text-sm font-semibold uppercase tracking-[0.12em] text-[#5d7064]";
const h2 =
  "font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight text-[#2d3142] md:text-5xl";

function SectionHeader({
  id,
  label,
  title,
  intro,
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      <span className={eyebrow}>{label}</span>
      <h2 id={id} className={h2}>
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-neutral-600">{intro}</p>}
    </header>
  );
}

function Section({
  section,
  index,
}: {
  section: ServiceSection;
  index: number;
}) {
  const headingId = `sec-${index}-title`;
  const bg = index % 2 === 0 ? "bg-[#faf7f2]" : "bg-[#f9f9f7]";

  return (
    <section
      id={section.id}
      aria-labelledby={headingId}
      className={`${bg} scroll-mt-24 px-4 py-14 md:py-20`}
    >
      <div className="container mx-auto">
        <SectionHeader
          id={headingId}
          label={section.eyebrow}
          title={section.title}
          intro={section.kind === "text" ? undefined : section.intro}
        />

        {section.kind === "text" && (
          <div className="mx-auto max-w-3xl space-y-5 text-base leading-8 text-neutral-700 md:text-lg">
            {section.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {section.kind === "cards" && (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {section.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                {item.icon && (
                  <item.icon
                    className="mb-4 h-9 w-9 text-[#5d7064]"
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                )}
                <h3 className="mb-2 text-lg font-semibold text-[#2d3142]">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        )}

        {section.kind === "steps" && (
          <ol className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
            {section.steps.map((step, i) => (
              <li
                key={step.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#2d3142] font-semibold text-white">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-[#2d3142]">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

function MidCta({ data }: { data: ServicePageData }) {
  return (
    <section
      aria-label="Agende sua avaliação"
      className="bg-[#2d3142] px-4 py-12 text-center"
    >
      <div className="container mx-auto flex flex-col items-center gap-6">
        <p className="max-w-2xl font-[family-name:var(--font-cormorant)] text-2xl font-medium text-white md:text-3xl">
          {data.cta.title}
        </p>
        <LeadButtons
          serviceName={data.name}
          location={`meio-${data.path.slice(1)}`}
          tone="dark"
        />
      </div>
    </section>
  );
}

export function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const url = `${siteUrl}${data.path}`;
  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Serviços", href: "/servicos" },
    { label: data.name, href: data.path },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.label,
          item: `${siteUrl}${c.href}`,
        })),
      },
      {
        "@type": "Service",
        name: data.name,
        description: data.schemaDescription,
        url,
        serviceType: data.name,
        provider: { "@id": `${siteUrl}/#negocio` },
        areaServed: [
          { "@type": "City", name: "São Paulo" },
          { "@type": "Country", name: "Brasil" },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <Header />

      <main>
        {/* Hero */}
        <section className="bg-white">
          <nav aria-label="Breadcrumb" className="border-b border-neutral-200">
            <ol className="container mx-auto flex flex-wrap items-center gap-2 px-4 py-3 text-sm text-neutral-600">
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true">/</span>}
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page">{c.label}</span>
                  ) : (
                    <Link href={c.href} className="hover:text-[#2d3142]">
                      {c.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="container mx-auto grid grid-cols-1 items-center gap-10 px-4 py-10 md:py-16 lg:grid-cols-2 lg:gap-14">
            <div className="space-y-6">
              <span className="inline-block rounded-full bg-[#eef2ee] px-4 py-2 text-sm font-medium text-[#3f5246]">
                {data.hero.badge}
              </span>

              <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-semibold leading-tight text-[#2d3142] md:text-5xl lg:text-6xl">
                {data.hero.title}
              </h1>

              <p className="text-base leading-relaxed text-neutral-700 md:text-lg">
                {data.hero.description}
              </p>

              <ul className="space-y-2">
                {data.hero.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-2 text-neutral-700"
                  >
                    <Check
                      className="mt-1 h-4 w-4 shrink-0 text-[#1f9d55]"
                      aria-hidden="true"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <LeadButtons
                serviceName={data.name}
                location={`hero-${data.path.slice(1)}`}
                className="pt-2"
              />
              <p className="text-sm text-neutral-500">
                Resposta rápida, sem compromisso.
              </p>
            </div>

            <div className="relative aspect-[497/480] w-full overflow-hidden rounded-3xl">
              <Image
                src={data.hero.image}
                alt={data.hero.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Faixa de confiança */}
        <section aria-label="Diferenciais" className="bg-[#2d3142]">
          <ul className="container mx-auto grid grid-cols-1 gap-3 px-4 py-4 text-sm text-white sm:grid-cols-2 lg:grid-cols-4">
            {data.trust.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <BadgeCheck
                  className="h-5 w-5 shrink-0 text-[#a8b9aa]"
                  aria-hidden="true"
                />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Conteúdo */}
        {data.sections.map((section, i) => (
          <div key={section.title}>
            <Section section={section} index={i} />
            {i === 1 && <MidCta data={data} />}
          </div>
        ))}
        {data.sections.length < 2 && <MidCta data={data} />}

        {/* FAQ */}
        <Faq
          heading={data.faq.heading}
          description={data.faq.description}
          items={data.faq.items}
        />

        {/* Serviços relacionados: links internos */}
        {data.related.length > 0 && (
          <section
            aria-labelledby="relacionados-title"
            className="bg-[#f9f9f7] px-4 py-14"
          >
            <div className="container mx-auto">
              <h2
                id="relacionados-title"
                className={`${h2} mb-8 text-center`}
              >
                Conheça também
              </h2>
              <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
                {data.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      href={r.href}
                      className="group flex h-full flex-col rounded-2xl border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-lg"
                    >
                      <span className="text-lg font-semibold text-[#2d3142]">
                        {r.title}
                      </span>
                      <span className="mt-2 text-sm text-neutral-600">
                        {r.description}
                      </span>
                      <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#5d7064] group-hover:gap-3">
                        Saiba mais
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Captura de lead */}
        <div id="agendar" className="scroll-mt-20">
          <ContactForm />
        </div>

        {/* CTA final */}
        <section
          aria-label="Fale agora com a psicóloga"
          className="bg-[#2d3142] px-4 py-14 text-center"
        >
          <div className="container mx-auto flex flex-col items-center gap-6">
            <p className="max-w-2xl font-[family-name:var(--font-cormorant)] text-2xl font-medium text-white md:text-3xl">
              {data.cta.description}
            </p>
            <LeadButtons
              serviceName={data.name}
              location={`final-${data.path.slice(1)}`}
              tone="dark"
            />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
