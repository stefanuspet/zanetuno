import Link from "next/link";
import { Award, Ship, Leaf, Package } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import type { LucideIcon } from "lucide-react";

type USP = {
  icon: LucideIcon;
  headline: string;
  description: string;
};

const usps: USP[] = [
  {
    icon: Award,
    headline: "Premium Quality",
    description:
      "We implement strict quality control standards, from the point of catch/harvesting through to packaging and final shipment.",
  },
  {
    icon: Ship,
    headline: "Shipping Flexibility",
    description:
      "We cater to your needs by offering both fresh shipments (via air freight) and frozen options (via sea freight) to ensure optimal freshness.",
  },
  {
    icon: Leaf,
    headline: "Responsible Sourcing",
    description:
      "We collaborate with local fishermen and farmers who practice sustainable and ethical fishing methods.",
  },
  {
    icon: Package,
    headline: "Competitive MOQ",
    description:
      "To ensure our quality meets your standards, we accept sample orders starting from 1 kg before proceeding to large-scale shipments.",
  },
];

export default function WhyUsPreview() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
        <SectionHeading
          title="Why Choose Zanetuno"
          subtitle="We make it easy for global buyers to source premium Indonesian seafood with confidence."
          divider
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp) => (
            <div
              key={usp.headline}
              className="flex flex-col gap-3 p-6 rounded-xl border border-gray-100 bg-offwhite"
            >
              <usp.icon className="w-8 h-8 text-teal" aria-hidden="true" />
              <h3 className="text-base font-bold text-navy">{usp.headline}</h3>
              <p className="text-sm text-charcoal/70 leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/why-choose-us"
            className="inline-flex items-center px-6 py-3 border-2 border-teal text-teal font-semibold rounded-md hover:bg-teal hover:text-white transition-colors duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
