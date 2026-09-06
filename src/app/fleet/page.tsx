import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Truck } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Our Fleet | Professional Car Carrier Vehicles",
  description:
    "RGM operates its own professional car carrier fleet for reliable vehicle transportation across Pakistan. View our fleet and learn about our transportation vehicles.",
};

const fleetImages = [
  {
    src: "/images/fleet-carrier.jpg",
    alt: "RGM Professional Car Carrier Fleet",
    label: "Car Carrier Fleet",
  },
  {
    src: "https://images.pexels.com/photos/16668923/pexels-photo-16668923.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Professional transport truck on highway",
    label: "Transport Vehicle",
  },
  {
    src: "/images/car-transport.jpg",
    alt: "Vehicle loading on car carrier",
    label: "Vehicle Loading",
  },
  {
    src: "https://images.pexels.com/photos/16325167/pexels-photo-16325167.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Fleet on Pakistan highway",
    label: "Nationwide Coverage",
  },
  {
    src: "/images/recovery-truck.jpg",
    alt: "Recovery vehicle for accidental transport",
    label: "Recovery Vehicle",
  },
  {
    src: "/images/bike-transport.jpg",
    alt: "Bike transport vehicle",
    label: "Bike Transport",
  },
];

export default function FleetPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Fleet"
        title="Our Professional Fleet"
        subtitle="Vehicles prepared for reliable transportation across Pakistan. RGM owns and operates its own car carrier fleet."
        breadcrumbs={[{ label: "Our Fleet" }]}
        image="/images/fleet-carrier.jpg"
      />

      {/* Fleet Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Our Fleet
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Own Fleet.
                <br />
                Own Accountability.
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  One of RGM&apos;s core strengths is that we own and operate our own
                  professional car carrier fleet. This is not just a business detail —
                  it is the foundation of our accountability to our customers.
                </p>
                <p>
                  Because we own our vehicles, we control every aspect of how your
                  vehicle is handled, loaded, and transported. There are no third parties,
                  no contractors, and no compromises.
                </p>
                <p>
                  Our fleet is maintained to professional standards and operated by
                  our experienced team — built over{" "}
                  <strong className="text-gray-900">20+ years</strong> of vehicle
                  transportation across Pakistan.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Truck, title: "Own Fleet", desc: "No third-party carriers" },
                { icon: Shield, title: "Professional Standards", desc: "Maintained to highest quality" },
                { icon: ArrowRight, title: "Nationwide", desc: "Operating across Pakistan" },
              ].map(({ icon: Icon, title, desc }, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl p-5 text-center text-white"
                  style={{ background: "linear-gradient(135deg, #0f2d57, #163a70)" }}
                >
                  <Icon size={24} className="text-blue-300 mx-auto mb-3" />
                  <div className="font-bold text-sm mb-1">{title}</div>
                  <div className="text-blue-200 text-xs">{desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Fleet Gallery */}
          <h2
            className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
          >
            Fleet Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleetImages.map((img, idx) => (
              <div
                key={idx}
                className="relative h-[240px] rounded-2xl overflow-hidden shadow-md group"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-100 opacity-70"
                  style={{ background: "linear-gradient(to top, rgba(3,13,26,0.7) 0%, transparent 60%)" }}
                />
                <div className="absolute bottom-4 left-4">
                  <span className="text-white font-semibold text-sm drop-shadow-md">
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-blue-50 border border-blue-100 text-center">
            <p className="text-blue-800 font-medium mb-2">
              Have questions about our fleet or vehicle capabilities?
            </p>
            <p className="text-blue-600 text-sm mb-4">
              Contact us directly for detailed information about our transportation fleet.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-blue-700 text-white hover:bg-blue-800 transition-all"
            >
              Contact RGM
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <CTASection title="Transport Your Vehicle with Our Professional Fleet" />
    </>
  );
}
