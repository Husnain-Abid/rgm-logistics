"use client";
import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showTagline?: boolean;
}

export default function CTASection({
  title = "Need to Transport Your Vehicle?",
  subtitle,
  showTagline = true,
}: CTASectionProps) {
  return (
    <section
      className="relative overflow-hidden py-20 lg:py-28"
      style={{
        background:
          "linear-gradient(135deg, #030d1a 0%, #0f2d57 60%, #163a70 100%)",
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #2a7fdb, transparent)" }}
        />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #4a9fe8, transparent)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-blue-300 text-xs font-bold tracking-widest uppercase mb-4">
            Contact RGM
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
            {title}
          </h2>
          {showTagline && (
            <p className="text-xl text-blue-200 italic mb-4 font-medium">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
          )}
          {subtitle && (
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              {subtitle}
            </p>
          )}
          {!subtitle && (
            <p className="text-gray-300 text-base mb-10 max-w-lg mx-auto">
              Contact us today. We are available <strong className="text-white">24/7</strong> to assist you.
            </p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-blue-900 bg-white hover:bg-blue-50 transition-all hover:scale-105 active:scale-100 shadow-xl"
            >
              <Phone size={20} className="text-blue-700" />
              Call Now: {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/92${siteConfig.whatsapp.replace(/^0/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white transition-all hover:scale-105 active:scale-100 shadow-xl"
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
        </motion.div>
      </div>
    </section>
  );
}
