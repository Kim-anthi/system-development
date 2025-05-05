<?php
header('Content-Type: application/json');

// 1. Get JSON body
$body = json_decode(file_get_contents('php://input'), true);
$username = trim($body['username'] ?? '');
$password = $body['password'] ?? '';

if (!$username || !$password) {
  http_response_code(400);
  echo json_encode(['error'=>'Missing username or password']);
  exit;
}

// 2. Connect
$conn = new mysqli('localhost','root','', 'my_app');
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(['error'=>'DB connect failed']);
  exit;
}

// 3. Check existence
$stmt = $conn->prepare('SELECT id FROM users WHERE username = ?');
$stmt->bind_param('s', $username);
$stmt->execute();
$stmt->store_result();
if ($stmt->num_rows) {
  http_response_code(409);
  echo json_encode(['error'=>'Username taken']);
  exit;
}

// 4. Hash & insert
$hash = password_hash($password, PASSWORD_DEFAULT);
$stmt = $conn->prepare(
  'INSERT INTO users (username, password_hash) VALUES (?, ?)'
);
$stmt->bind_param('ss', $username, $hash);
if ($stmt->execute()) {
  echo json_encode(['success'=>'Signup successful']);
} else {
  http_response_code(500);
  echo json_encode(['error'=>'Insert failed']);
}

