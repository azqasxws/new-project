<?php
/**
 * @Author: Marte
 * @Date:   2017-12-07 19:09:12
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-08 17:38:24
 */
header('Access-Control-Allow-Origin:*');
include "DBHelper.php";
$username = isset($_POST["username"]) ? $_POST["username"] : '111';
$password = isset($_POST["password"]) ? $_POST["password"] : '111';

$sql = "select * from memberlist where username = $username and password = $password";
$result = query($sql);

echo json_encode($result, JSON_UNESCAPED_UNICODE);
?>