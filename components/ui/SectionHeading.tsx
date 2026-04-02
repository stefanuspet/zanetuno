import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  divider?: boolean;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  divider = false,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      {divider && <span className="block w-12 h-1 bg-teal rounded-full" />}
      <h2 className="text-3xl md:text-4xl font-bold text-navy">{title}</h2>
      {subtitle && (
        <p className="text-charcoal/70 text-base md:text-lg max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
}
