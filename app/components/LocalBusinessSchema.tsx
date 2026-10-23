import { contactInfo, socialLinks } from "../data/geral";
import { siteUrl } from "@/lib/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Psychologist", "LocalBusiness"],
        "@id": `${siteUrl}/#negocio`,
        name: "Dra. Joana D'Arc - Psicóloga ABA",
        description:
          "Psicóloga especializada em Terapia ABA (Análise do Comportamento Aplicada) e desenvolvimento infantil, com atendimento presencial em São Paulo e online.",
        url: siteUrl,
        image: `${siteUrl}/imagens/joana.webp`,
        logo: `${siteUrl}/imagens/logo-dra-joana-darc-psicologa-clinica.webp`,
        telephone: `+55${contactInfo.whatsapp.replace(/\D/g, "")}`,
        email: contactInfo.email,
        medicalSpecialty: "Psychiatric",
        address: {
          "@type": "PostalAddress",
          streetAddress: contactInfo.endereco,
          addressLocality: "São Paulo",
          addressRegion: contactInfo.uf,
          postalCode: contactInfo.cep,
          addressCountry: "BR",
        },
        areaServed: [
          { "@type": "City", name: "São Paulo" },
          { "@type": "Country", name: "Brasil" },
        ],
        knowsAbout: [
          "Terapia ABA",
          "Análise do Comportamento Aplicada",
          "Autismo (TEA)",
          "Desenvolvimento infantil",
        ],
        sameAs: socialLinks.map((s) => s.href),
        founder: { "@id": `${siteUrl}/#joana` },
      },
      {
        "@type": "Person",
        "@id": `${siteUrl}/#joana`,
        name: "Joana D'Arc",
        jobTitle: "Psicóloga especialista em ABA",
        identifier: "CRP 06/145789",
        url: `${siteUrl}/sobre`,
        image: `${siteUrl}/imagens/joana.webp`,
        worksFor: { "@id": `${siteUrl}/#negocio` },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#site`,
        url: siteUrl,
        name: "Dra. Joana D'Arc | Terapia ABA",
        inLanguage: "pt-BR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
