<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$db_host = "127.0.0.1";
$db_user = "u338135177_academic_admin";
$db_pass = "@AcademicYatra2026#";
$db_name = "u338135177_academicyatra";

// HisabKitab Configuration
$hisabkitab_key = "2037643c-1429-4a2c-aa06-ffa0ccde2b2e";
$hisabkitab_base = "https://api.hisabkitab.co";
$hisabkitab_customer_group = 2232873;
$hisabkitab_bank_id = 4629831; // IDFC FIRST Bank

$rawInput = file_get_contents("php://input");
$input = json_decode($rawInput, true);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $conn = @new mysqli($db_host, $db_user, $db_pass, $db_name);
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode(["success" => false, "error" => "Database connection error"]);
        exit();
    }
    $conn->set_charset("utf8mb4");

    $id = !empty($input["id"]) ? $input["id"] : ("ord_" . uniqid());
    $studentName = !empty($input["studentName"]) ? trim($input["studentName"]) : "Student";
    $studentEmail = !empty($input["studentEmail"]) ? trim($input["studentEmail"]) : "";
    $studentPhone = !empty($input["studentPhone"]) ? trim($input["studentPhone"]) : "";
    $studentCountryCode = !empty($input["studentCountryCode"]) ? trim($input["studentCountryCode"]) : "+91";
    $courseId = !empty($input["courseId"]) ? $input["courseId"] : "";
    $courseName = !empty($input["courseName"]) ? $input["courseName"] : "Academic Course";
    $planId = !empty($input["planId"]) ? $input["planId"] : "";
    $planName = !empty($input["planName"]) ? $input["planName"] : "";
    $category = !empty($input["category"]) ? $input["category"] : "Language Preparation";
    $amount = isset($input["amount"]) ? (float)$input["amount"] : 0.0;
    $currency = !empty($input["currency"]) ? $input["currency"] : "INR";
    $validityText = !empty($input["validityText"]) ? $input["validityText"] : "";
    $razorpayPaymentId = !empty($input["razorpayPaymentId"]) ? trim($input["razorpayPaymentId"]) : null;
    $razorpayOrderId = !empty($input["razorpayOrderId"]) ? trim($input["razorpayOrderId"]) : null;
    $razorpaySignature = !empty($input["razorpaySignature"]) ? trim($input["razorpaySignature"]) : null;
    $paymentStatus = !empty($input["paymentStatus"]) ? strtoupper(trim($input["paymentStatus"])) : "SUCCESS";
    $environment = !empty($input["environment"]) ? strtoupper(trim($input["environment"])) : "LIVE";
    $failureReason = !empty($input["failureReason"]) ? $input["failureReason"] : null;
    $now = date("Y-m-d H:i:s");

    $cleanPhone = preg_replace("/[^0-9]/", "", $studentPhone);
    if (strlen($cleanPhone) > 10) {
        $cleanPhone = substr($cleanPhone, -10);
    }
    if (empty($cleanPhone)) {
        $cleanPhone = "9999999999";
    }

    $initialHisabStatus = ($paymentStatus === "SUCCESS" && !empty($razorpayPaymentId)) ? "PENDING" : "SKIPPED";
    $hisabReceiptId = null;
    $hisabNotes = null;

    // 1. Insert order into MySQL
    $stmt = $conn->prepare("INSERT INTO `Order` (id, studentName, studentEmail, studentPhone, studentCountryCode, courseId, courseName, planId, planName, category, amount, currency, validityText, razorpayPaymentId, razorpayOrderId, razorpaySignature, paymentStatus, environment, failureReason, hisabkitabStatus, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    if ($stmt) {
        $stmt->bind_param(
            "ssssssssssdsssssssssss",
            $id,
            $studentName,
            $studentEmail,
            $cleanPhone,
            $studentCountryCode,
            $courseId,
            $courseName,
            $planId,
            $planName,
            $category,
            $amount,
            $currency,
            $validityText,
            $razorpayPaymentId,
            $razorpayOrderId,
            $razorpaySignature,
            $paymentStatus,
            $environment,
            $failureReason,
            $initialHisabStatus,
            $now,
            $now
        );
        $stmt->execute();
        $stmt->close();
    }

    // 2. Automated HisabKitab Synchronization on Successful Payment
    if ($paymentStatus === "SUCCESS" && !empty($razorpayPaymentId) && $amount > 0) {
        $syncResult = syncToHisabKitab(
            $hisabkitab_base,
            $hisabkitab_key,
            $hisabkitab_customer_group,
            $hisabkitab_bank_id,
            $studentName,
            $studentEmail,
            $cleanPhone,
            $courseName,
            $planName,
            $amount,
            $razorpayPaymentId
        );

        if ($syncResult["success"]) {
            $initialHisabStatus = "SYNCED";
            $hisabReceiptId = strval($syncResult["receiptId"]);
            $hisabNotes = "Auto-synced with HisabKitab Receipt #" . $syncResult["receiptNumber"];
        } else {
            $initialHisabStatus = "FAILED";
            $hisabNotes = "HisabKitab Error: " . $syncResult["error"];
        }

        // Update Order with HisabKitab Results
        $upStmt = $conn->prepare("UPDATE `Order` SET hisabkitabStatus = ?, hisabkitabReceiptId = ?, notes = ?, updatedAt = NOW() WHERE id = ?");
        if ($upStmt) {
            $upStmt->bind_param("ssss", $initialHisabStatus, $hisabReceiptId, $hisabNotes, $id);
            $upStmt->execute();
            $upStmt->close();
        }
    }

    $conn->close();

    echo json_encode([
        "success" => true,
        "orderId" => $id,
        "paymentStatus" => $paymentStatus,
        "hisabkitab" => [
            "status" => $initialHisabStatus,
            "receiptId" => $hisabReceiptId,
            "notes" => $hisabNotes,
        ],
    ]);
    exit();
}

