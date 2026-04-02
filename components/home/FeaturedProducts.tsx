import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

const featuredSlugs = ["bluefin-tuna", "skipjack-tuna", "premium-shrimps"];

export default function FeaturedProducts() {
  const featured = products.filter((p) => featuredSlugs.includes(p.slug));

  return (
    <section className="bg-offwhite py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
        <SectionHeading
          title="Our Featured Products"
          subtitle="Sourced from Indonesia's richest fishing waters and processed to international export standards."
          divider
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative h-52 w-full bg-gray-100">
                <Image
                  src={product.image}
                  alt={`${product.name} sourced from ${product.origin}, Indonesia`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex flex-wrap gap-1.5">
                  {product.variants.map((variant) => (
                    <Badge key={variant} label={variant} variant="teal" />
                  ))}
                </div>
                <h3 className="text-lg font-bold text-navy">{product.name}</h3>
                <p className="text-sm text-charcoal/60">Origin: {product.origin}</p>
                <p className="text-sm text-charcoal/70 leading-relaxed flex-1">
                  {product.description}
                </p>
                <Link
                  href="/contact"
                  className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-navy text-white text-sm font-medium rounded-md hover:bg-navy-light transition-colors duration-200"
                >
                  Inquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center px-6 py-3 border-2 border-navy text-navy font-semibold rounded-md hover:bg-navy hover:text-white transition-colors duration-200"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
