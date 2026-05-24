import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <ul className="grid w-[250px] gap-2 p-4">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.href}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={subItem.href}
                              className="block rounded-md p-2 hover:bg-muted focus:bg-muted"
                            >
                              {subItem.label}
                            </Link>
                          </NavigationMenuLink>
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
