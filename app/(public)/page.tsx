import { Suspense } from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyUsPreview from "@/components/home/WhyUsPreview";
import CTABanner from "@/components/shared/CTABanner";
import TrustBar from "@/components/home/TrustBar";

export const metadata: Metadata = {
  title: {
    absolute: "Zanetuno — High-grade Indonesian Seafood Exporter",
  },
  description:
    "Export-grade tuna, shrimp, and seafood from Indonesia to global markets. Bluefin Tuna, Skipjack Tuna, and High-grade Shrimps — direct to importers worldwide.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Zanetuno — High-grade Indonesian Seafood Exporter",
    description:
      "Export-grade tuna, shrimp, and seafood from Indonesia to global markets. Bluefin Tuna, Skipjack Tuna, and High-grade Shrimps — direct to importers worldwide.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Suspense fallback={null}>
        <FeaturedProducts />
      </Suspense>
      <WhyUsPreview />
      <CTABanner />
    </>
  );
}
