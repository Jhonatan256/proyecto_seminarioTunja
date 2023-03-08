<?php
require_once 'model/Conexion.php';
require_once 'vendor/Utilitarias.php';

class AdministradorController extends LoginController
{

    public function listarEstudiantes()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $estudiantes = $db->consultarRegistros('SELECT * FROM usuario WHERE codRol = 3');
            return respuesta('00', '', $estudiantes);
        } else {
            $msj = 'Usuario no permitido';
        }
        return respuesta('99', $msj);
    }
}