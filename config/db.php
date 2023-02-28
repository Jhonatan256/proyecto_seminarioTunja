<?php
$_host = "localhost";
$_username = "root";
$_password = "";
$_database = "bd_seminario";
//$conexion = mysqli_connect("localhost", "root", "", "bd_seminario");
$conexion = mysqli_connect($_host, $_username, $_password, $_database);
if (!$conexion) {
    header("location:../error404.php");
}
 


?>

