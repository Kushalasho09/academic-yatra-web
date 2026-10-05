export interface CheckoutPlanItem {
  id: string;
  name: string;
  price: string | number; // e.g. "16,299" or 16299
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
