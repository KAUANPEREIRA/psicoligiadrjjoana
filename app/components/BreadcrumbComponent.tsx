"use client";

import { usePathname } from "next/navigation";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { menuItems } from "../data/menu";

type props = {
  title: string;
};

export function BreadcrumbComponent({ title }: props) {
  const pathname = usePathname();

  const breadcrumbs = [];

  // Home sempre aparece
  breadcrumbs.push({
    label: "Home",
    href: "/",
  });

  menuItems.forEach((item) => {
    if (item.href === pathname && item.href !== "/") {
      breadcrumbs.push(item);
    }

    if (item.submenu) {
      item.submenu.forEach((subitem) => {
        if (subitem.href === pathname) {
          breadcrumbs.push(item);
          breadcrumbs.push(subitem);
        }
      });
    }
  });

  return (
    <section className="relative w-full overflow-hidden min-h-[280px] md:min-h-[380px] flex items-center p-0">
      {/* Background */}
      <img
        src="/imagens/bread.webp"
        alt="Breadcrumb"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Conteúdo */}
      <div className="container relative z-10 mx-auto px-4 py-16">
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;

              return (
                <div key={item.href} className="flex items-center">
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage className="text-white">
                        {item.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        href={item.href}
                        className="text-white/80 hover:text-white"
                      >
                        {item.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>

                  {!isLast && <BreadcrumbSeparator className="text-white/60" />}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mt-4 text-4xl font-bold text-white">{title}</h1>
      </div>
    </section>
  );
}
