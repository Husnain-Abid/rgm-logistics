"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, MessageCircle, ChevronDown, Shield, Clock, MapPin, Star } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function HeroHome() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.png"
          alt="RGM Car Carrier Fleet - Professional Vehicle Transportation"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(110deg, rgba(3,13,26,0.92) 0%, rgba(6,21,41,0.75) 55%, rgba(3,13,26,0.6) 100%)",
          }}
        />
      </div>

      {/* Floating trust badges */}
      <div className="absolute bottom-8 right-6 hidden xl:flex flex-col gap-3 z-10">
        {[
          { icon: Shield, label: "20+ Years Trusted" },
          { icon: Clock, label: "24/7 Available" },
          { icon: MapPin, label: "All Pakistan" },
        ].map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-3.5 py-2.5"
          >
            <Icon size={14} className="text-blue-300" />
            <span className="text-white/90 text-xs font-medium">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="container-custom relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-0.5 bg-blue-400" />
              <span className="text-blue-300 text-xs font-bold tracking-widest uppercase">
                Pakistan&apos;s Trusted Car Carrier
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
          >
            Safe &amp; Reliable
            <br />
            <span
              className="text-transparent"
              style={{
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                backgroundImage: "linear-gradient(90deg, #60a5fa, #93c5fd)",
              }}
            >
              Car Transportation
            </span>
            <br />
            Across Pakistan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-gray-200 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl"
          >
            With <strong className="text-white">20+ years of experience</strong>, RGM
            provides professional door-to-door vehicle transportation nationwide — available{" "}
            <strong className="text-white">24/7</strong> for your peace of mind.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-blue-200 italic text-lg font-medium mb-10"
          >
            &ldquo;{siteConfig.tagline}&rdquo;
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold bg-white text-blue-900 hover:bg-blue-50 transition-all hover:scale-105 active:scale-100 shadow-xl"
            >
              <Phone size={20} className="text-blue-700" />
              Call Now: {siteConfig.phone}
            </a>
            <a
              href={`https://wa.me/92${siteConfig.whatsapp.replace(/^0/, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-white hover:opacity-90 transition-all hover:scale-105 active:scale-100 shadow-xl"
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
          </motion.div>

          {/* Quick trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {[
              "Karachi → Lahore",
              "Karachi → Islamabad",
              "Door-to-Door Service",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-blue-400" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
