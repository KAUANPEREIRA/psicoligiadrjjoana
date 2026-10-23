import { FiHome, FiMapPin } from "react-icons/fi";
import { contactInfo } from "../data/geral";
import { areasAtendidas } from "../data/home";

export function LocationSection() {
  return (
    <section
      aria-labelledby="local-title"
      className="bg-[#faf7f2] px-4 py-14 md:py-20"
    >
      <div className="container mx-auto">
        <header className="mx-auto mb-10 max-w-3xl text-center">
          <span className="mb-2 block font-sans text-sm font-semibold uppercase tracking-[0.12em] text-[#5d7064]">
            Onde atendemos
          </span>
          <h2
            id="local-title"
            className="font-[family-name:var(--font-cormorant)] text-3xl font-medium leading-tight text-[#2d3142] md:text-5xl"
          >
            Terapia ABA em {contactInfo.cidade} e online
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Atendimento presencial na clínica, em domicílio e online para
            famílias de todo o Brasil.
          </p>
        </header>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          <address className="rounded-2xl border border-neutral-200 bg-white p-6 not-italic">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#2d3142]">
              <FiMapPin aria-hidden="true" className="h-5 w-5 text-[#5d7064]" />
              Clínica
            </h3>
            <p className="text-neutral-700">
              {contactInfo.endereco}
              <br />
              {contactInfo.bairro}, {contactInfo.cidade}/{contactInfo.uf}
              <br />
              CEP {contactInfo.cep}
            </p>
          </address>

          <div className="rounded-2xl border border-neutral-200 bg-white p-6">
            <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-[#2d3142]">
              <FiHome aria-hidden="true" className="h-5 w-5 text-[#5d7064]" />
              Modalidades
            </h3>
            <ul className="list-inside list-disc space-y-1 text-neutral-700">
              <li>Atendimento em clínica</li>
              <li>Atendimento domiciliar</li>
              <li>Atendimento online</li>
            </ul>
          </div>
        </div>

        {areasAtendidas.length > 0 && (
          <div className="mx-auto mt-8 max-w-4xl text-center">
            <h3 className="mb-4 text-lg font-semibold text-[#2d3142]">
              Regiões atendidas em domicílio
            </h3>
            <ul className="flex flex-wrap justify-center gap-2">
              {areasAtendidas.map((a) => (
                <li
                  key={a}
                  className="rounded-full bg-white px-4 py-1.5 text-sm text-neutral-700 ring-1 ring-neutral-200"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
