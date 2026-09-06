import Link from "next/link";
import { Home, Phone, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        background: "linear-gradient(135deg, #030d1a 0%, #0f2d57 100%)",
      }}
    >
      <div className="text-center max-w-lg">
        <div
          className="text-8xl font-black mb-6"
          style={{
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            backgroundImage: "linear-gradient(90deg, #4a9fe8, #2a7fdb)",
          }}
        >
          404
        </div>
        <h1 className="text-2xl font-extrabold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-10 leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Please navigate back to our website.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold bg-white text-blue-900 hover:bg-blue-50 transition-all"
          >
            <Home size={16} />
            Go to Homepage
          </Link>
          <a
            href="tel:03004432981"
            className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold border-2 border-white/20 text-white hover:border-white/40 transition-all"
          >
            <Phone size={16} />
            Call RGM
          </a>
        </div>
        <div className="mt-8">
          <p className="text-gray-500 text-xs mb-4">Quick Links</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
              { label: "About", href: "/about" },
              { label: "Fleet", href: "/fleet" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 text-blue-300 hover:text-white text-sm transition-colors"
              >
                {link.label}
                <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
