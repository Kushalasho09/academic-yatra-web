import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-razorpay-signature");
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    // If webhook secret is configured, verify HMAC signature
    if (webhookSecret && signature) {
      const expectedSignature = crypto
        .createHmac("sha256", webhookSecret)
        .update(rawBody)
        .digest("hex");

      if (expectedSignature !== signature) {
        return NextResponse.json(
          { error: "Invalid webhook signature" },
          { status: 400 }
        );
      }
    }

    const payload = JSON.parse(rawBody);
    const event = payload.event;
    const payment = payload.payload?.payment?.entity;

    switch (event) {
      case "payment.captured":
        console.log("✅ Razorpay payment.captured event:", {
          paymentId: payment?.id,
          amount: payment?.amount ? payment.amount / 100 : 0,
          email: payment?.email,
          contact: payment?.contact,
          notes: payment?.notes,
        });
        // Future: Trigger automated CRM sync or mail dispatch
        break;

      case "payment.failed":
        console.warn("⚠️ Razorpay payment.failed event:", {
          paymentId: payment?.id,
          errorCode: payment?.error_code,
          errorDescription: payment?.error_description,
          email: payment?.email,
        });
        break;

      default:
        console.log(`Received Razorpay webhook event: ${event}`);
        break;
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: error?.message || "Webhook processing failed" },
      { status: 500 }
    );
  }
}
