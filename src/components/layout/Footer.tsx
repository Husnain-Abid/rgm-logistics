import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { siteConfig, contactInfo } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-white"
      style={{
        background: "linear-gradient(180deg, #030d1a 0%, #061529 100%)",
      }}
    >
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #2a7fdb 0%, #163a70 100%)",
                }}
              >
                <span className="text-white font-black text-xs tracking-tight">
                  RGM
                </span>
              </div>
              <div>
                <div className="font-black text-xs tracking-wide uppercase leading-tight">
                  RGM Goods &
                </div>
                <div className="font-black text-xs tracking-wide uppercase leading-tight">
                  Car Carrier Services
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Pakistan&apos;s trusted vehicle transportation company with over{" "}
              <strong className="text-white">20 years of experience</strong>.
              Safe, reliable, and door-to-door car transport across Pakistan.
            </p>
            <div className="flex items-center gap-2 mb-3">
              <Clock size={14} className="text-blue-400 flex-shrink-0" />
              <span className="text-gray-300 text-sm">Available 24/7</span>
            </div>
            <div className="italic text-blue-300 text-sm font-medium">
              &ldquo;{siteConfig.tagline}&rdquo;
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 pb-3 border-b border-white/10">
              Company
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About RGM", href: "/about" },
                { label: "Why Choose Us", href: "/why-choose-us" },
                { label: "Our Fleet", href: "/fleet" },
                { label: "Gallery", href: "/gallery" },
                { label: "Service Areas", href: "/service-areas" },
                { label: "FAQs", href: "/faqs" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 pb-3 border-b border-white/10">
              Services
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Car Transport Service", href: "/services/car-transport" },
                { label: "Car Carrier", href: "/services/car-carrier" },
                { label: "Door-to-Door Transport", href: "/services/door-to-door-car-transport" },
                { label: "Accidental Recovery", href: "/services/accidental-car-recovery" },
                { label: "Private Box Service", href: "/services/private-box-service" },
                { label: "Bike Transport", href: "/services/bike-transport" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-5 pb-3 border-b border-white/10">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone
                    size={15}
                    className="text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300"
                  />
                  <span className="text-sm">{contactInfo.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/92${contactInfo.whatsapp.replace(/^0/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <MessageCircle
                    size={15}
                    className="text-green-400 flex-shrink-0 mt-0.5 group-hover:text-green-300"
                  />
                  <span className="text-sm">WhatsApp: {contactInfo.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <Mail
                    size={15}
                    className="text-blue-400 flex-shrink-0 mt-0.5 group-hover:text-blue-300"
                  />
                  <span className="text-sm break-all">{contactInfo.email}</span>
                </a>
              </li>
              {contactInfo.offices.map((office) => (
                <li key={office.city}>
                  <div className="flex items-start gap-3 text-gray-400">
                    <MapPin
                      size={15}
                      className="text-blue-400 flex-shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="text-xs font-semibold text-gray-300 uppercase tracking-wide mb-0.5">
                        {office.label} — {office.city}
                      </div>
                      <div className="text-sm leading-relaxed">{office.address}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs text-center md:text-left">
            &copy; {year} RGM Goods &amp; Car Carrier Services. All rights reserved.
          </p>
          <p className="text-blue-400/70 text-xs italic font-medium">
            &ldquo;Apki Ghari Hamari Zimadari.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
