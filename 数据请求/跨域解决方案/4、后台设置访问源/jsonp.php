<?php
header('Access-Control-Allow-Origin: *');

$user = $_GET["user"];
$pass = $_GET["pass"];

$arr = array("user" => "我的用户名是{$user}", "pass" => "我的密码是：{$pass}");

echo json_encode($arr);
?>
