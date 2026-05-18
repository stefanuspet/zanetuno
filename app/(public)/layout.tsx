import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zanetuno",
  legalName: "PT. Kalwaneira Terra Prospera",
  url: "https://www.zanetuno.com",
  logo: "https://www.zanetuno.com/images/logo.png",
  description:
    "High-grade Indonesian seafood exporter supplying Bluefin Tuna, Skipjack Tuna, and Shrimps to global importers.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Jakarta Timur",
    addressRegion: "DKI Jakarta",
    postalCode: "13620",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+62-813-1363-3523",
    contactType: "sales",
    email: "rehatta.linda@zanetuno.com",
    availableLanguage: ["English", "Indonesian"],
  },
  sameAs: [
    "https://instagram.com/zanetuno",
    "https://linkedin.com/company/zanetuno",
  ],
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
