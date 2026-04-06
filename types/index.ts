export type Product = {
  id: string;
  name: string;
  slug: string;
  origin: string;
  variants: string[];
  forms: string[];
  grading: string[];
  packagingFresh: string;
  packagingFrozen: string;
  description: string;
  image: string;
};

export type InquiryFormData = {
  fullName: string;
  companyName: string;
  country: string;
  productInterest: string;
  estimatedQuantity: string;
  message: string;
};
