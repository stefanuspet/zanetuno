"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Export Info", href: "/export-info" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/images/logo.png"
            alt="Zanetuno Logo"
            width={120}
            height={36}
            className="h-9 w-auto brightness-0 invert"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex items-center px-5 py-2 bg-blue text-white text-sm font-medium rounded-md hover:bg-teal/90 transition-colors duration-200"
          >
            Request Quote
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:hidden flex flex-col gap-1.5 p-2 text-white"
        >
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-transform duration-200",
              isOpen && "translate-y-2 rotate-45",
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-opacity duration-200",
              isOpen && "opacity-0",
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-white transition-transform duration-200",
              isOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-navy border-t border-white/10 px-4 pb-4">
          <ul className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2.5 text-sm text-white/80 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 inline-flex w-full items-center justify-center px-5 py-2.5 bg-teal text-white text-sm font-medium rounded-md hover:bg-teal/90 transition-colors duration-200"
          >
            Request Quote
          </Link>
        </div>
      )}
    </header>
  );
}
