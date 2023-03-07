<?php
include 'model/Conexion.php';
require_once 'vendor/Utilitarias.php';

class LoginController
{

    public function autenticarUsuario()
    {
        $db = new Conexion();

        $email = $_POST['email'];
        $pass = $_POST['clave'];
        $user = $db->consultarRegistro('SELECT * FROM usuario WHERE email = :email AND password = :pass', [
            'ide' => $email,
            'pass' => $pass
        ]);
        imprimirSalida($user);
    }
    
    public function validarSesionLogin()
    {
        return self::validarSesion('login');
    }
    
    public function validarSesion($tipo = '')
    {
        if (empty($_SESSION)) {
            session_start();
        }
        $data = [];
        $cod = '00';
        if (self::getUser('session')) {
            $data['nombre'] = self::getUser('nombre');
            $data['identificacion'] = self::getUser('identificacion');
            $data['fecha_nacimiento'] = self::getUser('fecha_nacimiento');
            $data['nombreTipoUsuario'] = self::getUser('nombreTipoUsuario');
            $data['tipoUsuario'] = self::getUser('tipoUsuario');
            $data['genero'] = self::getUser('genero');
            if ($tipo == 'login') {
                return respuesta($cod, '', $data);
            } else {
                return true;
            }
        } else {
            if ($tipo == 'login') {
                $cod = '99';
            } else {
                $cod = '88';
            }
            return respuesta($cod, 'Sesión expirada.');
        }
    }
}