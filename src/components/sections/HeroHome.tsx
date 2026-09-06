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
          src="/images/hero-bg.jpg"
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
              <MessageCircle size={20} />
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
