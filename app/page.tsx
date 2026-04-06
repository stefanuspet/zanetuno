import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
// import TrustBar from "@/components/home/TrustBar";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyUsPreview from "@/components/home/WhyUsPreview";
import CTABanner from "@/components/shared/CTABanner";
import TrustBar from "@/components/home/TrustBar";

export const metadata: Metadata = {
  title: "Zanetuno — High-grade Indonesian Seafood Exporter",
  description:
    "Export-grade tuna, shrimp, and seafood from Indonesia to global markets. Bluefin Tuna, Skipjack Tuna, and High-grade Shrimps — direct to importers worldwide.",
  openGraph: {
    title: "Zanetuno — High-grade Indonesian Seafood Exporter",
    description:
      "Export-grade tuna, shrimp, and seafood from Indonesia to global markets.",
    url: "https://zanetuno.com",
    images: [{ url: "https://zanetuno.com/og-image.jpg" }],
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <FeaturedProducts />
      <WhyUsPreview />
      <CTABanner />
    </>
  );
}
