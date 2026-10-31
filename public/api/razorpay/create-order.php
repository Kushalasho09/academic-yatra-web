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

$amount = isset($input["amount"]) ? (float)$input["amount"] : 0;
$promoCode = isset($input["promoCode"]) ? strtoupper(trim($input["promoCode"])) : "";

if ($promoCode === "AYLIVES2026" || $promoCode === "AYLIVES") {
    $amount = 1.0;
}
$currency = isset($input["currency"]) ? $input["currency"] : "INR";
$notes = isset($input["notes"]) && is_array($input["notes"]) ? $input["notes"] : [];

$keyId = "rzp_live_TuaB3K6pIAfl51";
$keySecret = "naiz5DNTqk1fEqQAG1dBWjt5";

if ($amount <= 0) {
    http_response_code(400);
    echo json_encode(["error" => "Invalid amount"]);
    exit();
}

$orderPayload = [
    "amount" => round($amount * 100),
    "currency" => $currency,
    "receipt" => "ay_rcpt_" . substr(strval(time()), -8),
    "notes" => $notes,
];

$ch = curl_init("https://api.razorpay.com/v1/orders");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_USERPWD, $keyId . ":" . $keySecret);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($orderPayload));
curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$data = json_decode($response, true);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(["success" => true, "order" => $data]);
} else {
    http_response_code($httpCode ? $httpCode : 500);
    echo json_encode(["error" => isset($data["error"]["description"]) ? $data["error"]["description"] : "Failed to create Razorpay order"]);
}
?>