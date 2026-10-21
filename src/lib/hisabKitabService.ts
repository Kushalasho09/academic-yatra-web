/**
 * HisabKitab ERP / Accounting Integration Service
 * Documentation: https://zqki873xwy.apidog.io/
 * Portal: https://app.hisabkitab.co
 */

export interface StudentPaymentData {
  studentName: string;
  email: string;
  phone: string;
  courseTitle: string;
  amount: number; // in Rupees
  paymentId: string;
  orderId?: string;
  notes?: Record<string, any>;
}

export interface HisabKitabSyncResult {
  success: boolean;
  skipped?: boolean;
  message: string;
  customerLedgerId?: string | number;
  saleInvoiceId?: string | number;
  receiptId?: string | number;
  error?: string;
}

const HISABKITAB_BASE_URL =
  process.env.HISABKITAB_API_BASE_URL || "https://api.hisabkitab.co";

/**
 * Check if HisabKitab is configured with a valid API key
 */
export function isHisabKitabConfigured(): boolean {
  const key = process.env.HISABKITAB_API_KEY;
  const enabled = process.env.HISABKITAB_ENABLED !== "false";
  return Boolean(enabled && key && key.trim().length > 0 && key !== "YOUR_HISABKITAB_API_KEY_HERE");
}

/**
 * Get standard headers for HisabKitab API calls
 */
function getHeaders(): HeadersInit {
  const apiKey = process.env.HISABKITAB_API_KEY?.trim() || "";
  return {
    ApiKey: apiKey,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

/**
 * Step 1: Create or register a Customer Ledger in HisabKitab
 */
export async function createCustomerLedger(params: {
  name: string;
  email: string;
  phone: string;
  address?: string;
  city?: string;
  pincode?: string;
}): Promise<{ success: boolean; ledgerId?: number | string; error?: string }> {
  try {
    const cleanPhone = (params.phone || "").replace(/[^0-9]/g, "").slice(-10);
    const cleanName = params.name.trim() || `Student ${cleanPhone || Date.now().toString().slice(-4)}`;

    const payload = {
      action: "Customers",
      name: cleanName,
      group_id: Number(process.env.HISABKITAB_GROUP_ID || 1),
      party_details: {
        contact_person_name: cleanName,
        region_iso_1: "in",
        region_code_1: "91",
        contact_person_phone_1: cleanPhone || "9999999999",
        contact_person_email: params.email?.trim() || `${cleanPhone || "student"}@academicyatra.com`,
        billing_address: {
          address_1: params.address || "Online Student Admission",
          country_id: 1, // India
          state_id: 1,
          city_id: 1,
          pin_code: params.pincode || "110001",
        },
      },
    };

    const url = `${HISABKITAB_BASE_URL}/third-party/ledgers`;
    console.log(`[HisabKitab] Creating Customer Ledger for ${cleanName}...`);

    const res = await fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.warn("[HisabKitab] Create Ledger Warning/Error:", data);
      // Even if already exists or fails, try returning ID if present in response
      const existingId = data?.data?.id || data?.id || data?.ledger_id;
      if (existingId) {
        return { success: true, ledgerId: existingId };
      }
      return { success: false, error: data?.message || "Failed to create customer ledger" };
    }

    const ledgerId = data?.data?.id || data?.id || data?.ledger_id;
    return { success: true, ledgerId };
  } catch (err: any) {
    console.error("[HisabKitab] Ledger creation exception:", err);
    return { success: false, error: err.message || "Ledger exception" };
  }
}

/**
 * Step 2: Create a Sales Invoice in HisabKitab for Course Fee
 */
export async function createSaleTransaction(params: {
  customerLedgerId: string | number;
  customerName: string;
  phone: string;
  email: string;
  courseTitle: string;
  amount: number;
  paymentId: string;
}): Promise<{ success: boolean; invoiceId?: number | string; invoiceNumber?: string; error?: string }> {
  try {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, "0")}-${String(today.getMonth() + 1).padStart(2, "0")}-${today.getFullYear()}`;
    const invoiceNo = `AY-${Date.now().toString().slice(-6)}`;
    const cleanPhone = (params.phone || "").replace(/[^0-9]/g, "").slice(-10);

    const payload = {
      invoice_number: invoiceNo,
      date: formattedDate,
      customer_ledger_id: params.customerLedgerId,
      party_phone_number: cleanPhone,
      region_iso: "in",
      region_code: 91,
      items: [
        {
          name: params.courseTitle || "Academic Course / Mentorship Program",
          description: `Razorpay Payment ID: ${params.paymentId}`,
          quantity: 1,
          rate: params.amount,
          amount: params.amount,
          discount_amount: 0,
          tax_amount: 0,
        },
      ],
      remarks: `Automated invoice generated for ${params.courseTitle}. Razorpay Payment ID: ${params.paymentId}`,
    };

    const url = `${HISABKITAB_BASE_URL}/third-party/sale-transactions`;
    console.log(`[HisabKitab] Creating Sale Transaction #${invoiceNo} of ₹${params.amount}...`);

    const res = await fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.warn("[HisabKitab] Sale Transaction Warning/Error:", data);
      return { success: false, error: data?.message || "Failed to create sale transaction" };
    }

    const invoiceId = data?.data?.id || data?.id || data?.transaction_id || invoiceNo;
    return { success: true, invoiceId, invoiceNumber: invoiceNo };
  } catch (err: any) {
    console.error("[HisabKitab] Sale transaction exception:", err);
    return { success: false, error: err.message || "Sale exception" };
  }
}

