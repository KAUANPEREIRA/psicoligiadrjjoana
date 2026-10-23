export interface ServiceProps {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  slug?: string; // sem slug = ainda não há página
}
