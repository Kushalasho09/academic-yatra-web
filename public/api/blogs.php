<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
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

$conn = @new mysqli($db_host, $db_user, $db_pass, $db_name);

if ($conn->connect_error) {
    echo json_encode(["success" => true, "data" => []]);
    exit();
}

$conn->set_charset("utf8mb4");

$sql = "SELECT id, title, slug, excerpt, content, coverImage, author, category, tags, readTime, isPublished, views, createdAt, updatedAt FROM Blog WHERE isPublished = 1 ORDER BY createdAt DESC";
$result = $conn->query($sql);

$blogs = [];
if ($result) {
    while ($row = $result->fetch_assoc()) {
        $row["isPublished"] = (bool)$row["isPublished"];
        $row["views"] = (int)$row["views"];
        $blogs[] = $row;
    }
}

$conn->close();

echo json_encode(["success" => true, "data" => $blogs]);
?>