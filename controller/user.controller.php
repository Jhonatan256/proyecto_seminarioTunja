<?php

//Intanciación Modelo
require_once "model/userModel.php";
class UserController{
    private $modelo;

    //Método constructor

    public function __construct(){
       $this->modelo = new Usuario;
    }

    //Método de Inicio
    public function Inicio(){
        require_once('view/Admin/HomeAdmin.php');
    }



    //Método de insertar
    public function insertarStudent(){
        require_once('view/Admin/registerStudent.php');
    }

    //Método de editar
    public function editarStudent(){
        require_once('view/Admin/updateStudent.php');
    }

    //Método de eliminar
    public function elimarStudent(){
        
    }

    //Método de listar
    public function ListStudent(){
        //Llamamos la BD
        $bd = BaseDatos::Conectar();
        //Indicar que inicio va a retornar una vista
        // require_once "view/Admin/registerStudent.php";
        require_once "view/Admin/listStudent.php";
        // echo "Este es el controlador de inicio";
     
    }


 



    public function Borrar()
    {
        $this->modelo->Eliminar($_GET["idUsuario"]);
        header("location:?c=user");
    }

}

?>