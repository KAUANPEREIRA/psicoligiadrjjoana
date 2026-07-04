// components/CardsDesenvolvimentoInfantil.tsx

import { Brain, Users, MessageCircle, Activity } from "lucide-react";

interface Card {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cards: Card[] = [
  {
    icon: <Brain className="w-12 h-12 text-blue-500" />,
    title: "Cognitivo",
    description:
      "Memória, atenção, raciocínio lógico e forma de aprendizagem. Base para desenvolvimento escolar e autonomia intelectual",
  },
  {
    icon: <Users className="w-12 h-12 text-pink-500" />,
    title: "Social",
    description:
      "Habilidades de interação, empatia, capacidade de lidar emocionalmente em contextos sociais com pares e adultos",
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-green-500" />,
    title: "Linguagem",
    description:
      "Comunicação verbal e não-verbal, expressão e compreensão — pilares do aprendizado e da socialização",
  },
  {
    icon: <Activity className="w-12 h-12 text-orange-500" />,
    title: "Motor",
    description:
      "Coordenação motora fina e grossa, equilíbrio corporal fundamentais para a autonomia diária",
  },
];

export function CardsDesenvolvimentoInfantil() {
  return (
    <section className="w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-gray-50 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 p-4 bg-white rounded-full">{card.icon}</div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
