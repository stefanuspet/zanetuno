import { getSession } from "@/lib/session";
import { deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { getProducts } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";
import DeleteButton from "./DeleteButton";

async function logoutAction() {
  "use server";
  await deleteSession();
  redirect("/admin/login");
}

export default async function DashboardPage() {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
        <form action={logoutAction}>
          <button
            type="submit"
            className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            Logout
          </button>
        </form>
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-base font-semibold text-gray-900">
            Products{" "}
            <span className="text-gray-400 font-normal">({products.length})</span>
          </h2>
          <Link
            href="/admin/dashboard/create"
            className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            + Tambah Product
          </Link>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50">
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Gambar
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide">
                  Nama
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide hidden md:table-cell">
                  Slug
                </th>
                <th className="text-left px-4 py-3 text-xs font-medium text-gray-500 uppercase tracking-wide hidden lg:table-cell">
                  Origin
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-gray-50"
                >
                  <td className="px-4 py-3">
                    {product.image_url ? (
                      <Image
                        src={product.image_url}
                        alt={product.name}
                        width={48}
                        height={36}
                        className="rounded-lg object-cover"
                      />
                    ) : (
                      <div className="w-12 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-300 text-xs">
                        No img
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {product.name}
                  </td>
                  <td className="px-4 py-3 text-gray-500 font-mono hidden md:table-cell">
                    {product.slug}
                  </td>
                  <td className="px-4 py-3 text-gray-500 hidden lg:table-cell">
                    {product.origin}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-4 justify-end">
                      <Link
                        href={`/admin/dashboard/${product.id}/edit`}
                        className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        Edit
                      </Link>
                      <DeleteButton
                        id={product.id}
                        imageUrl={product.image_url}
                        name={product.name}
                      />
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-4 py-8 text-center text-sm text-gray-400"
                  >
                    Belum ada product.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
