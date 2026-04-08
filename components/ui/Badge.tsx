import { cn } from "@/lib/utils";

interface BadgeProps {
  label: string;
  variant?: "blue" | "gold" | "navy" | "default";
  className?: string;
}

export default function Badge({
  label,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium",
        {
          "bg-blue-light text-blue": variant === "blue",
          "bg-gold-light text-[#8a6a1a]": variant === "gold",
          "bg-navy text-white": variant === "navy",
          "bg-gray-100 text-gray-600": variant === "default",
        },
        className,
      )}
    >
      {label}
    </span>
  );
}
