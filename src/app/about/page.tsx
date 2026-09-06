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
                  <MessageCircle size={16} />
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
