<?php

require_once "model/dataBase.php";
//Es un frontController que va a permitir recibr la peticion por la URL y redireccionar al control de cada clase


//Validar si se ha asignador valor al controlador 
//c = controlador
if(!isset($_GET['c'])){

//Si no hay nada va a inicio
require_once "controller/user.controller.php";
  //crear variable controlador
  $controller = new UserController();
  //ucword pasar primer caracetyr a mayuscula
  //$controller = ucwords($controller) . "Controller";

  //Métodos
  //$controller->ListStudent();

  call_user_func(array($controller, "ListStudent"));

}else{
$controller = $_GET['c'];
  //Obtenemos el controlador a cargar
  //$controller = strtolower($_REQUEST['c']);
  require_once "controller/$controller.controller.php";
  //ucword pasar primer caracetyr a mayuscula
  $controller = ucwords($controller) . "Controller";
  //crear variable controlador
  $controller = new userController();
  $accion = isset($_GET['a']) ? $_GET['a'] : "ListStudent";
   // $accion = isset($_REQUEST['a']) ? $_REQUEST['a'] : 'UpdateUser';
   // $accion = isset($_REQUEST['a']) ? $_REQUEST['a'] : 'ListStudent';


    //Instanciamos el controlador
    //require_once "controller/user.controller.php";

   
   
    //a = accion   llama la acción
   
    call_user_func(array($controller,$accion));

}

?>