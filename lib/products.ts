import "server-only";
import { sql } from "./db";

export type ProductRow = {
  id: number;
  name: string;
  slug: string;
  origin: string;
  variants: string[];
  forms: string[];
  grading: string[];
  packaging_fresh: string;
  packaging_frozen: string;
  description: string;
  image_url: string;
};

export async function getProducts(): Promise<ProductRow[]> {
  return sql`SELECT * FROM products ORDER BY id` as unknown as Promise<ProductRow[]>;
}

export async function getProductById(id: number): Promise<ProductRow | null> {
  const rows = (await sql`SELECT * FROM products WHERE id = ${id}`) as ProductRow[];
  return rows[0] ?? null;
}
