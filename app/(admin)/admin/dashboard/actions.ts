"use server";

import { sql } from "@/lib/db";
import { put, del } from "@vercel/blob";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function parseArray(value: string): string[] {
  return value
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

const blobToken = process.env.zanetuno_READ_WRITE_TOKEN!;

async function uploadImage(file: File, oldUrl?: string): Promise<string> {
  if (oldUrl) {
    try {
      await del(oldUrl, { token: blobToken });
    } catch {}
  }
  const ext = file.name.split(".").pop() ?? "jpg";
  const filename = `products/${Date.now()}.${ext}`;
  const blob = await put(filename, file, { access: "public", token: blobToken });
  return blob.url;
}

export async function createProduct(
  _prevState: string | null,
  formData: FormData
): Promise<string | null> {
  const name = formData.get("name") as string;
  const origin = formData.get("origin") as string;
  const variants = parseArray(formData.get("variants") as string);
  const forms = parseArray(formData.get("forms") as string);
  const grading = parseArray(formData.get("grading") as string);
  const packagingFresh = formData.get("packaging_fresh") as string;
  const packagingFrozen = formData.get("packaging_frozen") as string;
  const description = formData.get("description") as string;
  const imageFile = formData.get("image") as File | null;

  if (!name || !origin || !description) {
    return "Nama, origin, dan deskripsi wajib diisi.";
  }

  const slug = toSlug(name);

  let imageUrl = "";
  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadImage(imageFile);
  }

  try {
    await sql`
      INSERT INTO products (name, slug, origin, variants, forms, grading, packaging_fresh, packaging_frozen, description, image_url)
      VALUES (${name}, ${slug}, ${origin}, ${variants}, ${forms}, ${grading}, ${packagingFresh}, ${packagingFrozen}, ${description}, ${imageUrl})
    `;
  } catch {
    return "Gagal menyimpan product. Slug mungkin sudah ada.";
  }

  revalidatePath("/admin/dashboard");
  revalidatePath("/products");
  redirect("/admin/dashboard");
}

export async function updateProduct(
  id: number,
  oldImageUrl: string,
  _prevState: string | null,
  formData: FormData
): Promise<string | null> {
  const name = formData.get("name") as string;
  const origin = formData.get("origin") as string;
  const variants = parseArray(formData.get("variants") as string);
  const forms = parseArray(formData.get("forms") as string);
  const grading = parseArray(formData.get("grading") as string);
  const packagingFresh = formData.get("packaging_fresh") as string;
  const packagingFrozen = formData.get("packaging_frozen") as string;
  const description = formData.get("description") as string;
  const imageFile = formData.get("image") as File | null;

  if (!name || !origin || !description) {
    return "Nama, origin, dan deskripsi wajib diisi.";
  }

  const slug = toSlug(name);

  let imageUrl = oldImageUrl;
  if (imageFile && imageFile.size > 0) {
    imageUrl = await uploadImage(imageFile, oldImageUrl || undefined);
  }

  try {
    await sql`
      UPDATE products SET
        name = ${name},
        slug = ${slug},
        origin = ${origin},
        variants = ${variants},
        forms = ${forms},
        grading = ${grading},
        packaging_fresh = ${packagingFresh},
        packaging_frozen = ${packagingFrozen},
        description = ${description},
        image_url = ${imageUrl}
      WHERE id = ${id}
    `;
  } catch {
    return "Gagal update product.";
  }

  revalidatePath("/admin/dashboard");
  revalidatePath("/products");
  redirect("/admin/dashboard");
}

export async function deleteProduct(id: number, imageUrl: string) {
  if (imageUrl) {
    try {
      await del(imageUrl, { token: blobToken });
    } catch {}
  }
  await sql`DELETE FROM products WHERE id = ${id}`;
  revalidatePath("/admin/dashboard");
  revalidatePath("/products");
}
