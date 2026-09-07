/**
 * types/locations.ts
 * Tipos reutilizáveis para dados de localização
 */

export interface LocationData {
  /**
   * ID único para a localização (útil se múltiplas filiais)
   */
  id: string;

  /**
   * Nome do consultório/negócio
   */
  name: string;

  /**
   * ============================================
   * CAMPOS COMPATÍVEIS COM VERSÃO ANTIGA
   * ============================================
   * Mantém compatibilidade com footer, headers, etc
   */
  endereco: string;
  bairro: string;
  cidade: string;
  uf: string;
  cep: string;

  /**
   * ============================================
   * CAMPOS ESTRUTURADOS (Schema.org)
   * ============================================
   */
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;

  /**
   * Endereço completo para exibição
   */
  address: string;

  /**
   * ============================================
   * LOCALIZAÇÃO GEOGRÁFICA
   * ============================================
   * Crítico para SEO local e buscas por proximidade
   */
  latitude: number;
  longitude: number;

  /**
   * ============================================
   * CONTATO E COMUNICAÇÃO
   * ============================================
   */
  phone?: string;
  whatsapp?: string;
  email?: string;
  website?: string;

  /**
   * ============================================
   * MAPA
   * ============================================
   * DEVE ser a URL embed (iframe src), não a URL share
   *
   * ❌ ERRADO: https://www.google.com/maps/place/...
   * ✅ CERTO: https://www.google.com/maps/embed?pb=...
   */
  mapUrl: string;

  /**
   * ============================================
   * HORÁRIOS (Opcional, mas melhora SEO)
   * ============================================
   * Formato: "HH:MM-HH:MM" ou "closed"
   *
   * Exemplo:
   * hours: {
   *   monday: "09:00-18:00",
   *   tuesday: "09:00-18:00",
   *   ...
   *   sunday: "closed"
   * }
   */
  hours?: {
    monday?: string;
    tuesday?: string;
    wednesday?: string;
    thursday?: string;
    friday?: string;
    saturday?: string;
    sunday?: string;
  };
}

/**
 * Props para componente Map.tsx
 */
export interface MapProps {
  embedUrl: string;
  locationName: string;
  address: string;
  streetAddress?: string;
  addressLocality?: string;
  postalCode?: string;
  latitude?: number;
  longitude?: number;
}

/**
 * Response de schema markup JSON-LD
 */
export type LocationSchema = {
  "@context": string;
  "@type": string;
  name: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    "@type": string;
    latitude: number;
    longitude: number;
  };
  [key: string]: unknown;
};
