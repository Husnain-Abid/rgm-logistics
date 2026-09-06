import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  light?: boolean;
}

export default function Breadcrumb({ items, light = true }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm">
      <Link
        href="/"
        className={`flex items-center transition-colors ${
          light
            ? "text-white/60 hover:text-white"
            : "text-gray-400 hover:text-blue-600"
        }`}
        aria-label="Home"
      >
        <Home size={14} />
      </Link>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-1.5">
          <ChevronRight
            size={13}
            className={light ? "text-white/30" : "text-gray-300"}
          />
          {item.href && idx < items.length - 1 ? (
            <Link
              href={item.href}
              className={`transition-colors ${
                light
                  ? "text-white/60 hover:text-white"
                  : "text-gray-400 hover:text-blue-600"
              }`}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={light ? "text-white font-medium" : "text-gray-700 font-medium"}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
