<?php
//获取回调函数的名称
$cbName = $_GET["callback"];
$user = $_GET["user"];
$pass = $_GET["pass"];

$arr = array("user" => "我的用户名是{$user}", "pass" => "我的密码是：{$pass}");
//cbName = callback0
//echo callback0(str);
echo $cbName . "(" . json_encode($arr) . ")";
//succ({"user":"tangcaiye","pass":"123"});
?>
