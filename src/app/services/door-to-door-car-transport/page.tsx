import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Phone, MessageCircle, Home } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import RelatedServices from "@/components/sections/RelatedServices";
import { siteConfig, contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Door-to-Door Car Transport Pakistan | RGM Vehicle Services",
  description:
    "RGM door-to-door car transport service across Pakistan. We pick up from your address and deliver to your destination. Professional, convenient vehicle transport. Call 03004432981.",
};

const steps = [
  { step: "01", title: "You Call or WhatsApp", desc: "Contact RGM and share your pickup and destination addresses." },
  { step: "02", title: "We Come to You", desc: "Our team arrives at your location at the arranged time." },
  { step: "03", title: "Professional Loading", desc: "Your vehicle is carefully loaded onto our car carrier." },
  { step: "04", title: "Safe Transport", desc: "We transport your vehicle securely across Pakistan." },
  { step: "05", title: "Delivery at Your Door", desc: "Your vehicle is delivered right to your destination address." },
];

export default function DoorToDoorPage() {
  return (
    <>
      <PageHero
        eyebrow="Door-to-Door Transport"
        title="Door-to-Door Car Transport Service"
        subtitle="Maximum convenience — we pick up your vehicle from your address and deliver it safely to your destination, anywhere in Pakistan."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Door-to-Door Car Transport" },
        ]}
        image="/images/car-transport.jpg"
      />

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Convenient Service
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                We Come to You.
                <br />
                We Deliver to Them.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  RGM&apos;s door-to-door car transport service removes the complexity of
                  vehicle transportation. You do not need to bring your vehicle to a
                  depot or arrange extra logistics — we handle everything.
                </p>
                <p>
                  Our team comes directly to your location, professionally loads your
                  vehicle, and transports it across Pakistan to the address you specify.
                  This is the most convenient way to transport your vehicle.
                </p>
                <p>
                  With <strong className="text-gray-900">20+ years of experience</strong>
                  {" "}and our own car carrier fleet, RGM ensures your vehicle receives
                  professional, accountable care from door to door.
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
                src="/images/car-transport.jpg"
                alt="Door-to-door car transport"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 text-center"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
          >
            How Door-to-Door Transport Works
          </h2>
          <div className="grid sm:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center">
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center text-lg font-black text-white shadow-lg"
                  style={{ background: "linear-gradient(135deg, #0f2d57, #2a7fdb)" }}
                >
                  {step.step}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2
            className="text-2xl font-extrabold text-gray-900 mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
          >
            Why Choose Door-to-Door Transport?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "No need to drop your vehicle at a depot — we come to you",
              "Your vehicle is delivered directly to the destination address",
              "Professional, experienced team handles the entire process",
              "Full accountability from pickup to final delivery",
              "Available across Pakistan with nationwide coverage",
              "Contact us 24/7 for arrangements and inquiries",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 p-5 rounded-xl border border-gray-100 bg-gray-50">
                <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="door-to-door-car-transport" />
      <CTASection title="Book Door-to-Door Car Transport" />
    </>
  );
}
