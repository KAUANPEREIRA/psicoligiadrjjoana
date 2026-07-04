// components/CardsBeneficiosDesenvolvimento.tsx

import {
  CheckCircle2,
  Globe,
  Brain,
  Users,
  AlertCircle,
  Heart,
} from "lucide-react";

interface Beneficio {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const beneficios: Beneficio[] = [
  {
    icon: <Globe className="w-6 h-6 text-green-400" />,
    title: "Desenvolvimento global e integrado",
    description:
      "A intervenção precoce aborda todas as áreas do desenvolvimento reduzindo o risco de atrasos. O acompanhamento especializado habilita maiores aprendizagens de maneira mais harmoniosa e consistentemente ao longo do tempo.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-400" />,
    title: "Maior autonomia e independência",
    description:
      "Com rotinas funcionais e contextualmente a criança torna-se mais apta — desenvolve independência com progressiva capacidade em essas é generalizada para o ambiente natural reduzindo a dependência da abilidade posteriormente.",
  },
  {
    icon: <Brain className="w-6 h-6 text-green-400" />,
    title: "Melhor desempenho escolar",
    description:
      "O trabalho com funções executivas, linguagem e regulação emocional estrutura adequadamente aumenta o desenvolvimento acadêmico. Crianças com intervenção precoce têm melhor desempenho nas dificuldades de aprendizagem.",
  },
  {
    icon: <Heart className="w-6 h-6 text-green-400" />,
    title: "Família mais preparada e confiante",
    description:
      "O treinamento parenteral qualifica pais para apoiar a criança com técnicas evidenciadas. Famílias que participam vivenciam maior confiança no manejo dos comportamentos dificultadores.",
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-green-400" />,
    title: "Prevenção de dificuldades futuras",
    description:
      "Identificar e intervir precocemente em atrasos do desenvolvimento reduz significativamente o risco de problemas na vida adulta. A neuroplasticidade da primeira infância é a janela de intervenção fundamental versus efeito.",
  },
];

export function CardsBeneficiosDesenvolvimento() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="relative p-6 rounded-lg bg-slate-700/50 border border-slate-600 hover:border-slate-500 transition-colors"
            >
              {/* Icon */}
              <div className="mb-4">{beneficio.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-3">
                {beneficio.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
