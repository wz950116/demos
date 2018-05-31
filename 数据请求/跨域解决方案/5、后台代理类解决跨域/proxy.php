<?php
//这里只是一个简单的示例 实际开发中并不如此
$url = $_GET["url"];
$data = $_GET["data"];
// $url = $url . '?' . http_bulid_query($data);
$url = $url . "?" . $data;
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HEADER, 0);
$output = curl_exec($ch);
curl_close($ch);
echo $output;
?>
