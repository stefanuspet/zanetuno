import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "High-grade Bluefin Tuna",
    slug: "bluefin-tuna",
    origin: "Laut Banda / Selat Makassar / NTB / NTT, Indonesia",
    variants: ["Fresh (Chilled)", "Frozen"],
    forms: ["Whole", "Loin", "Saku (Block Cut)"],
    grading: ["OK"],
    packagingFresh:
      "Vacuum sealed, packed in styrofoam with gel ice packs, shipped via air freight",
    packagingFrozen:
      "Vacuum sealed, blast frozen, packed in master carton, shipped via reefer container",
    description:
      "Sourced from the deep, pristine waters of Eastern Indonesia. Our Bluefin Tuna is prized for its rich color, buttery texture, and high fat content.",
    image: "/images/products/bluefin-tuna2.jpg",
  },
  {
    id: "2",
    name: "Skipjack Tuna (Cakalang)",
    slug: "skipjack-tuna",
    origin: "Maluku / Papua / Sulawesi ",
    variants: ["Fresh (Chilled)", "Frozen"],
    forms: ["Whole", "Loin", "Saku (Block Cut)"],
    grading: ["Premium Grade", "Standard Grade"],
    packagingFresh:
      "Vacuum sealed, packed in styrofoam with gel ice packs, shipped via air freight",
    packagingFrozen:
      "Vacuum sealed, blast frozen, packed in master carton, shipped via reefer container",
    description:
      "Sourced from the rich tropical waters of Eastern Indonesia. Our Skipjack Tuna (Cakalang) is known for its firm texture, bold flavor, and versatility — ideal for smoking, grilling, or canning.",
    image: "/images/products/skipjack-tuna.png",
  },
  {
    id: "3",
    name: "High-grade Shrimps",
    slug: "premium-shrimps",
    origin: "Lampung / East Java / South Sulawesi, Indonesia",
    variants: ["Frozen"],
    forms: [
      "HOSO (Head-On Shell-On)",
      "HLSO (Headless Shell-On)",
      "PTO (Peeled Tail-On)",
      "PUD (Peeled Undeveined)",
    ],
    grading: ["16/20", "21/25", "26/30", "31/35", "36/40", "41/50", "51/60"],
    packagingFresh:
      "IQF (Individually Quick Frozen) or Block Frozen. Master carton 10 kg / 20 kg.",
    packagingFrozen:
      "IQF (Individually Quick Frozen) or Block Frozen. Master carton 10 kg / 20 kg.",
    description:
      "Sourced from responsible aquaculture and selected wild-catch areas across Indonesia. Processed under strict hygiene and temperature controls in compliance with international export standards.",
    image: "/images/products/shrimp.png",
  },
  {
    id: "4",
    name: "Additional Seafood (By Request)",
    slug: "additional-seafood",
    origin: "Various fishing and aquaculture areas across Indonesia",
    variants: ["Fresh (Chilled)", "Frozen"],
    forms: ["Whole", "Fillet", "Loin", "Steak", "Customized Cuts"],
    grading: ["-"],
    packagingFresh: "Export standard packaging, customizable upon request",
    packagingFrozen: "Export standard packaging, customizable upon request",
    description:
      "In addition to our core products, we can arrange export for a selection of other Indonesian seafood including common marine fish (such as Tongkol, Tilapia, Anchovy), crustaceans (Crab, Lobster), and other widely available species.  Availability subject to season and supplier confirmation. Inquire with your target species, quantity, and destination -  we will confirm feasibility and pricing.",
    image: "/images/products/by-request.png",
  },
];
