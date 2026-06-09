import Link from "next/link";

export default function Cta() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden py-24"
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imagens/cta-default.webp')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-950/75" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="cta-title"
            className="mb-6 text-3xl font-bold leading-tight text-white"
          >
            Psicóloga em São Paulo para Ansiedade, Autoestima e Bem-Estar
            Emocional
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-slate-200">
            Psicóloga em São Paulo especializada em ansiedade, autoestima e
            saúde emocional. Agende sua consulta e comece sua jornada de
            autoconhecimento e bem-estar.
          </p>

          <Link
            href="https://wa.me/5511999999999"
            aria-label="Agendar consulta psicológica pelo WhatsApp"
            className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Agendar Consulta
          </Link>
        </div>
      </div>
    </section>
  );
}
