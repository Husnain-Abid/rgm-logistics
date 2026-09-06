import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import RelatedServices from "@/components/sections/RelatedServices";
import { siteConfig, contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Bike Transport Service Pakistan | Motorcycle Transport",
  description:
    "RGM safe and reliable bike transport service across Pakistan. Motorcycles and bikes transported professionally across all major cities. Call 03004432981.",
};

export default function BikeTransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Bike Transport"
        title="Bike Transport Service Across Pakistan"
        subtitle="Safe, secure, and reliable transportation of motorcycles and bikes to any destination in Pakistan."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Bike Transport" },
        ]}
        image="/images/bike-transport.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Bike Transport
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Your Bike.
                <br />
                Safely Transported.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  RGM&apos;s bike transport service provides safe and reliable transportation
                  of motorcycles across Pakistan. Whether you are relocating, selling,
                  or simply need your bike moved to another city — RGM handles it professionally.
                </p>
                <p>
                  Your motorcycle is properly secured and handled throughout the
                  transportation journey by our experienced team. We have been
                  providing vehicle transportation services for over{" "}
                  <strong className="text-gray-900">20 years</strong>, and we
                  apply the same professional standards to bike transport.
                </p>
                <p>
                  Our bike transport service covers all major cities and routes
                  across Pakistan with our own professional transport fleet.
                </p>
              </div>

              <div className="p-5 rounded-xl border-l-4 border-blue-600 bg-blue-50 mb-8">
                <p className="text-blue-900 italic font-semibold">
                  &ldquo;{siteConfig.tagline}&rdquo;
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-blue-700 text-white hover:bg-blue-800 transition-all"
                >
                  <Phone size={16} />
                  Call Now
                </a>
                <a
                  href={`https://wa.me/92${contactInfo.whatsapp.replace(/^0/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all"
                  style={{ backgroundColor: "#25D366" }}
                >
                  <MessageCircle size={16} />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/bike-transport.jpg"
                alt="Bike transport service Pakistan"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}>
            Our Bike Transport Service
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Safe and proper securing of your motorcycle throughout transport",
              "Professional team experienced in bike and vehicle handling",
              "Nationwide Pakistan coverage across all major cities",
              "Own transport fleet — no third-party dependence",
              "24/7 availability for transport inquiries",
              "Contact us to discuss your specific bike transport requirement",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100">
                <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="bike-transport" />
      <CTASection title="Transport Your Bike Across Pakistan" />
    </>
  );
}
