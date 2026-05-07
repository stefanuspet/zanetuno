import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const InquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().optional(),
  country: z.string().min(1, "Country is required"),
  productInterest: z.string().min(1, "Product interest is required"),
  estimatedQuantity: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  honeypot: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = InquirySchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { success: false, message: "Invalid input" },
        { status: 400 },
      );
    }

    // Silent reject for honeypot (spam bot)
    if (parsed.data.honeypot) {
      return Response.json({ success: true });
    }

    const {
      fullName,
      email,
      companyName,
      country,
      productInterest,
      estimatedQuantity,
      message,
    } = parsed.data;

    const notifyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2c2c2c;">
        <div style="background-color: #0a1628; padding: 24px 32px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px;">New Product Inquiry</h1>
          <p style="color: rgba(255,255,255,0.6); margin: 4px 0 0; font-size: 14px;">Zanetuno.com</p>
        </div>

        <div style="padding: 32px; background-color: #f8f6f1; border: 1px solid #e5e7eb;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #6b7280; width: 160px;">Full Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 600;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${companyName || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">Country</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">Product Interest</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; font-weight: 600; color: #1a7a6e;">${productInterest}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">Est. Quantity</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #e5e7eb; font-size: 14px;">${estimatedQuantity || "—"}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="font-size: 14px; color: #6b7280; margin: 0 0 8px;">Message</p>
            <div style="background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6;">
              ${message.replace(/\n/g, "<br/>")}
            </div>
          </div>
        </div>

        <div style="padding: 16px 32px; background-color: #0a1628; text-align: center;">
          <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0;">
            This inquiry was submitted via zanetuno.com
          </p>
        </div>
      </div>
    `;

    const autoReplyHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 560px; margin: 0 auto; color: #2c2c2c;">
        <div style="background-color: #0a1628; padding: 24px 32px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 18px;">Zanetuno</h1>
          <p style="color: rgba(255,255,255,0.5); margin: 4px 0 0; font-size: 13px;">High-grade Indonesian Seafood Exporter</p>
        </div>

        <div style="padding: 32px; background-color: #ffffff; border: 1px solid #e5e7eb;">
          <p style="margin: 0 0 16px; font-size: 15px;">Dear ${fullName},</p>
          <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6;">
            Thank you for your inquiry about <strong>${productInterest}</strong>. We have received your message and our export team will review it shortly.
          </p>
          <p style="margin: 0 0 24px; font-size: 15px; line-height: 1.6;">
            We typically respond within <strong>24–48 hours</strong>. If you need a faster response, feel free to reach us directly via WhatsApp:
          </p>

          <a href="https://wa.me/6281313633523"
            style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 8px; font-size: 14px; font-weight: 600;">
            Chat on WhatsApp
          </a>

          <p style="margin: 32px 0 0; font-size: 13px; color: #9ca3af; line-height: 1.6;">
            This is an automated confirmation. Please do not reply to this email directly — use the WhatsApp link above or wait for our team's response.
          </p>
        </div>

        <div style="padding: 16px 32px; background-color: #0a1628; text-align: center;">
          <p style="color: rgba(255,255,255,0.4); font-size: 12px; margin: 0;">
            © ${new Date().getFullYear()} PT. Kalwaneira Terra Prospera · zanetuno.com
          </p>
        </div>
      </div>
    `;

    await Promise.all([
      resend.emails.send({
        from: "Zanetuno Inquiry <onboarding@resend.dev>",
        to: "rehatta.linda@zanetuno.com",
        subject: `New Inquiry from ${fullName}${companyName ? ` — ${companyName}` : ""}`,
        html: notifyHtml,
      }),
      resend.emails.send({
        from: "Zanetuno <onboarding@resend.dev>",
        to: email,
        subject: "We received your inquiry — Zanetuno",
        html: autoReplyHtml,
      }),
    ]);

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return Response.json(
    { success: false, message: "Method not allowed" },
    { status: 405 },
  );
}
