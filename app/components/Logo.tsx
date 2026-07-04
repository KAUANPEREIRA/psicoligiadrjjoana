import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" aria-label="Ir para página inicial" title="Página inicial">
      <Image
        src="/imagens/logo-dra-joana-darc-psicologa-clinica.webp"
        alt="DRA. JOANA Darc - Psicóloga Clínica"
        width={155}
        height={22}
        fetchPriority="high"
      />
    </Link>
  );
}
