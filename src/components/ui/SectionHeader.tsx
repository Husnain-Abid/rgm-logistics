interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = true,
  light = false,
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`${centered ? "text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p
          className={`text-xs font-bold tracking-widest uppercase mb-3 ${
            light ? "text-blue-300" : "text-blue-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold leading-tight mb-4 ${
          light ? "text-white" : "text-gray-900"
        }`}
        style={{ fontFamily: "var(--font-plus-jakarta, system-ui, sans-serif)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
