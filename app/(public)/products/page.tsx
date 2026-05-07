import type { Metadata } from "next";
import { getProducts } from "@/lib/products";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import CTABanner from "@/components/shared/CTABanner";

export const metadata: Metadata = {
  title: "Our Products",
  description:
    "Browse our high-grade seafood catalogue: Bluefin Tuna, Skipjack Tuna, and High-grade Shrimps. Export-grade quality from Indonesia.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Our Products | Zanetuno",
    description:
      "Browse our high-grade seafood catalogue: Bluefin Tuna, Skipjack Tuna, and High-grade Shrimps. Export-grade quality from Indonesia.",
    url: "/products",
  },
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            title="Our Product Catalogue"
            subtitle="High-grade Indonesian seafood, sourced responsibly and exported with care to global markets."
            divider
            theme="dark"
          />
          <p className="mt-6 text-center text-sm text-white/50">
            All prices are available upon request — contact us for a tailored
            quotation.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
