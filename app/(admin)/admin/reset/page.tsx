import Link from "next/link";

export default function ResetPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-8 shadow-sm text-center">
        <p className="text-sm text-red-600 font-medium mb-2">Link tidak valid</p>
        <p className="text-sm text-gray-500 mb-6">
          Link sudah kedaluwarsa atau tidak valid.
        </p>
        <Link
          href="/admin/forgot-password"
          className="text-sm font-medium text-gray-900 underline underline-offset-2"
        >
          Minta link baru
        </Link>
      </div>
    </div>
  );
}
