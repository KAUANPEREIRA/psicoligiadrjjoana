import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20mais%20informações."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className="h-7 w-7" />
    </a>
  );
}
