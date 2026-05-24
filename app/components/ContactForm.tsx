"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(3, "Digite seu nome"),
  phone: z.string().min(8, "Digite um telefone válido"),
  email: z.string().email("Digite um e-mail válido"),
  message: z.string().min(10, "Mensagem muito curta"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      console.log(data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Mensagem enviada com sucesso!", {
        description: "Entraremos em contato em até 24 horas.",
      });

      reset();
    } catch (error) {
      console.log(error);

      toast.error("Erro ao enviar mensagem.", {
        description: "Tente novamente em alguns minutos.",
      });
    }
  }

  return (
    <section className="bg-[#f7f5f2] py-24">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center">
          <span className="uppercase tracking-[0.2em] text-[#8ea08f] text-xs">
            Contato
          </span>

          <h2 className="mt-4 text-5xl text-[#2f2f2f] font-[var(--font-cormorant)]">
            Agende uma avaliação inicial
          </h2>

          <p className="mt-5 text-neutral-500">
            Dê o primeiro passo para o desenvolvimento do seu filho. Entre em
            contato para conhecer a Terapia ABA.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="
            mt-14
            bg-white
            rounded-[28px]
            border
            border-neutral-200
            shadow-[0_8px_30px_rgba(0,0,0,0.04)]
            p-8
            md:p-10
          "
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="text-sm text-neutral-600">Nome completo</label>

              <input
                type="text"
                placeholder="Seu nome"
                {...register("name")}
                className="
                  mt-2
                  w-full
                  h-12
                  rounded-xl
                  bg-[#f7f5f2]
                  px-4
                  text-sm
                  outline-none
                  border
                  border-transparent
                  transition-all
                  focus:border-[#8ea08f]
                "
              />

              {errors.name && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div>
              <label className="text-sm text-neutral-600">Telefone</label>

              <input
                type="text"
                placeholder="(11) 99999-9999"
                {...register("phone")}
                className="
                  mt-2
                  w-full
                  h-12
                  rounded-xl
                  bg-[#f7f5f2]
                  px-4
                  text-sm
                  outline-none
                  border
                  border-transparent
                  transition-all
                  focus:border-[#8ea08f]
                "
              />

              {errors.phone && (
                <span className="text-red-500 text-xs mt-1 block">
                  {errors.phone.message}
                </span>
              )}
            </div>
          </div>

          <div className="mt-5">
            <label className="text-sm text-neutral-600">E-mail</label>

            <input
              type="email"
              placeholder="seu@email.com"
              {...register("email")}
              className="
                mt-2
                w-full
                h-12
                rounded-xl
                bg-[#f7f5f2]
                px-4
                text-sm
                outline-none
                border
                border-transparent
                transition-all
                focus:border-[#8ea08f]
              "
            />

            {errors.email && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="mt-5">
            <label className="text-sm text-neutral-600">Mensagem</label>

            <textarea
              placeholder="Conte sobre seu filho(a), idade, diagnóstico e principais desafios."
              {...register("message")}
              className="
                mt-2
                w-full
                h-36
                rounded-xl
                bg-[#f7f5f2]
                p-4
                text-sm
                outline-none
                border
                border-transparent
                transition-all
                resize-none
                focus:border-[#8ea08f]
              "
            />

            {errors.message && (
              <span className="text-red-500 text-xs mt-1 block">
                {errors.message.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="
              mt-8
              w-full
              h-12
              rounded-xl
              bg-[#8ea08f]
              text-white
              text-sm
              font-medium
              transition-all
              hover:opacity-90
              disabled:opacity-50
              flex
              items-center
              justify-center
              gap-2
            "
          >
            {isSubmitting && <Loader2 className="animate-spin" size={18} />}
            Enviar mensagem
          </button>

          <p className="text-center text-xs text-neutral-400 mt-5">
            Responderei em até 24 horas. Oferecemos avaliação inicial gratuita
            de 30 minutos para conhecer o caso.
          </p>
        </form>
      </div>
    </section>
  );
};
