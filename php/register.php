<?php
/**
 * @Author: Marte
 * @Date:   2017-11-16 20:36:53
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-12-08 18:04:13
 */
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

    // 接受前端数据
    $username = isset($_POST['username']) ? $_POST['username'] :'';
    $password = isset($_POST['password']) ? $_POST['password'] :'';

  
    //查询用户名是否存在
    $sql="select username from memberlist where username='$username'";
    $result = $conn->query($sql);
    
    echo json_encode($result, JSON_UNESCAPED_UNICODE);
    if($result->num_rows>0){ 
        // 释放查询内存(销毁)
        $result->free();

        // 用户名已经被占用
        echo "fail";
    }else{
        
        if($username=='' or $password==''){
            // 释放查询内存(销毁)
            $result->free();
            echo "null";
        }else{
            // 释放查询内存(销毁)
            $result->free();

            $password=md5($password);

            $sql="insert into memberlist(username,password) value('$username','$password')";

            $result = $conn->query($sql);
            if ($result) {
                // 写入成功
                echo "ok";
            } else {
                // 写入失败
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
        }
    }
    //关闭连接
    $conn->close();

?>