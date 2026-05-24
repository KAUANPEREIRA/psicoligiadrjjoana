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
    <article
      className="
        bg-[#fefefe]
        flex-1
        border
        border-neutral-200
        rounded-[20px]
        p-6
        max-w-[320px]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg

      "
    >
      <div className="text-neutral-300 text-4xl leading-none">"</div>

      <p
        className="
          mt-2
          text-[14px]
          leading-relaxed
          text-neutral-500
        "
      >
        {description}
      </p>

      <div className="mt-8">
        <h3 className="text-[15px] font-medium text-[#2f2f2f] mb-3">{name}</h3>
        <hr className="py-1"></hr>
        <span className="text-[13px] text-neutral-400">{role}</span>
      </div>
    </article>
  );
};
