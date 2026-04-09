import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import InquiryForm from "@/components/contact/InquiryForm";

export const metadata: Metadata = {
  title: "Contact & Inquiry | Zanetuno",
  description:
    "Request a quote or send an inquiry to our export team. We respond within 24–48 hours.",
  openGraph: {
    title: "Contact & Inquiry | Zanetuno",
    description:
      "Request a quote or send an inquiry to our export team. We respond within 24–48 hours.",
    url: "https://zanetuno.com/contact",
    images: [{ url: "https://zanetuno.com/og-image.jpg" }],
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading
            title="Contact & Inquiry"
            subtitle="Get in touch with our export team for product information, availability, and price quotations."
            divider
            theme="dark"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-offwhite py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — left / wider */}
            <div className="lg:col-span-3 bg-white rounded-xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-bold text-navy mb-6">
                Send an Inquiry
              </h2>
              <InquiryForm />
            </div>

            {/* Contact Info — right */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5">
                <h2 className="text-lg font-bold text-navy">
                  Contact Information
                </h2>

                {/* WhatsApp */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center shrink-0">
                    <MessageCircle
                      className="w-5 h-5 text-blue"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/628131363352"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-navy hover:text-blue transition-colors duration-200"
                    >
                      +62 813-1363-352
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-blue" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                      Email
                    </p>
                    <a
                      href="mailto:rehatta.linda@zanetuno.com"
                      className="text-sm font-medium text-navy hover:text-blue transition-colors duration-200"
                    >
                      rehatta.linda@zanetuno.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-lg bg-blue-light flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-blue" aria-hidden="true" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/40">
                      Office Address
                    </p>
                    <address className="text-sm text-charcoal/70 not-italic leading-relaxed">
                      Jatiwaringin, Jakarta Timur 13620
                    </address>
                  </div>
                </div>
              </div>

              {/* Response time note */}
              <div className="bg-blue-light border border-blue/20 rounded-xl p-5">
                <p className="text-sm font-semibold text-blue mb-1">
                  Response Time
                </p>
                <p className="text-sm text-charcoal/70 leading-relaxed">
                  Our export team typically responds within{" "}
                  <strong>24–48 hours</strong> on business days.
                </p>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/628131363352"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#25D366] text-white font-semibold rounded-md hover:bg-[#1ebe57] transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
