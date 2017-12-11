<?php
header('Access-Control-Allow-Origin:*');

    include "./dbhelpbd.php";
    
    $sql = "select * from orderlist where orderId";
    // if($_POST["qty"]){
    //     $insert = "update orderlist values('" . $_POST["qty"] . "')"
    //     excute($insert)
    // }
    $result = query($sql);

    echo json_encode($result, JSON_UNESCAPED_UNICODE);

?>