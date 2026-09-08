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
                    <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.56 0 .25 5.31.25 11.83c0 2.08.54 4.11 1.57 5.9L.16 24l6.42-1.68a11.82 11.82 0 0 0 5.49 1.35h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.39-8.36ZM12.08 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.81 1 1.02-3.71-.23-.38a9.83 9.83 0 0 1-1.51-5.2C2.17 6.4 6.6 1.97 12.08 1.97c2.66 0 5.16 1.04 7.04 2.93a9.88 9.88 0 0 1 2.91 7.04c0 5.48-4.43 9.76-9.95 9.76Zm5.39-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47s1.05 2.86 1.2 3.05c.15.2 2.06 3.14 4.99 4.4.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>

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
