"use client";

import { Menu as MenuIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { menuItems } from "../data/menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Logo />

        {/* Menu Desktop */}
        <div className="hidden lg:flex">
          <Menu />
          <Button
            asChild
            className="bg-[#2D3142] hover:bg-[#1f2330] inline-flex items-center justify-center rounded-full px-8 py-5 text-base font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl hover:scale-[1.02] ml-4"
          >
            <Link href="/sobre">Agendar consulta</Link>
          </Button>
        </div>

        {/* Menu Mobile */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menu"
                className="hover:bg-[#f9f9f7]"
              >
                <MenuIcon className="size-6 text-[#2D3142]" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-full max-w-sm p-0">
              <div className="flex h-full flex-col">
                {/* Navegação */}
                <div className="flex-1 overflow-y-auto px-6 py-8">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex flex-col gap-1"
                  >
                    {menuItems.map((item) =>
                      item.submenu ? (
                        <AccordionItem
                          key={item.label}
                          value={item.label}
                          className="border-none"
                        >
                          <AccordionTrigger className="rounded-lg px-4 py-3 text-base font-medium no-underline text-[#2D3142] hover:bg-[#faf7f2] hover:no-underline transition-colors">
                            {item.label}
                          </AccordionTrigger>

                          <AccordionContent>
                            <div className="mt-2 ml-4 flex flex-col gap-1 border-l-2 border-[#8fa998] pl-4">
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="rounded-lg px-3 py-2 text-sm text-[#2D3142] transition-colors hover:bg-[#faf7f2] hover:text-[#8fa998]"
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="rounded-lg px-4 py-3 text-base font-medium text-[#2D3142] transition-all hover:bg-[#faf7f2] hover:text-[#8fa998]"
                        >
                          {item.label}
                        </Link>
                      ),
                    )}
                  </Accordion>
                </div>

                {/* CTA Mobile */}
                <div className="border-t border-[#f9f9f7] bg-[#faf7f2] p-6">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-[#2D3142] hover:bg-[#1f2330] text-white rounded-full font-semibold transition-all hover:shadow-xl"
                  >
                    <Link href="/sobre">Agendar consulta</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
