import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  image?: string;
  imageAlt?: string;
  compact?: boolean;
}

export default function PageHero({
  title,
  subtitle,
  eyebrow,
  breadcrumbs,
  image,
  imageAlt = "RGM Services",
  compact = false,
}: PageHeroProps) {
  return (
    <section
      className={`relative flex items-end overflow-hidden ${
        compact ? "min-h-[40vh] pt-24 pb-16" : "min-h-[55vh] pt-24 pb-20"
      }`}
      style={{
        background: "linear-gradient(135deg, #030d1a 0%, #0f2d57 60%, #163a70 100%)",
      }}
    >
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center opacity-25"
            sizes="100vw"
          />
        </div>
      )}

      {/* Overlay patterns */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: "linear-gradient(to top, rgba(3,13,26,0.4), transparent)" }}
      />

      {/* Decorative element */}
      <div
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #2a7fdb, transparent)", transform: "translate(40%, -40%)" }}
      />

      <div className="container-custom relative z-10 w-full">
        {breadcrumbs && (
          <div className="mb-6">
            <Breadcrumb items={breadcrumbs} light />
          </div>
        )}
        {eyebrow && (
          <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-3">
            {eyebrow}
          </p>
        )}
        <h1
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-4 max-w-3xl"
          style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
