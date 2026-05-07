"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";

const InquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  productInterest: z.string().min(1, "Please select a product"),
  estimatedQuantity: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0).optional(),
});

type InquiryFormValues = z.infer<typeof InquirySchema>;

type FormState = "idle" | "loading" | "success" | "error";

const productOptions = [
  "High-grade Bluefin Tuna",
  "Bluejack Tuna (Cakalang)",
  "High-grade Shrimps",
  "Additional Seafood (By Request)",
  "Multiple Products",
];

const inputClass =
  "w-full px-4 py-2.5 rounded-md border border-gray-200 bg-white text-charcoal text-sm placeholder:text-charcoal/40 focus:outline-none focus:ring-2 focus:ring-blue/40 focus:border-blue transition-colors duration-200";

const labelClass = "block text-sm font-medium text-charcoal mb-1.5";

const errorClass = "mt-1 text-xs text-red-500";

export default function InquiryForm() {
  const [formState, setFormState] = useState<FormState>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(InquirySchema),
  });

  const onSubmit = async (data: InquiryFormValues) => {
    setFormState("loading");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success) {
        setFormState("success");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-blue-light flex items-center justify-center">
          <svg
            className="w-7 h-7 text-blue"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy">Inquiry Sent!</h3>
        <p className="text-charcoal/70 text-sm max-w-sm">
          Thank you for reaching out. Our export team will respond to your
          inquiry within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5"
    >
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        {...register("honeypot")}
        className="hidden"
        tabIndex={-1}
        aria-hidden="true"
      />

      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className={labelClass}>
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          placeholder="John Smith"
          className={cn(
            inputClass,
            errors.fullName && "border-red-400 focus:ring-red-200",
          )}
          {...register("fullName")}
        />
        {errors.fullName && (
          <p className={errorClass}>{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@company.com"
          className={cn(
            inputClass,
            errors.email && "border-red-400 focus:ring-red-200",
          )}
          {...register("email")}
        />
        {errors.email && (
          <p className={errorClass}>{errors.email.message}</p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className={labelClass}>
          Company Name{" "}
          <span className="text-charcoal/40 font-normal">(optional)</span>
        </label>
        <input
          id="companyName"
          type="text"
          placeholder="Your Company Ltd."
          className={inputClass}
          {...register("companyName")}
        />
      </div>

      {/* Country */}
      <div>
        <label htmlFor="country" className={labelClass}>
          Country <span className="text-red-500">*</span>
        </label>
        <input
          id="country"
          type="text"
          placeholder="Japan"
          className={cn(
            inputClass,
            errors.country && "border-red-400 focus:ring-red-200",
          )}
          {...register("country")}
        />
        {errors.country && (
          <p className={errorClass}>{errors.country.message}</p>
        )}
      </div>

      {/* Product Interest */}
      <div>
        <label htmlFor="productInterest" className={labelClass}>
          Product Interest <span className="text-red-500">*</span>
        </label>
        <select
          id="productInterest"
          className={cn(
            inputClass,
            errors.productInterest && "border-red-400 focus:ring-red-200",
          )}
          defaultValue=""
          {...register("productInterest")}
        >
          <option value="" disabled>
            Select a product...
          </option>
          {productOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.productInterest && (
          <p className={errorClass}>{errors.productInterest.message}</p>
        )}
      </div>

      {/* Estimated Quantity */}
      <div>
        <label htmlFor="estimatedQuantity" className={labelClass}>
          Estimated Quantity{" "}
          <span className="text-charcoal/40 font-normal">(optional)</span>
        </label>
        <input
          id="estimatedQuantity"
          type="text"
          placeholder="e.g. 50 kg, 1 container"
          className={inputClass}
          {...register("estimatedQuantity")}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClass}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Please describe your requirements, target market, or any specific questions..."
          className={cn(
            inputClass,
            "resize-none",
            errors.message && "border-red-400 focus:ring-red-200",
          )}
          {...register("message")}
        />
        {errors.message && (
          <p className={errorClass}>{errors.message.message}</p>
        )}
      </div>

      {/* Error state */}
      {formState === "error" && (
        <p className="text-sm text-red-500 text-center">
          Something went wrong. Please try again or contact us via WhatsApp.
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "loading"}
        className="inline-flex items-center justify-center px-7 py-3 bg-navy text-white font-semibold rounded-md hover:bg-navy-light transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "loading" ? "Sending..." : "Send Inquiry"}
      </button>
    </form>
  );
}
