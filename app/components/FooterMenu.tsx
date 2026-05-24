import Link from "next/link";
import { menuItems } from "@/app/data/menu";

export const FooterMenu = () => {
  return (
    <nav aria-label="Menu do rodapé" className="flex flex-col gap-4">
      <ul className="space-y-3">
        {menuItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="transition hover:text-gray-300 text-sm"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
