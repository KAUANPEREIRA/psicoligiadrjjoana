import { BadgeCheck } from "lucide-react";
import { trustItems } from "../data/home";

export function TrustStrip() {
  return (
    <section aria-label="Credenciais e diferenciais" className="bg-[#2d3142]">
      <ul className="container mx-auto grid grid-cols-1 gap-3 px-4 py-4 text-sm text-white sm:grid-cols-2 lg:grid-cols-4">
        {trustItems.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <BadgeCheck
              className="h-5 w-5 shrink-0 text-[#a8b9aa]"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
