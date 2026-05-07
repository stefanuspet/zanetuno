"use server";

import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import crypto from "crypto";

export async function loginAction(
  _prevState: string | null,
  formData: FormData
): Promise<string | null> {
  const email = formData.get("email");
  const password = formData.get("password");
  const adminEmail = process.env.ADMIN_EMAIL ?? "";
  const adminPassword = process.env.ADMIN_PASSWORD ?? "";

  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    !safeCompare(email, adminEmail) ||
    !safeCompare(password, adminPassword)
  ) {
    return "Email atau password salah.";
  }

  await createSession();
  redirect("/admin/dashboard");
}

function safeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  try {
    return crypto.timingSafeEqual(Buffer.from(a), Buffer.from(b));
  } catch {
    return false;
  }
}