// GET method returns list of recent orders
$conn = @new mysqli($db_host, $db_user, $db_pass, $db_name);
if (!$conn->connect_error) {
    $conn->set_charset("utf8mb4");
    $res = $conn->query("SELECT * FROM `Order` ORDER BY createdAt DESC LIMIT 50");
    $orders = [];
    if ($res) {
        while ($row = $res->fetch_assoc()) {
            $orders[] = $row;
        }
    }
    $conn->close();
    echo json_encode(["success" => true, "data" => $orders]);
    exit();
}

echo json_encode(["success" => true]);
exit();

/**
 * Robust HisabKitab Automated Sync Engine
 */
function syncToHisabKitab(
    $baseUrl,
    $apiKey,
    $customerGroupId,
    $bankLedgerId,
    $studentName,
    $studentEmail,
    $cleanPhone,
    $courseName,
    $planName,
    $amount,
    $razorpayPaymentId
) {
    $headers = [
        "ApiKey: " . $apiKey,
        "Content-Type: application/json",
        "Accept: application/json",
    ];

    $address = [
        "address_1" => "Online Student Admission",
        "country_id" => 101, // India
        "state_id" => 4021,  // Delhi
        "city_id" => 150120, // South East Delhi
        "pin_code" => "110020",
    ];

    // Step A: Find or Create Customer Ledger
    $ledgerId = null;

    $ledgerPayload = [
        "action" => "Customers",
        "name" => $studentName,
        "group_id" => (int)$customerGroupId,
        "party_details" => [
            "contact_person_name" => $studentName,
            "region_iso_1" => "in",
            "region_code_1" => "91",
            "contact_person_phone_1" => $cleanPhone,
            "contact_person_email" => !empty($studentEmail) ? $studentEmail : ($cleanPhone . "@academicyatra.com"),
            "same_as_billing_address" => 1,
            "billing_address" => $address,
            "shipping_address" => $address,
        ],
    ];

    $ch = curl_init($baseUrl . "/third-party/ledgers");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($ledgerPayload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_TIMEOUT, 6);
    $lRes = curl_exec($ch);
    $lCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);

    $lData = json_decode($lRes, true);

    if ($lCode >= 200 && $lCode < 300 && !empty($lData["data"]["id"])) {
        $ledgerId = $lData["data"]["id"];
    } elseif (!empty($lData["id"])) {
        $ledgerId = $lData["id"];
    } elseif (!empty($lData["ledger_id"])) {
        $ledgerId = $lData["ledger_id"];
    } else {
        // If customer already exists, query by phone/search to get existing ledger ID
        $chSearch = curl_init($baseUrl . "/third-party/ledgers?group_id=" . $customerGroupId . "&search=" . urlencode($cleanPhone));
        curl_setopt($chSearch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($chSearch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($chSearch, CURLOPT_TIMEOUT, 5);
        $sRes = curl_exec($chSearch);
        curl_close($chSearch);

        $sData = json_decode($sRes, true);
        if (!empty($sData["data"][0]["id"])) {
            $ledgerId = $sData["data"][0]["id"];
        }
    }

    if (!$ledgerId) {
        return [
            "success" => false,
            "error" => !empty($lData["message"]) ? $lData["message"] : "Failed to obtain HisabKitab Customer Ledger ID",
        ];
    }

    // Step B: Create Payment Receipt Transaction under IDFC Bank
    $receiptNo = "AY-" . date("ymd") . "-" . substr(uniqid(), -4);
    $receiptPayload = [
        "receipt_number" => $receiptNo,
        "date" => date("d-m-Y"),
        "ledger_id" => (int)$ledgerId,
        "bank_cash_ledger_id" => (int)$bankLedgerId,
        "total_received_amount" => $amount,
        "payment_mode" => "Online - Razorpay",
        "transaction_id" => $razorpayPaymentId,
        "remarks" => "Academic Yatra Admission: " . $courseName . " (" . $planName . ") - Razorpay ID: " . $razorpayPaymentId,
    ];

    $chRcpt = curl_init($baseUrl . "/third-party/receipt-transactions");
    curl_setopt($chRcpt, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($chRcpt, CURLOPT_POST, true);
    curl_setopt($chRcpt, CURLOPT_POSTFIELDS, json_encode($receiptPayload));
    curl_setopt($chRcpt, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($chRcpt, CURLOPT_TIMEOUT, 6);
    $rRes = curl_exec($chRcpt);
    $rCode = curl_getinfo($chRcpt, CURLINFO_HTTP_CODE);
    curl_close($chRcpt);

    $rData = json_decode($rRes, true);

    if ($rCode >= 200 && $rCode < 300 && !empty($rData["data"]["id"])) {
        return [
            "success" => true,
            "receiptId" => $rData["data"]["id"],
            "receiptNumber" => !empty($rData["data"]["receipt_number"]) ? $rData["data"]["receipt_number"] : $receiptNo,
            "ledgerId" => $ledgerId,
        ];
    } elseif (!empty($rData["id"])) {
        return [
            "success" => true,
            "receiptId" => $rData["id"],
            "receiptNumber" => $receiptNo,
            "ledgerId" => $ledgerId,
        ];
    } else {
        return [
            "success" => false,
            "error" => !empty($rData["message"]) ? $rData["message"] : "Failed to create HisabKitab Receipt Transaction",
        ];
    }
}
?>