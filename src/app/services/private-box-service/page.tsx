import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import RelatedServices from "@/components/sections/RelatedServices";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Private Box Service Pakistan | RGM Goods & Car Carrier",
  description:
    "RGM Private Box Service for secure transportation of goods alongside your vehicle across Pakistan. Contact 03004432981 for details.",
};

export default function PrivateBoxServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Private Box Service"
        title="Private Box Service"
        subtitle="Secure transportation of your goods and personal belongings alongside your vehicle across Pakistan."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Private Box Service" },
        ]}
        image="/images/fleet-carrier.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Secure Transportation
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Transport Your Goods
                <br />
                Alongside Your Vehicle
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  RGM&apos;s Private Box Service allows customers to transport goods,
                  personal belongings, and other items securely alongside their vehicle.
                  This is particularly useful when relocating between cities.
                </p>
                <p>
                  For detailed information about the Private Box Service including
                  capacity, handling, and arrangements — please contact us directly.
                  Our team will be happy to explain the service and how it can
                  work for your specific needs.
                </p>
                <p>
                  Available across Pakistan alongside our vehicle transportation
                  services, with our experienced team ensuring your goods are
                  handled responsibly.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-blue-50 border border-blue-100 mb-8">
                <p className="text-blue-800 text-sm leading-relaxed">
                  <strong>For Private Box Service details,</strong> please contact RGM
                  directly. Our team will explain the service and assist with your
                  specific requirements.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-blue-700 text-white hover:bg-blue-800 transition-all"
                >
                  <Phone size={16} />
                  Call for Details
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
                src="/images/fleet-carrier.jpg"
                alt="Private box transportation service"
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
            Private Box Service Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Secure transportation of goods alongside your vehicle",
              "Professional handling of personal belongings",
              "Available across Pakistan with nationwide coverage",
              "Experienced RGM team managing the entire process",
              "Contact us for capacity and arrangement details",
              "24/7 availability for inquiries and arrangements",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100">
                <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="private-box-service" />
      <CTASection title="Inquire About Private Box Service" />
    </>
  );
}
