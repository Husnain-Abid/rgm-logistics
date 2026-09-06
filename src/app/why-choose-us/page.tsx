import type { Metadata } from "next";
import Image from "next/image";
import { Award, MapPin, Clock, Shield, Home, Truck, CheckCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { whyChooseUs } from "@/data/site";

export const metadata: Metadata = {
  title: "Why Choose RGM | Trusted Car Transport Pakistan",
  description:
    "Discover why customers trust RGM Goods & Car Carrier Services for vehicle transportation. 20+ years experience, own fleet, nationwide coverage, 24/7 availability.",
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Award,
  Map: MapPin,
  Clock,
  Shield,
  Home,
  Truck,
};

const detailedPoints = [
  {
    icon: Award,
    title: "20+ Years of Proven Experience",
    desc: "RGM has been providing professional vehicle transportation services across Pakistan for over two decades. This experience is irreplaceable — it means our team knows how to handle every situation, every route, and every type of vehicle transportation challenge that may arise.",
    highlight: "20+ Years",
  },
  {
    icon: Shield,
    title: "Your Vehicle's Safety is Our Responsibility",
    desc: "The moment your vehicle is in our care, it becomes our responsibility. We use professional loading techniques, secure fastening, and careful handling throughout every journey. We do not just transport vehicles — we protect them.",
    highlight: "Safe Handling",
  },
  {
    icon: Truck,
    title: "We Own Our Professional Fleet",
    desc: "Unlike many transport providers who rely on third-party carriers, RGM operates its own car carrier fleet. This means complete control, accountability, and consistent quality. When we say your vehicle will be transported on our carrier — it means it.",
    highlight: "Own Fleet",
  },
  {
    icon: Home,
    title: "Door-to-Door Convenience",
    desc: "We come to you. You do not need to bring your vehicle to a depot or arrange additional logistics. Our team picks up your vehicle from your address and delivers it safely to your chosen destination — completely door to door.",
    highlight: "Door-to-Door",
  },
  {
    icon: Clock,
    title: "Available 24 Hours, 7 Days a Week",
    desc: "Vehicle transportation needs do not follow business hours. Whether you need to arrange a scheduled transport, have an emergency recovery, or simply want to make an inquiry — RGM is available 24/7. Call or WhatsApp us any time.",
    highlight: "24/7",
  },
  {
    icon: MapPin,
    title: "Nationwide Pakistan Coverage",
    desc: "From Karachi to Lahore, Islamabad to Rawalpindi and beyond — RGM provides vehicle transportation services across Pakistan. Our confirmed routes include Karachi-Lahore and Karachi-Islamabad, with nationwide service available.",
    highlight: "All Pakistan",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why RGM"
        title="Why Choose RGM Goods & Car Carrier Services?"
        subtitle="Pakistan's trusted vehicle transportation company — built on experience, accountability, and genuine care for your vehicle."
        breadcrumbs={[{ label: "Why Choose Us" }]}
        image="/images/fleet-carrier.jpg"
      />

      {/* Opening Statement */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-xl leading-relaxed mb-6">
            When you trust a company with your vehicle, you deserve more than just
            transportation. You deserve{" "}
            <strong className="text-gray-900">accountability, professionalism, and genuine care</strong>.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed">
            At RGM, we have built our reputation over 20+ years on exactly these principles.
            Here is why thousands of customers across Pakistan choose RGM for their
            vehicle transportation needs.
          </p>
        </div>
      </section>

      {/* Detailed Reasons */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-8">
            {detailedPoints.map((point, idx) => {
              const Icon = point.icon;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center bg-white rounded-3xl p-8 lg:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-all`}
                >
                  <div className="flex-shrink-0 text-center lg:text-left">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-3"
                      style={{ background: "linear-gradient(135deg, #0f2d57, #2a7fdb)" }}
                    >
                      <Icon size={32} className="text-white" />
                    </div>
                    <div
                      className="inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white"
                      style={{ backgroundColor: "#163a70" }}
                    >
                      {point.highlight}
                    </div>
                  </div>
                  <div>
                    <h2
                      className="text-xl md:text-2xl font-extrabold text-gray-900 mb-4"
                      style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
                    >
                      {point.title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-base">
                      {point.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Focus Summary */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[380px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/car-transport.jpg"
                alt="Professional vehicle transportation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Customer-Focused
              </p>
              <h2
                className="text-3xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                The RGM Difference
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                What truly sets RGM apart is our culture of responsibility. Every
                member of our team understands that your vehicle is not just cargo —
                it is your property, your investment, and often your daily necessity.
              </p>
              <div className="space-y-3">
                {[
                  "Professional vehicle handling at every stage",
                  "Own car carrier fleet for complete accountability",
                  "Experienced team with 20+ years of knowledge",
                  "24/7 contact for peace of mind",
                  "Nationwide service with door-to-door convenience",
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Choose the Trusted Choice for Your Vehicle" />
    </>
  );
}
