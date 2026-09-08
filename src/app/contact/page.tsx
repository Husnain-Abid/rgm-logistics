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
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="white"
                  aria-hidden="true"
                >
                  <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.56 0 .25 5.31.25 11.83c0 2.08.54 4.11 1.57 5.9L.16 24l6.42-1.68a11.82 11.82 0 0 0 5.49 1.35h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.39-8.36ZM12.08 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.81 1 1.02-3.71-.23-.38a9.83 9.83 0 0 1-1.51-5.2C2.17 6.4 6.6 1.97 12.08 1.97c2.66 0 5.16 1.04 7.04 2.93a9.88 9.88 0 0 1 2.91 7.04c0 5.48-4.43 9.76-9.95 9.76Zm5.39-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47s1.05 2.86 1.2 3.05c.15.2 2.06 3.14 4.99 4.4.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
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
