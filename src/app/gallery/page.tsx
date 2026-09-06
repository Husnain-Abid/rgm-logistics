"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";

const galleryImages = [
  {
    src: "/images/fleet-carrier.jpg",
    alt: "RGM Professional Car Carrier Fleet",
    category: "Fleet",
    size: "large",
  },
  {
    src: "/images/car-transport.jpg",
    alt: "Vehicle loading on car carrier",
    category: "Transport",
    size: "medium",
  },
  {
    src: "https://images.pexels.com/photos/16668923/pexels-photo-16668923.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Professional transport truck",
    category: "Fleet",
    size: "medium",
  },
  {
    src: "/images/recovery-truck.jpg",
    alt: "Accidental car recovery vehicle",
    category: "Recovery",
    size: "large",
  },
  {
    src: "https://images.pexels.com/photos/16325167/pexels-photo-16325167.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    alt: "Fleet on highway",
    category: "Transport",
    size: "medium",
  },
  {
    src: "/images/bike-transport.jpg",
    alt: "Bike transport service",
    category: "Bikes",
    size: "medium",
  },
  {
    src: "/images/hero-bg.jpg",
    alt: "Car carrier on Pakistan highway",
    category: "Fleet",
    size: "large",
  },
  {
    src: "/images/pakistan-map.jpg",
    alt: "Pakistan nationwide coverage",
    category: "Coverage",
    size: "medium",
  },
];

const categories = ["All", "Fleet", "Transport", "Recovery", "Bikes", "Coverage"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState<{ src: string; alt: string } | null>(null);

  const filtered = activeCategory === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="RGM Fleet & Operations Gallery"
        subtitle="Visual showcase of our professional car carrier fleet and vehicle transportation operations across Pakistan."
        breadcrumbs={[{ label: "Gallery" }]}
        image="/images/fleet-carrier.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-10 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                style={
                  activeCategory === cat
                    ? { background: "linear-gradient(135deg, #0f2d57, #2a7fdb)" }
                    : {}
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, idx) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-shadow ${
                    img.size === "large" ? "md:col-span-2 h-[280px]" : "h-[220px]"
                  }`}
                  onClick={() => setLightboxImg({ src: img.src, alt: img.alt })}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                    style={{ background: "rgba(3,13,26,0.5)" }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <ZoomIn size={20} className="text-white" />
                    </div>
                  </div>
                  <div
                    className="absolute bottom-0 left-0 right-0 p-4"
                    style={{ background: "linear-gradient(to top, rgba(3,13,26,0.7) 0%, transparent 100%)" }}
                  >
                    <span className="text-white text-xs font-semibold uppercase tracking-wide">
                      {img.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              No images in this category.
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
            onClick={() => setLightboxImg(null)}
          >
            <button
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightboxImg(null)}
              aria-label="Close lightbox"
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImg.src}
                alt={lightboxImg.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  );
}
