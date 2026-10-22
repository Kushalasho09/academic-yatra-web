import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { syncPaymentToHisabKitab } from "@/lib/hisabKitabService";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      studentName,
      studentEmail,
      studentPhone,
      studentCountryCode = "+91",
      courseId,
      courseName,
      planId,
      planName,
      category,
      amount,
      currency = "INR",
      validityText,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
      paymentStatus = "SUCCESS",
      failureReason,
    } = body;

    if (!studentName || !studentEmail || !courseName || amount === undefined) {
      return NextResponse.json(
        { success: false, error: "Missing required student or course information." },
        { status: 400 }
      );
    }

    // 1. Determine environment: TEST vs LIVE
    const rzpKey =
      process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "";
    const isTestMode =
      rzpKey.startsWith("rzp_test_") ||
      (razorpayPaymentId && razorpayPaymentId.includes("test")) ||
      (razorpayOrderId && razorpayOrderId.includes("test"));

    const environment: "TEST" | "LIVE" = isTestMode ? "TEST" : "LIVE";

    // 2. Synchronize to HisabKitab if payment is successful
    let hisabkitabStatus: "SYNCED" | "FAILED" | "SKIPPED" | "PENDING" = "SKIPPED";
    let hisabkitabInvoiceId: string | null = null;
    let hisabkitabReceiptId: string | null = null;

    if (paymentStatus === "SUCCESS") {
      try {
        const fullPhone = `${studentCountryCode} ${studentPhone}`.trim();
        const syncResult = await syncPaymentToHisabKitab({
          studentName,
          email: studentEmail,
          phone: fullPhone,
          courseTitle: `${courseName} - ${planName || "Course Pack"}`,
          amount: Number(amount),
          paymentId: razorpayPaymentId || `pay_${Date.now()}`,
          orderId: razorpayOrderId,
          notes: {
            environment,
            validityText,
            category,
          },
        });

        if (syncResult.success) {
          hisabkitabStatus = "SYNCED";
          hisabkitabInvoiceId = syncResult.saleInvoiceId ? String(syncResult.saleInvoiceId) : null;
          hisabkitabReceiptId = syncResult.receiptId ? String(syncResult.receiptId) : null;
        } else if (syncResult.skipped) {
          hisabkitabStatus = "SKIPPED";
        } else {
          hisabkitabStatus = "FAILED";
        }
      } catch (hErr) {
        console.warn("[HisabKitab Sync Notice]:", hErr);
        hisabkitabStatus = "FAILED";
      }
    }

    const orderRecord = {
      id: `ord_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      studentName,
      studentEmail,
      studentPhone,
      studentCountryCode,
      courseId: courseId || null,
      courseName,
      planId: planId || null,
      planName: planName || "Enrollment",
      category: category || null,
      amount: Number(amount),
      currency,
      validityText: validityText || null,
      razorpayPaymentId: razorpayPaymentId || null,
      razorpayOrderId: razorpayOrderId || null,
      razorpaySignature: razorpaySignature || null,
      paymentStatus: paymentStatus as "SUCCESS" | "FAILED" | "CANCELLED",
      environment,
      failureReason: failureReason || null,
      hisabkitabStatus,
      hisabkitabInvoiceId,
      hisabkitabReceiptId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    // 3. Persist to Admin Panel via HTTP
    try {
      const adminUrl = "http://localhost:3001/api/orders";
      await fetch(adminUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderRecord),
      });
    } catch (adminErr) {
      console.warn("Could not reach admin panel HTTP endpoint, writing to fallback JSON:", adminErr);
    }

    // 4. Also write directly to shared fallback JSON file
    try {
      const dataFile = path.resolve(
        process.cwd(),
        "../academic-yatra-web-admin-panel/data/orders.json"
      );
      const dir = path.dirname(dataFile);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      let existingOrders: any[] = [];
      if (fs.existsSync(dataFile)) {
        try {
          existingOrders = JSON.parse(fs.readFileSync(dataFile, "utf-8"));
        } catch {
          existingOrders = [];
        }
      }

      // Check if duplicate
      const idx = existingOrders.findIndex((o) => o.id === orderRecord.id);
      if (idx >= 0) {
        existingOrders[idx] = orderRecord;
      } else {
        existingOrders.unshift(orderRecord);
      }

      fs.writeFileSync(dataFile, JSON.stringify(existingOrders, null, 2), "utf-8");
    } catch (fileErr) {
      console.error("Error writing order to shared file:", fileErr);
    }

    return NextResponse.json({
      success: true,
      message: "Order successfully processed and recorded in database.",
      order: orderRecord,
    });
  } catch (err: any) {
    console.error("POST /api/orders error:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Failed to process order" },
      { status: 500 }
    );
  }
}
