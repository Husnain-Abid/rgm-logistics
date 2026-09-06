import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Phone, MessageCircle, Shield, MapPin, Clock, Award } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import RelatedServices from "@/components/sections/RelatedServices";
import { siteConfig, contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Car Transport Service Pakistan | Karachi Lahore Islamabad",
  description:
    "Reliable car transport service across Pakistan by RGM. 20+ years of experience. Door-to-door car transport Karachi to Lahore, Islamabad and nationwide. Call 03004432981.",
};

const benefits = [
  "Professional loading and securing of your vehicle on our carrier fleet",
  "Door-to-door car transport — pickup from your address to your destination",
  "20+ years of experience in vehicle transportation across Pakistan",
  "Own car carrier fleet — no dependence on third-party transporters",
  "Available 24/7 — contact us any time for transport arrangements",
  "Nationwide Pakistan coverage including Karachi, Lahore, and Islamabad",
];

const howItWorks = [
  { step: "01", title: "Contact RGM", desc: "Call or WhatsApp us to discuss your car transport requirement and route." },
  { step: "02", title: "Provide Details", desc: "Share your vehicle type, pickup address, and destination address with us." },
  { step: "03", title: "Vehicle Pickup", desc: "Our team arrives at your location and professionally loads your vehicle onto our carrier." },
  { step: "04", title: "Safe Transport", desc: "Your vehicle travels secured on our professional carrier fleet across Pakistan." },
  { step: "05", title: "Delivery", desc: "Your vehicle is safely delivered to your destination address." },
];

export default function CarTransportPage() {
  return (
    <>
      <PageHero
        eyebrow="Car Transport Service"
        title="Reliable Car Transport Service Across Pakistan"
        subtitle="Apki Ghari Hamari Zimadari — your vehicle's safety is our greatest responsibility."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Car Transport Service" },
        ]}
        image="/images/car-transport.jpg"
      />

      {/* Service Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Our Flagship Service
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Pakistan&apos;s Trusted
                <br />
                Car Transport Service
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  RGM Goods &amp; Car Carrier Services provides professional car transport
                  service across Pakistan with over{" "}
                  <strong className="text-gray-900">20 years of experience</strong>. We
                  specialise in the safe, secure, and timely transportation of cars and
                  vehicles across all major routes in Pakistan.
                </p>
                <p>
                  Unlike many transport providers, RGM owns and operates its own
                  professional car carrier fleet. This means complete accountability and
                  consistent quality from the moment we pick up your vehicle to the moment
                  it arrives at its destination.
                </p>
                <p>
                  Our confirmed routes include{" "}
                  <strong className="text-gray-900">Karachi to Lahore</strong> and{" "}
                  <strong className="text-gray-900">Karachi to Islamabad</strong>, with
                  nationwide coverage across Pakistan.
                </p>
              </div>

              <div className="p-5 rounded-xl border-l-4 border-blue-600 bg-blue-50 mb-8">
                <p className="text-blue-900 italic font-semibold text-lg">
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

            <div className="relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/fleet-carrier.jpg"
                  alt="RGM Car Transport Service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-5 -right-5 rounded-2xl p-5 shadow-xl"
                style={{ background: "linear-gradient(135deg, #0f2d57, #163a70)" }}
              >
                <div className="flex items-center gap-2">
                  <Award size={18} className="text-blue-300" />
                  <div>
                    <div className="text-white font-bold text-sm">20+ Years</div>
                    <div className="text-blue-200 text-xs">Trusted Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
          >
            Why Choose RGM for Car Transport?
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

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2
            className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-10 text-center"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
          >
            How Our Car Transport Service Works
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {howItWorks.map((step, idx) => (
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

      {/* Trust Blocks */}
      <section
        className="section-padding text-white"
        style={{ background: "linear-gradient(135deg, #030d1a 0%, #0f2d57 100%)" }}
      >
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Safe Vehicle Handling", desc: "Every vehicle is professionally loaded, secured, and handled throughout the journey." },
              { icon: Clock, title: "24/7 Availability", desc: "Contact us any time. We are available around the clock for your convenience." },
              { icon: MapPin, title: "Nationwide Coverage", desc: "Karachi, Lahore, Islamabad and beyond — RGM serves all of Pakistan." },
            ].map(({ icon: Icon, title, desc }, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-blue-300" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="car-transport" />
      <CTASection title="Ready to Transport Your Car?" />
    </>
  );
}
