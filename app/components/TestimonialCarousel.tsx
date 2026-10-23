"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CardTestimonial } from "./CardTestimonial";

export interface Testimonial {
  description: string;
  name: string;
  role: string;
}

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onInit = () => {
      setSnaps(emblaApi.scrollSnapList());
      update();
    };
    onInit();
    emblaApi.on("reInit", onInit).on("select", update);
    return () => {
      emblaApi.off("reInit", onInit).off("select", update);
    };
  }, [emblaApi, update]);

  const arrow =
    "flex h-11 w-11 items-center justify-center rounded-full border border-[#2d3142]/20 bg-white text-[#2d3142] transition-colors hover:bg-[#2d3142] hover:text-white disabled:pointer-events-none disabled:opacity-40";

  return (
    <div role="region" aria-roledescription="carrossel" aria-label="Depoimentos">
      <div ref={emblaRef} className="overflow-hidden">
        <ul className="-ml-6 flex">
          {items.map((item, i) => (
            <li
              key={i}
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${items.length}`}
              className="min-w-0 shrink-0 grow-0 basis-full pl-6 md:basis-1/2 lg:basis-1/3"
            >
              <CardTestimonial {...item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          className={arrow}
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="Depoimento anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Ir para o depoimento ${i + 1}`}
              aria-current={i === selected}
              className={`h-2.5 rounded-full transition-all ${
                i === selected ? "w-6 bg-[#2d3142]" : "w-2.5 bg-[#2d3142]/25"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          className={arrow}
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="Próximo depoimento"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
