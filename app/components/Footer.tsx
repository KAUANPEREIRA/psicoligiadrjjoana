import Image from "next/image";
import Link from "next/link";
import { contactInfo, socialLinks } from "../data/geral";
import { FooterMenu } from "./FooterMenu";
import { MessageCircle } from "lucide-react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { WhatsAppButton } from "./WhatsAppButton";
import { FiClock, FiMail, FiMapPin } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="bg-[#2d3142] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              aria-label="Ir para página inicial"
              title="Página inicial"
            >
              <Image
                className="mb-4 filter brightness-0 invert opacity-90"
                src="/imagens/logo-dra-joana-darc-psicologa-clinica.webp"
                alt="DRA. JOANA Darc - Psicóloga Clínica"
                width={155}
                height={22}
                priority
              />
            </Link>
            <p className="text-sm leading-relaxed text-gray-300">
              Psicóloga especializada em Terapia ABA, atendimento humanizado
              para crianças, adolescentes e famílias.
            </p>

            {/* REDES */}
            <div className="mt-6 flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    aria-label={social.name}
                    className="transition hover:text-gray-300"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-normal">Navegação</h3>

            <FooterMenu />
          </div>

          {/* COLUNA 3 */}
          <div>
            <h3 className="mb-4 text-lg font-normal ">Contato</h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>
                <Link
                  href={`https://wa.me/55${contactInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  className="flex items-center gap-2 transition hover:text-gray-300 flex pr-1"
                >
                  <FaWhatsapp className="h-4 w-4 text-gray-400 transition group-hover:text-green-500" />

                  {contactInfo.whatsapp}
                </Link>
              </li>

              <Link
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 transition hover:text-gray-300 opacity-80 hover:opacity-100"
              >
                <FiMail className="h-4 w-4 text-gray-400 transition group-hover:text-blue-500" />
                {contactInfo.email}
              </Link>
            </ul>

            <h3 className="mb-4 text-lg font-normal mt-5">
              Horário de atendimento:
            </h3>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-gray-300 text-sm">
                <FiClock className="h-4 w-4 text-gray-400" />
                Segunda a sexta: 7h às 19h
              </p>

              <p className="flex items-center gap-2 text-gray-300 text-sm">
                <FiClock className="h-4 w-4 text-gray-400" />
                Sábados: 8h às 12h
              </p>
            </div>
          </div>

          {/* COLUNA 4 */}
          <div>
            <h3 className="mb-4 text-lg font-normal">Localização</h3>

            <address className="not-italic text-sm text-gray-300 space-y-1 mb-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="h-4 w-4 text-gray-400 mt-1 shrink-0" />

                <p className="text-white font-medium">{contactInfo.endereco}</p>
              </div>

              <p>
                {contactInfo.bairro}, {contactInfo.cidade}/{contactInfo.uf}
              </p>

              <p>CEP: {contactInfo.cep}</p>
            </address>
            <div className="overflow-hidden rounded-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14628.251429379561!2d-46.92582988017185!3d-23.56618584538412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf06e6df4c0d01%3A0x18dbac2194e0a9bb!2sR.%20Rouxinol%2C%20108%20-%20Jardim%20Rosemary%2C%20Cotia%20-%20SP%2C%2006704-640!5e0!3m2!1spt-BR!2sbr!4v1779066065268!5m2!1spt-BR!2sbr"
                width="100%"
                height="150"
                title="Mapa de localização da clínica de Psicologia Dr. Joana"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Psicologia Dr. Joana. Todos os
          direitos reservados.
        </div>
      </div>

      <WhatsAppButton />
    </footer>
  );
};
