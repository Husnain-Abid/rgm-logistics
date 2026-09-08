"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { navItems, siteConfig } from "@/data/site";

function RGMLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}> <div className="relative">
      <div
        className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-navy-800 flex items-center justify-center shadow-md"
        style={{
          background:
            "linear-gradient(135deg, #2a7fdb 0%, #0f2d57 100%)",
        }}
      > <span className="text-white font-black text-sm tracking-tight leading-none">
          RGM </span> </div> </div>


      <div className="flex flex-col">
        <span className="font-black text-[13px] leading-tight tracking-wide uppercase text-current">
          RGM Goods &
        </span>
        <span className="font-black text-[13px] leading-tight tracking-wide uppercase text-current">
          Car Carrier Services
        </span>
      </div>
    </div>


  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);


    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);


  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };


    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);


  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }


    return () => {
      document.body.style.overflow = "";
    };


  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-white shadow-lg border-b border-gray-100"
          : "bg-transparent"
          }`}
      > <div className="container-custom"> <div className="flex items-center justify-between h-16 lg:h-20">
        {/* Logo */} <Link
          href="/"
          className="flex-shrink-0"
          aria-label="RGM Home"
        >
          <RGMLogo
            className={scrolled ? "text-gray-900" : "text-white"}
          /> </Link>


        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                ref={dropdownRef}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.href)
                    ? scrolled
                      ? "text-blue-600"
                      : "text-blue-300"
                    : scrolled
                      ? "text-gray-700 hover:text-blue-600"
                      : "text-white/90 hover:text-white"
                    }`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  {item.label}

                  <ChevronDown
                    size={14}
                    className={`transition-transform ${dropdownOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: -8,
                        scale: 0.97,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: -8,
                        scale: 0.97,
                      }}
                      transition={{
                        duration: 0.18,
                        ease: "easeOut",
                      }}
                      className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="py-2">
                        <Link
                          href="/services"
                          className="block px-4 py-2.5 text-sm font-semibold text-gray-900 bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-colors border-b border-gray-100"
                        >
                          All Services Overview
                        </Link>

                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-colors ${isActive(child.href)
                              ? "text-blue-700 bg-blue-50 font-medium"
                              : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                              }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(item.href)
                  ? scrolled
                    ? "text-blue-600"
                    : "text-blue-300"
                  : scrolled
                    ? "text-gray-700 hover:text-blue-600"
                    : "text-white/90 hover:text-white"
                  }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled
              ? "text-gray-700 hover:text-blue-600"
              : "text-white/90 hover:text-white"
              }`}
          >
            <Phone size={14} />
            <span>{siteConfig.phone}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 rounded-md transition-colors ${scrolled
            ? "text-gray-700 hover:bg-gray-100"
            : "text-white hover:bg-white/10"
            }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
        </div>
      </header>


      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        {/* Animated Ripple Rings */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

        <span
          className="absolute inset-[-6px] rounded-full border-2 border-[#25D366] opacity-60 animate-[ping_2s_ease-out_infinite]"
        />

        <span
          className="absolute inset-[-12px] rounded-full border border-[#25D366] opacity-30 animate-[ping_2.5s_ease-out_infinite]"
        />

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/92${siteConfig.whatsapp.replace(/^0/, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative flex w-14 h-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl active:scale-95"
        >
          <svg
            viewBox="0 0 24 24"
            width="31"
            height="31"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M20.52 3.48A11.84 11.84 0 0 0 12.08 0C5.56 0 .25 5.31.25 11.83c0 2.08.54 4.11 1.57 5.9L.16 24l6.42-1.68a11.82 11.82 0 0 0 5.49 1.35h.01c6.52 0 11.83-5.31 11.83-11.83 0-3.16-1.23-6.13-3.39-8.36ZM12.08 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.21-3.81 1 1.02-3.71-.23-.38a9.83 9.83 0 0 1-1.51-5.2C2.17 6.4 6.6 1.97 12.08 1.97c2.66 0 5.16 1.04 7.04 2.93a9.88 9.88 0 0 1 2.91 7.04c0 5.48-4.43 9.76-9.95 9.76Zm5.39-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.47s1.05 2.86 1.2 3.05c.15.2 2.06 3.14 4.99 4.4.7.3 1.25.48 1.68.61.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>
      </div>
















      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 28,
                stiffness: 300,
              }}
              className="fixed top-0 right-0 bottom-0 w-[320px] bg-white z-50 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Mobile Menu Header */}
              <div
                className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-950"
                style={{ backgroundColor: "#061529" }}
              >
                <RGMLogo className="text-white" />

                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-md text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Mobile Nav Links */}
              <nav
                className="flex-1 overflow-y-auto py-4"
                aria-label="Mobile navigation"
              >
                {navItems.map((item) =>
                  item.children ? (
                    <div key={item.label}>
                      <button
                        className="w-full flex items-center justify-between px-5 py-3.5 text-gray-800 font-medium text-sm hover:bg-blue-50 hover:text-blue-700 transition-colors"
                        onClick={() =>
                          setMobileServicesOpen(!mobileServicesOpen)
                        }
                      >
                        {item.label}

                        <ChevronDown
                          size={16}
                          className={`transition-transform text-gray-400 ${mobileServicesOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{
                              height: 0,
                              opacity: 0,
                            }}
                            animate={{
                              height: "auto",
                              opacity: 1,
                            }}
                            exit={{
                              height: 0,
                              opacity: 0,
                            }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-gray-50"
                          >
                            <Link
                              href="/services"
                              className="block px-8 py-2.5 text-sm text-gray-600 hover:text-blue-700 font-semibold border-b border-gray-100"
                            >
                              All Services
                            </Link>

                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block px-8 py-2.5 text-sm transition-colors ${isActive(child.href)
                                  ? "text-blue-700 font-medium"
                                  : "text-gray-600 hover:text-blue-700"
                                  }`}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`block px-5 py-3.5 text-sm font-medium transition-colors ${isActive(item.href)
                        ? "text-blue-700 bg-blue-50"
                        : "text-gray-800 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </nav>

              {/* Mobile CTA */}
              <div className="p-4 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition-all"
                >
                  <Phone size={16} />
                  Call Now: {siteConfig.phone}
                </a>

                <a
                  href={`https://wa.me/92${siteConfig.whatsapp.replace(/^0/, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold text-white transition-all"
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
          </>
        )}
      </AnimatePresence>

      {/* Mobile Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-gray-200 shadow-2xl safe-bottom">
        <div className="flex">
          <a
            href={`tel:${siteConfig.phone}`}
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white transition-all"
            style={{ backgroundColor: "#0f2d57" }}
          >
            <Phone size={16} />
            Call Now
          </a>

          <a
            href={`https://wa.me/92${siteConfig.whatsapp.replace(/^0/, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white transition-all"
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

            WhatsApp
          </a>
        </div>
      </div>
    </>


  );
}
