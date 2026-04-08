import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/Badge";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col">
      {/* Product Image */}
      <div className="relative h-56 w-full bg-gray-100">
        <Image
          src={product.image}
          alt={`${product.name} sourced from ${product.origin}, Indonesia`}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-1">
        {/* Name & Origin */}
        <div>
          <h3 className="text-xl font-bold text-navy">{product.name}</h3>
          <p className="text-sm text-charcoal/60 mt-1">
            Origin: {product.origin}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-charcoal/70 leading-relaxed">
          {product.description}
        </p>

        {/* Variants */}
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
            Variants
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.variants.map((variant) => (
              <Badge key={variant} label={variant} variant="blue" />
            ))}
          </div>
        </div>

        {/* Forms */}
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
            Forms
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.forms.map((form) => (
              <Badge key={form} label={form} variant="default" />
            ))}
          </div>
        </div>

        {/* Grading */}
        <div className="flex flex-col gap-1.5">
          <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
            Grading
          </p>
          <div className="flex flex-wrap gap-1.5">
            {product.grading.map((grade) => (
              <Badge key={grade} label={grade} variant="gold" />
            ))}
          </div>
        </div>

        {/* Packaging */}
        <p className="text-xs text-charcoal/50 leading-relaxed">
          <span className="font-semibold">Packaging Fresh:</span>{" "}
          {product.packagingFresh}
        </p>
        <p className="text-xs text-charcoal/50 leading-relaxed">
          <span className="font-semibold">Packaging Frozen:</span>{" "}
          {product.packagingFrozen}
        </p>
        {/* CTA */}
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
