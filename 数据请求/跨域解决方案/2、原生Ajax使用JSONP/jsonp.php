<?php
//获取回调函数的名称
// /items?aaaaaaaaaa=my;
//  user=admin
// query.user == admin
$cbName = $_GET["callback"]; //my
$user = $_GET["user"];//admin
$pass = $_GET["pass"];//123

$arr = array("user" => "我的用户名是{$user}", "pass" => "我的密码是：{$pass}");
// {user:admin,pass:123}
// fun(fdas)
echo $cbName . "(" . json_encode($arr) . ")";
// my(数据)
// echo myFun({user:admin,pass:123})
?>
