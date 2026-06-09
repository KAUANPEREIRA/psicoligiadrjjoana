import { Menu } from "./Menu";

import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between">
        <Logo />
        <div className="flex">
          <Menu />
          <Button
            asChild
            className="bg-[#2D3142] hover:bg-[#1f2330] inline-flex items-center justify-center rounded-full px-8 py-5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
          >
            <Link href="/sobre">Agendar consulta</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
