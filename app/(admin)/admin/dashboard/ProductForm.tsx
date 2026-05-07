"use client";

import { useActionState } from "react";
import type { ProductRow } from "@/lib/products";
import Image from "next/image";
import { useState } from "react";

type Props = {
  action: (prevState: string | null, formData: FormData) => Promise<string | null>;
  defaultValues?: ProductRow;
};

export default function ProductForm({ action, defaultValues }: Props) {
  const [error, formAction, pending] = useActionState(action, null);
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <form action={formAction} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Field label="Nama Product" name="name" defaultValue={defaultValues?.name} required />
        <Field label="Origin" name="origin" defaultValue={defaultValues?.origin} required />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <Field
          label="Variants"
          name="variants"
          defaultValue={defaultValues?.variants.join(", ")}
          placeholder="Fresh (Chilled), Frozen"
          hint="Pisahkan dengan koma"
        />
        <Field
          label="Forms"
          name="forms"
          defaultValue={defaultValues?.forms.join(", ")}
          placeholder="Whole, Loin, Saku"
          hint="Pisahkan dengan koma"
        />
        <Field
          label="Grading"
          name="grading"
          defaultValue={defaultValues?.grading.join(", ")}
          placeholder="OK, Premium Grade"
          hint="Pisahkan dengan koma"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Textarea
          label="Packaging Fresh"
          name="packaging_fresh"
          defaultValue={defaultValues?.packaging_fresh}
        />
        <Textarea
          label="Packaging Frozen"
          name="packaging_frozen"
          defaultValue={defaultValues?.packaging_frozen}
        />
      </div>

      <Textarea
        label="Deskripsi"
        name="description"
        defaultValue={defaultValues?.description}
        rows={4}
        required
      />

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Gambar Product
        </label>
        {defaultValues?.image_url && !preview && (
          <div className="mb-2">
            <Image
              src={defaultValues.image_url}
              alt="Current"
              width={120}
              height={80}
              className="rounded-lg object-cover border border-gray-200"
            />
            <p className="text-xs text-gray-400 mt-1">Gambar saat ini</p>
          </div>
        )}
        {preview && (
          <div className="mb-2">
            <img
              src={preview}
              alt="Preview"
              className="w-30 h-20 rounded-lg object-cover border border-gray-200"
            />
            <p className="text-xs text-gray-400 mt-1">Preview</p>
          </div>
        )}
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) setPreview(URL.createObjectURL(file));
          }}
          className="block w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
          {error}
        </p>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={pending}
          className="px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {pending ? "Menyimpan..." : defaultValues ? "Simpan Perubahan" : "Tambah Product"}
        </button>
        <a
          href="/admin/dashboard"
          className="px-5 py-2 bg-white border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          Batal
        </a>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  defaultValue,
  placeholder,
  hint,
  required,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  );
}

function Textarea({
  label,
  name,
  defaultValue,
  rows = 3,
  required,
}: {
  label: string;
  name: string;
  defaultValue?: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        defaultValue={defaultValue}
        rows={rows}
        required={required}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
    </div>
  );
}
