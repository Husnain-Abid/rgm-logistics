"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Car, Truck, Home, AlertTriangle, Package, Bike, ArrowRight
} from "lucide-react";
import { services } from "@/data/site";
import SectionHeader from "@/components/ui/SectionHeader";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Car,
  Truck,
  Home,
  AlertTriangle,
  Package,
  Bike,
};

export default function ServicesGrid({ preview = false }: { preview?: boolean }) {
  const displayServices = preview ? services : services;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeader
          eyebrow="What We Offer"
          title="Our Vehicle Transportation Services"
          subtitle="From car transport to accidental recovery — RGM provides a complete range of professional vehicle transportation services across Pakistan."
          centered
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayServices.map((service, idx) => {
            const Icon = iconMap[service.icon] || Car;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
              >
                <Link
                  href={service.href}
                  className={`group block h-full rounded-2xl border transition-all duration-300 hover:border-blue-200 hover:shadow-xl overflow-hidden ${
                    service.featured
                      ? "border-blue-100 bg-gradient-to-br from-blue-50 to-white ring-2 ring-blue-600/10"
                      : "border-gray-100 bg-white hover:bg-blue-50/30"
                  }`}
                >
                  <div className="p-7">
                    {service.featured && (
                      <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-blue-700 bg-blue-100 px-2.5 py-1 rounded-full mb-4">
                        Primary Service
                      </span>
                    )}
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all group-hover:scale-110 ${
                        service.featured
                          ? "bg-blue-700"
                          : "bg-gray-100 group-hover:bg-blue-100"
                      }`}
                    >
                      <Icon
                        size={22}
                        className={service.featured ? "text-white" : "text-blue-700"}
                      />
                    </div>
                    <h3
                      className={`font-bold mb-3 transition-colors ${
                        service.featured ? "text-xl text-blue-900" : "text-lg text-gray-900 group-hover:text-blue-800"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">
                      {service.shortDesc}
                    </p>
                    <div
                      className={`flex items-center gap-1.5 text-sm font-semibold transition-all group-hover:gap-2.5 ${
                        service.featured ? "text-blue-700" : "text-blue-600"
                      }`}
                    >
                      Learn More
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {preview && (
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all"
            >
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
