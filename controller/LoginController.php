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
        $user = $db->consultarRegistro('SELECT * FROM usuario WHERE email = :email', [
            'email' => $email
        ]);
        if ($user) {
            if ($user['password'] == $pass) {
                session_start();
                foreach ($user as $key => $value) {
                    $userData[$key] = $value;
                    self::setUser($key, $value);
                }
                self::setUser('session', true);
                return respuesta('00', '', $userData);
            } else {
                return respuesta('99', 'Contraseña incorrecta');
            }
        } else {
            return respuesta('99', 'No se encontro datos del usuario.');
        }
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

    public static function setUser($nombre, $valor)
    {
        if (is_array($nombre)) {
            $_SESSION['1'] = $nombre;
        } else {
            $_SESSION[$nombre] = $valor;
        }
    }

    public static function getUser($nombre)
    {
        if (empty($_SESSION)) {
            session_start();
        }
        if (isset($_SESSION[$nombre])) {
            return $_SESSION[$nombre];
        } else {
            return false;
        }
    }

    public function home()
    {
        // opciones por usuario para el menu
    }

    public function salir()
    {
        session_start();
        unset($_SESSION);
        session_destroy();
        return respuesta('00', '');
    }

    public function olvidoClave()
    {
        // metodo de olvido de clave
    }
}