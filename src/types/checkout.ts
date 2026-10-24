export interface CheckoutPlanItem {
  id: string;
  name: string;
  price: string | number; // e.g. "4,833" or "28,999"
  totalPrice?: string | number; // e.g. "28,999" or 28999
  monthlyPrice?: string | number; // e.g. "4,833" or 4833
  totalText?: string; // e.g. "Total: ₹28,999 (incl. 18% GST)"
  billingBreakup?: string; // e.g. "Rs. 4,833 × 6 Months = ₹28,999 (incl. 18% GST)"
  monthsCount?: number;
  numericPrice?: number;
  period?: string;
  duration?: string;
  validityText?: string;
  liveHours?: string;
  badge?: string;
  isFeatured?: boolean;
  description?: string;
  features?: string[];
}

export interface CheckoutCourseData {
  courseId: string;
  courseName: string;
  category?: string;
  plans: CheckoutPlanItem[];
  defaultPlanId?: string;
}

export interface CachedStudentInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode?: string;
}

export interface PaymentSuccessDetails {
  paymentId: string;
  orderId?: string;
  studentName: string;
  studentEmail: string;
  studentPhone: string;
  studentCountryCode?: string;
  courseName: string;
  planName: string;
  amount: string;
  validityText?: string;
  timestamp: string;
}

export interface PaymentFailedDetails {
  courseName: string;
  planName: string;
  amount: string;
  studentName?: string;
  studentEmail?: string;
  studentPhone?: string;
  studentCountryCode?: string;
  reason?: string;
  code?: string;
}
