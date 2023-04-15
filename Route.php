<?php
require 'controller/LoginController.php';
require 'controller/AdministradorController.php';
require 'controller/DocenteController.php';
require 'controller/StudentController.php';

class Route
{

    private $controlador;

    private $metodo;

    public function __construct()
    {
        if (isset($_REQUEST['c']) && isset($_REQUEST['m'])) {
            $this->controlador = $_REQUEST['c'];
            $this->metodo = $_REQUEST['m'];
            $this->index();
        } else {
            $msj = array(
                "cod" => "99",
                "msj" => "No se recibieron las variables!"
            );
            return $this->setResponse(json_encode($msj));
        }
    }

    public function index()
    {
        if (is_callable(array(
            $this->controlador,
            $this->metodo
        ))) {
            return $this->setResponse(@call_user_func_array(array(
                $this->controlador,
                $this->metodo
            ), array(
                mt_rand(0, 10000000),
                $this->metodo
            )));
        } else {
            $dataRespuesta = array(
                'cod' => "99",
                'msj' => "No se encuentra el controlador : " . $this->controlador . " Método: " . $this->metodo
            );
            return $this->setResponse(json_encode($dataRespuesta));
        }
    }

    public function setResponse($param)
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        if (is_array($param)) {
            print_r(json_encode($param));
        } else {
            echo $param;
        }
    }
}

$request = new Route();
