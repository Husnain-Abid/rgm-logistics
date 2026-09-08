"use client";
// Note: metadata is set via parent layout for client components
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, MessageCircle } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import { faqs, siteConfig } from "@/data/site";

export default function FAQsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about RGM Goods & Car Carrier Services, our vehicle transportation services, and how to contact us."
        breadcrumbs={[{ label: "FAQs" }]}
        compact
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* FAQ List */}
            <div className="lg:col-span-2">
              <div className="space-y-3">
                {faqs.map((faq, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl border transition-all ${
                      openIdx === idx
                        ? "border-blue-200 shadow-md"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <button
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                      aria-expanded={openIdx === idx}
                    >
                      <span
                        className={`font-semibold text-sm leading-relaxed transition-colors ${
                          openIdx === idx ? "text-blue-700" : "text-gray-900"
                        }`}
                      >
                        {faq.q}
                      </span>
                      <motion.div
                        animate={{ rotate: openIdx === idx ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0"
                      >
                        <ChevronDown
                          size={18}
                          className={openIdx === idx ? "text-blue-600" : "text-gray-400"}
                        />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openIdx === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-5 pt-0 border-t border-gray-100">
                            <p className="text-gray-600 text-sm leading-relaxed pt-4">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <div
                  className="rounded-2xl p-7 text-white"
                  style={{
                    background: "linear-gradient(135deg, #0f2d57 0%, #163a70 100%)",
                  }}
                >
                  <h3 className="font-bold text-lg mb-3">
                    Have a Specific Question?
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    If you don&apos;t find your answer here, contact RGM directly.
                    We are available <strong className="text-white">24/7</strong>.
                  </p>
                  <div className="space-y-3">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-white text-blue-900 hover:bg-blue-50 transition-all"
                    >
                      <Phone size={16} className="text-blue-700" />
                      Call {siteConfig.phone}
                    </a>
                    <a
                      href={`https://wa.me/92${siteConfig.whatsapp.replace(/^0/, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white transition-all"
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
                </div>

                <div className="rounded-2xl p-7 bg-gray-50 border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-3">
                    Quick Information
                  </h3>
                  <ul className="space-y-3 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Available 24/7 across Pakistan
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Door-to-door car transport
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Own professional fleet
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      20+ years experience
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      Karachi, Lahore, Islamabad
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
