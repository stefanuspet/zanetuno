"use client";

import { useActionState } from "react";
import { forgotPasswordAction } from "./actions";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [sent, action, pending] = useActionState(
    async (prev: boolean, formData: FormData) => {
      await forgotPasswordAction(null, formData);
      return true;
    },
    false
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
        <h1 className="text-xl font-semibold text-gray-900 mb-1">
          Lupa Password
        </h1>

        {sent ? (
          <>
            <p className="text-sm text-gray-500 mb-4">
              Jika email terdaftar, link login sudah dikirim. Cek inbox kamu.
            </p>
            <p className="text-xs text-gray-400">Link berlaku 15 menit.</p>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-500 mb-6">
              Masukkan email admin. Kami akan mengirim link login.
            </p>
            <form action={action} className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="admin@example.com"
                />
              </div>
              <button
                type="submit"
                disabled={pending}
                className="w-full py-2 px-4 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {pending ? "Mengirim..." : "Kirim Link Login"}
              </button>
            </form>
          </>
        )}

        <div className="mt-4 text-center">
          <Link
            href="/admin/login"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Kembali ke login
          </Link>
        </div>
      </div>
    </div>
  );
}
