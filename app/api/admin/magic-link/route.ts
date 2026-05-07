import { verifyMagicLinkToken, createSession } from "@/lib/session";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (token) {
    const valid = await verifyMagicLinkToken(token);
    if (valid) {
      await createSession();
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }

  return NextResponse.redirect(new URL("/admin/reset?error=invalid", request.url));
}
