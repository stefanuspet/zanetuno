import type { Metadata } from "next";
import { Award, Ship, Leaf, HeadphonesIcon, Package } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Why Choose Us | Zanetuno",
  description:
    "Premium quality, flexible shipping, responsible sourcing, and competitive MOQ. Discover why global buyers choose Zanetuno as their Indonesian seafood partner.",
  openGraph: {
    title: "Why Choose Us | Zanetuno",
    description:
      "Premium quality, flexible shipping, responsible sourcing, and competitive MOQ. Discover why global buyers choose Zanetuno.",
    url: "https://zanetuno.com/why-choose-us",
    images: [{ url: "https://zanetuno.com/og-image.jpg" }],
    type: "website",
  },
};

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
    icon: HeadphonesIcon,
    headline: "Professional Services",
    description:
      "Our experienced team is dedicated to assisting your export process with seamless and transparent communication.",
  },
  {
    icon: Package,
    headline: "Competitive MOQ",
    description:
      "To ensure our quality meets your standards, we accept sample orders starting from 1 kg before proceeding to large-scale shipments.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            title="Why Choose Zanetuno"
            subtitle="We make it easy and confident for global buyers to source premium Indonesian seafood."
            divider
            theme="dark"
          />
        </div>
      </section>

      {/* USP Cards */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usps.map((usp) => (
              <div
                key={usp.headline}
                className="flex gap-5 p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <div className="shrink-0 flex items-start pt-1">
                  <div className="w-12 h-12 rounded-lg bg-teal-light flex items-center justify-center">
                    <usp.icon className="w-6 h-6 text-teal" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-navy">{usp.headline}</h3>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {usp.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Sample Order Callout */}
            <div className="flex gap-5 p-6 bg-teal rounded-xl md:col-span-2">
              <div className="flex flex-col gap-2">
                <p className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                  Start Small, Think Big
                </p>
                <h3 className="text-xl font-bold text-white">
                  Start with a 1 kg sample before placing a bulk order
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Not ready to commit to a large order yet? No problem. We offer
                  sample orders from 1 kg via air freight so you can evaluate
                  our quality firsthand before scaling up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
