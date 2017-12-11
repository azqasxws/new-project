<?php



header('Access-Control-Allow-Origin:*');
$servername='localhost';
$username='root';
$password='';
$database='mydatabase';

//连接注册登录数据库
$conn=new mysqli($servername,$username,$password,$database);

//检测连接
if($conn->connect_error){
    die('连接失败'.$conn->connect_error);
}

//设置编码
$conn->set_charset('utf8');




?>