"use client";

import { deleteProduct } from "./actions";
import { useTransition } from "react";

export default function DeleteButton({
  id,
  imageUrl,
  name,
}: {
  id: number;
  imageUrl: string;
  name: string;
}) {
  const [pending, startTransition] = useTransition();

  function handleDelete() {
    if (!confirm(`Hapus "${name}"?`)) return;
    startTransition(() => deleteProduct(id, imageUrl));
  }

  return (
    <button
      onClick={handleDelete}
      disabled={pending}
      className="text-sm text-red-600 hover:text-red-800 disabled:opacity-50 transition-colors"
    >
      {pending ? "Menghapus..." : "Hapus"}
    </button>
  );
}
