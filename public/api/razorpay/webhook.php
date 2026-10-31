<?php
header("Content-Type: application/json; charset=UTF-8");

$rawInput = file_get_contents("php://input");
$data = json_decode($rawInput, true);

if (empty($data) || empty($data["event"])) {
    http_response_code(400);
    echo json_encode(["status" => "ignored", "reason" => "No event payload"]);
    exit();
}

$event = $data["event"];

if ($event === "payment.captured" || $event === "order.paid") {
    $payment = isset($data["payload"]["payment"]["entity"]) ? $data["payload"]["payment"]["entity"] : [];
    
    $paymentId = isset($payment["id"]) ? $payment["id"] : "";
    $orderId = isset($payment["order_id"]) ? $payment["order_id"] : "";
    $amount = isset($payment["amount"]) ? ((float)$payment["amount"] / 100) : 0;
    $email = isset($payment["email"]) ? $payment["email"] : "";
    $contact = isset($payment["contact"]) ? $payment["contact"] : "";
    $notes = isset($payment["notes"]) ? $payment["notes"] : [];
    
    $studentName = isset($notes["studentName"]) ? $notes["studentName"] : "Student";
    $courseName = isset($notes["courseName"]) ? $notes["courseName"] : "Academic Course";
    $planName = isset($notes["planName"]) ? $notes["planName"] : "Enrolled Plan";
    
    // Connect to database
    $db_host = "127.0.0.1";
    $db_user = "u338135177_academic_admin";
    $db_pass = "@AcademicYatra2026#";
    $db_name = "u338135177_academicyatra";
    
    $conn = @new mysqli($db_host, $db_user, $db_pass, $db_name);
    if (!$conn->connect_error) {
        $conn->set_charset("utf8mb4");
        
        // Check if order already synced with HisabKitab
        $checkStmt = $conn->prepare("SELECT id, hisabkitabStatus, hisabkitabReceiptId FROM \`Order\` WHERE razorpayPaymentId = ? OR razorpayOrderId = ? LIMIT 1");
        $alreadySynced = false;
        $existingOrderId = null;
        if ($checkStmt) {
            $checkStmt->bind_param("ss", $paymentId, $orderId);
            $checkStmt->execute();
            $res = $checkStmt->get_result();
            if ($row = $res->fetch_assoc()) {
                $existingOrderId = $row["id"];
                if ($row["hisabkitabStatus"] === "SYNCED") {
                    $alreadySynced = true;
                }
            }
            $checkStmt->close();
        }
        
        // If not synced yet, trigger HisabKitab receipt creation
        if (!$alreadySynced && !empty($paymentId) && $amount > 0) {
            $hisabkitab_key = "2037643c-1429-4a2c-aa06-ffa0ccde2b2e";
            $hisabkitab_base = "https://api.hisabkitab.co";
            $hisabkitab_customer_group = 2232873;
            $hisabkitab_bank_id = 4629831;
            
            require_once __DIR__ . "/../orders.php";
            if (function_exists("syncToHisabKitab")) {
                $syncRes = syncToHisabKitab(
                    $hisabkitab_base,
                    $hisabkitab_key,
                    $hisabkitab_customer_group,
                    $hisabkitab_bank_id,
                    $studentName,
                    $email,
                    $contact,
                    $courseName,
                    $planName,
                    $amount,
                    $paymentId
                );
                
                if ($syncRes["success"] && $existingOrderId) {
                    $uStmt = $conn->prepare("UPDATE \`Order\` SET hisabkitabStatus = 'SYNCED, hisabkitabReceiptId = ?, updatedAt = NOW() WHERE id = ?");
                    if ($uStmt) {
                        $rcptId = strval($syncRes["receiptId"]);
                        $uStmt->bind_param("ss", $rcptId, $existingOrderId);
                        $uStmt->execute();
                        $uStmt->close();
                    }
                }
            }
        }
        $conn->close();
    }
}

http_response_code(200);
echo json_encode(["status" => "received"]);
?>