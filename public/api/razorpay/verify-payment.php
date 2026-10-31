<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

$rawInput = file_get_contents("php://input");
$input = json_decode($rawInput, true);

$orderId = isset($input["razorpay_order_id"]) ? $input["razorpay_order_id"] : "";
$paymentId = isset($input["razorpay_payment_id"]) ? $input["razorpay_payment_id"] : "";
$signature = isset($input["razorpay_signature"]) ? $input["razorpay_signature"] : "";

$keySecret = "naiz5DNTqk1fEqQAG1dBWjt5";

$generatedSignature = hash_hmac("sha256", $orderId . "|" . $paymentId, $keySecret);

if (hash_equals($generatedSignature, $signature)) {
    echo json_encode(["success" => true, "message" => "Payment verified successfully"]);
} else {
    http_response_code(400);
    echo json_encode(["success" => false, "error" => "Invalid signature"]);
}
?>