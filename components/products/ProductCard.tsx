import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { ProductRow } from "@/lib/products";

export default function ProductCard({ product }: { product: ProductRow }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Product Image */}
      <div className="relative h-56 w-full bg-gray-100">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={`${product.name} sourced from ${product.origin}, Indonesia`}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-300 text-sm">
            No image
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        <div>
          <h3 className="text-xl font-bold text-navy">{product.name}</h3>
          <p className="text-sm text-charcoal/60 mt-1">
            Origin: {product.origin}
          </p>
        </div>

        <p className="text-sm text-charcoal/70 leading-relaxed">
          {product.description}
        </p>

        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
            Variants
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.variants.map((v) => (
              <Badge key={v} label={v} variant="blue" />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
            Forms
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.forms.map((f) => (
              <Badge key={f} label={f} variant="default" />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
            Grading
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.grading.map((g) => (
              <Badge key={g} label={g} variant="gold" />
            ))}
          </div>
        </div>

        <p className="text-xs text-charcoal/50 leading-relaxed">
          <span className="font-semibold">Packaging Fresh:</span>{" "}
          {product.packaging_fresh}
        </p>
        <p className="text-xs text-charcoal/50 leading-relaxed">
          <span className="font-semibold">Packaging Frozen:</span>{" "}
          {product.packaging_frozen}
        </p>

        <div className="mt-auto pt-2 flex items-center justify-between">
          <span className="text-sm font-medium text-charcoal/50 italic">
            Price on Request
          </span>
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2.5 bg-navy text-white text-sm font-medium rounded-md hover:bg-navy-light transition-colors duration-200"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
