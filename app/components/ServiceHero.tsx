import Image from "next/image";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ServiceHeroProps {
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
}

export function ServiceHero({
  breadcrumbs,
  badge,
  title,
  subtitle,
  description,
  image,
  primaryAction,
  secondaryAction,
}: ServiceHeroProps) {
  return (
    <section className="w-full bg-white">
      {/* Breadcrumb Interna - Semântica para SEO */}
      <nav
        aria-label="breadcrumb"
        className="px-8 py-4 border-b border-gray-200"
      >
        <div className="container mx-auto">
          <ol className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-gray-400">/</span>}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-600" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            {badge && (
              <div className="inline-block px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                {badge}
              </div>
            )}

            <div>
              <h1 className="text-5xl font-semibold text-gray-900">{title}</h1>
              {subtitle && (
                <p className="text-xl text-gray-400 mt-2">{subtitle}</p>
              )}
            </div>

            <p className="text-gray-600 text-base leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Link
                href={primaryAction.href}
                className="px-8 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition-colors text-center"
              >
                {primaryAction.label}
              </Link>
              <Link
                href={secondaryAction.href}
                className="px-8 py-3 rounded-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium transition-colors text-center"
              >
                {secondaryAction.label}
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden w-full ">
            <Image
              src={image}
              alt={title}
              width={497}
              height={480}
              priority
              className="object-cover object-top w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
