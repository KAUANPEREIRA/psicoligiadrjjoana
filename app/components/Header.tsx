import { Menu } from "./Menu";

import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Logo />
        <div>
          <Menu />
        </div>
      </div>
    </header>
  );
}
