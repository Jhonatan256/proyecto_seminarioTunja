<?php

class BaseDatos{
const server = "localhost";
const username = "root";
const password = "";
const database = "bd_seminario";

//Método
public static function Conectar(){
try{
    // new PDO('mysql:host=localhost;dbname=pruebas', 'root', '');

    $conexion = new PDO("mysql:host=".self::server.";dbname=".self::database.";charset=utf8",self::username,self::password);
    //Parámetros de error
    $conexion->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

    return $conexion;

}catch(PDOException $e){
    return "Falló".$e->getMessage();

} // Fin try-catch


}

}


?>