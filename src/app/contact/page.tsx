import type { Metadata } from "next";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import { contactInfo, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | RGM Goods & Car Carrier Services",
  description:
    "Contact RGM Goods & Car Carrier Services. Call 03004432981 or WhatsApp for car transport inquiries. Offices in Lahore, Karachi, and Islamabad. Available 24/7.",
};

const officeIcons = [MapPin, MapPin, MapPin];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in Touch with RGM"
        subtitle="We are available 24/7 — call, WhatsApp, or send us a message. Our team is ready to assist you."
        breadcrumbs={[{ label: "Contact Us" }]}
        compact
      />

      {/* Quick Contact Bar */}
      <section
        className="py-8 border-b border-gray-100"
        style={{ backgroundColor: "#f8f9fb" }}
      >
        <div className="container-custom">
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #0f2d57, #2a7fdb)" }}
              >
                <Phone size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Call Us</div>
                <div className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {siteConfig.phone}
                </div>
              </div>
            </a>

            <a
              href={`https://wa.me/92${siteConfig.whatsapp.replace(/^0/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#25D366]">
                <MessageCircle size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">WhatsApp</div>
                <div className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  {siteConfig.whatsapp}
                </div>
              </div>
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #163a70, #2a7fdb)" }}
              >
                <Mail size={20} className="text-white" />
              </div>
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Email Us</div>
                <div className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors break-all text-sm">
                  {siteConfig.email}
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-8"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Our Offices
              </h2>

              <div className="space-y-6 mb-10">
                {contactInfo.offices.map((office, idx) => {
                  const Icon = officeIcons[idx];
                  return (
                    <div
                      key={office.city}
                      className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-gray-50"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #0f2d57, #2a7fdb)" }}
                      >
                        <Icon size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-lg mb-0.5">
                          {office.city}
                        </div>
                        <div className="text-blue-600 text-xs font-bold uppercase tracking-wide mb-2">
                          {office.label}
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Availability */}
              <div
                className="rounded-2xl p-6 text-white"
                style={{
                  background: "linear-gradient(135deg, #030d1a, #0f2d57)",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={20} className="text-blue-300" />
                  <h3 className="font-bold text-lg">24/7 Availability</h3>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">
                  RGM is available around the clock — 24 hours, 7 days a week.
                  Whether it&apos;s a scheduled transport or an emergency recovery,
                  we are always reachable.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Primary Contact</div>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="text-white font-bold hover:text-blue-300 transition-colors"
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Alt / Emergency</div>
                    <a
                      href={`tel:${contactInfo.altPhone}`}
                      className="text-white font-bold hover:text-blue-300 transition-colors"
                    >
                      {contactInfo.altPhone}
                    </a>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Owner</div>
                    <a
                      href={`tel:${contactInfo.altPhone}`}
                      className="text-white font-semibold text-sm hover:text-blue-300 transition-colors"
                    >
                      Rana Gulam Mustafa
                    </a>
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs mb-1">Manager</div>
                    <a
                      href={`tel:${contactInfo.managerPhone}`}
                      className="text-white font-semibold text-sm hover:text-blue-300 transition-colors"
                    >
                      Rana Zain
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2
                className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3"
                style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
              >
                Send Us a Message
              </h2>
              <p className="text-gray-500 text-sm mb-8">
                Fill in your details and we will get back to you. For immediate
                assistance, please call or WhatsApp us directly.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
