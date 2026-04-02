import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Bluefin Tuna",
    slug: "bluefin-tuna",
    origin: "Maluku / Papua / Indian Ocean, Indonesia",
    variants: ["Fresh (Chilled)", "Frozen"],
    forms: ["Whole", "Loin", "Saku (Block Cut)"],
    grading: ["AAA (Sashimi Grade)", "AA", "A"],
    packaging: "Vacuum sealed in Styrofoam boxes with gel packs/dry ice for fresh shipments",
    description:
      "Sourced from the deep, pristine waters of Eastern Indonesia. Our Bluefin Tuna is prized for its rich color, buttery texture, and high fat content.",
    image: "/images/products/bluefin-tuna.png",
  },
  {
    id: "2",
    name: "Bluejack Tuna (Cakalang)",
    slug: "skipjack-tuna",
    origin: "Maluku / Papua / Sulawesi / Indonesian Waters",
    variants: ["Fresh (Chilled)", "Frozen"],
    forms: ["Whole", "Loin", "Saku (Block Cut)", "Flake"],
    grading: ["AAA (Premium Grade)", "AA", "A"],
    packaging: "Vacuum sealed in Styrofoam boxes with gel packs/dry ice for fresh shipments",
    description:
      "Sourced from the rich tropical waters of Eastern Indonesia. Our Bluejack Tuna (Cakalang) is known for its firm texture, bold flavor, and versatility — ideal for smoking, grilling, or canning.",
    image: "/images/products/skipjack-tuna.png",
  },
  {
    id: "3",
    name: "Premium Shrimps",
    slug: "premium-shrimps",
    origin: "Lampung / East Java / South Sulawesi, Indonesia",
    variants: ["Frozen"],
    forms: ["HOSO (Head-On Shell-On)", "HLSO (Headless Shell-On)", "PTO (Peeled Tail-On)", "PUD (Peeled Undeveined)"],
    grading: ["21/25", "26/30", "31/35", "36/40", "41/50", "51/60"],
    packaging: "IQF (Individually Quick Frozen) or Block Frozen, export standard carton box",
    description:
      "Superior quality shrimps — Vannamei and Black Tiger — sourced from sustainable aquaculture and certified wild-catch areas. Processed under strict hygiene and temperature controls.",
    image: "/images/products/shrimp.png",
  },
  {
    id: "4",
    name: "Additional Seafood (By Request)",
    slug: "additional-seafood",
    origin: "Various Sustainable Fisheries across Indonesia",
    variants: ["Fresh (Chilled)", "Frozen"],
    forms: ["Whole", "Fillet", "Loin", "Steak", "Customized Cuts"],
    grading: ["Negotiable"],
    packaging: "Export standard packaging, customizable upon request",
    description:
      "We offer a wide range of additional seafood products upon request — covering Marine Fish, Reef Fish, Pelagic Fish, and other seafood species. Specification, size, packaging, and processing can be tailored to buyer requirements.",
    image: "/images/products/by-request.png",
  },
];
