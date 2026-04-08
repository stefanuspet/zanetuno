import Link from "next/link";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
}

export default function CTABanner({
  title = "Ready to place an order?",
  subtitle = "Send us an inquiry and our export team will respond within 24–48 hours.",
}: CTABannerProps) {
  return (
    <section className="bg-blue">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          <p className="text-white/80 text-base">{subtitle}</p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 inline-flex items-center px-7 py-3 bg-white text-blue font-semibold rounded-md hover:bg-offwhite transition-colors duration-200"
        >
          Send an Inquiry
        </Link>
      </div>
    </section>
  );
}
