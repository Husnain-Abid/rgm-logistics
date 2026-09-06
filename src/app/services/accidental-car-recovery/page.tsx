import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle, Phone, MessageCircle, AlertTriangle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import RelatedServices from "@/components/sections/RelatedServices";
import { contactInfo } from "@/data/site";

export const metadata: Metadata = {
  title: "Accidental Car Recovery Service Pakistan | RGM",
  description:
    "Professional accidental car recovery and transportation by RGM. Safe handling of damaged vehicles across Pakistan. Available 24/7. Call 03004432981.",
};

export default function AccidentalRecoveryPage() {
  return (
    <>
      <PageHero
        eyebrow="Accidental Recovery"
        title="Accidental Car Recovery Service"
        subtitle="Professional and responsible recovery and transportation of accidental or broken-down vehicles across Pakistan."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Accidental Car Recovery" },
        ]}
        image="/images/recovery-truck.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3 text-blue-600">
                Recovery Service
              </p>
              <h2
                className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Responsible Handling
                <br />
                of Damaged Vehicles
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Accidents are stressful enough without worrying about how to move
                  your vehicle. RGM&apos;s accidental car recovery service is designed
                  to take that burden off your hands.
                </p>
                <p>
                  Our experienced team handles accidental and damaged vehicles with
                  the greatest care. Whether your vehicle needs to be transported to
                  a workshop, your home, or another city — we ensure it arrives safely
                  and without further damage.
                </p>
                <p>
                  With our <strong className="text-gray-900">24/7 availability</strong>
                  {" "}and nationwide coverage, RGM is here when you need recovery
                  service across Pakistan.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-amber-50 border border-amber-200 mb-8">
                <div className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                  <p className="text-amber-800 text-sm leading-relaxed">
                    For accidental recovery inquiries, please contact us directly.
                    We are available <strong>24/7</strong> at{" "}
                    <a href={`tel:${contactInfo.phone}`} className="underline font-semibold">
                      {contactInfo.phone}
                    </a>
                  </p>
                </div>
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
                src="/images/recovery-truck.jpg"
                alt="Accidental car recovery service"
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
            className="text-2xl font-extrabold text-gray-900 mb-8"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
          >
            Our Accidental Recovery Service
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Careful and responsible handling of damaged or accidental vehicles",
              "Professional transportation to your required destination",
              "Available 24/7 for recovery inquiries and arrangements",
              "Nationwide Pakistan coverage",
              "Experienced team with knowledge of damaged vehicle handling",
              "Contact us directly to discuss your specific recovery requirement",
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-white p-5 rounded-xl border border-gray-100">
                <CheckCircle size={18} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-gray-700 text-sm leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedServices currentSlug="accidental-car-recovery" />
      <CTASection title="Need Accidental Car Recovery?" subtitle="Contact us immediately — our team is available 24/7." showTagline={false} />
    </>
  );
}
