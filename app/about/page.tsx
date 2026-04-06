import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Zanetuno",
  description:
    "Learn about PT. Kalwaneira Terra Prospera and our commitment to delivering high-grade Indonesian seafood to global markets.",
  openGraph: {
    title: "About Us | Zanetuno",
    description:
      "Learn about PT. Kalwaneira Terra Prospera and our commitment to delivering high-grade Indonesian seafood to global markets.",
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
            subtitle="A high-grade seafood export brand rooted in Indonesia's maritime heritage."
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
                The Zanetuno Story
              </h2>
              <p className="text-base text-teal font-semibold">
                Bridging Indonesia&apos;s Marine Excellence to the Global Market
              </p>
              <div className="flex flex-col gap-4 text-charcoal/70 leading-relaxed">
                <p>
                  Indonesia stands as the world&apos;s largest archipelagic
                  nation, endowed with an unparalleled diversity of marine
                  resources. Born from a deep respect for this natural heritage,
                  Zanetuno was established as the dedicated fisheries division
                  of{" "}
                  <span className="font-semibold text-charcoal">
                    PT Kalwaneria Terra Prospera
                  </span>
                  .
                </p>
                <p>
                  We operate with a clear mandate: to share Indonesia&apos;s
                  aquatic bounty with the world while ensuring the longevity of
                  our marine ecosystems. By integrating the strategic management
                  of our parent company with a specialized focus on fishery
                  logistics, Zanetuno provides a reliable, transparent, and
                  professional gateway for international importers seeking
                  high-grade Indonesian seafood.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 w-full rounded-xl overflow-hidden bg-gray-200">
              <Image
                src="/images/hero/hero-bg.png"
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
            &ldquo;To be a trusted provider of high-grade Indonesian seafood in
            the international market, recognized for excellence in quality,
            integrity, and responsible practices.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
              Our Mission
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              Grounded & Action-Oriented
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ethical Sourcing */}
            <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-navy">Ethical Sourcing</h3>
              <p className="text-charcoal/70 leading-relaxed">
                To establish direct and fair partnerships with local fishing
                communities, ensuring quality control starts from the very first
                catch.
              </p>
            </div>

            {/* Operational Excellence */}
            <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-navy">
                Operational Excellence
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                To maintain a robust supply chain management system that
                guarantees product integrity and timely delivery for our global
                partners.
              </p>
            </div>

            {/* Eco-Responsibility */}
            <div className="flex flex-col gap-4 p-8 bg-white rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-navy">
                Eco-Responsibility
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                To advocate for and implement sourcing practices that support
                marine regeneration, ensuring Indonesia&apos;s waters remain
                productive for generations to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing & Coverage Area */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
              Sourcing & Coverage Area
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-2">
              Strategic Sourcing across the Archipelago
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Strategic Sourcing */}
            <div className="flex flex-col gap-4 p-8 bg-offwhite rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-navy">
                Strategic Sourcing across the Archipelago
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Our supply chain taps into Indonesia&apos;s most fertile fishing
                grounds—from the deep waters of the Banda Sea to the rich
                currents of Sulawesi and Sumatra. This geographic diversity
                allows us to maintain a consistent supply of various species
                year-round.
              </p>
            </div>

            {/* Global Distribution Ready */}
            <div className="flex flex-col gap-4 p-8 bg-offwhite rounded-xl border border-gray-100">
              <h3 className="text-xl font-bold text-navy">
                Global Distribution Ready
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                Leveraging Indonesia&apos;s strategic maritime position, we are
                equipped to serve clients across Asia, Europe, and the Americas.
                We offer flexible shipping terms (FOB, CIF, EXW) to accommodate
                the specific logistical needs of our international buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Governance */}
      <section className="bg-navy py-16 md:py-24 text-justify">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-2">
              Corporate Governance
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Commitment to Compliance
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-white/80 text-lg leading-relaxed">
              Zanetuno operates under the strict corporate governance of{" "}
              <span className="font-semibold">
                PT Kalwaneria Terra Prospera
              </span>
              . We are committed to full transparency in our documentation and
              regulatory compliance.
            </p>
            <p className="text-white/80 text-lg leading-relaxed">
              We don&apos;t just deliver products; we deliver peace of mind
              through professional accountability.
            </p>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
