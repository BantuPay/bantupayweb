export default function SectionHeader({
  badge,
  title,
  subtitle,
  className = "",
  wide = false,
  titleClassName = "",
  variant = "default",
}) {
  const isLight = variant === "light";

  return (
    <header
      className={`text-center mb-12 md:mb-14 ${wide ? "max-w-3xl" : "max-w-xl"} mx-auto ${className}`}
    >
      {badge && (
        <span className={`section-badge ${isLight ? "section-badge-light" : ""}`}>
          {badge}
        </span>
      )}
      <h2 className={`section-title ${isLight ? "section-title-light" : ""} ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`section-subtitle ${isLight ? "section-subtitle-light" : ""}`}>
          {subtitle}
        </p>
      )}
    </header>
  );
}
