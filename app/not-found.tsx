import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-teal text-sm font-semibold uppercase tracking-wider mb-3">
        404 — Page Not Found
      </p>
      <h1 className="text-4xl md:text-5xl font-bold text-navy mb-4">
        This page doesn&apos;t exist
      </h1>
      <p className="text-charcoal/70 text-base md:text-lg max-w-md mb-8">
        The page you&apos;re looking for may have been moved or removed. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-md hover:bg-navy-light transition-colors duration-200"
      >
        Back to Home
      </Link>
    </div>
  );
}
