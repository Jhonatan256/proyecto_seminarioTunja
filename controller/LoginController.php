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
        $user = $db->consultarRegistro('SELECT u.*, r.nombreRol FROM usuario u JOIN rol r ON u.codRol = r.idRol WHERE email = :email', [
            'email' => $email
        ]);
        if ($user) {
            if ($user['password'] == $pass) {
                if ($user['estado'] == 'activo') {
                    session_start();
                    self::setUser('nombre', nombreUsuario($user));
                    self::setUser('identificacion', $user['numeroDocumento']);
                    self::setUser('estado', $user['estado']);
                    self::setUser('tipoUsuario', $user['codRol']);
                    self::setUser('idUsuario', $user['idUsuario']);
                    self::setUser('session', true);
                    return respuesta('00', '', $user);
                } else {
                    $cod = '99';
                    $msj = 'Usuario inactivo.';
                }
            } else {
                $cod = '99';
                $msj = 'Contraseña incorrecta.';
            }
        } else {
            $cod = '99';
            $msj = 'No se encontro datos del usuario.';
        }
        return respuesta($cod, $msj);
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
            $data['estado'] = self::getUser('estado');
            $data['tipoUsuario'] = self::getUser('tipoUsuario');
            $data['idUsuario'] = self::getUser('idUsuario');
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
        $menu = $opciones = $modulo = [];
        $menu['home'] = [
            'nombre' => 'Home',
            'z' => 'home',
            'icono' => 'bx bxs-dashboard icon'
        ];
        $opciones['tipoUsuario'] = self::getUser('tipoUsuario');
        switch (self::getUser('tipoUsuario')) {
            case '1':
                $menu['opciones'][] = menuEstudiantes();
                break;
            case '2':
                $menu['opciones'][] = menuEstudiantes();
                break;
            case '3':
                $menu['opciones'][] = menuEstudiantes();
                break;

            default:
                ;
                break;
        }
        imprimirSalida($menu);
        return $menu;
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