import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Zanetuno",
  description:
    "Learn about PT. Kalwaneira Terra Prospera and our commitment to delivering premium Indonesian seafood to global markets.",
  openGraph: {
    title: "About Us | Zanetuno",
    description:
      "Learn about PT. Kalwaneira Terra Prospera and our commitment to delivering premium Indonesian seafood to global markets.",
    url: "https://zanetuno.com/about",
    images: [{ url: "https://zanetuno.com/og-image.jpg" }],
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            title="About Zanetuno"
            subtitle="A premium seafood export brand rooted in Indonesia's maritime heritage."
            divider
            theme="dark"
          />
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <p className="text-teal text-sm font-semibold uppercase tracking-wider">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy leading-tight">
                Your Gateway to Premium Indonesian Seafood
              </h2>
              <div className="flex flex-col gap-4 text-charcoal/70 leading-relaxed">
                <p>
                  Zanetuno is the specialized seafood division of{" "}
                  <span className="font-semibold text-charcoal">
                    PT. Kalwaneira Terra Prospera
                  </span>
                  , a leading export-import company based in Indonesia. We were
                  established with a mission to bridge Indonesia&apos;s abundant
                  marine resources with the global market that demands the
                  highest quality standards.
                </p>
                <p>
                  We are committed to providing premium seafood products,
                  available in both fresh and frozen conditions, sourced
                  directly from the rich waters of the Indonesian archipelago.
                  With a focus on sustainability, rigorous quality control, and
                  timely delivery, Zanetuno stands as a trusted partner for
                  importers, distributors, and food service industries
                  worldwide.
                </p>
              </div>
              <p className="text-sm text-charcoal/50 italic">
                A Division of PT. Kalwaneira Terra Prospera — Jakarta Timur,
                Indonesia
              </p>
            </div>

            {/* Facility Image Placeholder */}
            <div className="relative h-80 lg:h-96 w-full rounded-xl overflow-hidden bg-gray-200">
              <Image
                src="/images/facility/cold-storage.png"
                alt="Zanetuno cold storage facility in Jakarta"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-6">
          <span className="block w-12 h-1 bg-teal rounded-full" />
          <p className="text-white/50 text-sm font-semibold uppercase tracking-wider">
            Our Vision
          </p>
          <blockquote className="text-2xl md:text-3xl font-bold text-white leading-snug">
            &ldquo;To be the leading provider of Indonesian seafood in the
            international market, recognized for excellence in quality,
            integrity, and sustainable practices.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Facility Photos */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-10">
          <SectionHeading
            title="Our Facility"
            subtitle="State-of-the-art cold storage and packing facilities to maintain the highest quality throughout the supply chain."
            divider
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-64 w-full rounded-xl overflow-hidden bg-gray-200">
              <Image
                src="/images/facility/cold-storage.png"
                alt="Zanetuno cold storage facility"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-navy/60 px-4 py-3">
                <p className="text-white text-sm font-medium">Cold Storage</p>
              </div>
            </div>
            <div className="relative h-64 w-full rounded-xl overflow-hidden bg-gray-200">
              <Image
                src="/images/facility/packing.png"
                alt="Zanetuno packing and processing facility"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-navy/60 px-4 py-3">
                <p className="text-white text-sm font-medium">
                  Packing &amp; Processing
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
