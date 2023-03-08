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
                    self::setUser('nombreTipo', $user['nombreRol']);
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
            $data['nombreTipo'] = self::getUser('nombreTipo');
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
        $menu = [];
        $menu['opciones'][] = [
            'nombre' => 'Home',
            'z' => 'home',
            'icono' => 'bx bxs-dashboard icon'
        ];
        $menu['tipoUsuario'] = self::getUser('tipoUsuario');
        $menu['rol'] = self::getUser('nombreTipo');
        $menu['nombre'] = self::getUser('nombre');
        switch (self::getUser('tipoUsuario')) {
            case '1':
                $menu['icono'] = 'bx bxs-user-pin';
                $menu['opciones'][] = menuEstudiantes();
                $menu['opciones'][] = menuDocentes();
                $menu['opciones'][] = menuAsignatura();
                $menu['opciones'][] = menuHorario();
                $menu['opciones'][] = menuPlan();
                break;
            case '2':
                $menu['icono'] = 'bx bxs-user-pin';
                $menu['opciones'][] = [
                    'nombre' => 'Docente',
                    'icono' => 'bx bxs-notepad icon',
                    'z' => 'vistaDocente'
                ];
                $menu['opciones'][] = menuCalificaciones();
                $menu['opciones'][] = menuEstudiantes();
                // $menu['opciones'][] = menuLibro();
                break;
            case '3':
                $menu['opciones'][] = [
                    'nombre' => 'Estudiante',
                    'icono' => 'bx bxs-notepad icon',
                    'z' => 'vistaEstudiante'
                ];
                $menu['opciones'][] = menuCalificaciones();
                break;

            default:
                return respuesta('99', 'No se detecto el usuario.');
                break;
        }
        return respuesta('00', '', $menu);
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