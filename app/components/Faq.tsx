import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqSchema } from "../FaqSchema";
import { FaqProps } from "../data/FaqItem";

export function Faq({
  heading = "Perguntas Frequentes",
  description = "Encontre respostas para as dúvidas mais comuns sobre nossos serviços.",
  items,
}: FaqProps) {
  return (
    <>
      {/* Schema.org injetado no <head> via Next.js automaticamente */}
      <FaqSchema items={items} />

      <section aria-labelledby="faq-heading" className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2
              id="faq-heading"
              className="font-poppins text-[#1D1D1D] text-[48px] font-medium leading-[48px]"
            >
              {heading}
            </h2>

            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-lg">
              {description}
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            defaultValue={items[0]?.id}
            className="w-full border-0"
          >
            {items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="mb-4 rounded-2xl border px-4"
              >
                <AccordionTrigger className="text-left text-lg font-medium text-[#1D1D1D] [&_svg]:text-[#00D62F]">
                  {item.question}
                </AccordionTrigger>

                <AccordionContent className="text-muted-foreground text-base leading-7">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
}
