import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero.jpg"
        alt="High-grade Indonesian seafood from the ocean"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center flex flex-col items-center gap-6">
        <p className="text-gold text-sm md:text-base font-semibold uppercase tracking-widest">
          Essence from Indonesian Sea
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          High-grade Indonesian Seafood <br className="hidden md:block" />
          for Global Markets
        </h1>
        <p className="text-white/75 text-base md:text-lg max-w-2xl">
          We export sashimi-grade Bluefin Tuna, Skipjack Tuna, and High-grade
          Shrimps from Indonesia&apos;s finest waters — direct to importers and
          distributors worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <Link
            href="/products"
            className="inline-flex items-center justify-center px-7 py-3 bg-blue text-white font-semibold rounded-md hover:bg-blue/90 transition-colors duration-200"
          >
            View Products
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-7 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-navy transition-colors duration-200"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
