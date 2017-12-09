<?php
/**
 * @Author: Marte
 * @Date:   2017-11-16 20:36:53
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-09 15:53:03
 */
    header('Access-Control-Allow-Origin:*');
    $servername='10.3.135.29';
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

    // 接受前端数据
    $username = isset($_POST['username']) ? $_POST['username'] : '';

    $sql = "select * from memberlist where username ='$username'";
    // mysqli_query($conn,"UPDATE orders SET status=1 WHERE username='$username'");

    // 获取查询结果
    $result = $conn->query($sql);

    $row = $result->fetch_all(MYSQLI_ASSOC);

    if($row){
        
        echo json_encode($row,JSON_UNESCAPED_UNICODE);
    }else{
        echo 'fail';
    }
    

    // // 释放查询内存(销毁)
    $result->free();

    //关闭连接
    $conn->close();

?>