import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { siteConfig, featuredRoutes } from "@/data/site";

export const metadata: Metadata = {
  title: "Service Areas | Nationwide Car Transport Pakistan",
  description:
    "RGM provides car transport across Pakistan. Primary routes: Karachi to Lahore, Karachi to Islamabad. Nationwide coverage available. Call 03004432981.",
};

const cities = [
  { name: "Karachi", region: "Sindh", desc: "Sub office: Gate No 6, Hawkby Road, Maripure" },
  { name: "Lahore", region: "Punjab", desc: "Head office: 18-KM Multan Road, Near Kaka Khail Hotel" },
  { name: "Islamabad", region: "Capital", desc: "Pakistan Plaza, GT Road, Near Attock Pump, G15/4" },
  { name: "Rawalpindi", region: "Punjab", desc: "Served via Islamabad operations" },
  { name: "Multan", region: "Punjab", desc: "Nationwide Pakistan coverage" },
  { name: "Faisalabad", region: "Punjab", desc: "Nationwide Pakistan coverage" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Areas"
        title="Nationwide Vehicle Transportation Across Pakistan"
        subtitle="RGM provides professional vehicle transportation services across Pakistan, with confirmed routes and operations in major cities."
        breadcrumbs={[{ label: "Service Areas" }]}
        image="/images/pakistan-map.jpg"
      />

      {/* Coverage Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Coverage
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Wherever You Are
                <br />
                in Pakistan
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  RGM Goods &amp; Car Carrier Services provides vehicle transportation
                  across Pakistan. Our operations span the length and breadth of the
                  country, with our own fleet handling major inter-city routes.
                </p>
                <p>
                  Our confirmed primary routes include{" "}
                  <strong className="text-gray-900">Karachi to Lahore</strong> and{" "}
                  <strong className="text-gray-900">Karachi to Islamabad</strong> —
                  two of Pakistan&apos;s most important transportation corridors.
                </p>
                <p>
                  For routes and cities beyond our confirmed coverage, please contact
                  us directly. Our team will confirm availability and arrange
                  transportation to your specific destination.
                </p>
              </div>

              <div className="p-5 rounded-xl border-l-4 border-blue-600 bg-blue-50 mb-8">
                <p className="text-blue-900 text-sm">
                  <strong>Need transport to a specific city?</strong> Contact RGM at{" "}
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="underline font-semibold"
                  >
                    {siteConfig.phone}
                  </a>{" "}
                  to confirm coverage and arrange your vehicle transportation.
                </p>
              </div>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-blue-700 text-white hover:bg-blue-800 transition-all shadow-md"
              >
                <Phone size={16} />
                Call to Confirm Your Route
              </a>
            </div>

            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/pakistan-map.jpg"
                alt="RGM Pakistan service coverage map"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Routes */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
              Confirmed Routes
            </p>
            <h2
              className="text-3xl font-extrabold text-gray-900"
              style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
            >
              Featured Transport Routes
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            {featuredRoutes.map((route, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-8 text-white"
                style={{ background: "linear-gradient(135deg, #0f2d57, #163a70)" }}
              >
                <div className="flex items-center gap-6 mb-4">
                  <div className="text-center">
                    <MapPin size={18} className="text-blue-300 mx-auto mb-1" />
                    <div className="text-xl font-black text-white">{route.from}</div>
                    <div className="text-blue-300 text-xs">Origin</div>
                  </div>
                  <div className="flex-1 border-t-2 border-dashed border-blue-400/40 relative">
                    <div
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-blue-400/30 flex items-center justify-center"
                    >
                      <ArrowRight size={12} className="text-blue-300" />
                    </div>
                  </div>
                  <div className="text-center">
                    <MapPin size={18} className="text-green-400 mx-auto mb-1" />
                    <div className="text-xl font-black text-white">{route.to}</div>
                    <div className="text-green-300 text-xs">Destination</div>
                  </div>
                </div>
                <p className="text-gray-400 text-sm">{route.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 text-sm max-w-xl mx-auto">
            These are our confirmed primary routes. RGM provides vehicle transportation
            across Pakistan — contact us for your specific route requirement.
          </p>
        </div>
      </section>

      {/* Cities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
              Coverage Cities
            </p>
            <h2
              className="text-3xl font-extrabold text-gray-900"
              style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
            >
              Where We Operate
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {cities.map((city, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">{city.name}</h3>
                    <p className="text-blue-600 text-xs font-semibold mb-2">{city.region}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{city.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              Don&apos;t see your city?{" "}
              <Link href="/contact" className="text-blue-700 font-semibold hover:underline">
                Contact us
              </Link>{" "}
              — we serve across Pakistan.
            </p>
          </div>
        </div>
      </section>

      <CTASection title="Transport Your Vehicle Anywhere in Pakistan" />
    </>
  );
}
