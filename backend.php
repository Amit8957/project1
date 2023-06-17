<?php
$myname =$_POST['myname'];
$myroll =$_POST['myroll'];
$myemail =$_POST['myemail'];

if(!empty($myname)|| !empty($myroll)||!empty($myemail)){
$host ="localhost";
$dbUsername="root";
$dbPassword="";
$dbname="test1";

$conn =new mysqli($host ,$dbUsername ,$dbPassword ,$dbname); 

if(mysqli_connection_error()){
    die('Connect Error ('.mysql_connect_errno().')'.mysqli_connect_error());
} else{
    $SELECT="SELECT "
}
else{
    echo "all feilds are requried ";
    die();
}
?>
//creating the database
$conn =new mysqli('localhost' ,'localhost' , '' ,'test1') 
if($conn->connect_error){
    die('Connection failed :' .$conn->connect_error);

}
else{
    $stmt=$conn->prepare("insert into registration (myname,myroll,myemail) values(?,?,?)");
    $stmt->bind_param("sis",$myname ,myroll, myemail);
    $stmt->execute();
    echo "registration successfully";
    $stmt->close(;
    $conn->conn();)

}
