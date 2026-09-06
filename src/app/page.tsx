import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import HeroHome from "@/components/sections/HeroHome";
import TrustBar from "@/components/sections/TrustBar";
import ServicesGrid from "@/components/sections/ServicesGrid";
import CTASection from "@/components/sections/CTASection";
import SectionHeader from "@/components/ui/SectionHeader";
import { siteConfig, whyChooseUs, featuredRoutes, faqs, management } from "@/data/site";

export const metadata: Metadata = {
  title: "RGM Goods & Car Carrier Services | Safe Car Transport Across Pakistan",
  description:
    "RGM Goods & Car Carrier Services — 20+ years of trusted car transport across Pakistan. Door-to-door service, car carrier, bike transport, accidental recovery. Call 03004432981.",
};

const howItWorks = [
  { step: "01", title: "Contact RGM", desc: "Call or WhatsApp us to discuss your vehicle transportation requirement." },
  { step: "02", title: "Share Details", desc: "Provide your vehicle type, pickup location, and destination." },
  { step: "03", title: "Vehicle Pickup", desc: "Our team arrives at your location for professional vehicle pickup." },
  { step: "04", title: "Safe Transportation", desc: "Your vehicle is transported securely on our professional carrier fleet." },
  { step: "05", title: "Safe Delivery", desc: "Your vehicle is delivered safely to your destination address." },
];

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <TrustBar />

      {/* About Preview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                About RGM
              </p>
              <h2
                className="text-3xl md:text-4xl lg:text-[2.5rem] font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                20 Years of Moving
                <br />
                Vehicles with Care
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                RGM Goods &amp; Car Carrier Services has been Pakistan&apos;s trusted partner for
                vehicle transportation for over two decades. Founded on the principles of
                responsibility, safety, and professionalism, we have built our reputation
                one successful delivery at a time.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We own and operate our own professional car carrier fleet, ensuring complete
                accountability from pickup to delivery. Serving customers from Karachi to Lahore,
                Islamabad, and beyond — RGM operates across Pakistan.
              </p>
              <div
                className="inline-block italic text-blue-700 text-lg font-semibold border-l-4 border-blue-600 pl-4 mb-8"
              >
                &ldquo;{siteConfig.tagline}&rdquo;
              </div>
              <div>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-blue-700 text-white hover:bg-blue-800 transition-all hover:gap-3 shadow-lg shadow-blue-700/20"
                >
                  Learn More About RGM
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/fleet-carrier.jpg"
                  alt="RGM Professional Car Carrier Fleet"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(3,13,26,0.4) 0%, transparent 60%)" }}
                />
              </div>
              {/* Experience badge */}
              <div
                className="absolute -bottom-6 -left-6 rounded-2xl p-5 shadow-2xl text-center"
                style={{ background: "linear-gradient(135deg, #0f2d57, #163a70)" }}
              >
                <div className="text-4xl font-black text-white">20+</div>
                <div className="text-blue-200 text-sm font-medium">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <ServicesGrid preview />

      {/* How It Works */}
      <section className="section-padding" style={{ backgroundColor: "#f8f9fb" }}>
        <div className="container-custom">
          <SectionHeader
            eyebrow="Simple Process"
            title="How It Works"
            subtitle="Getting your vehicle transported with RGM is straightforward. Contact us and we handle the rest."
            centered
            className="mb-14"
          />
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {howItWorks.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center relative z-10">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-black mb-5 shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #0f2d57, #2a7fdb)",
                      color: "white",
                    }}
                  >
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why RGM — Split Layout */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                eyebrow="Why Choose RGM"
                title="Your Vehicle's Safety is Our Greatest Responsibility"
                subtitle="We don't just transport vehicles. We transport peace of mind."
                centered={false}
                className="mb-10"
              />
              <div className="grid sm:grid-cols-2 gap-5">
                {whyChooseUs.map((point, idx) => (
                  <div key={idx} className="flex gap-3">
                    <CheckCircle size={20} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-gray-900 text-sm mb-1">{point.title}</div>
                      <div className="text-gray-500 text-xs leading-relaxed">{point.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/why-choose-us"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 transition-all hover:gap-3"
                >
                  Why Choose RGM — Full Details
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/16668923/pexels-photo-16668923.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                  alt="Professional vehicle transportation service"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(3,13,26,0.5) 0%, transparent 70%)" }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white italic text-lg font-semibold drop-shadow-lg">
                    &ldquo;{siteConfig.tagline}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section
        className="section-padding text-white relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #030d1a 0%, #0f2d57 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container-custom relative z-10">
          <SectionHeader
            eyebrow="Our Fleet"
            title="Our Professional Fleet"
            subtitle="Vehicles prepared for reliable transportation across Pakistan."
            centered
            light
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="relative h-[280px] rounded-2xl overflow-hidden group">
              <Image
                src="/images/fleet-carrier.jpg"
                alt="RGM Car Carrier Fleet"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(3,13,26,0.6) 0%, transparent 60%)" }}
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-sm">Car Carrier Fleet</span>
              </div>
            </div>
            <div className="relative h-[280px] rounded-2xl overflow-hidden group">
              <Image
                src="https://images.pexels.com/photos/16325167/pexels-photo-16325167.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="RGM Fleet on Highway"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(3,13,26,0.6) 0%, transparent 60%)" }}
              />
              <div className="absolute bottom-4 left-4">
                <span className="text-white font-bold text-sm">Nationwide Coverage</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 transition-all hover:gap-3"
            >
              Explore Our Fleet
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Nationwide Coverage */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="relative">
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/pakistan-map.jpg"
                  alt="Pakistan Map showing RGM service coverage"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Service Areas
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Car Transportation
                <br />
                Across Pakistan
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                RGM provides vehicle transportation services across Pakistan. Whether you
                are in a major city or need long-distance transport — we are here to help.
              </p>

              {/* Featured Routes */}
              <div className="space-y-4 mb-8">
                {featuredRoutes.map((route, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-blue-600" />
                        <span className="font-bold text-gray-900">{route.from}</span>
                      </div>
                      <div className="flex-1 border-t-2 border-dashed border-blue-200 mx-2" />
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900">{route.to}</span>
                        <MapPin size={16} className="text-green-600" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/service-areas"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-blue-700 text-white hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20"
                >
                  View All Service Areas
                  <ArrowRight size={16} />
                </Link>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-gray-200 text-gray-700 hover:border-blue-300 hover:text-blue-700 transition-all"
                >
                  <Phone size={16} />
                  Call to Inquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Our Team"
            title="The People Behind RGM"
            centered
            className="mb-12"
          />
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {management.map((person, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all"
              >
                <div
                  className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-black text-white"
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

      {/* FAQ Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Common Questions"
            title="Frequently Asked Questions"
            centered
            className="mb-12"
          />
          <div className="max-w-3xl mx-auto space-y-4 mb-10">
            {faqs.slice(0, 5).map((faq, idx) => (
              <details
                key={idx}
                className="group border border-gray-100 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:bg-gray-50 transition-colors list-none">
                  <span>{faq.q}</span>
                  <span className="text-blue-600 text-xl font-bold flex-shrink-0 group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 pt-2 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-800 transition-all hover:gap-3"
            >
              View All FAQs
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
