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
                      <MessageCircle size={16} />
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
