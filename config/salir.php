<?php


session_start();

$email = $_POST[''];
$password = $_POST[''];

//Destruir la session al salir
session_destroy();

header("location:../../../login.php");
exit();

?>