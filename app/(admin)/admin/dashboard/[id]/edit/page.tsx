import { getSession } from "@/lib/session";
import { redirect, notFound } from "next/navigation";
import { getProductById } from "@/lib/products";
import { updateProduct } from "../../actions";
import ProductForm from "../../ProductForm";
import Link from "next/link";

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/admin/login");

  const { id } = await params;
  const product = await getProductById(Number(id));
  if (!product) notFound();

  const boundAction = updateProduct.bind(null, product.id, product.image_url);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-3">
        <Link
          href="/admin/dashboard"
          className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          ← Dashboard
        </Link>
        <span className="text-gray-300">/</span>
        <h1 className="text-sm font-semibold text-gray-900">Edit Product</h1>
      </header>

      <main className="p-6 max-w-3xl mx-auto">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <ProductForm action={boundAction} defaultValues={product} />
        </div>
      </main>
    </div>
  );
}
