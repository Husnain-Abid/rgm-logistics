import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, CheckCircle, Shield, Award, Clock, MapPin } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { siteConfig, contactInfo, management } from "@/data/site";

export const metadata: Metadata = {
  title: "About RGM Goods & Car Carrier Services",
  description:
    "Learn about RGM Goods & Car Carrier Services — 20+ years of trusted vehicle transportation across Pakistan. Our story, our team, and our commitment to safe vehicle handling.",
};

const commitments = [
  {
    icon: Shield,
    title: "Safety First",
    desc: "Every vehicle entrusted to us is handled with the utmost care. From loading to delivery, we maintain strict safety standards throughout the journey.",
  },
  {
    icon: Award,
    title: "20+ Years of Experience",
    desc: "Two decades of experience means we understand the challenges of vehicle transportation. Our expertise ensures your vehicle is in the safest hands.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Our team is available around the clock — for scheduled transport or emergency recovery. We are always here when you need us.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    desc: "From Karachi to Lahore, Islamabad, and across Pakistan — RGM serves the nation with consistent, professional transportation service.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="About RGM Goods & Car Carrier Services"
        subtitle="Pakistan's trusted vehicle transportation company, built on 20 years of experience, responsibility, and care."
        breadcrumbs={[{ label: "About" }]}
        image="/images/about-bg.jpg"
      />

      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Our Story
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                A Legacy Built on
                <br />
                Trust and Responsibility
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  RGM Goods &amp; Car Carrier Services was established with a clear purpose:
                  to provide safe, reliable, and professional vehicle transportation to the
                  people of Pakistan. Over the past <strong className="text-gray-900">20+ years</strong>,
                  we have grown into one of Pakistan&apos;s trusted names in vehicle transportation.
                </p>
                <p>
                  We own and operate our own professional car carrier fleet. This means complete
                  control over every step of the transportation process — from vehicle loading
                  to final delivery. No third parties. No compromises.
                </p>
                <p>
                  Our service covers all major cities and routes across Pakistan. Whether you
                  need car transport from Karachi to Lahore, Islamabad, or anywhere in between —
                  RGM is equipped and experienced to handle it.
                </p>
              </div>

              <div className="mt-8 p-6 rounded-2xl border-l-4 border-blue-600 bg-blue-50">
                <p className="text-blue-900 italic text-lg font-semibold leading-relaxed">
                  &ldquo;{siteConfig.tagline}&rdquo;
                </p>
                <p className="text-blue-700 text-sm mt-2">
                  {siteConfig.supportingTagline}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="relative h-[320px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/fleet-carrier.jpg"
                  alt="RGM Car Carrier Fleet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { val: "20+", label: "Years Experience" },
                  { val: "All PK", label: "Coverage" },
                  { val: "24/7", label: "Available" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-xl p-5 text-center"
                    style={{ background: "linear-gradient(135deg, #0f2d57, #163a70)" }}
                  >
                    <div className="text-2xl font-black text-white">{stat.val}</div>
                    <div className="text-blue-200 text-xs font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
              Our Values
            </p>
            <h2
              className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4"
              style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
            >
              Our Commitment to You
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              At RGM, our business is built on promises we keep.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commitments.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-7 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg, #0f2d57, #2a7fdb)" }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
            Our Mission
          </p>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
          >
            Moving Vehicles. Delivering Trust.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our mission is simple: to provide every customer with a safe, reliable, and
            stress-free vehicle transportation experience. We believe that entrusting your
            vehicle to us is an act of trust — and we take that responsibility seriously.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Through our own professional fleet, experienced team, and 24/7 availability,
            we are committed to being Pakistan&apos;s most trusted name in vehicle transportation.
          </p>
          <div className="mt-8 inline-block">
            <div className="grid sm:grid-cols-3 gap-6 mt-4">
              {[
                { icon: CheckCircle, text: "Own professional fleet" },
                { icon: CheckCircle, text: "No third-party carriers" },
                { icon: CheckCircle, text: "Door-to-door service" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 text-gray-700">
                    <Icon size={18} className="text-blue-600 flex-shrink-0" />
                    <span className="font-medium text-sm">{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
              Leadership
            </p>
            <h2
              className="text-3xl font-extrabold text-gray-900 leading-tight"
              style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
            >
              Our Management
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {management.map((person, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all group"
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white transition-transform group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #0f2d57, #2a7fdb)" }}
                >
                  {person.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{person.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">{person.title}</p>
                <a
                  href={`tel:${person.phone}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-700 transition-colors"
                >
                  <Phone size={14} />
                  {person.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Customers Rely on RGM */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/car-transport.jpg"
                alt="Professional car transport service"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Why RGM
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Why Customers Trust RGM
              </h2>
              <div className="space-y-4">
                {[
                  "Over 20 years of professional vehicle transportation experience in Pakistan.",
                  "We own our car carrier fleet — no reliance on third parties.",
                  "Door-to-door service for maximum customer convenience.",
                  "Available 24/7 — for scheduled transport and emergency recovery.",
                  "Transparent, professional communication from contact to delivery.",
                  "Nationwide coverage with confirmed routes across major Pakistani cities.",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
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
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
