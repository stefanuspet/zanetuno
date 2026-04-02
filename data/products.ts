import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: "1",
    name: "Bluefin Tuna",
    slug: "bluefin-tuna",
    origin: "Maluku / Papua / Indian Ocean",
    variants: ["Fresh (Chilled)", "Frozen"],
    forms: ["Whole", "Loin", "Saku"],
    grading: ["AAA (Sashimi Grade)", "AA", "A"],
    packaging: "Vacuum sealed, styrofoam box with ice gel",
    description:
      "Premium Bluefin Tuna sourced from the pristine waters of Maluku and Papua. Available in sashimi-grade quality for the most discerning international buyers.",
    image: "/images/products/bluefin-tuna.jpg",
  },
  {
    id: "2",
    name: "Skipjack Tuna",
    slug: "skipjack-tuna",
    origin: "Maluku / Papua / Sulawesi",
    variants: ["Fresh (Chilled)", "Frozen"],
    forms: ["Whole", "Loin", "Saku", "Flake"],
    grading: ["AAA", "AA", "A"],
    packaging: "Vacuum sealed, carton box",
    description:
      "Wild-caught Skipjack Tuna (Cakalang) from Indonesia's richest fishing waters. Versatile in form — ideal for food service, processing, and retail markets.",
    image: "/images/products/skipjack-tuna.jpg",
  },
  {
    id: "3",
    name: "Premium Shrimps",
    slug: "premium-shrimps",
    origin: "Lampung / East Java / South Sulawesi",
    variants: ["Frozen"],
    forms: ["HOSO", "HLSO", "PTO", "PUD"],
    grading: ["21/25", "26/30", "31/35", "36/40", "41/50", "51/60"],
    packaging: "IQF, vacuum sealed, carton box (1kg / 5kg / 10kg)",
    description:
      "Farm-raised and wild-caught Premium Shrimps from Indonesia's top aquaculture regions. Available in multiple sizes and processing forms to meet any market requirement.",
    image: "/images/products/shrimp.jpg",
  },
  {
    id: "4",
    name: "Additional Seafood",
    slug: "additional-seafood",
    origin: "Various Indonesia",
    variants: ["Fresh (Chilled)", "Frozen"],
    forms: ["Customizable"],
    grading: ["Negotiable"],
    packaging: "Custom per buyer requirement",
    description:
      "Beyond our core products, we source a wide variety of premium Indonesian seafood by request. Contact us with your specific requirements and we will provide a tailored quotation.",
    image: "/images/products/by-request.jpg",
  },
];
