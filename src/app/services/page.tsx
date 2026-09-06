import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, Truck, Home, AlertTriangle, Package, Bike } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Vehicle Transportation Services",
  description:
    "RGM offers comprehensive vehicle transportation services across Pakistan — car transport, car carrier, door-to-door, accidental recovery, private box, and bike transport.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Car,
  Truck,
  Home,
  AlertTriangle,
  Package,
  Bike,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Vehicle Transportation Services Across Pakistan"
        subtitle="A complete range of professional vehicle transportation solutions. From car carrier to door-to-door service — RGM handles it all."
        breadcrumbs={[{ label: "Services" }]}
        image="/images/fleet-carrier.jpg"
      />

      {/* Services List */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-10">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Car;
              const isEven = idx % 2 === 0;
              return (
                <article
                  key={service.slug}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-10 items-center py-10 ${
                    idx < services.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <div className="w-full lg:w-2/5 relative h-[280px] lg:h-[320px] rounded-2xl overflow-hidden shadow-lg flex-shrink-0 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(3,13,26,0.5) 0%, transparent 60%)",
                      }}
                    />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Icon size={20} className="text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    {service.featured && (
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full mb-4">
                        Primary Service
                      </span>
                    )}
                    <h2
                      className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight"
                      style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
                    >
                      {service.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                      {service.shortDesc}
                    </p>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-blue-700 text-white hover:bg-blue-800 transition-all hover:gap-3 shadow-md shadow-blue-700/20"
                    >
                      Learn More About This Service
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
