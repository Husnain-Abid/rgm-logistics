import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import RelatedServices from "@/components/sections/RelatedServices";
import { siteConfig, contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Car Carrier Service Pakistan | Professional Vehicle Carrier",
  description:
    "RGM professional car carrier service across Pakistan. Own carrier fleet, safe vehicle loading, and nationwide coverage. Contact 03004432981.",
};

const benefits = [
  "Own professional car carrier fleet — no third-party dependence",
  "Safe and secure vehicle loading procedures",
  "Experienced team handling every step of the carrier process",
  "Nationwide Pakistan coverage",
  "24/7 availability for transport arrangements",
  "Multiple vehicles transported simultaneously for efficiency",
];

export default function CarCarrierPage() {
  return (
    <>
      <PageHero
        eyebrow="Car Carrier"
        title="Professional Car Carrier Service Across Pakistan"
        subtitle="RGM operates its own professional car carrier fleet for safe, reliable, and nationwide vehicle transportation."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Car Carrier" },
        ]}
        image="/images/fleet-carrier.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Car Carrier Service
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Our Own Fleet.
                <br />
                Your Vehicle&apos;s Safety.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  RGM Goods &amp; Car Carrier Services operates its own professional car
                  carrier fleet. This is central to our service quality — because when
                  we own the vehicles, we control the standards.
                </p>
                <p>
                  Our car carrier service is designed to transport your vehicle safely
                  from one city to another across Pakistan. With{" "}
                  <strong className="text-gray-900">20+ years of experience</strong>,
                  our team knows exactly how to handle, load, and transport vehicles
                  with the care they deserve.
                </p>
                <p>
                  Whether you are relocating, selling a vehicle, or simply need it
                  moved to another city — RGM&apos;s car carrier service is the professional
                  choice.
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
                src="/images/fleet-carrier.jpg"
                alt="RGM Car Carrier Fleet"
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
          <h2
            className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
          >
            What Our Car Carrier Service Offers
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100">
                <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="car-carrier" />
      <CTASection title="Need Car Carrier Service?" />
    </>
  );
}
