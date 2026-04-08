import type { Metadata } from "next";
import { Plane, Ship, FileCheck, Package } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Export Information | Zanetuno",
  description:
    "Countries served, shipping modes, and export documentation. Everything you need to know about importing high-grade Indonesian seafood from Zanetuno.",
  openGraph: {
    title: "Export Information | Zanetuno",
    description:
      "Countries served, shipping modes, and export documentation from Zanetuno.",
    url: "https://zanetuno.com/export-info",
    images: [{ url: "https://zanetuno.com/og-image.jpg" }],
    type: "website",
  },
};

const countries = [
  { name: "Japan", flag: "🇯🇵" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Vietnam", flag: "🇻🇳" },
  { name: "Other Markets", flag: "🌏" },
];

const documents = [
  "Health Certificate",
  "Certificate of Origin",
  "Phytosanitary Certificate",
  "Packing List",
  "Commercial Invoice",
  "Bill of Lading / Airway Bill",
];

export default function ExportInfoPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            title="Export Information"
            subtitle="Everything you need to know about our export process, shipping options, and documentation."
            divider
            theme="dark"
          />
        </div>
      </section>

      {/* Countries Served */}
      {/* <section className="bg-offwhite py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-10">
          <SectionHeading
            title="Countries We Serve"
            subtitle="We export to major seafood import markets across Asia, North America, and beyond."
            divider
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {countries.map((country) => (
              <div
                key={country.name}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl border border-gray-100 shadow-sm"
              >
                <span className="text-4xl" aria-hidden="true">
                  {country.flag}
                </span>
                <span className="text-sm font-semibold text-navy">
                  {country.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Shipping Modes */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-10">
          <SectionHeading
            title="Shipping Modes"
            subtitle="We offer two shipping modes to accommodate different product types and order volumes."
            divider
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Air Freight */}
            <div className="flex flex-col gap-4 p-8 bg-offwhite rounded-xl border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-blue-light flex items-center justify-center">
                <Plane className="w-6 h-6 text-blue" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-navy">Air Freight</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Ideal for fresh and chilled products that require speed and
                temperature precision. Air freight ensures your product arrives
                at peak freshness, typically within 24–72 hours of departure.
              </p>
              <ul className="flex flex-col gap-2 text-sm text-charcoal/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  Fresh (Chilled) products
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  Transit time: 24-72 hours depending on destination
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  Available from major Indonesian airports: CGK UPG, MDC
                </li>
              </ul>
            </div>

            {/* Sea Freight */}
            <div className="flex flex-col gap-4 p-8 bg-offwhite rounded-xl border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-blue-light flex items-center justify-center">
                <Ship className="w-6 h-6 text-blue" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-navy">Sea Freight</h3>
              <p className="text-charcoal/70 text-sm leading-relaxed">
                Best suited for frozen bulk orders where cost efficiency is the
                priority. Sea freight allows larger volumes at lower per-unit
                shipping costs, handled with full cold-chain integrity.
              </p>
              <ul className="flex flex-col gap-2 text-sm text-charcoal/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  Frozen products
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  FCL (Full Container Load) and LCL (Less than Container Load)
                  available
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  Cost-efficient for large shipments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  20ft and 40ft reefer containers
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue shrink-0" />
                  Shipping from major Indonesian ports: Tanjung Priok (Jakarta),
                  Makassar, Surabaya
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MOQ */}
      {/* <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-8">
          <SectionHeading
            title="Minimum Order Quantity"
            subtitle="We make it easy to get started — no large commitment required."
            divider
            theme="dark"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-blue/20 flex items-center justify-center shrink-0">
                <Plane className="w-6 h-6 text-blue" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Sample Order
                </p>
                <p className="text-2xl font-bold text-gold">1 kg</p>
                <p className="text-sm text-white/60">
                  Via Air Freight — for quality evaluation before bulk
                  commitment
                </p>
              </div>
            </div>
            <div className="flex gap-5 p-6 bg-white/5 border border-white/10 rounded-xl">
              <div className="w-12 h-12 rounded-lg bg-blue/20 flex items-center justify-center shrink-0">
                <Package className="w-6 h-6 text-blue" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
                  Bulk Order
                </p>
                <p className="text-2xl font-bold text-gold">Negotiable</p>
                <p className="text-sm text-white/60">
                  Via Sea Freight — volume and pricing discussed upon inquiry
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Export Documents */}
      <section className="bg-offwhite py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-10">
          <SectionHeading
            title="Export Documentation"
            subtitle="We prepare and coordinate all necessary export documents on your behalf."
            divider
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-gray-100 shadow-sm"
              >
                <FileCheck
                  className="w-5 h-5 text-blue shrink-0"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-charcoal">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
