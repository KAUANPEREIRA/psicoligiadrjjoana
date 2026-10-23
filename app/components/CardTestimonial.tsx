interface CardTestimonialProps {
  description: string;
  name: string;
  role: string;
}

export const CardTestimonial = ({
  description,
  name,
  role,
}: CardTestimonialProps) => {
  return (
    <figure className="flex h-full flex-col rounded-[20px] border border-neutral-200 bg-[#fefefe] p-6">
      <div aria-hidden="true" className="text-4xl leading-none text-neutral-300">
        &ldquo;
      </div>

      <blockquote className="mt-2 text-sm leading-relaxed text-neutral-600">
        <p>{description}</p>
      </blockquote>

      <figcaption className="mt-auto pt-8">
        <span className="mb-3 block text-[15px] font-medium text-[#2f2f2f]">
          {name}
        </span>
        <hr className="mb-2 border-neutral-200" />
        <span className="text-[13px] text-neutral-500">{role}</span>
      </figcaption>
    </figure>
  );
};
