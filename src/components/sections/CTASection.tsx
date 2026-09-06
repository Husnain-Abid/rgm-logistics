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
              <MessageCircle size={20} />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
