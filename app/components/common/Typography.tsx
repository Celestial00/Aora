"use client";

interface TypographyProps {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "custom";
  color?: string; 
  className?: string; 
  children: React.ReactNode;
}

export default function Typography({
  variant = "p",
  color = "text-white",
  className = "",
  children,
}: TypographyProps) {
  const baseStyles = "font-sans";

  const variants: Record<string, string> = {
    h1: `text-3xl md:text-5xl font-bold ${color}`,
    h2: `text-2xl md:text-4xl font-bold ${color}`,
    h3: `text-xl md:text-3xl font-semibold ${color}`,
    h4: `text-lg md:text-2xl font-semibold ${color}`,
    h5: `text-base md:text-xl font-medium ${color}`,
    h6: `text-sm md:text-lg font-medium ${color}`,
    p: `text-sm md:text-base font-normal ${color}`,
    small: `text-xs md:text-sm font-normal ${color}`,
    custom: `${color}`,
  };

  const appliedClass = `${variants[variant]} ${baseStyles} ${className}`;

  switch (variant) {
    case "h1":
      return <h1 className={appliedClass}>{children}</h1>;
    case "h2":
      return <h2 className={appliedClass}>{children}</h2>;
    case "h3":
      return <h3 className={appliedClass}>{children}</h3>;
    case "h4":
      return <h4 className={appliedClass}>{children}</h4>;
    case "h5":
      return <h5 className={appliedClass}>{children}</h5>;
    case "h6":
      return <h6 className={appliedClass}>{children}</h6>;
    case "small":
      return <small className={appliedClass}>{children}</small>;
    case "custom":
      return <p className={appliedClass}>{children}</p>; 
    default:
      return <p className={appliedClass}>{children}</p>;
  }
}
