<?php
header('Content-Type: application/json');
session_start();

$body = json_decode(file_get_contents('php://input'), true);
$username = trim($body['username'] ?? '');
$password = $body['password'] ?? '';

if (!$username || !$password) {
  http_response_code(400);
  echo json_encode(['error'=>'Missing fields']);
  exit;
}

$conn = new mysqli('localhost','root','', 'my_app');
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(['error'=>'DB connect failed']);
  exit;
}

$stmt = $conn->prepare(
  'SELECT id, password_hash FROM users WHERE username = ?'
);
$stmt->bind_param('s', $username);
$stmt->execute();
$stmt->bind_result($id, $hash);
if (!$stmt->fetch() || !password_verify($password, $hash)) {
  http_response_code(401);
  echo json_encode(['error'=>'Invalid credentials']);
  exit;
}

// Success: save session
$_SESSION['user_id'] = $id;
echo json_encode(['success'=>'Logged in']);
