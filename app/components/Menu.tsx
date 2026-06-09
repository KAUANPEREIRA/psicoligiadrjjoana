import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { menuItems } from "@/app/data/menu";

export const Menu = () => {
  return (
    <nav className="flex items-center" aria-label="Navegação principal">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              {item.submenu ? (
                <>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.label}
                    </Link>

                    <NavigationMenuTrigger className="ml-[-8px] px-1">
                      <span className="sr-only">Abrir submenu</span>
                    </NavigationMenuTrigger>
                  </div>

                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-2 p-4">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className="block rounded-md p-2 hover:bg-muted"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <Link href={item.href} className="px-4 py-2">
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};
