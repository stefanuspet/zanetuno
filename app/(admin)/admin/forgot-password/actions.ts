"use server";

import { createMagicLinkToken } from "@/lib/session";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function forgotPasswordAction(
  _prevState: string | null,
  formData: FormData
): Promise<string | null> {
  const email = formData.get("email");
  const adminEmail = process.env.ADMIN_EMAIL ?? "";

  if (typeof email !== "string" || email.trim() === "") {
    return "Email tidak valid.";
  }

  if (email.toLowerCase() !== adminEmail.toLowerCase()) {
    return null; // Diam saja, jangan expose email tidak terdaftar
  }

  const token = await createMagicLinkToken();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";
  const loginUrl = `${baseUrl}/api/admin/magic-link?token=${token}`;

  await resend.emails.send({
    from: "Zanetuno Admin <onboarding@resend.dev>",
    to: adminEmail,
    subject: "Link Login Admin — Zanetuno",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; color: #2c2c2c;">
        <div style="background-color: #0a1628; padding: 24px 32px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 18px;">Zanetuno Admin</h1>
        </div>
        <div style="padding: 32px; background-color: #f8f9fa; border: 1px solid #e5e7eb;">
          <p style="margin: 0 0 20px; font-size: 15px;">Klik tombol di bawah untuk masuk ke admin dashboard. Link berlaku <strong>15 menit</strong>.</p>
          <a href="${loginUrl}" style="display: inline-block; background-color: #111827; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600;">
            Masuk ke Dashboard
          </a>
          <p style="margin: 24px 0 0; font-size: 12px; color: #9ca3af;">
            Jika kamu tidak meminta ini, abaikan email ini.
          </p>
        </div>
      </div>
    `,
  });

  return null;
}
