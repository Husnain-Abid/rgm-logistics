"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "whatsapp" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants = {
  primary:
    "bg-blue-700 hover:bg-blue-800 text-white shadow-md hover:shadow-lg",
  secondary:
    "bg-white hover:bg-gray-50 text-blue-900 shadow-md hover:shadow-lg border border-white/20",
  outline:
    "border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white",
  whatsapp:
    "text-white hover:opacity-90",
  ghost:
    "text-white/80 hover:text-white hover:bg-white/10 border border-white/20 hover:border-white/40",
};

const sizes = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  target,
  rel,
  ariaLabel,
  type = "button",
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 active:scale-95";
  const variantClass = variant === "whatsapp"
    ? `${variants.whatsapp} bg-[#25D366] hover:bg-[#1ebe5a]`
    : variants[variant];
  const cls = `${base} ${variantClass} ${sizes[size]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`;

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("https:")) {
      return (
        <a href={href} className={cls} target={target} rel={rel} aria-label={ariaLabel}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cls}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
