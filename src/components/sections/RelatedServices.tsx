import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/site";

interface RelatedServicesProps {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related = services.filter((s) => s.slug !== currentSlug).slice(0, 3);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2
          className="text-2xl font-extrabold text-gray-900 mb-8"
          style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
        >
          Other Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group block bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
            >
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed line-clamp-2">
                {service.shortDesc}
              </p>
              <div className="flex items-center gap-1.5 text-sm font-semibold text-blue-600 group-hover:gap-2.5 transition-all">
                Learn More <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
