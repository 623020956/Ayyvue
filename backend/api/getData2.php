<?php
header("Access-Control-Allow-Origin: *");
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "yinping";
 
// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn, "utf8");
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 

$key = $_GET['key'];
$sql = "SELECT * FROM erjicomp where Id='$key'";
$result = $conn->query($sql);
// var_dump($result);
$data = '';
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        $data[]=$row;
    }
} 
$conn->close();
echo json_encode($data);
?>