import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

// Pill de categoria do blog (a do card sobre a imagem fica no CardArticle)
export function Tag({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-[#8fa998]/25 px-3 py-1 text-xs font-semibold text-[#2d3142]",
        className,
      )}
    >
      {children}
    </span>
  );
}
