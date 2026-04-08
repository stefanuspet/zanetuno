import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Export Info", href: "/export-info" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Zanetuno Logo"
                width={120}
                height={36}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Essence from Indonesian Sea. High-grade seafood exporter
              connecting Indonesia&apos;s finest marine products to global
              markets.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40">
              Contact
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li>
                <a
                  href="mailto:info@zanetuno.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  info@zanetuno.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/6281313633523"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  +62 813-1363-352
                </a>
              </li>
              <li className="leading-relaxed">
                Jl. Pangkalan Jati V no.24, Rt.11/Rw.05,
                <br />
                Cipinang Melayu, Jatiwaringin,
                <br />
                Jakarta Timur, Indonesia 13620
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-4 mt-1">
              <a
                href="https://instagram.com/zanetuno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                Instagram
              </a>
              <a
                href="https://linkedin.com/company/zanetuno"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/40">
          <p>
            © {new Date().getFullYear()} PT. Kalwaneira Terra Prospera. All
            rights reserved.
          </p>

          <p>
            Website by{" "}
            <a
              href="https://stefra.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-white transition"
            >
              Stefra.id
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
