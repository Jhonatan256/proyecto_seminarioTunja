<?php
require_once 'model/Conexion.php';
require_once 'vendor/Utilitarias.php';

class AdministradorController extends LoginController
{

    const ERROR_USUARIO = 'Usuario no permitido';

    public function listarEstudiantes()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $estudiantes = $db->consultarRegistros('SELECT * FROM usuario WHERE codRol = 3');
            if ($estudiantes) {

                $salida = [];
                $salida['tipoUsuario'] = self::getUser('tipoUsuario');
                foreach ($estudiantes as $value) {
                    $data = [];
                    $data['nombre'] = nombreUsuarioO($value);
                    $data['acciones'] = '<div class="btn-group" role="group" aria-label="First group">';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="editarUsuario(\'' . base64_encode($value->numeroDocumento) . '\');" class="btn btn-sm btn-outline-primary" data-toggle="tooltip" title="Editar estudiante" data-placement="top">' . '<i class="bx bx-edit-alt" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '<a href="javascript:void(0);" onclick="eliminarEstudiante(\'' . base64_encode($value->numeroDocumento) . '\');" class="btn btn-sm btn-outline-danger" data-toggle="tooltip" title="Eliminar estudiante" data-placement="top">' . '<i class="bx bx-trash" aria-hidden="true"></i> </a>';
                    $data['acciones'] .= '</div>';
                    $data['identificacion'] = $value->numeroDocumento;
                    $data['tipoDocumento'] = $value->tipoDocumento;
                    $data['telefono'] = $value->telefono;
                    $data['email'] = $value->email;
                    $data['direccion'] = $value->direccion;
                    $data['estado'] = strtoupper($value->estado);
                    $salida['registros'][] = $data;
                }
                return respuesta('00', '', $salida);
            } else {
                $msj = 'No existen registros.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function buscarEstudiante()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $estudiante = $db->consultarRegistro('SELECT * FROM usuario WHERE numeroDocumento = :ide', [
                'ide' => base64_decode($_POST['ide'])
            ]);
            if ($estudiante) {
                return respuesta('00', '', $estudiante);
            } else {
                $msj = 'No existen el estudiante.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }

    public function actualizarEstudiante()
    {
        if (self::getUser('tipoUsuario') == '1') {
            $db = new Conexion();
            $estudiante = $db->consultarRegistro('SELECT * FROM usuario WHERE numeroDocumento = :ide', [
                'ide' => $_POST['numeroDocumento']
            ]);
            if ($estudiante) {
                $db->crudRegistro("UPDATE usuario SET tipoDocumento = ?, numeroDocumento = ?, primerNombre = ?, segundoNombre = ?, primerApellido = ?, segundoApellido = ?, telefono = ?, direccion = ?, email = ?", $_POST);
                return respuesta('00', '');
            } else {
                $msj = 'No existen el estudiante.';
            }
        } else {
            $msj = self::ERROR_USUARIO;
        }
        return respuesta('99', $msj);
    }
}