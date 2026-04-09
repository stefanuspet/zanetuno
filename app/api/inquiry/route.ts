import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const InquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
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

    // Reject honeypot (spam bot)
    if (parsed.data.honeypot) {
      return Response.json({
        success: true,
        message: "Inquiry sent successfully",
      });
    }

    const {
      fullName,
      companyName,
      country,
      productInterest,
      estimatedQuantity,
      message,
    } = parsed.data;

    await resend.emails.send({
      from: "Zanetuno Inquiry <onboarding@resend.dev>",
      to: "rehatta.linda@zanetuno.com",
      subject: `New Inquiry from ${fullName}${companyName ? ` — ${companyName}` : ""}`,
      html: `
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
      `,
    });

    return Response.json({
      success: true,
      message: "Inquiry sent successfully",
    });
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