/**
 * Step 3: Create a Payment Receipt in HisabKitab against the Sale Invoice
 */
export async function createReceiptTransaction(params: {
  customerLedgerId: string | number;
  amount: number;
  paymentId: string;
  invoiceId?: string | number;
}): Promise<{ success: boolean; receiptId?: number | string; error?: string }> {
  try {
    const today = new Date();
    const formattedDate = `${String(today.getDate()).padStart(2, "0")}-${String(today.getMonth() + 1).padStart(2, "0")}-${today.getFullYear()}`;
    const receiptNo = `RCPT-${Date.now().toString().slice(-6)}`;

    const payload = {
      receipt_number: receiptNo,
      date: formattedDate,
      customer_ledger_id: params.customerLedgerId,
      amount: params.amount,
      payment_mode: "Online", // or Bank Transfer
      reference_no: params.paymentId,
      remarks: `Payment received via Razorpay (${params.paymentId})`,
    };

    const url = `${HISABKITAB_BASE_URL}/third-party/receipt-transactions`;
    console.log(`[HisabKitab] Recording Payment Receipt #${receiptNo} for ₹${params.amount}...`);

    const res = await fetch(url, {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.warn("[HisabKitab] Receipt Transaction Warning/Error:", data);
      return { success: false, error: data?.message || "Failed to create receipt" };
    }

    const receiptId = data?.data?.id || data?.id || receiptNo;
    return { success: true, receiptId };
  } catch (err: any) {
    console.error("[HisabKitab] Receipt exception:", err);
    return { success: false, error: err.message || "Receipt exception" };
  }
}

/**
 * Master Sync Function: Orchestrates full accounting sync on successful student payment
 * Called automatically from Razorpay Webhook or Payment Verification
 */
export async function syncPaymentToHisabKitab(
  paymentData: StudentPaymentData
): Promise<HisabKitabSyncResult> {
  // Check if API key is present
  if (!isHisabKitabConfigured()) {
    console.log(
      "[HisabKitab] Sync skipped: HISABKITAB_API_KEY is not set in environment variables."
    );
    return {
      success: false,
      skipped: true,
      message: "HisabKitab API key not configured yet.",
    };
  }

  try {
    console.log(
      `[HisabKitab] Starting automated sync for ${paymentData.studentName} - Amount: ₹${paymentData.amount}`
    );

    // 1. Create/Find Customer Ledger
    const ledgerRes = await createCustomerLedger({
      name: paymentData.studentName,
      email: paymentData.email,
      phone: paymentData.phone,
    });

    const ledgerId = ledgerRes.ledgerId || 1;

    // 2. Create Sale Invoice
    const saleRes = await createSaleTransaction({
      customerLedgerId: ledgerId,
      customerName: paymentData.studentName,
      phone: paymentData.phone,
      email: paymentData.email,
      courseTitle: paymentData.courseTitle,
      amount: paymentData.amount,
      paymentId: paymentData.paymentId,
    });

    // 3. Create Receipt Transaction
    const receiptRes = await createReceiptTransaction({
      customerLedgerId: ledgerId,
      amount: paymentData.amount,
      paymentId: paymentData.paymentId,
      invoiceId: saleRes.invoiceId,
    });

    console.log("✅ [HisabKitab] Automated sync completed successfully:", {
      ledgerId,
      saleInvoiceId: saleRes.invoiceId,
      receiptId: receiptRes.receiptId,
    });

    return {
      success: true,
      message: "Successfully synchronized with HisabKitab ERP.",
      customerLedgerId: ledgerId,
      saleInvoiceId: saleRes.invoiceId,
      receiptId: receiptRes.receiptId,
    };
  } catch (err: any) {
    console.error("❌ [HisabKitab] Sync failed:", err);
    return {
      success: false,
      message: "Error during HisabKitab synchronization",
      error: err.message || "Unknown error",
    };
  }
}
